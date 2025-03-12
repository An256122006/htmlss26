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
    let newarr=arr
    .map(a => {
        return a**2;
    })
    .filter(a =>a%2!==0 );
    console.log(newarr);
}