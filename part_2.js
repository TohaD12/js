//1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
// Почему код даёт именно такие результаты?


//В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.
// В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.

//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// x будет равен 5 ( 1 + ( 2 * 2 )


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт,
//     который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = -5, b = 20;

if (a > 0 && b > 0) {
    var dif = a - b;
    console.log(dif);
}
else if (a < 0 && b < 0) {
    var mult = a * b;
    console.log(mult);
}
else {
    var sum = a + b;
    console.log(sum)
}

// ### 4. Присвоить переменной а
//     значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = parseInt(Math.random() * 15)
console.log(a)
var b = ''
switch (a){
    case 0:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 1:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 2:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 3:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 4:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 5:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 6:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 7:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 8:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 9:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 10:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 11:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 12:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 13:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;
    case 14:
        while (a < 15) {
            b = b + a + ' '
            a++;
        }
        break;


}


console.log(b)

// ### 5. Реализовать
//     основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(one, two) {
    return one + two
}
function dif(one, two) {
    return one - two
}
function multi(one, two) {
    return one * two
}
function div(one, two) {
    return one / two
}
console.log(sum(5,6))
console.log(dif(5,6))
console.log(multi(5,6))
console.log(div(5,5))


// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 –
//     значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции
//     выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение
//     (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            console.log(sum(arg1, arg2))
            break;
        case 'div':
            console.log(div(arg1, arg2))
            break;
        case 'multi':
            console.log(multi(arg1, arg2))
            break;
        case 'dif':
            console.log(dif(arg1, arg2))
            break;
    }
}

mathOperation(4, 4, 'sum')
mathOperation(4, 4, 'div')
mathOperation(4, 4, 'multi')
mathOperation(4, 4, 'dif')


// ### 7. *Сравнить null и 0. Попробуйте объяснить результат.
// ### 8. *С помощью рекурсии
//         организовать функцию возведения числа в степень. Формат:
// function power(val, pow), где val – заданное число, pow – степень.

