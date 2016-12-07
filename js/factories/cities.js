angular.module('starter')
  .factory('cityFactory', function(){ 
    var cities = [
      {name:'Bariloche', country:'Argentina'}, 
      {name:'Puerto Madryn', country:'Argentina'}, 
      {name:'Paris', country:'Francia'}, 
      {name:'Londres', country:'Reino Unido'}];
    
    return {
      getAll : function () {
        return cities;
      },
      add : function (city) {
        cities.push(city);
      }
    };
  });  