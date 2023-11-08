
function bubblesort(number) {
    let numbers = String(number).split('').map((num)=>{return Number(num)})
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i; j++) {
            if (numbers[j + 1] > numbers[j]) {
                let temp = numbers[j + 1]
                numbers[j + 1] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return Number(numbers.join(''));
}
console.log(bubblesort(45138))