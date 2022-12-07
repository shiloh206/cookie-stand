'use strict'

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let storeSection = document.getElementById('stores');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  },
  cookiesSoldPerHour: function (){
    for( let i = 0; i < hours.length; i++){
      let sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);

    }
    
  },
  render: function () {
    this.cookiesSoldPerHour();
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.textContent = `${this.name}`;
    storeSection.appendChild(h2);

    storeSection.appendChild(ul);


    for( let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ul.appendChild(li);

    } 
    let li = document.createElement('li');
    li.textContent = `Total: ${this.total} cookies`;
    ul.appendChild(li);
    

  }

};
seattle.render();


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  total: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  },
  cookiesSoldPerHour: function (){
    for( let i = 0; i < hours.length; i++){
      let sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);

    }
    
  },
  render: function () {
    this.cookiesSoldPerHour();
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.textContent = `${this.name}`;
    storeSection.appendChild(h2);

    storeSection.appendChild(ul);


    for( let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ul.appendChild(li);

    } 
    let li = document.createElement('li');
    li.textContent = `Total: ${this.total} cookies`;
    ul.appendChild(li);
    

  }

};
tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  total: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  },
  cookiesSoldPerHour: function (){
    for( let i = 0; i < hours.length; i++){
      let sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);

    }
    
  },
  render: function () {
    this.cookiesSoldPerHour();
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.textContent = `${this.name}`;
    storeSection.appendChild(h2);

    storeSection.appendChild(ul);


    for( let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ul.appendChild(li);

    } 
    let li = document.createElement('li');
    li.textContent = `Total: ${this.total} cookies`;
    ul.appendChild(li);
    

  }

};
dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  total: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  },
  cookiesSoldPerHour: function (){
    for( let i = 0; i < hours.length; i++){
      let sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);

    }
    
  },
  render: function () {
    this.cookiesSoldPerHour();
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.textContent = `${this.name}`;
    storeSection.appendChild(h2);

    storeSection.appendChild(ul);


    for( let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ul.appendChild(li);

    } 
    let li = document.createElement('li');
    li.textContent = `Total: ${this.total} cookies`;
    ul.appendChild(li);
    

  }

};
paris.render();


let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  total: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  },
  cookiesSoldPerHour: function (){
    for( let i = 0; i < hours.length; i++){
      let sales = this.randomCustomers() * this.avgCookieBought;
      this.cookiesBought.push(Math.floor(sales));
      this.total = this.total + Math.floor(sales);

    }
    
  },
  render: function () {
    this.cookiesSoldPerHour();
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.textContent = `${this.name}`;
    storeSection.appendChild(h2);

    storeSection.appendChild(ul);


    for( let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ul.appendChild(li);

    } 
    let li = document.createElement('li');
    li.textContent = `Total: ${this.total} cookies`;
    ul.appendChild(li);
    

  }

};
lima.render();



