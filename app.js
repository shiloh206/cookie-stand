'use strict'

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,

//   randomCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

//   },
//   cookiesSoldPerHour: function (){
//     for( let i = 0; i < hours.length; i++){
//       let sales = this.randomCustomers() * this.avgCookieBought;
//       this.cookiesBought.push(Math.floor(sales));
//       this.total = this.total + Math.floor(sales);

//     }
    
//   },
//   render: function () {
//     this.cookiesSoldPerHour();
//     let ul = document.createElement('ul');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     storeSection.appendChild(h2);

//     storeSection.appendChild(ul);


//     for( let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ul.appendChild(li);

//     } 
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.total} cookies`;
//     ul.appendChild(li);
    

//   }

// };
// seattle.render();


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   total: 0,

//   randomCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

//   },
//   cookiesSoldPerHour: function (){
//     for( let i = 0; i < hours.length; i++){
//       let sales = this.randomCustomers() * this.avgCookieBought;
//       this.cookiesBought.push(Math.floor(sales));
//       this.total = this.total + Math.floor(sales);

//     }
    
//   },
//   render: function () {
//     this.cookiesSoldPerHour();
//     let ul = document.createElement('ul');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     storeSection.appendChild(h2);

//     storeSection.appendChild(ul);


//     for( let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ul.appendChild(li);

//     } 
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.total} cookies`;
//     ul.appendChild(li);
    

//   }

// };
// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   total: 0,

//   randomCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

//   },
//   cookiesSoldPerHour: function (){
//     for( let i = 0; i < hours.length; i++){
//       let sales = this.randomCustomers() * this.avgCookieBought;
//       this.cookiesBought.push(Math.floor(sales));
//       this.total = this.total + Math.floor(sales);

//     }
    
//   },
//   render: function () {
//     this.cookiesSoldPerHour();
//     let ul = document.createElement('ul');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     storeSection.appendChild(h2);

//     storeSection.appendChild(ul);


//     for( let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ul.appendChild(li);

//     } 
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.total} cookies`;
//     ul.appendChild(li);
    

//   }

// };
// dubai.render();

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   total: 0,

//   randomCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

//   },
//   cookiesSoldPerHour: function (){
//     for( let i = 0; i < hours.length; i++){
//       let sales = this.randomCustomers() * this.avgCookieBought;
//       this.cookiesBought.push(Math.floor(sales));
//       this.total = this.total + Math.floor(sales);

//     }
    
//   },
//   render: function () {
//     this.cookiesSoldPerHour();
//     let ul = document.createElement('ul');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     storeSection.appendChild(h2);

//     storeSection.appendChild(ul);


//     for( let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ul.appendChild(li);

//     } 
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.total} cookies`;
//     ul.appendChild(li);
    

//   }

// };
// paris.render();


// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   total: 0,

//   randomCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

//   },
//   cookiesSoldPerHour: function (){
//     for( let i = 0; i < hours.length; i++){
//       let sales = this.randomCustomers() * this.avgCookieBought;
//       this.cookiesBought.push(Math.floor(sales));
//       this.total = this.total + Math.floor(sales);

//     }
    
//   },
//   render: function () {
//     this.cookiesSoldPerHour();
//     let ul = document.createElement('ul');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     storeSection.appendChild(h2);

//     storeSection.appendChild(ul);


//     for( let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ul.appendChild(li);

//     } 
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.total} cookies`;
//     ul.appendChild(li);
    

//   }

// };
// lima.render();


// ******************* Constuctor **********************

let table = document.getElementById('stores');

function shop(name, minCust, maxCust, avSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avSale;
  this.cookiesBought = [];
  this.total = 0;
}


shop.prototype.randomCustomers  = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

},
shop.prototype.cookiesSoldPerHour = function (){
  for( let i = 0; i < hours.length; i++){
    let sales = this.randomCustomers() * this.avgCookieBought;
    this.cookiesBought.push(Math.floor(sales));
    this.total = this.total + Math.floor(sales);
  }
}


let seattle = new shop('Seattle', 23, 65, 6.3);
let tokyo = new shop('Tokyo', 3, 24, 1.2,);
let dubai = new shop ('Dubai', 11, 38, 3.7,);
let paris = new shop ('Paris', 20, 38, 2.3);
let lima = new shop ('Lima', 2, 16, 4.6);

let storesArr= [seattle, tokyo, dubai, paris, lima];


seattle.cookiesSoldPerHour();
tokyo.cookiesSoldPerHour();
dubai.cookiesSoldPerHour();
paris.cookiesSoldPerHour();
lima.cookiesSoldPerHour();

function header() {
let tr = document.createElement('tr');
table.appendChild(tr);
let th = document.createElement('th');
th.textContent = ' ';
tr.appendChild(th);
for( let i = 0; i < hours.length; i++){
  let th = document.createElement('th');
  th.textContent = `${hours[i]}`;
  tr.appendChild(th);
}
let thTotal = document.createElement('th')
thTotal.textContent = 'Daily Location Total';
tr.appendChild(thTotal);

}

function render (store) {
let tr = document.createElement('tr');
let th = document.createElement('th');
th.textContent = `${store.name}`;
tr.appendChild(th);


for(let i = 0; i < hours.length; i++){
let td = document.createElement('td');
td.textContent = `${store.cookiesBought[i]}`;
tr.appendChild(td);
table.appendChild(tr);
console.log('bvibwo')
}
let tdCookiesSold = document.createElement('td');
tdCookiesSold.textContent = `${store.total}`;
tr.appendChild(tdCookiesSold);

}
for(let i = 0; i < storesArr.length; i++);
let td = document.createElement('td');

function footer(){
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Total'
  table.appendChild(tr);
  tr.appendChild(th);

}



header();
render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);
footer();

