document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger_btn').addEventListener('click', function(){
        document.querySelector('body').classList.toggle('no_scroll')
        document.querySelector('.header-block').classList.toggle('open')
    })
})