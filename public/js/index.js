const formSubmission = async (e, patientId) => {
    e.preventDefault();
 
    const noteValue = document.getElementById('doctorNoteInput').value;
    console.log(noteValue);
    console.log("from UI", patientId);
    const url = `/patientList/patientList/${patientId}`;
 
    const putValue = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        doctorNote: noteValue
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
        if(res.ok) {
            return res.json();
        } else {
            alert("Go fix your code!");
        }
       })
    .then(data => console.log(data))
    .catch(err => console.log("this is problem", err));
  };
  const submitButtons = document.querySelectorAll('.btn.btn-primary[data-patient-id]');
  submitButtons.forEach(button => {
    const patientId = button.dataset.patientId;
    console.log(patientId)
    button.addEventListener('click', (e) => {
      formSubmission(e, patientId);
    });
  });






