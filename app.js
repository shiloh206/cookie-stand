'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
// ******************* Constuctor **********************

let table = document.getElementById('stores');

//================================================================================

function Shop(name, minCustomer, maxCustomer, avSale, total, hrSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieBought = avSale;
  this.cookiesBought = [];
  this.total = 0;
  this.hrSale = [];
  allStores.push(this);
}

//================================================================================

Shop.prototype.randomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

},

  //================================================================================

  Shop.prototype.cookiesSoldPerHour = function () {
    var obj = {}

    for (let i = 0; i < hours.length; i++) {
      var sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);
      this.hrSale.push(this.cookiesBought[i])

    }
    return this.cookiesBought
  }



//================================================================================

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2,);
let dubai = new Shop('Dubai', 11, 38, 3.7,);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

let storesArr = [seattle, tokyo, dubai, paris, lima];


//================================================================================
console.log("59", hours)

// var obj = {}
// for(let i = 0; i < storesArr[0].cookiesBought.length; i++) {
//   obj[storesArr[i]] = hours[i]

//   console.log("stores", storesArr[i].cookiesBought)
// }

// console.log(obj)

// console.log(this.cookiesBought)
// hours.forEach((key, i) => obj[key] = this.cookiesBought[i])
// console.log(obj)

//================================================================================

// var newParamArr = [1, 2, 3, 4, 5];
// var paramVal = ["one", "two", "three", "four", "five"];

// //create an empty object to ensure it's the right type.
// var obj = {};

// //loop through the arrays using the first one's length since they're the same length
// for(var i = 0; i < newParamArr.length; i++)
// {
//     //set the keys and values
//     //avoid dot notation for the key in this case
//     //use square brackets to set the key to the value of the array element
//     obj[newParamArr[i]] = paramVal[i];
// }

// console.log(obj);

console.log(seattle)
//================================================================================

seattle.cookiesSoldPerHour();
tokyo.cookiesSoldPerHour();
dubai.cookiesSoldPerHour();
paris.cookiesSoldPerHour();
lima.cookiesSoldPerHour();



//================================================================================

function header() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = ' ';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = `${hours[i]}`;
    tr.appendChild(th);
  }
  th = document.createElement('th')
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  table.appendChild(tr);
}

//================================================================================

function render(store) {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = `${store.name}`;
  tr.appendChild(th);


  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${store.cookiesBought[i]}`;
    tr.appendChild(td);
    table.appendChild(tr);
    // console.log('bvibwo')
  }
  let tdCookiesSold = document.createElement('td');
  tdCookiesSold.textContent = `${store.total}`;
  tr.appendChild(tdCookiesSold);

}

// ********************************************************
function footer() {
  /// creates the total name
  let row = document.createElement('tr');

  let final = document.createElement('th');
  final.textContent = ('TOTAL');
  row.appendChild(final);

  // //creates the total sale of cookies for every hour
  for (let j = 0; j < hours.length; j++) {
    let sum = 0;
    for (let i = 0; i < allStores.length; i++) {
      sum = sum + allStores[i].cookiesBought[j];
    }

    let total = document.createElement('th');
    total.textContent = sum;
    row.appendChild(total);
  }
  // creates the daily totals.

  let add = 0;
  for (let i = 0; i < allStores.length; i++) {
    add = add + allStores[i].total;
  }
  let all = document.createElement('th');
  all.textContent = add;
  row.appendChild(all);

  table.appendChild(row);
}
// ********************************************************

header();
render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);
footer();

