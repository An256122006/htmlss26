let arr=["apple", "banana", "cat", "elephant", "dog"];
if(arr.length==1){
    console.log("mang khong hop le");
}
if(arr.length>0){
    let arr2=arr.filter(function(a,b){
        return arr[b].length>5;
   });
   document.write(arr2);
}else{
    document.write("mang rong");
}