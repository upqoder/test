/* const answer = confirm('Вы здесь?')
console.log(answer)   */


/* одно равно = присваивание
два равно == проверка на равенство
три равно === строгая проверка по типам данных */
// Условия
let num = 50

if (num < 49){
    console.log('49 меньше 50')
} else if (num > 100){
    console.log('50 больше 100')
} else {
    console.log('Все ответы выше не правильны')
}
//сложная в понимании но простая и короткая в коде альтернатива
(num == 50) ? console.log('Верно') : console.log('Неверно')


// Конструкция switch заменяет собой сразу несколько if.
switch (num) {
    case num < 49:
        console.log('49 меньше 50')
        break
    case num > 47:
        console.log('47 больше 50')
        break
    case 50:
        console.log('50 равно 50 Верно')
        break
    // Если все же ни одно из условий не верно
    default:
        console.log('Это условие выполняется если ни одно из вышестоящих условий не True')    
}