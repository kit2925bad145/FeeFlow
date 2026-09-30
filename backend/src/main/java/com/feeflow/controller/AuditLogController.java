package com.feeflow.controller;

import com.feeflow.model.AuditLogModel;
import com.feeflow.repository.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/audit-logs")
@CrossOrigin(origins = "*") // Update for production
public class AuditLogController {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @GetMapping
    public ResponseEntity<List<AuditLogModel>> getRecentLogs(@RequestParam(defaultValue = "100") int limit) {
        return ResponseEntity.ok(auditLogRepository.findRecentLogs(limit));
    }
}
