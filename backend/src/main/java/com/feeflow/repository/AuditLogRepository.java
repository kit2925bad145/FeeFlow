package com.feeflow.repository;

import com.feeflow.model.AuditLogModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AuditLogRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<AuditLogModel> auditRowMapper = (rs, rowNum) -> {
        AuditLogModel model = new AuditLogModel();
        model.setLogId(rs.getLong("log_id"));
        model.setUserId(rs.getObject("user_id", Long.class));
        model.setAction(rs.getString("action"));
        model.setEntity(rs.getString("entity"));
        model.setEntityId(rs.getObject("entity_id", Long.class));
        model.setDetails(rs.getString("details"));
        model.setIpAddress(rs.getString("ip_address"));
        if (rs.getTimestamp("created_at") != null) {
            model.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
        }
        return model;
    };

    public void logAction(AuditLogModel log) {
        String sql = "INSERT INTO audit_logs (user_id, action, entity, entity_id, details, ip_address) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, log.getUserId(), log.getAction(), log.getEntity(), log.getEntityId(), log.getDetails(), log.getIpAddress());
    }

    public List<AuditLogModel> findRecentLogs(int limit) {
        return jdbcTemplate.query("SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT ?", auditRowMapper, limit);
    }
}
