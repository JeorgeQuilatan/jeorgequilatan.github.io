document.getElementById('down').addEventListener('click', function () {
    document.querySelector('.header-mobile').style.display = 'flex';
    document.querySelector('.down').style.display = 'none';
    document.querySelector('.up').style.display = 'flex';
});

document.getElementById('up').addEventListener('click', function () {
    
    document.querySelector('.up').style.display = 'none';
    document.querySelector('.down').style.display = 'flex';
    document.querySelector('.header-mobile').style.display = 'none';

});