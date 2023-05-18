// const noteForm = document.getElementById('noteForm');

// console.log(noteForm);

// const noteSubmission = (e) => {
//     e.preventDefault();
//     const doctorNoteValue = document.getElementById('doctorNoteInput').value;
//     console.log(doctorNoteValue);

//     const saveNote = (note) =>
//         fetch('/patientList/:patient_id', {
//             method: 'PUT',
//             body
//         });
//     saveNote(doctorNoteValue);

// }
// noteForm.addEventListener('submit', noteSubmission);

// const getNotes = () =>
//     fetch('/patientList/patient_id', {
//         method: 'GET',
//     });

// // const saveNote = (note) =>
// //   fetch('/patientList/:patient_id', {
// //     method: 'PUT',

// //   });




console.log('hello')

const noteForm = document.getElementById('noteForm')

const formSubmission = async (e) => {
    e.preventDefault();

    const noteValue = document.getElementById('doctorNoteInput').value;
    console.log(noteValue);

    const putValue = await fetch('/patientList/:patient_id', {
        method: "PUT",
        body: JSON.stringify({
            doctorNote: noteValue,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(putValue.ok) {
        alert("Your update is up!");
    } else {
        alert('Go fix your codeeeee');
    }
}


noteForm.addEventListener('submit', formSubmission);