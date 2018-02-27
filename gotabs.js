function goTab1() {
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
    }