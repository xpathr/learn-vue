var exercise = new Vue({
  el: '#exercise',
  data: {
    cHSLuv1 : [0, 0, 0],
    cRGB1 : [0, 0, 0],
    cHEX1 : '#000000'
  },
  methods: {
    debug: function() {
      console.log('HSLuv: [' + this.cHSLuv1[0] + ', ' + this.cHSLuv1[1] + ', ' + this.cHSLuv1[2] + '].');
      console.log('RGB: [' + this.cRGB1[0] + ', ' + this.cRGB1[1] + ', ' + this.cRGB1[2] + '].');
      console.log('HEX: [' + this.cHEX1 + '].');
    },
    translateHSL: function() {
      var rgb = window.hsluv.hsluvToRgb(this.cHSLuv1);

      this.cRGB1 = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
      this.cHEX1 = window.hsluv.hsluvToHex(this.cHSLuv1);

      this.debug();
    },
    translateRGB: function() {
      var hsluv = window.hsluv.rgbToHsluv([this.cRGB1[0]/255, this.cRGB1[1]/255, this.cRGB1[2]/255]);

      this.cHSLuv1 = [Math.round(hsluv[0]), Math.round(hsluv[1]), Math.round(hsluv[2])];
      this.cHEX1 = window.hsluv.hsluvToHex(this.cHSLuv1);

      this.debug();
    },
    translateHEX: function() {
      this.cRGB1 = hexToRgb(this.cHEX1);
      var hsluv = window.hsluv.rgbToHsluv([this.cRGB1[0]/255, this.cRGB1[1]/255, this.cRGB1[2]/255]);

      this.cHSLuv1 = [Math.round(hsluv[0]), Math.round(hsluv[1]), Math.round(hsluv[2])];
      this.debug();
    },

  }
  /*watch: {
    cH1: function() {
      console.log(this.cHSLuv1[0]);
      return;
    }
  }*/
});

function hexToRgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}
