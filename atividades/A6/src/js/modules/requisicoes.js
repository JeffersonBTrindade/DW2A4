export const requisicoes = {
    viacep(value) {
        const cepTratado = value.replace(/-/, '');
        return fetch(`https://viacep.com.br/ws/${cepTratado}/json/`);
    },

    apicovid(value) {
        const uf = value.toLowerCase();
        return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`);
    }
}