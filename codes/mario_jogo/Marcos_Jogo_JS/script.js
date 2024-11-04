const personagem = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');


const pular_mario = () => {

    personagem.classList.add('pular');

    setTimeout(() => {
        personagem.classList.remove('pular');
    }, 600);

}
const intervalo_continuo = setInterval(() => {
    const p1 = tubo.offsetLeft;
    const p2 = +window.getComputedStyle(personagem).bottom.replace('px', '');


    if (p1 <= 120 && p1 > 0 && p2 < 80){

        tubo.style.animation = 'none';
        tubo.style.left = `${p1}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${p2}px`;

        personagem.src = './imagens/final_jogo.png'
        personagem.style.width = "300px"
        personagem.style.marginLeft = "600px";
        personagem.style.marginBottom= "240px";

        clearInterval(intervalo_continuo);

    }
    
}, 10);



document.addEventListener('keydown', pular_mario);