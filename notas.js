const container = document.getElementById("notas");
const btn = document.getElementById("add");

function render() {
  container.innerHTML = "";
  getNotas().forEach(n => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${n.nome}</strong><br>${n.texto}`;
    container.appendChild(div);
  });
}

btn.onclick = () => {
  const nome = prompt("Nome da nota");
  const texto = prompt("Conteúdo");
  if (!nome || !texto) return;

  const notas = getNotas();
  notas.push({ nome, texto });
  salvarNotas(notas);
  render();
};

render();