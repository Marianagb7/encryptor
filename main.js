const inputMessage = document.querySelector("#message");
const inputResult = document.querySelector("#result");

const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");
const btnListen = document.querySelector("#listen");

const containerErrors = document.querySelector(".container-errors");

function validationMessage () {

    let previusErrors = containerErrors.querySelectorAll(".error");
    for (let err of previusErrors) {
        containerErrors.removeChild(err);
    }
    var message = inputMessage.value;
    let validLetters = " abcdefghijklmnñopqrstuvwxyz";
    let errorMessage = document.createDocumentFragment();
    
    for (let letter of message) {
        if(!validLetters.includes(letter)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent =`La letra ${letter} no es válida`;
            errorMessage.appendChild(p);
        }
    }
    containerErrors.appendChild(errorMessage);
    if (containerErrors.children.length === 0) {
        return true;
    }
    return false;
}


function encrypt (){
    if (!validationMessage()) return;
    var message = inputMessage.value;
    var encryptMessage = message
    .replaceAll("e","enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    console.log(encryptMessage);
    inputResult.value = encryptMessage;

}

function decrypt (){
    if (!validationMessage()) return;
    var encryptMessage = inputMessage.value;
    var message = encryptMessage
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    
    inputResult.value = message;
}

function copy (){
    var encryptMessage = inputResult.value;
    navigator.clipboard.writeText(encryptMessage);
    inputMessage.value = "";
    inputMessage.focus();
}

function listen () {
    var encryptMessage = inputResult.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = encryptMessage
    msg.lang ="es-Es";
    window.speechSynthesis.speak(msg)
}


btnEncrypt.onclick = encrypt;

btnDecrypt.onclick = decrypt;

btnCopy.onclick = copy;

btnListen.onclick = listen;



