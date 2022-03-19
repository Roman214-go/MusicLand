const navList = document.querySelector('.burger-menu')
const burgerButton = document.querySelector('.burger-container')
const agreeButton = document.querySelector('.btn-yes')
const disagreeButton = document.querySelector('.btn-gl')
burgerButton.addEventListener('click', () => {

        if (burgerButton.className == "burger-container") {
                burgerButton.classList.toggle('burger-active')
                const navigation = createNavTmpl()
                navList.appendChild(navigation)
                setTimeout(() => {
                        document.querySelector('nav').style.transform = "translateX(-80%)"
                        document.querySelector('nav').style.opacity = "1"
                        
                }, 0)
        }
        else {
                burgerButton.classList.toggle('burger-active')
                setTimeout(() => {
                        document.querySelector('nav').style.transform = "translateX(80%)"
                        document.querySelector('nav').style.opacity = "0"
                }, 0)
        }
})
function createNavTmpl() {
        const nav = document.createElement('nav')
        nav.style.opacity = '0'
        nav.innerHTML = `
        <a href="#">Главная</a>
        <a href="#albums">Альбомы</a>
        <a href="#">О нас</a>
        `
        return nav
}
// Бургер-меню

setInterval(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => {return res.json()})
        .then(data => { 
                document.querySelector('.random-image-cont').innerHTML = `<img src="${data.data.memes[(Math.random() * 100 + 1).toFixed(0)].url}" alt='random-img'>`})
}, 8000)
// Рандомная картинка в низе сайта, получаемая с сервера

agreeButton.addEventListener('click', () => {
        document.querySelector('.still-best-project').innerHTML = '<p>Спасибо))</p>'
})

disagreeButton.addEventListener('click', () => {
        disagreeButton.style.transform = `translate(${Math.random() * (25 - (-25)) + (25)}px, ${Math.random() * (25 - (-25)) + (-25)}px)`;
})
// Конпки понравился ли проект

window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 7800);
      }
// Загрузочный экран

