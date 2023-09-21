const scriptURL = 'https://script.google.com/macros/s/AKfycbyNoLo3D-r0qRlBjm6AfxwE4sEXh_1tBl0yj7HWNAjkC4IVnd85zxvdBrq-2CPSAkM/exec'
  const form = document.forms['submit sheet']
  const success=document.getElementById('success');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{success.innerHTML="Thank You for Contacting Us !";
        })
      .catch(error => console.error('Error!', error.message))
  })