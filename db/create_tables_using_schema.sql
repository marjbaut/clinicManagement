DROP DATABASE IF EXISTS clinic_db;
CREATE DATABASE clinic_db;

CREATE TABLE Specialty (
    specialty_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE MedicalStaff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    role VARCHAR(255) NOT NULL specialty_id INT PRIMARY KEY AUTO_INCREMENT,
);

CREATE TABLE PatientRecord (
    record_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    staff_id INT NOT NULL,
    record_date DATE NOT NULL,
    record_time TIME NOT NULL,
    record_text TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (staff_id) REFERENCES MedicalStaff(staff_id)
);

CREATE TABLE Patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    mrn VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    appointment_type VARCHAR(255) NOT NULL,
    appointment_notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
);

CREATE TABLE Diagnosis (
    diagnosis_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    diagnosis_date DATE NOT NULL,
    diagnosis_text TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
); 