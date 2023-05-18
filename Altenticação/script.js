function validarFormulario (event) {
    event.preventDefault();
    
    const email = window.document.getElementById('email');
    const password = window.document.getElementById('password').value;
    const confirmPassword = window.document.getElementById("confirmPassword").value;

    console.log('valores : ', email, password, confirmPassword);
    if(!email.value == '') {
         email.classlist.add('error');
    }

}