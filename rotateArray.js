function rotateArray(arr) {
    let rotations = +arr.pop(); //броя ротации

    for (let i = 0; i < rotations % arr.length; i++) { //rotations % arr.length -само колкото ротации са нужни
        let lastElement = arr.pop(); //премахва последния
        arr.unshift(lastElement);   // слага последния най-отпред
    }
    console.log(arr.join(" "));
}

rotateArray(
    ['Banana',
     'Orange',
     'Coconut',
     'Apple',
     '15'
    ]
);
