
let sliderElement,buttonE,sizePassword,password, containerPassword, charset, newpass;

sliderElement = document.querySelector("#slider");
buttonE = document.querySelector("#button");
sizePassword = document.querySelector("#valor");
password = document.querySelector("#password");
containerPassword = document.querySelector("#container-password");
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%!@8>,{|~";
newpass = "";

sizePassword.innerHTML = sliderElement.value ;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
    
    let senhas = "";

    for (let cont=0, n = charset.length; cont < sliderElement.value; ++cont){
        senhas += charset.charAt(Math.floor(Math.random()*n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = senhas;
    newpass = senhas;
}

function copyPassword(){

    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(newpass);
}

