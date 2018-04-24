$(document).ready(function() {
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller()

  // loop through each .listen element
  $('.listen').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      //   reverse: false,
      triggerHook: 0.8,
    })
      .setClassToggle(this, 'fade-in') // add class 'fade-in' to elements with class 'listen'
        // .addIndicators({
        //   name: 'fade in',
        // })
      .addTo(controller)
  })

  // button's section implementation
  let triggerElements = ['#sec0', '#sec1', '#sec2', '#sec3', '#sec4', '#sec5']
  let buttons = [
    '#button-cero',
    '#button-one',
    '#button-two',
    '#button-three',
    '#button-four',
    '#button-five',
  ]
  let durations = ['100%', '400%', '100%', '100%', '100%', '100%']

  for (let i = 0; i < triggerElements.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: triggerElements[i],
      duration: durations[i],
    })
      .setClassToggle(buttons[i], 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: triggerElements[i],
      // })
      .addTo(controller)
  }

  // loop through each .listen element
  // PRIMERA ANIMACION
  $('.listen-animation').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
        reverse: false,
      triggerHook: 0.8,
    })

      .setClassToggle(this, 'start-animation') // add class 'fade-in' to elements with class 'listen'
        .addIndicators({
          name: 'fade in',
        })
      .on('start', function () {
          var svgContainer = document.getElementById('quickandeasy');
          var autoplay = true
          var animItem = lottie.loadAnimation({
              wrapper: svgContainer,
              animType: 'svg',
              loop: false,
              autoplay: autoplay,
              path: 'https://gist.githubusercontent.com/capitantoto/f60541813fe76b09ad9f61a2d111bb24/raw/99754d0d52df5de1f0b5ccfe455530f64153179a/quickandeasy.json'
          });
      })
      .addTo(controller)
  })
  // SEGUNDA ANIMACION
  $('.listen-animation-two').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
        reverse: false,
      triggerHook: 0.8,
    })

      .setClassToggle(this, 'start-animation') // add class 'fade-in' to elements with class 'listen'
        .addIndicators({
          name: 'fade in',
        })
      .on('start', function () {
        var svgContainer = document.getElementById('prototype'); var animItem = lottie.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            loop: false,
            autoplay: true,
            path: 'https://gist.githubusercontent.com/sebasbarraud/d77d0ffbf6a5e476863330aa190d38a9/raw/a012d956f42689612211f7a7e983bd8c027d5cd5/prototype.json'
        });
        setTimeout(() => {
          lottie.pause()
        }, 3900)
      })
      .addTo(controller)
  })




}) // document ready ends
