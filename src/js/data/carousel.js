'use strict'

var ret = null
var carousel = new Array();
  
  function getValoresAPI(){
    return fetch('https://randomuser.me/api/?results=10',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then(function(responseData) {
     
      responseData.results.forEach(item => {         
          let resultItem = {
           
            img: item.picture.large,
            caption: item.id.name,
            active : true,
          }
          carousel.push(resultItem)
          
      });
      
      //return JSON.stringify(carousel);
      return carousel;
  })
    .catch(error => console.warn(error));
  }
  
  getValoresAPI().then(carousel => 
    console.log( carousel )
    );
  
  var carousel = [
    {
      img: "/assets/img/carousel-1.jpg",
      caption: "carousel"
    }
  ]
 
 
 
export default carousel

