function getNotas() {
  return JSON.parse(localStorage.getItem("notas")) || [];
}

function salvarNotas(notas) {
  localStorage.setItem("notas", JSON.stringify(notas));
}