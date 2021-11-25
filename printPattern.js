
const pattern = "-";
const print = (num) => {
    var maxPatternNum = (num * 2) - 2;
    const patternStringArr = []
    for (let i = 0; i < num; i++) {
        var value = num;
        var loop = (i * 2) + 1;
        var mid = Math.floor(loop / 2);
        let row = ''
        for (let k = 0; k < loop; k++) {
            row = row.concat(value);
            if (k < mid) {
                value -= 1
            } else {
                value += 1
            }
            if (k !== loop - 1) {
                row = row.concat(pattern);
            }
        }
        const finalValue = `${addPattern(maxPatternNum)}${row}${addPattern(maxPatternNum)}`
        console.log(finalValue);
        patternStringArr.push(finalValue)
        maxPatternNum = maxPatternNum - 2;
    }
    const revPatternStringArr = patternStringArr.reverse();
    revPatternStringArr.shift();
    revPatternStringArr.forEach(element => console.log(element));
}

function addPattern(maxPatternNum) {
    let patternString = ''
    for (let j = 0; j < maxPatternNum; j++) {
        patternString = patternString.concat(pattern);
    }
    return patternString;
}

print(3);
print(5);
print(7);
print(6);
print(9);