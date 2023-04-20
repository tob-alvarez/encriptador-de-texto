const inputMensaje = document.querySelector("#mensaje");

const btnEncriptar = document.querySelector("#encriptar");
btnEncriptar.addEventListener('click', encriptar);
const btnDesencriptar = document.querySelector("#desencriptar");
btnDesencriptar.addEventListener('click', desencriptar);
const btnCopiar = document.querySelector("#copiar");

function encriptar () {
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")

    const contenedor = document.querySelector('.contenedor2');
    const muñeco = contenedor.querySelector('.muñequito');
    const textoH2 = contenedor.querySelector('.textoH2');
    const parrafo = contenedor.querySelector('.parrafo2');

    muñeco.style.display = 'none';
    textoH2.style.display = 'none';
    parrafo.style.display = 'none';

    const resultado = document.getElementById("mensajeTraducido");
    resultado.style.display = "flex";
    resultado.textContent = mensajeEncriptado;
    resultado.setAttribute('id', 'resultado');
    resultado.setAttribute('readonly', '');

    const copiar = document.createElement('button');
    copiar.setAttribute('class', 'mb-3 btn btn-outline-primary boton1');
    copiar.textContent = 'Copiar';

    contenedor.appendChild(resultado);
    contenedor.appendChild(copiar);

    copiar.addEventListener('click', function() {
        resultado.select();
        document.execCommand("copy");
        resultado.blur();
        alert("Mensaje copiado al portapapeles!");
    });
}

let desencriptado = false; // variable de bandera

function desencriptar () {
    // verificar si ya se desencriptó el mensaje
    if (desencriptado) {
        alert("El mensaje ya ha sido desencriptado.");
        return;
    }
    let mensajeEncriptado = resultado.value;
    let mensajeDesencriptado = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

    const contenedor = document.querySelector('.contenedor2');
    const resultadoDesencriptado = document.createElement('textarea');
    resultadoDesencriptado.setAttribute('id', 'resultadoDesencriptado');
    resultadoDesencriptado.setAttribute('class', 'form-control mb-3');
    resultadoDesencriptado.textContent = mensajeDesencriptado;
    resultadoDesencriptado.setAttribute('readonly', '');

    const copiarDesencriptado = document.createElement('button');
    copiarDesencriptado.setAttribute('class', 'mb-3 btn btn-outline-primary boton1');
    copiarDesencriptado.textContent = 'Copiar Desencriptado';
    copiarDesencriptado.addEventListener('click', function() {
        resultadoDesencriptado.select();
        document.execCommand('copy');
        copiarDesencriptado.textContent = 'Copiado!';
    });

    contenedor.appendChild(resultadoDesencriptado);
    contenedor.appendChild(copiarDesencriptado);
    desencriptado = true; // actualizar variable de bandera
}






