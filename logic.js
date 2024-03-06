a=[2,7,11,15,19]
let target=26
for (let i=0;i<a.length;i++){
    for (let j=i+1;j<a.length;j++){
        p=a[i]+a[j]
        if(target==p){
            console.log(i,j);
        
        }
    }
}