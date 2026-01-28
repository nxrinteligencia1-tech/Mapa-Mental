const container = document.getElementById("notas");
const modal = document.getElementById("modal");
const btnAdd = document.getElementById("add");
const btnSalvar = document.getElementById("salvar");

function render() {
  container.innerHTML = "";
  getNotas().forEach(n => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${n.nome}</strong><br>${n.texto}`;
    container.appendChild(div);
  });
}

btnAdd.onclick = () => {
  modal.classList.remove("hidden");
};

btnSalvar.onclick = () => {
  const nome = document.getElementById("nome").value;
  const texto = document.getElementById("texto").value;
  if (!nome || !texto) return;

  const notas = getNotas();
  notas.push({ nome, texto });
  salvarNotas(notas);

  document.getElementById("nome").value = "";
  document.getElementById("texto").value = "";
  modal.classList.add("hidden");
  render();
};

render();