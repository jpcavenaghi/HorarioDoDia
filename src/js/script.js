function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'src/img/manha.jpg';
        document.body.style.background = "#f9d487";
    } else if (hora >= 12 && hora < 18) {
        img.src = 'src/img/tarde.jpg';
        document.body.style.background = "#fd3411";
    } else {
        img.src = 'src/img/noite.jpg';
        document.body.style.background = "#160821";
    }
}
