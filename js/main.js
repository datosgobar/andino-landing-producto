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
        .addIndicators({
          name: 'fade in',
        })
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
}) // document ready ends
