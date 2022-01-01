# Kirill Zubkov

## Contact Information:

- Phone: +79773392510
- E-mail: kirya.zubkov.98@list.ru

## About Myself:

I'm a third-year strudent of Moscow Aviation Institute. Studing at a technical university in the first years is really hard, but i think, that my perseverence helped me, by the way, i liked mathematics, I think it is good for programmer.

Why I decided to start programming? As a kid I loved character - "Iron man", and now every time I program I imagine myself to be him. Why not ?) I think it's very cool to be able to solve abstract problems without leaving the keyboard.

## Skills:

- HTML5, CSS3
- JavaScript Basics
- Git, GitHub
- VS Code

## Code example:

**Task:**
Write function rle(value) that implements the string compression algorithm.

Example:

```
rle('AAABC') === '3ABC'
rle('AAAaaB') === '3A2aB'
```

**Code**

```
function isAlreadePushed(symb, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (symb == arr[i]) {
            return true;
        }
    }
    return false;
}

function rle(value) {
    value = value.split("");
    let result = [];
    let counter = 1;

    for (let i = 0; i < value.length; i++) {
        if (!isAlreadePushed(value[i], result)) {
            result.push(value[i]);
        } else {
            if (value[i] != value[i - 1] && isAlreadePushed(value[i], result)) {
                result.push(value[i]);
            }
            if (value[i] == value[i - 1]) {
                counter++;
            }
            if (value[i] != value[i + 1]) {
                if (counter != 1) {
                    let index = result.lastIndexOf(value[i]);
                    result[index] = `${counter}${result[index]}`;
                    counter = 1;
                }
            }
        }
    }
    return result.join("");
}
```

## Courses:

- Basic course CSS and HTML on [ru.code-basics.com](https://ru.code-basics.com/languages/html)
- JavaScript Manual on [learn.javascript.ru](https://learn.javascript.ru/)

## Languages:

- Russian - Native
- English - А2
