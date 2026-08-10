const ids = id => document.getElementById(id);
const containers = ["formacao", "experiencia", "extra", "marcos", "habilidades"].map(ids);
let idioma = localStorage.getItem("idioma-curriculo") || "pt-BR";
if (!curriculos[idioma]) idioma = "pt-BR";

// Use **texto** nos dados para renderizar apenas aquele trecho em negrito.
function textoFormatado(elemento, texto) {
  texto.split(/(\*\*.*?\*\*)/g).filter(Boolean).forEach(trecho => {
    if (trecho.startsWith("**") && trecho.endsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = trecho.slice(2, -2);
      elemento.append(strong);
    } else {
      elemento.append(trecho);
    }
  });
}

function textoComLink(elemento, item) {
  if (typeof item === "string") return textoFormatado(elemento, item);
  textoFormatado(elemento, item.texto);
  const ancora = document.createElement("a");
  ancora.href = item.link.url;
  ancora.textContent = item.link.rotulo;
  ancora.target = "_blank";
  ancora.rel = "noopener noreferrer";
  elemento.append(ancora);
}

function itemLista(container, item, classe, marcador, sufixo = "") {
  const p = document.createElement("p");
  p.className = classe;
  p.append(marcador);
  textoComLink(p, item);
  p.append(sufixo);
  container.append(p);
}

function itemExperiencia(container, item, titulo) {
  const p = document.createElement("p");
  p.className = "item";
  const strong = document.createElement("strong");
  strong.textContent = item[titulo];
  const quote = document.createElement("span");
  quote.className = "quote";
  quote.textContent = `${item.cargo ? `${item.cargo} - ` : ""}${item.periodo}`;
  p.append(strong, quote, document.createElement("br"), item.descricao);
  container.append(p);
}

function renderizar() {
  const configuracao = curriculos[idioma];
  const curriculo = configuracao.dados;
  document.documentElement.lang = idioma;
  document.title = configuracao.titulo;
  ids("nome").textContent = curriculo.nome;
  ids("info").innerHTML = curriculo.info;
  ids("foto").src = curriculo.foto;
  ids("foto").alt = `Foto de ${curriculo.nome}`;
  document.querySelectorAll("[data-secao]").forEach((titulo, i) => titulo.textContent = configuracao.secoes[i]);
  ids("btn-pdf").textContent = configuracao.exportar;
  ids("btn-idioma").textContent = configuracao.alternativo;
  containers.forEach(container => container.replaceChildren());
  curriculo.formacao.forEach(item => itemLista(ids("formacao"), item, "item-menor", "• "));
  curriculo.experiencia.forEach(item => itemExperiencia(ids("experiencia"), item, "empresa"));
  curriculo.extracurricular.forEach(item => itemExperiencia(ids("extra"), item, "titulo"));
  curriculo.marcos.forEach(item => itemLista(ids("marcos"), item, "item-menor-bullet", "• ", "."));
  curriculo.habilidades.forEach(item => itemLista(ids("habilidades"), item, "item-menor-bullet", "• ", ";"));
}

ids("btn-idioma").addEventListener("click", () => {
  idioma = idioma === "pt-BR" ? "en-EU" : "pt-BR";
  localStorage.setItem("idioma-curriculo", idioma);
  renderizar();
});
ids("btn-pdf").addEventListener("click", () => { window.scrollTo(0, 0); window.print(); });
renderizar();
