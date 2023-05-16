DROP DATABASE IF EXISTS clinic_db;
CREATE DATABASE clinic_db;

CREATE TABLE Specialty (
   id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);
-- medicalStaff
CREATE TABLE MedicalStaff (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
     -- I added this 
    password VARCHAR(255) NOT NULL, 
    phone_number VARCHAR(20) NOT NULL,
    role VARCHAR(255) NOT NULL,
     specialty_id INT NOT NULL REFERENCES Specialty(id)
);

--patient_table 
CREATE TABLE Patient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mrn INT(50) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    medical_notes TEXT NULL,
    primary_doctorId INT NOT NULL REFERENCES MedicalStaff (id)
    );

-- appointment_table
CREATE TABLE Appointment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    appointment_type VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(id),
    FOREIGN KEY (doctor_id) REFERENCES MedicalStaff(id)
);

-- CREATE TABLE PatientRecord (
--     record_id INT PRIMARY KEY AUTO_INCREMENT,
--     patient_id INT NOT NULL,
--     staff_id INT NOT NULL,
--     record_date DATE NOT NULL,
--     record_time TIME NOT NULL,
--     record_text TEXT NOT NULL,
--     FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
--     FOREIGN KEY (staff_id) REFERENCES MedicalStaff(staff_id)
-- );
