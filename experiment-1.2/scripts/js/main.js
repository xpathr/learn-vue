var exercise = new Vue({
  el: '#exercise',
  data: {
    c1 : {
      HSL : [40, 80, 80],
      RGB : [],
      HEX : '',
      A : 0.8
    },
    c2 : {
      HSL : [120, 40, 80],
      RGB : [],
      HEX : '',
      A : 0.4
    },
    palette : [],
    interpolations: 8,
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
          'background-color' : c.HEX
        }
      } else {
        return {
          'background-color' : 'rgba(' + c.RGB[0] + ',' + c.RGB[1] + ',' + c.RGB[2] + ',' + c.A + ')'
        }
      }
    },
    interpolate: function(c1, c2) {
      this.palette = [];

      for(var k = 0; k < this.interpolations; k++) {

        var h = lerp(this[c1].HSL[0], this[c2].HSL[0], k / (this.interpolations-1)),
            s = lerp(this[c1].HSL[1], this[c2].HSL[1], k / (this.interpolations-1)),
            l = lerp(this[c1].HSL[2], this[c2].HSL[2], k / (this.interpolations-1)),
            a = lerp(this[c1].A, this[c2].A, k / (this.interpolations-1));

        var hsl = [h, s, l],
            rgb = window.hsluv.hsluvToRgb([h, s, l]),
            hex = window.hsluv.hsluvToHex([h, s, l]);

        hsl = [Math.round(hsl[0]), Math.round(hsl[1]), Math.round(hsl[2])];
        rgb = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
        //a = Math.round(a);

        this.palette.unshift({
          HSL : [hsl[0], hsl[1], hsl[2]],
          RGB : [rgb[0], rgb[1], rgb[2]],
          HEX : hex,
          A : a
        });
      }

      console.log(this.palette.length);
    }
  }
});

exercise.translateHSL('c1');
exercise.translateHSL('c2');
exercise.interpolate('c1', 'c2');

function hexToRgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}

function lerp (start, end, amount){
  return (1 - amount) * start + amount * end;
}
