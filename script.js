const ids = id => document.getElementById(id);
const containers = ["formacao", "links", "experiencia", "extra", "marcos-tecnicos", "habilidades"].map(ids);
const viewsValidas = ["dev", "ui-ux", "tudo"];
const viewInformada = new URLSearchParams(window.location.search).get("view");
const view = viewsValidas.includes(viewInformada) ? viewInformada : "dev";
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
  if (!item.link) return;
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
  strong.className = "item-titulo";
  strong.textContent = item[titulo];
  const quote = document.createElement("span");
  quote.className = "quote";
  quote.textContent = `${item.cargo ? `${item.cargo} - ` : ""}${item.periodo}`;
  p.append(strong, quote, document.createElement("br"));
  textoFormatado(p, item.descricoes?.[view] || item.descricao);
  container.append(p);
}

const itensVisiveis = itens => itens.filter(item => !item.views || item.views.includes(view));

function renderizar() {
  const configuracao = curriculos[idioma];
  const curriculo = configuracao.dados;
  document.documentElement.lang = idioma;
  document.title = configuracao.titulo;
  ids("nome").textContent = curriculo.nome;
  ids("info").innerHTML = curriculo.info;
  ids("foto").src = curriculo.foto;
  ids("foto").alt = `Foto de ${curriculo.nome}`;
  document.querySelectorAll("[data-secao]").forEach(titulo => titulo.textContent = configuracao.secoes[titulo.dataset.secao]);
  ids("btn-pdf").textContent = configuracao.exportar;
  ids("btn-idioma").textContent = configuracao.alternativo;
  containers.forEach(container => container.replaceChildren());
  curriculo.formacao.forEach(item => itemLista(ids("formacao"), item, "item-menor", "• "));
  curriculo.links.forEach(item => itemLista(ids("links"), item, "item-menor-bullet", "• "));
  itensVisiveis(curriculo.experiencia).forEach(item => itemExperiencia(ids("experiencia"), item, "empresa"));
  itensVisiveis(curriculo.extracurricular).forEach(item => itemExperiencia(ids("extra"), item, "titulo"));
  itensVisiveis(curriculo.marcos).forEach(item => itemLista(ids("marcos-tecnicos"), item, "item-menor-bullet", "• ", "."));
  itensVisiveis(curriculo.habilidades).forEach(item => itemLista(ids("habilidades"), item, "item-menor-bullet", "• ", ";"));
  document.querySelectorAll(".pagina section").forEach(secao => {
    const conteudo = secao.querySelector("div[id]");
    secao.hidden = conteudo ? !conteudo.children.length : false;
  });
}

ids("btn-idioma").addEventListener("click", () => {
  idioma = idioma === "pt-BR" ? "en-EU" : "pt-BR";
  localStorage.setItem("idioma-curriculo", idioma);
  renderizar();
});
ids("btn-pdf").addEventListener("click", () => { window.scrollTo(0, 0); window.print(); });
renderizar();
