 const colck = document.querySelector('clock')


// setInterval( function(){
//   let date = new Date();
//   //console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// } , 1000);
 setInterval(function(){
  let date = new Date();
  
  clock.innerHTML = date.toLocaleTimeString();

 } ,100);