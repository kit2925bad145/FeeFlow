package com.feeflow.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class InstallmentPlanModel {
    private Long planId;
    private Long studentId;
    private Long feeRuleId;
    private BigDecimal totalAmount;
    private Integer numberOfInstallments;
    private String status;
    private LocalDate createdAt;

    public Long getPlanId() { return planId; }
    public void setPlanId(Long planId) { this.planId = planId; }

    public Long getStudentId() { return studentId; }
    public void setStudentId(Long studentId) { this.studentId = studentId; }

    public Long getFeeRuleId() { return feeRuleId; }
    public void setFeeRuleId(Long feeRuleId) { this.feeRuleId = feeRuleId; }

    public BigDecimal getTotalAmount() { return totalAmount; }
    public void setTotalAmount(BigDecimal totalAmount) { this.totalAmount = totalAmount; }

    public Integer getNumberOfInstallments() { return numberOfInstallments; }
    public void setNumberOfInstallments(Integer numberOfInstallments) { this.numberOfInstallments = numberOfInstallments; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDate createdAt) { this.createdAt = createdAt; }
}
