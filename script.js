
function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 16
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.background ='#a8d9e5'
    //bom dia
} else if (hora >= 12 && hora < 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#df9d0f'
    //boatarde

} else{
    img.src = 'fotonoite.png'
    document.body.style.background ='1d9fdb'
    //boa noite
}
}
