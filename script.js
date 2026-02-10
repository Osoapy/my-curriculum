// Dados básicos
document.getElementById("nome").innerText = curriculo.nome;
document.getElementById("info").innerHTML = curriculo.info;
document.getElementById("foto").src = curriculo.foto;

// Formação
const formacao = document.getElementById("formacao");
curriculo.formacao.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  formacao.appendChild(li);
});

// Experiência profissional
const experiencia = document.getElementById("experiencia");
curriculo.experiencia.forEach(exp => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <strong>${exp.empresa}</strong>
    ${exp.cargo} — ${exp.periodo}<br>
    ${exp.descricao}
  `;
  experiencia.appendChild(div);
});

// Extracurricular
const extra = document.getElementById("extra");
curriculo.extracurricular.forEach(ex => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <strong>${ex.titulo}</strong>
    ${ex.periodo}<br>
    ${ex.descricao}
  `;
  extra.appendChild(div);
});

// Marcos
const marcos = document.getElementById("marcos");
curriculo.marcos.forEach(m => {
  const li = document.createElement("li");
  li.textContent = m;
  marcos.appendChild(li);
});

// Habilidades
const habilidades = document.getElementById("habilidades");
curriculo.habilidades.forEach(h => {
  const li = document.createElement("li");
  li.textContent = h;
  habilidades.appendChild(li);
});

// Exportar PDF
document.getElementById("btn-pdf").addEventListener("click", () => {
  html2pdf()
    .set({
      margin: 10,
      filename: "Curriculo_Joao_Gabriel.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { format: "a4", orientation: "portrait" }
    })
    .from(document.getElementById("curriculo"))
    .save();
});
