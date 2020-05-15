console.log('We have liftoff!');


$(() => {


$('#start button').on('click',(event) => {


$.ajax({
  url: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events',
  type: 'GET',
  data: {
    '$limit': 5
  }


})
  .done (
    (data) => {
      let $body = $('body')
      for (let i = 0; i < data.length; i++){
        $seeEvent = $('<h2>')
          .text(data[i].events.title)
          .appendTo($body)
          console.log('test');
      }
    }

  )


  //ends event listener
})








  //Ends DOR
})
