package com.feeflow.repository;

import com.feeflow.model.ClassModel;
import com.feeflow.model.SectionModel;
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
public class ClassRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<ClassModel> classRowMapper = (rs, rowNum) -> {
        ClassModel model = new ClassModel();
        model.setClassId(rs.getInt("class_id"));
        model.setClassName(rs.getString("class_name"));
        model.setIsActive(rs.getBoolean("is_active"));
        return model;
    };

    private final RowMapper<SectionModel> sectionRowMapper = (rs, rowNum) -> {
        SectionModel model = new SectionModel();
        model.setSectionId(rs.getInt("section_id"));
        model.setClassId(rs.getInt("class_id"));
        model.setSectionName(rs.getString("section_name"));
        model.setIsActive(rs.getBoolean("is_active"));
        return model;
    };

    public List<ClassModel> findAllClasses() {
        return jdbcTemplate.query("SELECT * FROM classes WHERE is_active = TRUE ORDER BY class_name", classRowMapper);
    }

    public ClassModel addClass(ClassModel classModel) {
        String sql = "INSERT INTO classes (class_name, is_active) VALUES (?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, classModel.getClassName());
            ps.setBoolean(2, classModel.getIsActive() != null ? classModel.getIsActive() : true);
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            classModel.setClassId(keyHolder.getKey().intValue());
        }
        return classModel;
    }

    public List<SectionModel> findSectionsByClassId(Integer classId) {
        return jdbcTemplate.query("SELECT * FROM sections WHERE class_id = ? AND is_active = TRUE ORDER BY section_name", 
                sectionRowMapper, classId);
    }

    public SectionModel addSection(SectionModel sectionModel) {
        String sql = "INSERT INTO sections (class_id, section_name, is_active) VALUES (?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, sectionModel.getClassId());
            ps.setString(2, sectionModel.getSectionName());
            ps.setBoolean(3, sectionModel.getIsActive() != null ? sectionModel.getIsActive() : true);
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            sectionModel.setSectionId(keyHolder.getKey().intValue());
        }
        return sectionModel;
    }
}
