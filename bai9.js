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
    let sum1=arr.filter(function(a){
        return a%2==0;
    }).reduce(function(a,b){
       return a+b;
    },0)
    console.log(sum1);
    let sum2=arr.filter(function(a){
        return a%2!==0;
    }).reduce(function(a,b){
       return a+b;
    },0)
    console.log(sum2);
}