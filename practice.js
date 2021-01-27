// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
function sumSequence(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    };
    return sum;
};

// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
class EducationalInstitution {
    constructor(faculty, cathedra) {
        this.faculty = faculty;
        this.cathedra = cathedra;
    }
}

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
class Student extends EducationalInstitution {
    constructor(faculty, cathedra, name, surname, isMale, dataContact) {
        super(faculty, cathedra)
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.dataContact = dataContact;
    };
}
const student = new Student('Medical', 'Pediatric', 'John', 'Doe', true, '248734872');

// 2.4 Реализовать функцию выводит на экран всю информацию о студенте
function getDatesAboutStudent(obj) {
    // for (let value of Object.entries(obj)) {
    // let string;
    // value.forEach(() => {
    //     string = value.join(': ');
    // });
    // console.log(string);
    // }
    return Object.entries(obj).map(value => value.join(': ')).join('\n');
}
getDatesAboutStudent(student);

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
function createArray(quantity) {
    const arrNums = [];
    for (let i = 0; i < quantity; i++) {
        arrNums.push(Math.ceil(Math.random() * i));
    };
    return arrNums;
};

const array = createArray(25);
console.log(array);

// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов
function getEvenNums(arrOfNums) {
    let result = [];
    let count = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] % 2 === 0) { // условие должно быть равным нулю чтобы выводились элементы равные 0
            result.push(arrOfNums[i]); // i если нужно выести индексы
            count++;
        }
    }
    return result + ' ' + count;

}

const even = getEvenNums(array);
console.log(even);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
class Book {
    constructor(author, name, yearOfPublishing, publisher) {
        this.author = author;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
        this.publisher = publisher;
    }
}

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Ebook extends Book {
    constructor(author, name, yearOfPublishing, publisher, format, eNumber) {
        super(author, name, yearOfPublishing, publisher);
        this.format = format;
        this.eNumber = eNumber;
    }
}

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
// которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
function getOutputNumbersOnConsole(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        console.log(output || i);
    };
};