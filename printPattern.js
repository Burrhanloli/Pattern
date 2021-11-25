function print(num) {
    var maxPatternNum = (num * 2) - 2;
    var pattern = "-";
    for (let i = 0; i < num; i++) {

        printPattern(maxPatternNum, pattern);
        var value = num;
        var loop = (i * 2) + 1;
        var mid = Math.floor(loop / 2);
        for (let k = 0; k < loop; k++) {
            process.stdout.write(value.toString());
            if (k < mid) {
                value -= 1
            } else {
                value += 1
            }
            if (k !== loop - 1) {
                process.stdout.write(pattern);
            }
        }
        printPattern(maxPatternNum, pattern);
        maxPatternNum = maxPatternNum - 2;
        console.log('');
    }
    maxPatternNum = maxPatternNum + 2;
    for (let i = num - 1; i > 0; i--) {
        maxPatternNum = maxPatternNum + 2;
        printPattern(maxPatternNum, pattern);
        var value = num;
        var loop = (i * 2) - 1;
        var mid = Math.floor(loop / 2);
        for (let k = 0; k < loop; k++) {
            process.stdout.write(value.toString());
            if (k < mid) {
                value -= 1
            } else {
                value += 1
            }
            if (k !== loop - 1) {
                process.stdout.write(pattern);
            }
        }
        printPattern(maxPatternNum, pattern);
        console.log('');
    }
}

function printPattern(maxPatternNum, pattern) {
    for (let j = 1; j <= maxPatternNum; j++) {
        process.stdout.write(pattern);
    }
}

print(3);
print(5);
print(7);
print(6);