//animacion de evntos


//menu 
function closeOtherCollapses(openId) {
    var collabsibles = ['collapseDesayuno', 'collapseAlmuerzos', 'collapseComidas'];
    collabsibles.forEach(function (id) {
        if (id !== openId) {
            var element = document.getElementById(id);
            var bsCollapse = new bootstrap.Collapse(element, {
                toggle: false
            });
            bsCollapse.hide();
            element.style.transition = 'height 0.1s ease, width 0.1s ease';
        }
    });
}

//boton de scroll
function closeOtherCollapses(currentId) {
    const collapses = ['collapseDesayuno', 'collapseAlmuerzos', 'collapseComidas'];
    collapses.forEach(id => {
        if (id !== currentId) {
            const element = document.getElementById(id);
            if (element.classList.contains('show')) {
                new bootstrap.Collapse(element, {
                    toggle: false
                }).hide();
            }
        }
    });
}

// Scroll to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//calendario

var monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var currentMonth = month;
var year = now.getFullYear();


initCalender();
console.log(startDay());

function initCalender() {
    $("#text_day").text(day);
    $("#text_month").text(monthName[currentMonth]);

    $("#text_month_02").text(monthName[month]);
    $("#text_year").text(year);

    $(".item_day").remove();

    for (let i = startDay(); i > 0; i--) {
        $(".container_days").append
            (`<span class="week_days_item item_day prev_days">${getTotalDays(month - 1) - (i - 1)}</span>`);
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i == day && month == currentMonth) {
            $(".container_days").append
                (`<span class="week_days_item item_day today">${i}</span>`);
        } else {
            $(".container_days").append
                (`<span class="week_days_item item_day">${i}</span>`);
        }
    }
}
function getNextMonth() {
    if (month !== 11) {
        month++;
    } else {
        year++;
        month = 0;
    }
    initCalender();
}
function getPrevMonth() {
    if (month !== 0) {
        month--;
    } else {
        year--;
        month = 11;
    }
    initCalender();
}
function startDay() {
    var start = new Date(year, month, 1);
    return ((start.getDate() - 1) === -1) ? 6 : start.getDay();
}

function leapMonth() {
    return ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
}

function getTotalDays() {
    if (month === -1) month = 11;

    var numMonthReal = month + 1;

    if (numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 8 || numMonthReal == 10) {
        return 31;
    } else if (numMonthReal == 0 || numMonthReal == 2 || numMonthReal == 4 || numMonthReal == 6
        || numMonthReal == 7 || numMonthReal == 9 || numMonthReal == 10) {
        return 30;
    } else {
        return leapMonth() ? 29 : 28;
    }
}

$("#next_month").click(function () {
    getNextMonth();
});
$("#last_month").click(function () {
    getPrevMonth();
})

//galeria animada

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

//animacion de promociones
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-in-on-scroll');

    function checkVisibility() {
        const triggerPoint = window.innerHeight / 1.1; // Ajusta este valor según sea necesario

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica la visibilidad al cargar la página
});

//animacion de eventos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scale-in-on-scroll');

    function checkVisibility() {
        const triggerPoint = window.innerHeight / 1.1; // Ajusta este valor según sea necesario

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica la visibilidad al cargar la página
});


//animacion de menu
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-left-on-scroll');

    function checkVisibility() {
        const triggerPoint = window.innerHeight / 1.1; // Ajusta este valor según sea necesario

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }

    function adjustPosition() {
        elements.forEach(element => {
            if (element.classList.contains('visible')) {
                const buttons = element.querySelectorAll('button');
                const secondButton = buttons[1];
                const screenWidth = window.innerWidth;
                const secondButtonWidth = secondButton.offsetWidth;

                // Calcular la posición para centrar el segundo botón
                const translateX = (screenWidth - secondButtonWidth) / 2 - secondButton.getBoundingClientRect().left;
                element.style.transform = `translateX(${translateX}px)`;
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', adjustPosition);
    checkVisibility(); // Verifica la visibilidad al cargar la página
});
