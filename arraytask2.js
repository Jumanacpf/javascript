// [no,district,+v case,deathrate,curred case,1st dose vaccine,2nd dose vaccine]

covid_data=[
    [1,'ernakulam',34000,2000,23000,20000,2000],
    [2,'idukki',14000,3000,25000,30000,1000],
    [3,'thrissur',24000,4000,33000,24000,2500],
    [4,'pathanamthitta',20000,2000,45000,22000,1500],
    [5,'kozhikode',44000,5000,12000,21000,500],
    [6,'palakkad',12000,1000,20000,23000,3400],
    [7,'kottayam',27000,1500,27000,14000,1000],
    [8,'kollam',14000,2500,25000,18000,2700]
]

const highpositivecase=covid_data.reduce((a,b)=>{
    return a[2]>b[2]?a:b;},covid_data[0]);
console.log("district having highest +ve cases : ",highpositivecase[1]);

const highfirstdose=covid_data.reduce((a,b)=>{
    return a[5]>b[5]?a:b;},covid_data[0]);
console.log("district having highest first dose vaccine : ",highfirstdose[1]);

const highdeathrate=covid_data.reduce((a,b)=>{
    return a[3]<b[3]?a:b;},covid_data[0]);
console.log("district having highest first dose vaccine : ",highdeathrate[1]);

const desc_orderpositivecase=covid_data.slice().sort((a,b)=>b[2]-a[2])
console.log("positive case in descending order : ",desc_orderpositivecase);

const positivecase=covid_data.some(a=>a[2]>15000)
console.log(" is district with +ve cases > 15000",positivecase);

const desc_order1stdose=covid_data.slice().sort((a,b)=>b[5]-a[5])
console.log("1st dose vaccine in descending order : ",desc_order1stdose);

const thrissurdetails=covid_data.find(a=>a[1]==='thrissur')
console.log("thrissur details : ",thrissurdetails);