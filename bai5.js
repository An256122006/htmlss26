let arr = [];
for (let i = 0; i < 10; i++) {
    let num = prompt(`Nhập số thứ ${i + 1}: `);
    if (!isNaN(num) && num.trim() !== "") {
        arr.push(parseInt(num));
    }
}
if (arr.length === 0) {
    console.log("Mảng rỗng!");
}else if(!Array.isArray(arr)){
    console.log("du lieu khong hop le");
}else{
    let max=Math.max(...arr);
    let index = arr.indexOf(max);
    console.log(`max=${max} index=${index}`);
}