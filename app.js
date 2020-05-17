// console.log('We have liftoff!');


//After my syntax didn't work over and over, I followed NASA's how to guide on using thier APOD API and came up with the following



  let link = 'https://api.nasa.gov/planetary/apod'
  let apiKey = 'u30450EZhSB5gNYDejP5YVoukIFOMmSExXtvCNbC'

  let request = new XMLHttpRequest();

			request.open('GET', link + '?api_key=' + apiKey, true);

      request.addEventListener('load',function(){

      if(request.status >= 200 && request.status < 400){

      let response = JSON.parse(request.responseText);
        // console.log(response);
        //This part I figured out using jquery documentation on creating an img element
      let pic1 = response.hdurl;
        // console.log(pic1);
        $seePOD = $('<img>')
         .appendTo('.ball')
         .attr({
                   'src': pic1,
                   "id": 'portal'
                   // 'width': '300px',
                   // 'height': 'auto'
               })
               // console.log($seePOD);
        }
        else {
             console.log("Error in network request: " + request.statusText);
        }});

        request.send(null);


//   url: link,
//   type: 'GET',
//   // data: {
//   //   '$limit': 1
//   // }
//
// })
//
//   .then ((image) => {
//       // console.log(image);
//
//
//       for (let i = 0; i < image.length; i++){
//         // console.log(event);
//         $seePic = $('<img>'.hd)
//           // .text(data[i].hd)
//           .addClass('boom')
//           .appendTo($body)
//           console.log($seePic);
//         }
//       }
//   )
//
//
//   //ends event listener
// })


// const randomNumGenerator(predictions) {
//   return Math.floor(Math.random() * predictions.length)
// }

//Starts DOR
$(() => {



  let predictions = [
    'the young lion will overcome the older one', 'two wounds made one, then he dies a cruel death', 'on the field of combat in a single battle', 'the ancient lady will fall from her high place', 'burnt through lightening of twenty threes the six', 'chants and demands', 'these will in the future by headless idiots', 'be received as divine prayers', 'this is when the moon completes her great cycle', 'his fame will increase towards the realm of the east'
  ];

let modal = $('#simpleModal');
let modalBtn = $('#quoteBtn');
let closeBtn = $('.closeBtn');



modalBtn.on('click', (event) => {
  // randomGenerator() {
  //   return Math.floor(Math.random() * predictions.length)
  // };
  // generatePrediction() {
  //   console.log(`Nostra-DOM-us says ${this.predictions[this.randomNumGenerator(this.predictions)]} + ${this.predictions[this.randomNumGenerator(this.predictions)]} + ${this.predictions[this.randomNumGenerator(this.predictions)]}`);
  // }
   $('.modal').css('display','block')
   $oracle = $('<p>')
    .text()

});

closeBtn.on('click', (event) => {
    // console.log('test');
  modal.css('display','none')

});

$('#quoteBtn').on('click', () => {

  // randomGenerator() {
  //   return Math.floor(Math.random() * predictions.length)
  // };

  // generatePrediction() {
  //   console.log(`Nostra-DOM-us says ${this.predictions[this.randomNumGenerator(this.predictions)]} + ${this.predictions[this.randomNumGenerator(this.predictions)]} + ${this.predictions[this.randomNumGenerator(this.predictions)]}`);
  // }
})





//




// const randomNumGenerator(predictions) {
//   return Math.floor(Math.random() * predictions.length)
// }
//








//Ends DOR
})
