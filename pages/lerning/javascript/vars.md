`$ - document.write(|);`
# Переменные
**var**
```js
// var
var v = 5;

if (true) {
  var v = 10;

  alert(v); // $ 10 (внутри блока)
}
alert(v); // $ 10 (снаружи блока то же самое)
```
**const**
```js
// const нельзя менять
const apple = 5;
apple = 10; // $ ошибка

// В остальном const полностью аналогично let
```
**let**
```js
// let 1
let l1 = 5;

if (true) {
  let l1 = 10;

  alert(l1); // $ 10 (внутри блока)
}
alert(l1); // $ 5 (снаружи блока значение не изменилось)
```
```js
// let 2
if (true) {
  let l2 = 10;

  alert(l2); // $ 10 (внутри блока)
}
alert(l2); // $ ошибка!
```
**Ошибки**
```js
// var существуют и до объявления. = "undefined"
alert(v); // $ undefined
var v = 10;
alert(v); // $ 10
```
```js
// let до объявления вообще нет.
alert(l); // $ ошибка: нет такой переменной
let l = 5;
alert(l); // $ 5
```
```js
// let нельзя повторно объявлять.
let l;
let l; // $ ошибка: переменная x уже объявлена
```
> let хороши для циклов
```js
for(let i = 0; i<10; i++) { /* <...> */}
for(let i = 0; i<10; i++) { /* <...> */ }

alert( i ); // $ ошибка: i несуществует
```
**Задание переменных**
```js
var i = -10;
var d = 1.5;
var s = "string";
var b = false;
var b_lol = (1 != 0) ? true : false;
        ^
        if(1 != 0) b = true;
        else b = false;
```
**Операции над переменными**
```js
var v1 = 10;
v1 = v + 2; // $ 12

var v2 = 10;
v2 = v - 2; // $ 8

var v3 = 10;
v3 = v * 2; // $ 20

var v4 = 10;
v4 = v / 2; // $ 5

var v5 = 10;
v5 = v % 2; // $ 0

var v6 = 10;
v6 = v % 3; // $ 1

var v7 = 10;
v7++; // $ 11 - инкремент
v7--; // $ 10 - декремент
v7 += 1; // $ 11
v7 -= 1; // $ 10
```
**Сложение переменных**
```js
var a = 5;
var b = 1.5;

var d = 5 + 1.5; // $ 51.5
var d = (5 + 1.5); // $ 6.5
```
**Логические операции переменных**
```js
var b1 = 1 >= 0; // $(b1) - true
var b2 = 1 >= 0 && 1 < 1; // $(b2) - false
var b3 = 2 < 0 || 1 == 1; // $(b3) - true
var b4 = !true; // $(b4) - false
```
**Таблица условий**
> !v - отрицание
>
> v1 && v2 - логическое и 
>
> v1 || v2 - логическое или 

|a|b|!a|!b|a && b| a \|\| b |
|:---:|:---:|:---:|:---:|:---:|:---:|
|false|false|true|true|false|false|
|true|false|false|true|false|true|
|false|true|true|false|false|true|
|true|true|fakse|false|true|true|