// Dados básicos
document.getElementById("nome").innerText = curriculo.nome;
document.getElementById("info").innerHTML = curriculo.info;
document.getElementById("foto").src = curriculo.foto;

// Formação
const formacao = document.getElementById("formacao");
curriculo.formacao.forEach(item => {
  const p = document.createElement("p");
  p.className = "item-menor";
  p.textContent = `• ${item}`;
  formacao.appendChild(p);
});

// Experiência profissional
const experiencia = document.getElementById("experiencia");
curriculo.experiencia.forEach(exp => {
  const div = document.createElement("p");
  div.className = "item";
  div.innerHTML = `
    <strong>${exp.empresa}</strong>
    <span class="quote">${exp.cargo} — ${exp.periodo}</span><br>
    ${exp.descricao}
  `;
  experiencia.appendChild(div);
});

// Extracurricular
const extra = document.getElementById("extra");
curriculo.extracurricular.forEach(ex => {
  const div = document.createElement("p");
  div.className = "item";
  div.innerHTML = `
    <strong>${ex.titulo}</strong>
    <span class="quote">${ex.periodo}</span><br>
    ${ex.descricao}
  `;
  extra.appendChild(div);
});

// Marcos
const marcos = document.getElementById("marcos");
curriculo.marcos.forEach(m => {
  const p = document.createElement("p");
  p.className = "item-menor-bullet"
  p.textContent =  `• ${m};`;
  marcos.appendChild(p);
});

// Habilidades
const habilidades = document.getElementById("habilidades");
curriculo.habilidades.forEach(h => {
  const p = document.createElement("p");
  p.className = "item-menor-bullet"
  p.textContent = `- ${h};`;
  habilidades.appendChild(p);
});

// Exportar PDF
document.getElementById("btn-pdf").addEventListener("click", () => {
  window.scrollTo(0, 0);
  /*setTimeout(() => {
    html2pdf()
      .set({
        margin: 10,
        filename: "Curriculo_Joao_Gabriel.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
            compress: true
        },
        pagebreak: { avoid: 'p' }
      })
    .from(document.getElementById("curriculo"))
    .save();
  }, 610);*/
  window.print();
});
