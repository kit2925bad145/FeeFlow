package com.feeflow.service;

import com.feeflow.dto.DashboardSummary;
import com.feeflow.repository.DashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private DashboardRepository dashboardRepository;

    public DashboardSummary getDashboardSummary() {
        return dashboardRepository.getDashboardSummary();
    }
}
