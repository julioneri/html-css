var dataAtual = new Date()
const diaAtual = dataAtual.getDay()

let dia = window.document.getElementById('dia')
switch (diaAtual) {
    case 0:
        dia.innerHTML = 'Sunday'
        break;
    case 1:
        dia.innerHTML = 'Monday'
        break;
    case 2:
        dia.innerHTML = 'Tuesday'
        break;
    case 3:
        dia.innerHTML = 'Wednesday'
        break;
    case 4:
        dia.innerHTML = 'Thursday'
        break;
    case 5:
        dia.innerHTML = 'Friday'
        break;
    case 6:
        dia.innerHTML = 'Saturday'
        break;
}

const mesAtual = dataAtual.getMonth()
let mes = window.document.getElementById('mes')
switch (mesAtual) {
    case 0:
        mes.innerHTML = 'January'
        break;
    case 1:
        mes.innerHTML = 'February'
        break;
    case 2:
        mes.innerHTML = 'March'
        break;
    case 3:
        mes.innerHTML = 'April'
        break;
    case 4:
        mes.innerHTML = 'May'
        break;
    case 5:
        mes.innerHTML = 'June'
        break;
    case 6:
        mes.innerHTML = 'July'
        break;
    case 7:
        mes.innerHTML = 'August'
        break;
    case 8:
        mes.innerHTML = 'September'
        break;
    case 9:
        mes.innerHTML = 'October'
        break;
    case 10:
        mes.innerHTML = 'November'
        break;
    case 11:
        mes.innerHTML = 'December'
        break;
}

const anoAtual = dataAtual.getFullYear()
let ano = window.document.getElementById('ano');
ano.innerHTML = anoAtual
