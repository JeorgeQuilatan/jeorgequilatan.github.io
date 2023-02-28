document.getElementById('dropdown').addEventListener('click', function () {
    document.querySelector('#dropdown').style.display = 'none';
    document.querySelector('#dropup').style.display = 'flex';
    document.querySelector('#header-dropdown').style.display = 'flex';
});

document.getElementById('dropup').addEventListener('click', function () {
    document.querySelector('#dropup').style.display = 'none';
    document.querySelector('#dropdown').style.display = 'flex';
    document.querySelector('#header-dropdown').style.display = 'none';
});