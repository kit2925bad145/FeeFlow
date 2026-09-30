package com.feeflow.controller;

import com.feeflow.model.PasswordResetTokenModel;
import com.feeflow.repository.PasswordResetRepository;
import com.feeflow.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth/password")
@CrossOrigin(origins = "*") // Update for production
public class PasswordResetController {

    @Autowired
    private PasswordResetRepository passwordResetRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/forgot")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is required"));
        }

        // TODO: In a real app, look up the user by email to get their user ID.
        // For demonstration, we assume user ID 1 exists.
        Long userId = 1L; 

        String token = UUID.randomUUID().toString();
        PasswordResetTokenModel tokenModel = new PasswordResetTokenModel();
        tokenModel.setUserId(userId);
        tokenModel.setToken(token);
        tokenModel.setExpiryDate(LocalDateTime.now().plusHours(1)); // Valid for 1 hour

        passwordResetRepository.saveToken(tokenModel);

        emailService.sendPasswordResetEmail(email, token);

        return ResponseEntity.ok(Map.of("message", "Password reset email sent"));
    }

    @PostMapping("/reset")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        String newPassword = request.get("newPassword");

        if (token == null || newPassword == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Token and newPassword are required"));
        }

        PasswordResetTokenModel tokenModel = passwordResetRepository.findByToken(token);

        if (tokenModel == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Invalid token"));
        }

        if (tokenModel.getExpiryDate().isBefore(LocalDateTime.now())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Token has expired"));
        }

        // TODO: Update user's password in the database (hash it first!)
        
        // Remove token after successful reset
        passwordResetRepository.deleteByToken(token);

        return ResponseEntity.ok(Map.of("message", "Password reset successfully"));
    }
}
