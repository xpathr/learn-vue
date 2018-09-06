var exercise = new Vue({
  el: '#exercise',
  data: {
    c1 : {
      HSL : [40, 80, 80],
      RGB : [246, 186, 145],
      HEX : '#f6ba91',
      A : 0.8
    }
  },
  methods: {
    debug: function(c) {
      console.log('HSLuv: [' + this[c].HSL[0] + ', ' + this[c].HSL[1] + ', ' + this[c].HSL[2] + ', ' + this[c].A + '].');
      console.log('RGB: [' + this[c].RGB[0] + ', ' + this[c].RGB[1] + ', ' + this[c].RGB[2] + ', ' + this[c].A + '].');
      console.log('HEX: [' + this[c].HEX + ', ' + this[c].A + '].');
    },
    translateHSL: function(c) {
      var rgb = window.hsluv.hsluvToRgb(this[c].HSL);

      this[c].RGB = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
      this[c].HEX = window.hsluv.hsluvToHex(this[c].HSL);

      this.debug(c);
    },
    translateRGB: function(c) {
      var hsluv = window.hsluv.rgbToHsluv([this[c].RGB[0]/255, this[c].RGB[1]/255, this[c].RGB[2]/255]);

      this[c].HSL = [Math.round(hsluv[0]), Math.round(hsluv[1]), Math.round(hsluv[2])];
      this[c].HEX = window.hsluv.hsluvToHex(this[c].HSL);

      this.debug(c);
    },
    translateHEX: function(c) {
      this[c].RGB = hexToRgb(this[c].HEX);
      var hsluv = window.hsluv.rgbToHsluv([this[c].RGB[0]/255, this[c].RGB[1]/255, this[c].RGB[2]/255]);

      this[c].HSL = [Math.round(hsluv[0]), Math.round(hsluv[1]), Math.round(hsluv[2])];
      this.debug(c);
    },
    paint: function(c, a) {
      if (a == 'alpha') {
        return {
          'background-color' : this[c].HEX
        }
      } else {
        return {
          'background-color' : 'rgba(' + this[c].RGB[0] + ',' + this[c].RGB[1] + ',' + this[c].RGB[2] + ',' + this[c].A + ')'
        }
      }
    },
  }
});

function hexToRgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}
