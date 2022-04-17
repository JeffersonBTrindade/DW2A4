export const valid = {
    nome (value){
        if (/\d/.test(value) ||
            !/\s/.test(value)) {
            return true
        }
    },

    cpf (value){
        var strCPF = value.replaceAll('.', '').replace('-', '')
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return true;
        
        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return true;
        
        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return true;
        return false;
    },

    dt_nasc (value){
        let dataAtual = new Date()

        let matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(value);
        if (matches == null) return true;
        let d = matches[1];
        let m = matches[2];
        let y = matches[3];
        if (d > 31 ||
            d < 0 ||
            m > 12 ||
            m < 0) {
            return true;
        }

        let data = new Date(y, m, d);
        
        if (data > dataAtual){
            return true
        }
    },

    email (value){
        if(!/\w@\w/.test(value)) {
            return true
        }
        
        if (!/\w\.\w{2}/.test(value)) {
            return true
        }

        return false
    }
}