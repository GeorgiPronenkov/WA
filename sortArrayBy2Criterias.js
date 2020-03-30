function sortBy2Criteria(arr) {
    arr.sort((a, b) => {
        return a.length - b.length ||
               a.localeCompare(b); //първо по дължина, после азбучно
    }).forEach(x => console.log(x));
}

sortBy2Criteria(
    ['Isacc',
     'Theodor',
     'Jack',
     'john',
     'Harrison',
     'George',
     'Smith'
    ]
);
