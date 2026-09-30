package com.feeflow.repository;

import com.feeflow.model.PasswordResetTokenModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PasswordResetRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<PasswordResetTokenModel> tokenRowMapper = (rs, rowNum) -> {
        PasswordResetTokenModel model = new PasswordResetTokenModel();
        model.setTokenId(rs.getLong("token_id"));
        model.setUserId(rs.getLong("user_id"));
        model.setToken(rs.getString("token"));
        if (rs.getTimestamp("expiry_date") != null) {
            model.setExpiryDate(rs.getTimestamp("expiry_date").toLocalDateTime());
        }
        return model;
    };

    public void saveToken(PasswordResetTokenModel tokenModel) {
        String sql = "INSERT INTO password_reset_tokens (user_id, token, expiry_date) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, tokenModel.getUserId(), tokenModel.getToken(), tokenModel.getExpiryDate());
    }

    public PasswordResetTokenModel findByToken(String token) {
        List<PasswordResetTokenModel> list = jdbcTemplate.query("SELECT * FROM password_reset_tokens WHERE token = ?", tokenRowMapper, token);
        return list.isEmpty() ? null : list.get(0);
    }
    
    public void deleteByToken(String token) {
        jdbcTemplate.update("DELETE FROM password_reset_tokens WHERE token = ?", token);
    }
}
