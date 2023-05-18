const addPatient = document.querySelector('addPatient');

const formSubmission = async () => {
    // e.preventDefault();

    const firstNameValue = document.getElementById('firstNameInput').value;
    console.log(firstNameValue);
    const lastNameValue = document.getElementById('lastNameInput').value;
    console.log(lastNameValue);
    const birthDateValue = document.getElementById('inputDateOfBirth').value;
    console.log(birthDateValue);
    const genderValue = document.getElementById('genderInput').value;
    console.log(genderValue);
    const addressValue = document.getElementById('inputAddress').value;
    console.log(addressValue);
    const phoneNumberValue = document.getElementById('inputPhoneNumber').value;
    console.log(phoneNumberValue);
    const emailValue = document.getElementById('inputEmail4').value;
    console.log(emailValue);
    const doctorIdValue = document.getElementById('inputDoctorID').value;
    console.log(doctorIdValue);


    const postValue = await fetch('/patientList', {
        method: "POST",
        body: JSON.stringify({
           first_name: firstNameValue,
           last_name: lastNameValue,
           date_of_birth: birthDateValue,
           gender: genderValue,
           address: addressValue,
           phone_number: phoneNumberValue,
           email: emailValue,
           primary_doctorId: doctorIdValue

        }),
        headers: { 'Content-Type': 'application/json' },
    })

if(postValue.ok) {
        alert("Form Submitted Successfully");
    } else {
        alert('Form Not Submitted Correctly');
    }
}

// addPatient.addEventListener('click', formSubmission);
