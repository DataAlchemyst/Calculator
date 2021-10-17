var big = 9007199254740992;
var small = -9007199254740992;

btn1.onclick = function() {
    var n1 = +num1.value;
    var n2 = +num2.value;

    if (isNaN(n1) || n1>big || n1<small) {
        error1.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    } else if (isNaN(n2) || n2>big || n2<small) {
        error2.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    }
    else {
        error1.innerHTML = '';
        error2.innerHTML = '';
        result.innerHTML = 'Результат: ' + (n1 + n2);
    }
}

btn2.onclick = function() {
    var n1 = +num1.value;
    var n2 = +num2.value;

    if (isNaN(n1) || n1>big || n1<small) {
        error1.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    } else if (isNaN(n2) || n2>big || n2<small) {
        error2.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    }
    else {
        error1.innerHTML = '';
        error2.innerHTML = '';
        result.innerHTML = 'Результат: ' + (n1 - n2);
    }
}

btn3.onclick = function() {
    var n1 = +num1.value;
    var n2 = +num2.value;

    if (isNaN(n1) || n1>big || n1<small) {
        error1.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    } else if (isNaN(n2) || n2>big || n2<small) {
        error2.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    }
    else {
        error1.innerHTML = '';
        error2.innerHTML = '';
        result.innerHTML = 'Результат: ' + (n1 * n2);
    }
}

btn4.onclick = function() {
    var n1 = +num1.value;
    var n2 = +num2.value;

    if (isNaN(n1) || n1>big || n1<small) {
        error1.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    } else if (isNaN(n2) || n2>big || n2<small) {
        error2.innerHTML = '<b>Введите число в диапазоне integer</b>';
        result.innerHTML = 'Результат: ';
    }  else if (n2==0) {
        error2.innerHTML = '<b>На 0 делить нельзя!</b>';
        result.innerHTML = 'Результат: '; 
    }  
    else {
        error1.innerHTML = '';
        error2.innerHTML = '';
        result.innerHTML = 'Результат: ' + (n1 / n2);
    }
}