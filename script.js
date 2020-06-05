function currentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var timeformat = "AM";

    timeformat = (hour >= 12) ? "PM" : "AM"; 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("Dig_Clk").innerText = hour + " : " + min + " : " + sec + " " + timeformat; 
      var t = setTimeout(currentTime, 1000); 
  }
  
  function updateTime(t) { 
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  
  currentTime();