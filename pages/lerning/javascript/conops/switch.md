# Условный оператор switch
**Запись**
```js
var a = 2;
switch (a) {
    case 0: // выполняется если a == 0
        //<код>
        break;
    case 1: // если a == 1
        //<код>
        break;
    case 2: // ВЫПОЛНЯЕТСЯ
        //<код>
        break;
    case 3: // если a == 3
        //<код>
        break;
}
```
**Пример**
```js
switch (a) {
    case 0:
        alert("Hello");
        break;
    case 1:
        alert("my");
        break;
    case 2:
        alert("dear");
        break;
    case 3:
        alert("World");
        break;
    default:
        alert("Это стандартное оповещение")
        break;        
}
```
***Попробуй***
