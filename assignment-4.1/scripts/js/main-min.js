var app=new Vue({el:"#exercise",data:{ex1Classes:{emphasis:!1,deemphasis:!0},ex1Timer:500,ex3Class:"red",ex4Class:"green",ex4isRounded:!0,ex5Styles:{width:"200px",height:"200px","background-color":"red"},ex6Styles:{width:"0","background-color":"orange"},ex6Step:2,ex6Timer:20},methods:{startEffect:function(){var e=this;setInterval(function(){e.ex1Classes.emphasis=!e.ex1Classes.emphasis,e.ex1Classes.deemphasis=!e.ex1Classes.deemphasis},this.ex1Timer)},startProgress:function(){var e=this,s=0;setInterval(function(){s+=e.ex6Step,e.ex6Styles.width=s+"px",console.log("Width increased to "+e.ex6Styles.width+".")},this.ex6Timer)}}});