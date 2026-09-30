package com.feeflow.repository;

import com.feeflow.model.InstallmentModel;
import com.feeflow.model.InstallmentPlanModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class InstallmentRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<InstallmentPlanModel> planRowMapper = (rs, rowNum) -> {
        InstallmentPlanModel model = new InstallmentPlanModel();
        model.setPlanId(rs.getLong("plan_id"));
        model.setStudentId(rs.getLong("student_id"));
        model.setFeeRuleId(rs.getObject("fee_rule_id", Long.class));
        model.setTotalAmount(rs.getBigDecimal("total_amount"));
        model.setNumberOfInstallments(rs.getInt("number_of_installments"));
        model.setStatus(rs.getString("status"));
        if (rs.getDate("created_at") != null) model.setCreatedAt(rs.getDate("created_at").toLocalDate());
        return model;
    };

    private final RowMapper<InstallmentModel> installmentRowMapper = (rs, rowNum) -> {
        InstallmentModel model = new InstallmentModel();
        model.setInstallmentId(rs.getLong("installment_id"));
        model.setPlanId(rs.getLong("plan_id"));
        model.setInstallmentNumber(rs.getInt("installment_number"));
        model.setAmount(rs.getBigDecimal("amount"));
        if (rs.getDate("due_date") != null) model.setDueDate(rs.getDate("due_date").toLocalDate());
        model.setStatus(rs.getString("status"));
        return model;
    };

    public InstallmentPlanModel createPlan(InstallmentPlanModel plan) {
        String sql = "INSERT INTO fee_installment_plans (student_id, fee_rule_id, total_amount, number_of_installments, status) VALUES (?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, plan.getStudentId());
            if (plan.getFeeRuleId() != null) ps.setLong(2, plan.getFeeRuleId());
            else ps.setNull(2, java.sql.Types.BIGINT);
            ps.setBigDecimal(3, plan.getTotalAmount());
            ps.setInt(4, plan.getNumberOfInstallments());
            ps.setString(5, plan.getStatus() != null ? plan.getStatus() : "ACTIVE");
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            plan.setPlanId(keyHolder.getKey().longValue());
        }
        return plan;
    }

    public void createInstallment(InstallmentModel installment) {
        String sql = "INSERT INTO fee_installments (plan_id, installment_number, amount, due_date, status) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, installment.getPlanId(), installment.getInstallmentNumber(), 
                installment.getAmount(), installment.getDueDate(), 
                installment.getStatus() != null ? installment.getStatus() : "PENDING");
    }

    public List<InstallmentPlanModel> findPlansByStudentId(Long studentId) {
        return jdbcTemplate.query("SELECT * FROM fee_installment_plans WHERE student_id = ?", planRowMapper, studentId);
    }

    public List<InstallmentModel> findInstallmentsByPlanId(Long planId) {
        return jdbcTemplate.query("SELECT * FROM fee_installments WHERE plan_id = ? ORDER BY installment_number", installmentRowMapper, planId);
    }
}
