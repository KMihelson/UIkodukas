var vm = new Vue ({
  el: "#navigation",
  data: {
    tabNr: 1,
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
    goTab: function(a) {this.tabNr = a;},
    compileData: function() {
      this.items.push({esitajaeesnimi: this.newEsitajaEesNimi})
      this.tabNr = 9;
    }
  }
  })