var carrusel_fotos = ['media/06d51948504ca464a00ad816117baaaf.jpg','media/IMG_0120.JPG','media/IMG_0119.JPG','media/IMG_0118.JPG']
contador = 0;

function MoveCarrusel(carrusel){

    carrusel.addEventListener('click', e =>{
        let atras = carrusel.querySelector('.atras');
        let adelante = carrusel.querySelector('.adelante');
        let img  = carrusel.querySelector('img');
        let tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = carrusel_fotos[cont-1];
                cont--;
            }else{
                img.src = carrusel_fotos[carrusel_fotos.length-1];
                cont = carrusel_fotos.length -1;
            }

        }else if(tgt == adelante){
            if(cont > carrusel_fotos.length - 1 ){
                img.src = carrusel_fotos[cont + 1];
                cont++;
            }else{
                img.src = carrusel_fotos[0];
                cont = 0;
            }

        }
        
    });
}

document.addEventListener("DOMContentLoader", () => {
    let carrusel = document.querySelector('.carrusel');
    MoveCarrusel(carrusel);
});