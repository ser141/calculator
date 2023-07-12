function zeroFirstFormat(value) {
    if (value < 10) {
        value='0' + value;
    }
    return value;
}

function time() {
    var currentTime = new Date();
    var hours = zeroFirstFormat(currentTime.getHours());
    var minutes = zeroFirstFormat(currentTime.getMinutes());

    return hours+ ":" +minutes;
}

document.querySelector('.header__time').innerHTML = time();