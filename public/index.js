'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


//Exercice 1


function calculateDays (pickupDate,returnDate){
	var returnDate = new Date (returnDate);
	var pickupDate = new Date (pickupDate);
	return (((returnDate - pickupDate))/(1000*60*60*24)+1);
}

function getRentalById(rentals, id)
{
  for (var i = 0; i < rentals.length; i++) {
    if (id == rentals[i].id) {
        return rentals[i];
    }
  }
}

function getCarById(cars, id)
{
  for (var i = 0; i<cars.length; i++) {
    if (id == cars[i].id) {
        return cars[i];
    }
  }
}

function getActorByIdRental(actors, idRental)
{
  for (var i = 0; i < actors.length; i++) {
    if (idRental == actors[i].rentalId) {
        return actors[i];
    }
  }
}

function priceCarsDayById(listCar, id, pickupDate, returnDate)  
{
    for (var i = 0 ; i < listCar.length; i++){
      if(id == listCar[i].id){
          return listCar[i].pricePerDay;
      }
    }
}

function priceCarsKmById(listCar, id)
{
    for (var i = 0 ; i < listCar.length; i++){
      if(id == listCar[i].id){
          return listCar[i].pricePerKm;
      }
    }
}


function getNbKmbyId(listRental, id)
{
  for (var i = 0; i < listRental.length; i++) {
    if(id == listRental[i].id)
    {
      return listRental[i].distance
    }
  }
}

function time(listRental, listCar)
 {
   var time = [];
  for (var i = 0; i < listCar.length; i++) {

      time[i] = getCarById(listCar, listCar[i].id).pricePerDay  * calculateDays(listRental[i].pickupDate, listRental[i].returnDate)
  }
  return time;
}

function distance(listRental, listCar)
{
  var distance = [];
 for (var i = 0; i < listRental.length; i++) {
     distance[i] = getCarById(listCar, listRental[i].carId).pricePerKm * listRental[i].distance
     listRental[i].distance = distance[i]
 }
 return distance;
}

function realPrice(listRental, listCar)
{
	for (var i = 0; i < listRental.length; i++)
	{
		listRental[i].price = distance(rentals,cars)[i] + time(rentals,cars)[i]
	}
}



//Exercice 2

function priceDiscount(listRental,listCars)
{
    for(var i =0; i<listRental.length; i++)
    {
        var days = calculateDays(listRental[i].pickupDate,listRental[i].returnDate)

        if(1<days<5)
        {
            listRental[i].price == listRental[i].price*0.1
        }
        else if(days<11)
        {
            listRental[i].price == listRental[i].price*0.3
        }
        else
        {
            listRental[i].price == listRental[i].price*0.5
        }
    }
}


//Exercice 3

function commission (listCars, listRental)
{
	var total 
	var insuranceMoney
	var roadsideAssistanceMoney
	var drivyMoney
	
	for(var i=0; i < rentals.length; i++)
	{
		total = listRental[i].price*0.3
		
		listRental[i].insuranceMoney = total/2
		
		listRental[i].roadsideAssistanceMoney = calculateDays(listRental[i].pickupDate,listRental[i].returnDate)

	    listRental[i].drivyMoney = total - listRental[i].insuranceMoney - listRental[i].roadsideAssistanceMoney
	}
}


//Exercice 4 

function deductible(rentals)
{
	var days = calculateDays(rentals[i].pickupDate, rentals[i].returnDate)
    for (var i = 0; i < rentals.length; i++) {
    if(rentals[i].options.deductibleReduction == true)
    {
      rentals[i].price = rentals[i].price + (4*nbDays)
    }
  }
}

//Exercice 5 



console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

