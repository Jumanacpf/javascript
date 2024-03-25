function fetchuserpost(userdeta){
    return new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            let userdata={id:1,name:"abbc"}
            resolve(userdata)
        }, 3000);
    })
}
function userpost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data={ name:"abc"}
            resolve(data);
        }, 3000);
    });
   
}


let p=userpost()
p.then((result) => {
    console.log(result);
    return fetchuserpost(result);
})
.then((result) => {
    console.log(result);
    return result;
});

// let userdata = async() =>{

//     let respose = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data  = respose.json()
//     console.log(data);
// }
// userdata()
