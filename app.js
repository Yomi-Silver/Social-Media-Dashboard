









const power = document.getElementsByTagName('html')[0];
const check = document.querySelector('input');

function toggleHandler (e) {
    // console.log(e);
    if (check.checked === true){
        power.setAttribute('data-theme', 'lightmode');
    } else {
        power.setAttribute('data-theme', 'darkmode');
    }
}



check.addEventListener('change', toggleHandler);