var vm = new Vue ({
  el: "#navigation",
  data: {
    tabNr: 0,
    items: [
    ],
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
    goTab1: function() {
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
      }
    },
    goTab2: function() {
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
      }
    },
    goTab3: function() {
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
      }
    },
    goTab4: function() {
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
      }
    },
    goTab6: function() {
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
      }
    },
    goTab7: function() {
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
      }
    },
    goTab: function(a) {
      this.tabNr = a;
    },
    compileData: function() {
      this.items.push({esitajaeesnimi: this.newEsitajaEesNimi})
      this.tabNr = 8;
    }
  }
  })