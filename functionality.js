var vm = new Vue ({
  el: "#navigation",
  data: {
    tabNr: 0,
    items: [
    ],
    checkedvalues: [],
    newEsitajaEesNimi: "",
    newEsitajaPereNimi: "",
    newEsitajaID: "",
    newEsitajaEmail: "",
    newEsitajaTelefon: "",
    newRiik: "",
    newMaakond: "",
    newAsula: "",
    newMajaNr: "",
    newPostiIndeks: "",
    newIsik1EesNimi: "",
    newIsik1PereNimi: "",
    newIsik1ID: "",
    newIsik1EesNimi1: "",
    newIsik1PereNimi1: "",
    newIsik1ID1: "",
    newIsik1EesNimi2: "",
    newIsik1PereNimi2: "",
    newIsik1ID2: "",
    newIsik1EesNimi3: "",
    newIsik1PereNimi3: "",
    newIsik1ID3: "",
    newEestkostjaEesNimi: "",
    newEestkostjaPereNimi: "",
    newEestkostjaID: "",
    ruumiOmanik: "",
    üüriLeping: "",
    omanikuNõusolek: "",
    newOmanik1EesNimi: "",
    newOmanik1PereNimi: "",
    newOmanik1ID: "",
    newOmanik2EesNimi: "",
    newOmanik2PereNimi: "",
    newOmanik2ID: "",
    newRiik2: "",
    newMaakond2: "",
    newAsula2: "",
    newMajaNr2: "",
    newPostiIndeks2: "",
    newKehtivusAlgus: "",
    newKehtivusLõpp: "",
    newDokumendid: "",
  },
  methods: {
    goTab: function(a) {
      var titles = document.querySelectorAll(".dot");
      var i = titles.length;
      while (i--) {
        titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
      }
      document.getElementById("dot" + a).setAttribute("style", "background-color: rgb(13, 44, 90);");
      this.tabNr = a;
    },
    goTab1: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("1").value == null || document.getElementById("1").value =="") {
        go += 1;
      }
      if (document.getElementById("2").value == null || document.getElementById("2").value =="") {
        go += 1;
      }
      if (document.getElementById("3").value == null || document.getElementById("3").value =="") {
        go += 1;
      }
      if (document.getElementById("4").value == null || document.getElementById("4").value =="") {
        go += 1;
      }
      if (document.getElementById("5").value == null || document.getElementById("5").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 1;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot1").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab2: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("6").value == null || document.getElementById("6").value =="") {
        go += 1;
      }
      if (document.getElementById("7").value == null || document.getElementById("7").value =="") {
        go += 1;
      }
      if (document.getElementById("8").value == null || document.getElementById("8").value =="") {
        go += 1;
      }
      if (document.getElementById("9").value == null || document.getElementById("9").value =="") {
        go += 1;
      }
      if (document.getElementById("10").value == null || document.getElementById("10").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 2;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot2").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab3: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("11").value == null || document.getElementById("11").value =="") {
        go += 1;
      }
      if (document.getElementById("12").value == null || document.getElementById("12").value =="") {
        go += 1;
      }
      if (document.getElementById("13").value == null || document.getElementById("13").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 3;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot3").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab4: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("14").value == null || document.getElementById("14").value =="") {
        go += 1;
      }
      if (document.getElementById("15").value == null || document.getElementById("15").value =="") {
        go += 1;
      }
      if (document.getElementById("16").value == null || document.getElementById("16").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 4;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot4").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab5: function() {
      this.tabNr = 5;
      var titles = document.querySelectorAll(".dot");
      var i = titles.length;
      while (i--) {
        titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
      }
      document.getElementById("dot5").setAttribute("style", "background-color: rgb(13, 44, 90);");
    },
    goTab6: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("17").value == null || document.getElementById("17").value =="") {
        go += 1;
      }
      if (document.getElementById("18").value == null || document.getElementById("18").value =="") {
        go += 1;
      }
      if (document.getElementById("19").value == null || document.getElementById("19").value =="") {
        go += 1;
      }
      if (document.getElementById("20").value == null || document.getElementById("20").value =="") {
        go += 1;
      }
      if (document.getElementById("21").value == null || document.getElementById("21").value =="") {
        go += 1;
      }
      if (document.getElementById("22").value == null || document.getElementById("22").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 6;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot6").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab7: function() {
      event.preventDefault(); 
      var go = 0;
      if (document.getElementById("23").value == null || document.getElementById("23").value =="") {
        go += 1;
      }
      if (document.getElementById("24").value == null || document.getElementById("24").value =="") {
        go += 1;
      }
      if (document.getElementById("25").value == null || document.getElementById("25").value =="") {
        go += 1;
      }
      if (document.getElementById("26").value == null || document.getElementById("26").value =="") {
        go += 1;
      }
      if (document.getElementById("27").value == null || document.getElementById("27").value =="") {
        go += 1;
      }
      if (document.getElementById("28").value == null || document.getElementById("28").value =="") {
        go += 1;
      }
      if (document.getElementById("29").value == null || document.getElementById("29").value =="") {
        go += 1;
      }
      if (go == 0) {
        this.tabNr = 7;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot7").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    compileData: function() {
      document.getElementById("navdots").style.visibility = "hidden";
      this.items.push({esitajaeesnimi: this.newEsitajaEesNimi})
      this.tabNr = 8;
    }
  }
  })