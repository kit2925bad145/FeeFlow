package com.feeflow.controller;

import com.feeflow.model.InstallmentModel;
import com.feeflow.model.InstallmentPlanModel;
import com.feeflow.repository.InstallmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/installments")
@CrossOrigin(origins = "*") // Update for production
public class InstallmentController {

    @Autowired
    private InstallmentRepository installmentRepository;

    @PostMapping("/plans")
    public ResponseEntity<InstallmentPlanModel> createPlan(@RequestBody InstallmentPlanModel plan) {
        return ResponseEntity.ok(installmentRepository.createPlan(plan));
    }

    @PostMapping("/items")
    public ResponseEntity<String> createInstallment(@RequestBody InstallmentModel installment) {
        installmentRepository.createInstallment(installment);
        return ResponseEntity.ok("Installment created successfully");
    }

    @GetMapping("/students/{studentId}/plans")
    public ResponseEntity<List<InstallmentPlanModel>> getPlansByStudent(@PathVariable Long studentId) {
        return ResponseEntity.ok(installmentRepository.findPlansByStudentId(studentId));
    }

    @GetMapping("/plans/{planId}/items")
    public ResponseEntity<List<InstallmentModel>> getInstallmentsByPlan(@PathVariable Long planId) {
        return ResponseEntity.ok(installmentRepository.findInstallmentsByPlanId(planId));
    }
}
