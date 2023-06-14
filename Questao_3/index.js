function f() {
    var n = parseInt(prompt('Digite um número.'))
       
    if (n<0) {
      alert('Esse número não é válido')}
    
      if (n>100) {
        alert('Esse número não é válido')}
        
    if (n == 0 || n == 1){
          return 1;}
      
          for (var s = n - 1; s >= 1; s=s-1) {
          n *= s;
        }
        alert('O fatorial desse número é ' + n);
}