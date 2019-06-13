const test = {
    questions: [
        {
            question: 'В каком году отменили крепостное право',
            answers: {
                A: '1861',
                B: '1865',
                C: '1961',
                D: 'Еще не отменили',
            },
            score: 100,
            right: 'A'
        }, {
            question: 'Как на английском будет "Доброе утро"',
            answers: {
                A: 'Guten tak',
                B: 'Have a nice day',
                C: 'Good morning',
                D: 'Pink brown red',
            },
            score: 200,
            right: 'C'
        }, {
            question: 'Сколько материков на планете земля?',
            answers: {
                A: '4',
                B: '5',
                C: '6',
                D: '7',
            },
            score: 200,
            right: 'C'
        }, {
            question: 'Сколько население планеты земля',
            answers: {
                A: '1 000 000 000',
                B: '5 646 000 330',
                C: '7 155 357 369',
                D: '7 655 957 369',
            },
            score: 200,
            right: 'D'
        }, {
            question: 'Кто открывает ...',
            answers: {
                A: 'Тот открыватель',
                B: 'Тот и закрывает',
                C: 'Тот не закрывает',
                D: 'Тот убегает',
            },
            score: 100,
            right: 'B'
        }, {
            question: 'В каком году была вторая мировая война?',
            answers: {
                A: '1938',
                B: '1939',
                C: '1940',
                D: '1941',
            },
            score: 200,
            right: 'B'
        }, {
            question: 'Есть число "111", которое представлено в двоичной системе исчесления, сколько это будет в десятичной?',
            answers: {
                A: '5',
                B: '6',
                C: '7',
                D: '8',
            },
            score: 500,
            right: 'C'
        }, {
            question: 'В каком порядке работают цилиндры в МТЗ-80',
            answers: {
                A: '1-2-3-4',
                B: '4-3-2-1',
                C: '1-4-2-3',
                D: '1-3-4-2',
            },
            score: 200,
            right: 'D'
        }, {
            question: 'В вашем офисе поставили 3 автомата, которые делают разнообразные напитки. Первый автомат изготавливает кофе, второй делает чай, а третий способен давать один из перечисленных напитков, но не предоставляет право выбора. Чтобы воспользоваться любым аппаратом требуется кинуть 1 монету. На автоматах присутствуют специальные наклейки, обозначающие тип выдаваемого напитка. Одна проблема – по техническим причинам завод перепутал все обозначения. Каждый автомат имеет неправильную наклейку. Вопрос, сколько потребуется монет, чтобы правильно определить тип автоматов?',
            answers: {
                A: '1',
                B: '2',
                C: '3',
                D: '4',
            },
            score: 1000,
            right: 'A'
        }, {
            question: 'Полторы белки за полторы минуты съедают полтора орешка, сколько орехов съедят 9 белок за 9 минут',
            answers: {
                A: '1,5 ореха',
                B: '9 орехов',
                C: '36 орехов',
                D: '54 ореха',
            },
            score: 1000,
            right: 'D'
        }
    ],
    rewards: [
        {
            name:'Самолет',
            price: 1000000
        }, {
            name:'Смартфон',
            price: 20000
        },{
            name:'Красивый лесной чехол',
            price: 1500
        },{
            name:'Автомобиль',
            price: 50000
        },{
            name:'Красивый обычный пластиковый чехол',
            price: 1500
        },{
            name:'Шоколадка',
            price: 1000
        },{
            name:'Автомобильный держатель для смартфона',
            price: 5000
        },{
            name:'Квартира',
            price: 100000
        },
    ]

};

export default test;
