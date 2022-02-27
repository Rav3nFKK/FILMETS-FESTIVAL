//#region 
var btntc = document.getElementById("btnls");
var btntc1 = document.getElementById("btnls1");
var arrR = document.getElementById("lefta");
var arrL = document.getElementById("righta");
var cn = document.getElementById("white_container");
var cg = document.getElementById("gray");
var il1 = document.getElementById("l1");
var il2 = document.getElementById("l2");
var il3 = document.getElementById("l3");
var il4 = document.getElementById("l4");
var i = 0;
let arrU = ["url(img/Rectangle5.png)", "url(img/Rectangle7.png)", "url(img/Rectangle8.png)", "url(img/Rectangle9.png)", "url(img/Rectangle19.png)", "url(img/Rectangle19_2.png)", "url(img/Rectangle20.png)", "url(img/Rectangle21_2.png)"];

il1.style.background = arrU[0];
il2.style.background = arrU[1];
il3.style.background = arrU[2];
il4.style.background = arrU[3];
//#endregion

countdown('03/1/2022 02:00:00 AM');


//#region покупка билета
try {
    btntc.addEventListener("click", () => {
        show("block");
    })
} catch {}
try {
    btntc1.addEventListener("click", () => {
        show("block");
    })
} catch {}

try {
    cg.addEventListener("click", () => {
        show("none");
    })
} catch {}

function show(e) {

    cn.style.display = e;
    cg.style.display = e;
}
//#endregion

//#region таймер

function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);


            document.getElementById("dayst").innerHTML = parseInt(days, 10);
            document.getElementById("hourst").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutest").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("secondst").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) {}
}

//#endregion

//#region спинер 1 по фильмам



//8 значений
arrL.addEventListener("click", () => {
    i += 1;
    spin1();
})

arrR.addEventListener("click", () => {



    i -= 1;
    spin1();
})


function spin1() {
    var ii = i;
    if (i == -8 || i == 8) {
        i = 0;
        ii = 0;
    }
    if (i < 0) {
        ii = i * -1;
    }
    switch (ii) {
        case 0:
            // il1.style.background = arrU[ii];
            // il2.style.background = arrU[ii + 1];
            // il3.style.background = arrU[ii + 2];
            // il4.style.background = arrU[ii + 3];
            break;
        case 1:
            // il1.style.background = arrU[ii];
            // il2.style.background = arrU[ii + 1];
            // il3.style.background = arrU[ii + 2];
            // il4.style.background = arrU[ii + 3];
            break;
        case 2:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[ii + 1];
            il3.style.background = arrU[ii + 2];
            il4.style.background = arrU[ii + 3];
            break;
        case 3:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[ii + 1];
            il3.style.background = arrU[ii + 2];
            il4.style.background = arrU[ii + 3];
            break;
        case 4:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[ii + 1];
            il3.style.background = arrU[ii + 2];
            il4.style.background = arrU[ii + 3];
            break;
        case 5:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[ii + 1];
            il3.style.background = arrU[ii + 2];
            il4.style.background = arrU[0];
            break;
        case 6:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[ii + 1];
            il3.style.background = arrU[0];
            il4.style.background = arrU[1];
            break;
        case 7:
            il1.style.background = arrU[ii];
            il2.style.background = arrU[0];
            il3.style.background = arrU[1];
            il4.style.background = arrU[2];
            break;
    }

    il1.style.background = il2.style.background;


    var img = il1.style.backgroundImage;

    console.log(img);
}


//#endregion