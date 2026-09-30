package com.feeflow.repository;

import com.feeflow.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class StudentRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<Student> studentRowMapper = (rs, rowNum) -> {
        Student student = new Student();
        student.setStudentId(rs.getLong("student_id"));
        student.setUserId(rs.getObject("user_id", Long.class));
        student.setRegisterNumber(rs.getString("register_number"));
        student.setFirstName(rs.getString("first_name"));
        student.setLastName(rs.getString("last_name"));
        if (rs.getDate("date_of_birth") != null) student.setDateOfBirth(rs.getDate("date_of_birth").toLocalDate());
        student.setGender(rs.getString("gender"));
        student.setClassName(rs.getString("class_name"));
        student.setSection(rs.getString("section"));
        student.setRollNumber(rs.getString("roll_number"));
        student.setEmail(rs.getString("email"));
        student.setPhone(rs.getString("phone"));
        student.setAddress(rs.getString("address"));
        student.setCity(rs.getString("city"));
        student.setState(rs.getString("state"));
        student.setPincode(rs.getString("pincode"));
        student.setParentName(rs.getString("parent_name"));
        student.setParentPhone(rs.getString("parent_phone"));
        student.setParentEmail(rs.getString("parent_email"));
        if (rs.getDate("admission_date") != null) student.setAdmissionDate(rs.getDate("admission_date").toLocalDate());
        student.setProfilePhoto(rs.getString("profile_photo"));
        student.setStatus(rs.getString("status"));
        return student;
    };

    public List<Student> findAll() {
        return jdbcTemplate.query("SELECT * FROM students", studentRowMapper);
    }

    public Student findById(Long id) {
        List<Student> students = jdbcTemplate.query("SELECT * FROM students WHERE student_id = ?", studentRowMapper, id);
        return students.isEmpty() ? null : students.get(0);
    }
    public Student save(Student student) {
        String sql = "INSERT INTO students (register_number, first_name, last_name, class_name, section, email, phone, status) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, student.getRegisterNumber());
            ps.setString(2, student.getFirstName());
            ps.setString(3, student.getLastName());
            ps.setString(4, student.getClassName());
            ps.setString(5, student.getSection());
            ps.setString(6, student.getEmail());
            ps.setString(7, student.getPhone());
            ps.setString(8, student.getStatus() != null ? student.getStatus() : "ACTIVE");
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            student.setStudentId(keyHolder.getKey().longValue());
        }
        return student;
    }

    public List<Student> searchStudents(String query, String className, String section) {
        StringBuilder sql = new StringBuilder("SELECT * FROM students WHERE 1=1");
        List<Object> params = new java.util.ArrayList<>();

        if (query != null && !query.trim().isEmpty()) {
            sql.append(" AND (first_name LIKE ? OR last_name LIKE ? OR register_number LIKE ? OR phone LIKE ?)");
            String likeQuery = "%" + query.trim() + "%";
            params.add(likeQuery);
            params.add(likeQuery);
            params.add(likeQuery);
            params.add(likeQuery);
        }
        
        if (className != null && !className.trim().isEmpty()) {
            sql.append(" AND class_name = ?");
            params.add(className);
        }
        
        if (section != null && !section.trim().isEmpty()) {
            sql.append(" AND section = ?");
            params.add(section);
        }

        return jdbcTemplate.query(sql.toString(), studentRowMapper, params.toArray());
    }
}
