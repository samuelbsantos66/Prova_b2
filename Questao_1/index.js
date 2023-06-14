function primo(n) {
  var n = parseInt(prompt("Digite um número."));

  if (n <= 1) {
    alert("Esse não é um número primo!");
  } else {
    for (s = 2; s <= Math.sqrt(n); s++) {
      if (n % s == 0) {
        alert("Esse número não é um número primo!");
      } else {
        alert("Esse é um número primo!");
      }
    }
  }
}
