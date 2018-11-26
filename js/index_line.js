/*
 * Demo of https://github.com/isuttell/sine-waves
 */

var waves = new SineWaves({
  el: document.getElementById('waves'),
  speed: 4,
  width: function() {
    return $(window).width();
  },
  height: function() {
    return $(window).height();
  },
  ease: 'SineInOut',
  wavesWidth: '120%',
  waves: [
    {
      timeModifier: 0.75,
      lineWidth: 1,
      amplitude: -125,
      wavelength: 125
    },
    {
      timeModifier: 0.75,
      lineWidth: 2,
      amplitude: -75,
      wavelength: 75
    },
    {
      timeModifier: 0.75,
      lineWidth: 1,
      amplitude: -200,
      wavelength: 200
    },
    {
      timeModifier: 0.75,
      lineWidth: 2,
      amplitude: -100,
      wavelength: 100
    },
    {
      timeModifier: 0.75,
      lineWidth: 1,
      amplitude: -150,
      wavelength: 150
    },
    {
      timeModifier: 0.75,
      lineWidth: 2,
      amplitude: -175,
      wavelength: 175
    },
    {
      timeModifier: 0.75,
      lineWidth: 1,
      amplitude: -225,
      wavelength: 225
    },
    {
      timeModifier: 0.75,
      lineWidth: 2,
      amplitude: -250,
      wavelength: 250
    }
    

  ],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(0,170,193,1)");
    gradient.addColorStop(1,"rgba(151,58,154,1)");
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});