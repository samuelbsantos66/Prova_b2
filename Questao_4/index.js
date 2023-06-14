function q(n) {
 
  var n = parseInt(prompt("Digite um número."));

  if (Number.isInteger(Math.sqrt(n)) == true) {
    alert(
      "Esse é número quadrado perfeito! Sua raíz quadrada é " + Math.sqrt(n)
    );

  } else {
    alert("Esse número não é um quadrado perfeito!");
  }
}
