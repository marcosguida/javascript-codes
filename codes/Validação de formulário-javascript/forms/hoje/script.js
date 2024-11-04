function validar(){

    var nome=form1.nome.value;

    if (nome=""){
        alert("Preencha o nome");
        nome.focus();
        return false;
    }

    var senha=form1.senha.value;
    var rep_senha=form1.rep_senha.value;
    if (senha!=rep_senha){
        alert("Insira senhas iguais")
        senha.focus();
        
    }

    var nome=form1.nome.value;
    if (nome.length < 5)
    {
        alert('Digite seu nome completo');
        form1.nome.focus();
        return false;
    }

}