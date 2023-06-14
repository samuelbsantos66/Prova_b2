function senha() {
var senha =prompt('Digite a sua senha')
    let reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9@#$]{8,50}$/
    
    if (reg.test(senha)) {
        alert('Senha válida');
    } else {
        alert('Senha inválida');
    
}
}