var vm = new Vue ({
  el: "#navigation",
  data: {
    tabNr: 0,
    complete: 0,
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
    newDokumendid: [],
    first: "",
    second: "",
    third: "",
    fourth: "",
    imageData: "",
  },
  methods: {
    goNext: function() {
      if (this.tabNr < this.complete) {
        this.tabNr += 1;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot" + this.tabNr).setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goBack: function() {
      this.tabNr -= 1;
      var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot" + this.tabNr).setAttribute("style", "background-color: rgb(13, 44, 90);");
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
              // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
              // Read image as base64 and set to imageData
              this.imageData = e.target.result;
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
      }
  },
    previewFile: function() {
      var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
    },
    getAge: function(byear) {
      var year = "";
    var dyear = parseInt(byear.substring(1, 3));
    var month = parseInt(byear.substring(3, 5));
    var day = parseInt(byear.substring(5, 7));
    if (dyear > 30) {
    	year = "19" + dyear.toString();
    } else if (dyear < 10) {
    	year = "20" + "0" + dyear.toString();
    } else {
    	year = "20" + dyear.toString();
    }
    var d = new Date();
    var n = d.toLocaleDateString().split("/");
    var now = n[0]/12 + n[1]/365 + n[2]/1 - parseInt(year)/1 - month/12 - day/365;
    console.log(byear);
    return now;
    },
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
      this.complete += 1;
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
      this.complete += 1;
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
      this.complete += 1;
      console.log(this.newIsik1ID);
      if (this.newIsik1ID == null || this.newIsik1ID =="") {
        this.first = 18;
      } else {
        this.first = this.getAge(this.newIsik1ID.toString());
      }
      if (this.newIsik1ID1 == null || this.newIsik1ID1 =="") {
        this.second = 18;
      } else {
        this.second = this.getAge(this.newIsik1ID1.toString());
      }
      if (this.newIsik1ID2 == null || this.newIsik1ID2 =="") {
        this.third = 18;
      } else {
        this.third = this.getAge(this.newIsik1ID2.toString());
      }
      if (this.newIsik1ID3 == null || this.newIsik1ID3 =="") {
        this.fourth = 18;
      } else {
        this.fourth = this.getAge(this.newIsik1ID3.toString());
      }
      if (this.first < 18 || this.second < 18 || this.third < 18 || this.fourth < 18) {
        this.tabNr = 3;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        console.log(this.first + " " + this.second + " " + this.third + " " + this.fourth);
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot3").setAttribute("style", "background-color: rgb(13, 44, 90);");
      } else {
        this.tabNr = 4;
        var titles = document.querySelectorAll(".dot");
        var i = titles.length;
        console.log(this.first + " " + this.second + " " + this.third + " " + this.fourth);
        while (i--) {
          titles[i].setAttribute("style", "background-color: rgb(74, 132, 218);");
        }
        document.getElementById("dot4").setAttribute("style", "background-color: rgb(13, 44, 90);");
      }
    },
    goTab4: function() {
      event.preventDefault(); 
      var go = 0;
      this.complete += 1;
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
      this.complete += 1;
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
      this.complete += 1;
      if (document.getElementById("17").value == null || document.getElementById("17").value =="") {
        go += 1;
      }
      if (document.getElementById("18").value == null || document.getElementById("18").value =="") {
        go += 1;
      }
      if (document.getElementById("19").value == null || document.getElementById("19").value =="") {
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
      this.complete += 1;
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