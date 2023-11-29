
const freeLancers = ["Alice", "Bob", "Carol", "Eva", "john"]
const Occupation = ["Writer", "Teacher", "singer", "Dancer", "programmer"];
const startingPrice = [50, 70, 150, 100, 60];

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
getAvg([50,70]);

const average = document.getElementById("average-info");

const randomFreeLancer = [{name:"kessy", occupation:"dancer", startingPrice: 60},{name:"jelly", occupation:"nurse", startingPrice:100}, {name:"Joey", occupation:"doctor", startingPrice:150}];
for(let i = 0; i < randomFreeLancer.length; i++){
    const row = freeLancer.insertRow(1);
    const cell = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    cell1.innerHTML = randomFreeLancer[i].occupation;
    cell.innerHTML = randomFreeLancer [i].name;
    cell2.innerHTML = randomFreeLancer [i].startingPrice;
   
}
getAvg([150,50]);

function renderFreeLancer(){
    const freeLancerList = document.getElementById("freeLancerList")
    freeLancerList.innerHTML = '';
    freeLancers.forEach(freeLancers =>{
        const listItems = document.createElement('li')
        listItems.className = 'freeLancer';
        listItems.innerHTML = 
        `<div>
                <strong>${freeLancers.name}</strong><br>
                Occupation: ${freeLancers.occupation}<br>
                Starting Price: $${freeLancers.startingPrice}
            </div>`;
            freeLancerList.appendChild(listItems)
    });
}
renderFreeLancer();
setInterval (getAvg,5000);

setTimeout(function() {
    clearInterval(intervalId);
}, 30000); 