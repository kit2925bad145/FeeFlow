package com.feeflow.controller;

import com.feeflow.model.Student;
import com.feeflow.repository.StudentRepository;
import com.feeflow.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*") // Update for production
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/import")
    public ResponseEntity<?> importStudents(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Please upload a valid Excel file."));
        }
        
        try {
            List<Student> importedStudents = studentService.importStudentsFromExcel(file);
            return ResponseEntity.ok(Map.of(
                    "message", "Successfully imported " + importedStudents.size() + " students.",
                    "importedCount", importedStudents.size()
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to parse Excel file: " + e.getMessage()));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchStudents(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String className,
            @RequestParam(required = false) String section) {
        
        try {
            List<Student> students = studentRepository.searchStudents(query, className, section);
            return ResponseEntity.ok(students);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error searching students: " + e.getMessage()));
        }
    }
}
