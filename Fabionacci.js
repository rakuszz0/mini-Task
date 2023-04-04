const nearestFibo = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0)

    console.log("SUM", sum)

    console.log("Hasil", findFibo(sum))
}

const findFibo = (num) => {
    let first = 0, second = 1, third = first + second

    while (third <= num) {
        first = second
        second = third
        third = first + second
    }

    console.log("Fibonacci", third)

    let ans = (Math.abs(third - num) >= Math.abs(second - num)) ? num - second : third - num

    return ans
}

nearestFibo([33, 23, 19])