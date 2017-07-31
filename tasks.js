const { Map, List, Set, fromJS } = Immutable;

const users = fromJS([{
    id: 1,
    name: 'Vasya',
    surname: 'Ivanov',
    age: 22,
    orders: [{
        id: 5,
        date: '21-01-2015',
        sum: 235,
        status: 'DELIVERED'
    }, {
        id: 53,
        date: '25-01-2015',
        sum: 125,
        status: 'CANCELED'
    }],
    interests: ['computers', 'food']
}, {
    id: 2,
    name: 'Ivan',
    surname: 'Tretyakov',
    age: 34,
    orders: [{
        id: 65,
        date: '21-01-2015',
        sum: 2235,
        status: 'DELIVERED'
    }, {
        id: 54,
        date: '01-02-2015',
        sum: 567,
        status: 'REFUND'
    }, {
        id: 54,
        date: '26-02-2015',
        sum: 1235,
        status: 'PLACED'
    }],
    interests: ['computers', 'food', 'cars']
}, {
    id: 4,
    name: 'Daryna',
    surname: 'Petrova',
    age: 21,
    orders: [{
        id: 57,
        date: '29-01-2015',
        sum: 218,
        status: 'DELIVERED'
    }],
    interests: ['cars', 'math']
}, {
    id: 5,
    name: 'Petro',
    surname: 'Nalyvaiko',
    age: 45,
    orders: [{
        id: 5,
        date: '21-01-2015',
        sum: 783,
        status: 'DELIVERED'
    }, {
        id: 5,
        date: '24-01-2015',
        sum: 67,
        status: 'DECLINED'
    }, {
        id: 5,
        date: '29-01-2015',
        sum: 1234,
        status: 'DELIVERED'
    }, {
        id: 5,
        date: '04-02-2015',
        sum: 123,
        status: 'DELIVERED'
    }, {
        id: 5,
        date: '15-02-2015',
        sum: 245,
        status: 'DELIVERED'
    }],
    interests: ['computers', 'food', 'math']
}]);

/**
 * TASK 1
 * Получить пользователя с максимальным количеством заказов
*/
{
const maximus = users.maxBy(item => item.get('orders').toJS().length);
console.log(maximus.toJS());
}

/**
 * TASK 2
 * Получить общее количество заказов
*/
{
const result = users.reduce((list, obj) => (list + obj.get('orders').toJS().length), 0);
console.log(result);   
}


/**
 * TASK 3
 * Получить список всех заказов с указанием имени пользователя, который его совершил
 * Сам объект с заказом должен иметь вид:
 * {
 *    id: 5,
 *    date: '15-02-2015',
 *    sum: 245,
 *    status: 'DELIVERED',
 *    user: 'Petro Nalyvaiko'
 * }
 * Отсортировать в полядке убывания даты
*/
{
const result = users.reduce((total, object) => total.concat(object.get('orders')
                    .map((key) => key.set('user', object.get('name') + ' ' + object.get('surname')))), new List);
console.log(result.sort((a, b) => b.get('sum') - a.get('sum')).toJS());
}

/**
 * TASK 4
 * Получить распределение по интересам в виде оюъекта вида:
 * { books: 5, computers: 2 }
*/
{
const result = users.reduce((interestSet, user) =>
        interestSet.concat(user.get('interests')), new List).toJS()
                    .reduce((total, current) => { total[current] = (total[current] || 0) + 1;
        return total;
}, {});
console.log(result);
}

/**
 * TASK 5
 * Получить id пользователя с суммарной макcимальной потраченной суммой
*/
{

}

/**
 * TASK 6
 * Получить список заказов в выбранным статусом
*/
{
    const status = 'DELIVERED';

}

/**
 * TASK 7
 * Получить всех пользователей, последний заказ которых был совершен в январе 2015 года
*/
{

}

/**
 * TASK 8
 * Получить среднюю сумму заказа за выбранный период
*/
{
    const from = '11-01-2015';
    const to = '02-02-2015';

}

/**
 * TASK 9
 * Определить день, в который было совершено наибольшее количество заказов
*/
{

}

/**
 * TASK 10
 * Напишите метод `updateUserInfo(users, userId, info)`
 * в который передается:
 *   1. список всех пользователей
 *   2. id пользователя, который нужно изменить
 *   3. данные об этом пользователе
 * Этот метод должен вернуть новый массив с измененными данными и пользователе
 * Например:
 *   1. `updateUserInfo(users, 1, { age: 23 })`
 *      вернет список, в котором у пользователя с id = 1, возраст изменится на 23
 *   2. `updateUserInfo(users, 1, { interests: 'books' })`
 *      вернет список, в котором у пользователя с id = 1, в массив интересов
 *      добавится строка 'books' (если ее там не было)
*/
{

}
