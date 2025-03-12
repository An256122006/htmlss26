function isprime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let arr = [];
let n = +prompt("Nhập số lượng phần tử");
for (let i = 0; i < n; i++) {
    let num = +prompt(Nhập phần tử thứ ${i + 1});
    arr.push(num);
}
if (arr.length === 0) {
    console.log("Mảng không có phần tử nào.");
  }
let primenumbers = arr.filter(isprime);
console.log('so nguyen la',primenumbers);