let arr=[10,20,30,1,2,3,4,5,6,7];
for(let i=0;i<arr.length;i++){
 if(Number.isInteger(arr[i])==false){
    console.log("mang khong hop le");
}
}
if(arr.length>0){
    let arr2=arr.filter(function(a,b){
        return a>=10;
   });
   document.write(arr2);
}else{
    document.write("mang rong");
}