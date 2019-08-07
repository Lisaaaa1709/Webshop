//  🔖 🔖 🔖 FORMULAR VALIDIERUNG 🔖 🔖 🔖

window.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.jForm');
    var isEmpty = function (str) {
        return !(str.trim().length > 0);
    };

    var isValidEmail = function (email) {
        var at_index = email.indexOf('@');
        if (at_index === -1) {
            return false;
        } else if (
            at_index === 0 ||
            at_index === email.length - 1
        ) {
            return false;
        } else if (
            email.indexOf('.', at_index + 2) === -1 ||
            email.indexOf('.', at_index) === at_index + 1
        ) {
            return false;
        } else if (email.charAt(email.length - 1) === '.') {
            return false;
        }
        return true;
    };

    form.addEventListener('submit', function (event) {
        var email_input = document.querySelector('.jEmail');
        var email_value = email_input.value;
        if (isValidEmail(email_value)) {
            document.querySelector('.jEmail').classList.remove('error');
        } else {
            document.querySelector('.jEmail').classList.add('error');
            event.preventDefault();
        }
    });

});


// 👆🏼👆🏼👆🏼 BACK TO TOP BUTTON 👆🏼👆🏼👆🏼

// Funktion wird aufgerufen, wenn man nach unten scrollt -> scrollFunction
window.onscroll = function () { scrollFunction() };
// Wenn man 200px nach unten scrollt, soll der "Back to top" Button erscheinen
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("backtotop").style.display = "block";
        // wenn man unter den 200px ist, dann wird der Button nicht angezeigt bzw. verschwindet wieder
    } else {
        document.getElementById("backtotop").style.display = "none";
    }
}
// Wenn man auf den Button klickt, soll man wieder zum Anfang der Seite gelinked werden
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}