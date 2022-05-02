import { mask } from "./modules/mask.js";
import { requisicoes } from "./modules/requisicoes.js";

document.querySelector("input").addEventListener(
    "input",
    (e) => {
        e.target.value = mask.cep(e.target.value);
    },
    false
);

document.querySelector(".form").addEventListener("submit", (el) => {
    el.preventDefault();
    doSubmit();
});

function adicionaInfos(json) {
    let infocovid = document.querySelector('#infoCovid')
    infocovid.innerHTML = ""
    const ul = document.createElement('ul');
    
    for (const el in json) {
        const element = json[el];
        const li = document.createElement('li')
        li.append(`${el}: ${element}`)
        ul.append(li)
    }
    infocovid.appendChild(ul);
}

async function doSubmit() {
    cep: document.querySelector("input#cep");
    console.log(cep);

    try {
        const viacep = await requisicoes.viacep(cep.value);
        const jsoncep = await viacep.json();
        const apicovid = await requisicoes.apicovid(jsoncep.uf);
        const jsoncovid = await apicovid.json();
        adicionaInfos(jsoncovid);
        cep.classList.remove('errorInput')
    } catch (err) {
        cep.classList.add('errorInput')
    }
}