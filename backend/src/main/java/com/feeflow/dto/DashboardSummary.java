package com.feeflow.dto;

import java.math.BigDecimal;

public class DashboardSummary {
    private long totalStudents;
    private long activeStudents;
    private BigDecimal totalAssignedFees;
    private BigDecimal totalCollected;
    private BigDecimal totalPending;
    private BigDecimal todaysCollection;
    private BigDecimal thisMonthsCollection;
    private BigDecimal overdueAmount;

    // Getters and Setters
    public long getTotalStudents() { return totalStudents; }
    public void setTotalStudents(long totalStudents) { this.totalStudents = totalStudents; }
    public long getActiveStudents() { return activeStudents; }
    public void setActiveStudents(long activeStudents) { this.activeStudents = activeStudents; }
    public BigDecimal getTotalAssignedFees() { return totalAssignedFees; }
    public void setTotalAssignedFees(BigDecimal totalAssignedFees) { this.totalAssignedFees = totalAssignedFees; }
    public BigDecimal getTotalCollected() { return totalCollected; }
    public void setTotalCollected(BigDecimal totalCollected) { this.totalCollected = totalCollected; }
    public BigDecimal getTotalPending() { return totalPending; }
    public void setTotalPending(BigDecimal totalPending) { this.totalPending = totalPending; }
    public BigDecimal getTodaysCollection() { return todaysCollection; }
    public void setTodaysCollection(BigDecimal todaysCollection) { this.todaysCollection = todaysCollection; }
    public BigDecimal getThisMonthsCollection() { return thisMonthsCollection; }
    public void setThisMonthsCollection(BigDecimal thisMonthsCollection) { this.thisMonthsCollection = thisMonthsCollection; }
    public BigDecimal getOverdueAmount() { return overdueAmount; }
    public void setOverdueAmount(BigDecimal overdueAmount) { this.overdueAmount = overdueAmount; }

    private java.util.Map<String, BigDecimal> monthlyCollectionTrend;
    private java.util.Map<String, BigDecimal> paymentMethodDistribution;
    private java.util.Map<String, BigDecimal> feeCategoryCollection;

    public java.util.Map<String, BigDecimal> getMonthlyCollectionTrend() { return monthlyCollectionTrend; }
    public void setMonthlyCollectionTrend(java.util.Map<String, BigDecimal> monthlyCollectionTrend) { this.monthlyCollectionTrend = monthlyCollectionTrend; }

    public java.util.Map<String, BigDecimal> getPaymentMethodDistribution() { return paymentMethodDistribution; }
    public void setPaymentMethodDistribution(java.util.Map<String, BigDecimal> paymentMethodDistribution) { this.paymentMethodDistribution = paymentMethodDistribution; }

    public java.util.Map<String, BigDecimal> getFeeCategoryCollection() { return feeCategoryCollection; }
    public void setFeeCategoryCollection(java.util.Map<String, BigDecimal> feeCategoryCollection) { this.feeCategoryCollection = feeCategoryCollection; }
}
