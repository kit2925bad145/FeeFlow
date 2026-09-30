package com.feeflow.controller;

import com.feeflow.service.PaymentGatewayService;
import com.feeflow.service.EmailService;
import com.razorpay.Order;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*") // Update for production
public class PaymentController {

    @Autowired
    private PaymentGatewayService paymentGatewayService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> data) {
        try {
            BigDecimal amount = new BigDecimal(data.get("amount").toString());
            String receiptId = data.get("receiptId").toString();
            
            Order order = paymentGatewayService.createOrder(amount, receiptId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("orderId", order.get("id"));
            response.put("amount", order.get("amount"));
            response.put("currency", order.get("currency"));
            
            return ResponseEntity.ok(response);
        } catch (RazorpayException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Error creating Razorpay order: " + e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> data) {
        String orderId = data.get("razorpay_order_id");
        String paymentId = data.get("razorpay_payment_id");
        String signature = data.get("razorpay_signature");

        boolean isValid = paymentGatewayService.verifySignature(orderId, paymentId, signature);

        if (isValid) {
            // TODO: Extract actual student details from DB using order details
            // For now, sending a placeholder email (if you provided studentEmail in the request, you could use it)
            String studentEmail = data.getOrDefault("studentEmail", "dummy@example.com");
            String studentName = data.getOrDefault("studentName", "Student");
            String amount = data.getOrDefault("amount", "0.00");
            
            if (!studentEmail.equals("dummy@example.com")) {
                emailService.sendPaymentReceiptEmail(studentEmail, studentName, paymentId, amount, "N/A");
            }
            
            return ResponseEntity.ok(Map.of("status", "success", "message", "Payment verified successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("status", "failure", "message", "Payment verification failed"));
        }
    }
}
