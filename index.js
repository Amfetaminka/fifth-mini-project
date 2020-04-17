let menu = document.querySelector('.more');
menu.addEventListener('click', function() {
    menu.classList.toggle('more_option')
    event.preventDefault();
});

let gridMenu = document.querySelector('.grid-more');
gridMenu.addEventListener('click', function() {
    gridMenu.classList.toggle('grid_option')
    event.preventDefault();
});

let gridMenuSecond = document.querySelector('.grid-more-second');
gridMenuSecond.addEventListener('click', function() {
    gridMenuSecond.classList.toggle('grid_option')
    event.preventDefault();
});

let gridMenuThird = document.querySelector('.grid-more-third');
gridMenuThird.addEventListener('click', function() {
    gridMenuThird.classList.toggle('grid_option')
    event.preventDefault();
});

let imgMore = document.querySelector('.img-more');
let moreImgButton = document.querySelector('.article_our_project-more');
moreImgButton.addEventListener('click', function(){
    imgMore.classList.toggle('more-img');
    event.preventDefault()
});

