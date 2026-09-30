package com.feeflow.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${mail.from}")
    private String fromEmail;

    public void sendPaymentReceiptEmail(String toEmail, String studentName, String receiptNumber, String amount, String remainingBalance) {
        String subject = "Payment Receipt - " + receiptNumber;
        String content = "<html><body>"
                + "<h2>Payment Successful</h2>"
                + "<p>Dear " + studentName + ",</p>"
                + "<p>We have successfully received your payment of <b>INR " + amount + "</b>.</p>"
                + "<p>Receipt Number: <b>" + receiptNumber + "</b></p>"
                + "<p>Remaining Balance: <b>INR " + remainingBalance + "</b></p>"
                + "<br><p>Thank you,</p>"
                + "<p>FeeFlow Administration</p>"
                + "</body></html>";

        sendHtmlEmail(toEmail, subject, content);
    }

    public void sendPasswordResetEmail(String toEmail, String resetToken) {
        String subject = "Password Reset Request";
        String content = "<html><body>"
                + "<h2>Password Reset</h2>"
                + "<p>You requested a password reset. Please use the following token to reset your password:</p>"
                + "<h3>" + resetToken + "</h3>"
                + "<p>If you did not request this, please ignore this email.</p>"
                + "</body></html>";

        sendHtmlEmail(toEmail, subject, content);
    }

    private void sendHtmlEmail(String to, String subject, String htmlBody) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            System.err.println("Failed to send email: " + e.getMessage());
            // In a production environment, you might log this more formally and handle the error.
        }
    }
}
