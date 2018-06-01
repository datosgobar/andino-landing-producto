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
      triggerHook: 0.9,
    })
      .setClassToggle(this, 'fade-in') // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .addTo(controller)
  })

  // // button's section implementation
  // let triggerElements = ['#sec0', '#sec1', '#sec2', '#sec3', '#sec4', '#sec5']
  // let buttons = [
  //   '#button-cero',
  //   '#button-one',
  //   '#button-two',
  //   '#button-three',
  //   '#button-four',
  //   '#button-five',
  // ]
  // let durations = ['100%', '400%', '100%', '100%', '100%', '100%']

  // for (let i = 0; i < triggerElements.length; i++) {
  //   new ScrollMagic.Scene({
  //     triggerElement: triggerElements[i],
  //     duration: durations[i],
  //   })
  //     .setClassToggle(buttons[i], 'active') // add class 'active' to button-one
  //     // .addIndicators({
  //     //   name: triggerElements[i],
  //     // })
  //     .addTo(controller)
  // }

  // NEW SCROLL

  $('.main-container').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec0',
      duration: '100%',
    })
      .setClassToggle('#button-cero', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec1').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec1',
      duration: 3600,
    })
      .setClassToggle('#button-one', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec2').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec2',
      duration: 900,
    })
      .setClassToggle('#button-two', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec3').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec3',
      duration: 900,
    })
      .setClassToggle('#button-three', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec4').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec4',
      duration: 1550,
    })
      .setClassToggle('#button-four', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec5').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec5',
      duration: 900,
    })
      .setClassToggle('#button-five', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })
  // NEW SCROLL

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
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('quickandeasy')
        var autoplay = true
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: false,
          autoplay: autoplay,
          path:
            'https://gist.githubusercontent.com/capitantoto/f60541813fe76b09ad9f61a2d111bb24/raw/99754d0d52df5de1f0b5ccfe455530f64153179a/quickandeasy.json',
        })
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
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('prototype')
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: false,
          autoplay: true,
          path:
            'https://gist.githubusercontent.com/sebasbarraud/d77d0ffbf6a5e476863330aa190d38a9/raw/292811fc49ab651396ff46c5478bef2484da4e41/prototype.json',
        })
      })
      .addTo(controller)
  })

  $('.listen-animation-two-mobile').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      reverse: false,
      triggerHook: 0.8,
    })

      .setClassToggle(this, 'start-animation') // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('prototype')
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: false,
          autoplay: true,
          path:
            'https://gist.githubusercontent.com/sebasbarraud/d77d0ffbf6a5e476863330aa190d38a9/raw/292811fc49ab651396ff46c5478bef2484da4e41/prototype.json',
        })
      })
      .addTo(controller)
  })
  // TERCER ANIMACIÓN
  $('.listen-animation-three').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      reverse: false,
      triggerHook: 0.8,
    })

      // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('paraque')
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: true,
          autoplay: true,
          path:
            'https://gist.githubusercontent.com/sebasbarraud/5e7bccb8618635d4376f91d0f5e3b470/raw/696723c54ad2d2fdbd11753177bae947a2cb1eae/paraque.json',
        })
      })
      .addTo(controller)
  })

  // CUARTA ANIMACION
  $('.listen-animation-four').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      reverse: false,
      triggerHook: 0.8,
    })

      .setClassToggle(this, 'start-animation') // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('pais')
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: false,
          autoplay: true,
          path:
            'https://gist.githubusercontent.com/sebasbarraud/61822a1017fea082a5b6f9a6956cab86/raw/8b36620dd0384499a5afd4b1c1c2fd404341080e/pais.json',
        })
      })
      .addTo(controller)
  })

  // Animación computadora
  $('.compuanimation').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      reverse: false,
      triggerHook: 0.8,
    })

      .setClassToggle(this, 'start-animation') // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .on('start', function() {
        var svgContainer = document.getElementById('compu')
        var animItem = lottie.loadAnimation({
          wrapper: svgContainer,
          animType: 'svg',
          loop: false,
          autoplay: true,
          path:
            'https://gist.githubusercontent.com/sebasbarraud/e3f40e2f19871489e746d7fee3dd75eb/raw/4caa49798dc142686bf3ee703da672a51b82516e/compu.json',
        })
      })
      .addTo(controller)
  })
})

// document ready ends
