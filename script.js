let fotos = ['bild0.jpg', 'bild1.jpg', 'bild2.jpg', 'bild3.jpg',
    'bild4.jpg', 'bild5.jpg', 'bild6.jpg', 'bild7.jpg', 'bild8.jpg',
    'bild9.jpg', 'bild10.jpg', 'bild11.jpg', 'bild12.jpg', 'bild13.jpg',
    'bild14.jpg', 'bild15.jpg', 'bild16.jpg', 'bild17.jpg', 'bild18.jpg',
    'bild19.jpg', 'bild21.jpg', 'bild22.jpg', 'bild23.jpg', 'bild24.jpg'];


function showFotos() {

    for (let i = 0; i < fotos.length; i++) {
        if(i === 2) {
            alert('gerade Zahl');
            document.getElementById('foto-box').style = "width: 280px";
        }
        document.getElementById('fotos-container').innerHTML +=
        /*html*/ ` <img id="foto-box" onclick= "showBigFoto(${i})" class="foto-box" src="img/${fotos[i]}">`;
       
    }
}


function showBigFoto(i) {
    document.getElementById('bigFotoContainer').classList.remove('d-none');
    document.getElementById('bigFotoContainer').innerHTML = createBigFoto(i);
    document.body.style = "overflow: hidden";
}


function createBigFoto(i) {
    return  /*html*/`<div class="container-arrow">
         <img class="arrow-left-right" onclick="leftArrow(${i})" src="img/arrow-left.png">
         <img class="foto-box-one" src="img/${fotos[i]}">
         <img class="arrow-left-right" onclick="rightArrow(${i})" src="img/arrow-right.png"> 
         <img class="arrow-back"  onclick="closeBigFoto()" src="img/arrow-back.png">
         </div>` ;
}


function closeBigFoto() {
    document.getElementById('bigFotoContainer').classList.add('d-none');
    document.body.style = "overflow: visible";
}


function rightArrow(i) {
    i++;
    if (i === fotos.length) {
        i = 0;
    }
    document.getElementById('bigFotoContainer').innerHTML = '';
    showBigFoto(i);
}


function leftArrow(i) {

    if (i === 0) {
        i = fotos.length;
    }
    i--;
    document.getElementById('bigFotoContainer').innerHTML = '';
    showBigFoto(i);
}

