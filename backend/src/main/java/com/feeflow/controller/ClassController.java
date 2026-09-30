package com.feeflow.controller;

import com.feeflow.model.ClassModel;
import com.feeflow.model.SectionModel;
import com.feeflow.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
@CrossOrigin(origins = "*") // Update for production
public class ClassController {

    @Autowired
    private ClassRepository classRepository;

    @GetMapping
    public ResponseEntity<List<ClassModel>> getAllClasses() {
        return ResponseEntity.ok(classRepository.findAllClasses());
    }

    @PostMapping
    public ResponseEntity<ClassModel> addClass(@RequestBody ClassModel classModel) {
        return ResponseEntity.ok(classRepository.addClass(classModel));
    }

    @GetMapping("/{classId}/sections")
    public ResponseEntity<List<SectionModel>> getSectionsByClass(@PathVariable Integer classId) {
        return ResponseEntity.ok(classRepository.findSectionsByClassId(classId));
    }

    @PostMapping("/{classId}/sections")
    public ResponseEntity<SectionModel> addSection(
            @PathVariable Integer classId,
            @RequestBody SectionModel sectionModel) {
        sectionModel.setClassId(classId);
        return ResponseEntity.ok(classRepository.addSection(sectionModel));
    }
}
