package com.feeflow.model;

public class SectionModel {
    private Integer sectionId;
    private Integer classId;
    private String sectionName;
    private Boolean isActive;

    public Integer getSectionId() { return sectionId; }
    public void setSectionId(Integer sectionId) { this.sectionId = sectionId; }
    
    public Integer getClassId() { return classId; }
    public void setClassId(Integer classId) { this.classId = classId; }
    
    public String getSectionName() { return sectionName; }
    public void setSectionName(String sectionName) { this.sectionName = sectionName; }
    
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
}
