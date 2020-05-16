// console.log('We have liftoff!');


// $(() => {


// $('.button').on('click', event => {


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
        console.log(pic1);
        $seePOD = $('<img>')
         .appendTo('.ball')
         .attr({
                   'src': pic1,
                   'width': '300px',
                   'height': '300px'
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
//
//
//
//
//
//


  //Ends DOR
// })
