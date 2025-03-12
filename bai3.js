let arr=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
 if(arr.length==1){
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