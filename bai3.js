let arr=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
 if(Array.isArray(arr)==false){
    console.log("mang khong hop le");
}
if(arr.length>0){
    let arr2=arr.filter(function(a,b){
        return arr[b].includes("@") && !arr[b].includes(" ");
   });
   document.write(arr2);
}else{
    document.write("mang rong");
}