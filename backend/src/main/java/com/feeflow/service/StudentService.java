package com.feeflow.service;

import com.feeflow.model.Student;
import com.feeflow.repository.StudentRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> importStudentsFromExcel(MultipartFile file) throws Exception {
        List<Student> students = new ArrayList<>();
        
        try (InputStream is = file.getInputStream(); Workbook workbook = new XSSFWorkbook(is)) {
            Sheet sheet = workbook.getSheetAt(0);
            
            for (Row row : sheet) {
                if (row.getRowNum() == 0) {
                    continue; // Skip header row
                }
                
                Student student = new Student();
                
                // Expecting columns: RegNo, FirstName, LastName, Class, Section, Email, Phone
                Cell regNoCell = row.getCell(0);
                if (regNoCell == null || regNoCell.getCellType() == CellType.BLANK) {
                    continue; // Skip empty rows
                }
                
                student.setRegisterNumber(getCellValueAsString(regNoCell));
                student.setFirstName(getCellValueAsString(row.getCell(1)));
                student.setLastName(getCellValueAsString(row.getCell(2)));
                student.setClassName(getCellValueAsString(row.getCell(3)));
                student.setSection(getCellValueAsString(row.getCell(4)));
                student.setEmail(getCellValueAsString(row.getCell(5)));
                student.setPhone(getCellValueAsString(row.getCell(6)));
                student.setStatus("ACTIVE");
                
                students.add(student);
            }
        }
        
        // Save valid students to database
        // In a real application, we would validate duplicates here
        for (Student student : students) {
            studentRepository.save(student); // Assuming save method exists
        }
        
        return students;
    }
    
    private String getCellValueAsString(Cell cell) {
        if (cell == null) return "";
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return cell.getDateCellValue().toString();
                } else {
                    return String.valueOf((long) cell.getNumericCellValue());
                }
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            default:
                return "";
        }
    }
}
