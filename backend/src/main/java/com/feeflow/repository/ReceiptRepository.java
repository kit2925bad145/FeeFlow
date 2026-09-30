package com.feeflow.repository;

import com.feeflow.model.ReceiptModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReceiptRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<ReceiptModel> receiptRowMapper = (rs, rowNum) -> {
        ReceiptModel model = new ReceiptModel();
        model.setReceiptId(rs.getLong("receipt_id"));
        model.setPaymentId(rs.getLong("payment_id"));
        model.setReceiptNumber(rs.getString("receipt_number"));
        model.setFileUrl(rs.getString("file_url"));
        if (rs.getTimestamp("generated_at") != null) {
            model.setGeneratedAt(rs.getTimestamp("generated_at").toLocalDateTime());
        }
        return model;
    };

    public void saveReceipt(ReceiptModel receipt) {
        String sql = "INSERT INTO receipts (payment_id, receipt_number, file_url) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, receipt.getPaymentId(), receipt.getReceiptNumber(), receipt.getFileUrl());
    }

    public ReceiptModel findByPaymentId(Long paymentId) {
        List<ReceiptModel> list = jdbcTemplate.query("SELECT * FROM receipts WHERE payment_id = ?", receiptRowMapper, paymentId);
        return list.isEmpty() ? null : list.get(0);
    }
}
