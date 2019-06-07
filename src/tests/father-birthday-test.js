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
        }
    ],
    rewards: [
        {
            name:'Смартфон',
            price: 540
        },{
            name:'Красивый лесной чехол',
            price: 110
        },{
            name:'Красивый обычный пластиковый чехол',
            price: 110
        },
    ]

};

export default test;
