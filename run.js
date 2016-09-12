var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = now - start;
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      var daymiles = day * 5.5;
      var daysleft = 366 - day;

      $(".day").html(day);
      $(".dayleft").html(daysleft);
      $(".miles").html(daymiles);

      $(".button").click(function(){
        var mymiles = $(".inputmiles").val();
        $(".you").html(Math.round(mymiles));

        $(".left").html(Math.floor(2016-mymiles));

        $(".leftdays").html(Math.round((2016-mymiles)/daysleft*100)/100);
      });