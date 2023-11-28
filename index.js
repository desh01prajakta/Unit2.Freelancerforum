
const freeLancers = ["Alice", "Bob", "Carol", "Eva"]
const Occupation = ["Writer", "Teacher", "singer", "Dancer", "programmer"];
const startingPrice = [50, 70];

function getAvg(startingPrice){
let sum = 0;
for(let i = 0; i < startingPrice.length; i++){
    sum += startingPrice[i];
} 
return sum/startingPrice.length
}
console.log(getAvg(startingPrice))

const freeLancer = document.getElementById ("freeLancer")

const initialFreeLancer = [{name: "Carol", occupation: "Programmer", startingPrice: 50},{name:"Eva", occupation:"singer",startingPrice:70}];
for(let i = 0; i < initialFreeLancer.length; i++){

const row = freeLancer.insertRow(1);
const cell = row.insertCell(0);
const cell1 = row.insertCell(1);
const cell2 = row.insertCell(2);
cell1.innerHTML = initialFreeLancer[i].occupation;
cell.innerHTML = initialFreeLancer [i].name;
cell2.innerHTML = initialFreeLancer [i].startingPrice;
}
getAvg([50,70])
