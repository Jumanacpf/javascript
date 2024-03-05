products=[{pid:100,pname:'apple',band:'5g',price:120000,display:'led'},
{pid:102,pname:'samsang',band:'5g',price:45000,display:'led'},
{pid:103,pname:'lackberry',band:'4g',price:50000,display:'led'},
{pid:104,pname:'nokia',band:'3g',price:1200,display:'lcd'},
{pid:105,pname:'motorola',band:'4g',price:10000,display:'lcd'}]


const pnames = products.map((a) => a.pname);
pnames.forEach((p) => console.log(p));

const display= products.filter(a=>a.display=='lcd');
display.forEach((item)=>console.log(item.pname))

products.filter((a)=>a.band=='5g').forEach((item)=>console.log(item.pname))

products.sort((a,b)=>b.price-a.price).forEach((a)=>console.log(a.pname))

const costly = products.reduce((a, b) => a.price > b.price ? a : b);
console.log(costly.pname);

const lowcost = products.reduce((a, b) => a.price < b.price ? a : b);
console.log(lowcost.pname);

