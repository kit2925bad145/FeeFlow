package com.feeflow.repository;

import com.feeflow.dto.DashboardSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public class DashboardRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public DashboardSummary getDashboardSummary() {
        DashboardSummary summary = new DashboardSummary();
        
        // Students count
        Long totalStudents = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM students", Long.class);
        Long activeStudents = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM students WHERE status = 'ACTIVE'", Long.class);
        summary.setTotalStudents(totalStudents != null ? totalStudents : 0);
        summary.setActiveStudents(activeStudents != null ? activeStudents : 0);

        // Fees sum
        BigDecimal totalAssigned = jdbcTemplate.queryForObject("SELECT SUM(total_amount) FROM student_fees", BigDecimal.class);
        BigDecimal totalCollected = jdbcTemplate.queryForObject("SELECT SUM(paid_amount) FROM student_fees", BigDecimal.class);
        
        summary.setTotalAssignedFees(totalAssigned != null ? totalAssigned : BigDecimal.ZERO);
        summary.setTotalCollected(totalCollected != null ? totalCollected : BigDecimal.ZERO);
        summary.setTotalPending(summary.getTotalAssignedFees().subtract(summary.getTotalCollected()));

        // Collections
        BigDecimal todaysCollection = jdbcTemplate.queryForObject(
                "SELECT SUM(amount) FROM payments WHERE status = 'SUCCESS' AND DATE(payment_date) = CURDATE()", BigDecimal.class);
        BigDecimal thisMonthsCollection = jdbcTemplate.queryForObject(
                "SELECT SUM(amount) FROM payments WHERE status = 'SUCCESS' AND MONTH(payment_date) = MONTH(CURDATE()) AND YEAR(payment_date) = YEAR(CURDATE())", BigDecimal.class);
        
        summary.setTodaysCollection(todaysCollection != null ? todaysCollection : BigDecimal.ZERO);
        summary.setThisMonthsCollection(thisMonthsCollection != null ? thisMonthsCollection : BigDecimal.ZERO);

        // Overdue amount
        BigDecimal overdue = jdbcTemplate.queryForObject(
                "SELECT SUM(total_amount - paid_amount) FROM student_fees WHERE due_date < CURDATE() AND status != 'PAID'", BigDecimal.class);
        summary.setOverdueAmount(overdue != null ? overdue : BigDecimal.ZERO);

        // Monthly Collection Trend (Last 6 Months)
        summary.setMonthlyCollectionTrend(
                jdbcTemplate.query(
                        "SELECT DATE_FORMAT(payment_date, '%b %Y') AS month, SUM(amount) AS total FROM payments WHERE status = 'SUCCESS' GROUP BY month ORDER BY MAX(payment_date) DESC LIMIT 6",
                        (rs) -> {
                            java.util.Map<String, BigDecimal> map = new java.util.LinkedHashMap<>();
                            while (rs.next()) {
                                map.put(rs.getString("month"), rs.getBigDecimal("total"));
                            }
                            return map;
                        }
                )
        );

        // Payment Method Distribution
        summary.setPaymentMethodDistribution(
                jdbcTemplate.query(
                        "SELECT payment_method, SUM(amount) AS total FROM payments WHERE status = 'SUCCESS' GROUP BY payment_method",
                        (rs) -> {
                            java.util.Map<String, BigDecimal> map = new java.util.HashMap<>();
                            while (rs.next()) {
                                map.put(rs.getString("payment_method"), rs.getBigDecimal("total"));
                            }
                            return map;
                        }
                )
        );

        return summary;
    }
}
