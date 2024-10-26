//capturar evento do submit 
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura invalida', false)
        return;
    }

    const IMC = getImc(peso, altura);
    const nivelImc = getNivelImc(IMC)

    const msg = `Seu IMC é ${IMC} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivelImc[5];
    }
    if (imc >= 34.9) {
        return nivelImc[4];
    }
    if (imc >= 29.9) {
        return nivelImc[3];
    }
    if (imc >= 24.9) {
        return nivelImc[2];
    }
    if (imc >= 18.5) {
        return nivelImc[1];
    }
    if (imc <= 18.5) {
        return nivelImc[0];
    }
}

function getImc(peso, altura) {
    const IMC = peso / altura ** 2;
    return IMC.toFixed(2);
}


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
