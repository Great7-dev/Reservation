const validateForm = () => {
    let validNameRegex = "^[a-zA-Z]*$";
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let validDateMonthRegex = "^[0-9]*$";
    let dateMonth = document.getElementById("dateMonth");
    let dateDay = document.getElementById("dateDay");
    let dateYear = document.getElementById("dateYear");
    let timeHour = document.getElementById("timeHour");
    let timeMinute = document.getElementById("timeMinute");
    if(!(name.value.length !== 0 && name.value.match(validNameRegex) && name.value.length > 2) ){
             alert("name is invalid ");
            return false;
     }
    if(!(email.value.length !== 0 )){
        alert("please, enter a valid email!!");
          return false;
    }
    if(!(dateMonth.value.length !== 0 && dateMonth.value.match(validDateMonthRegex) && dateMonth.value <= 12) ){
         alert("invalid month!!");
         return false;
    }
    if (!(dateDay.value.length !== 0 && dateDay.value.match(validDateMonthRegex) && dateDay.value < 32)) {
        alert("invalid day!!");
        return false;
    }
    if (!(dateYear.value.length !== 0 && dateYear.value.match(validDateMonthRegex) && dateYear.value > 2021 )){
      alert("invalid year!!");
        return false;
    }
    if(!(timeHour.value.length !== 0 && timeHour.value < 13 && timeHour.value !== 0)){
        alert("invalid time in hour!!");
        return false;
    }
    if(!(timeMinute.value.length !== 0 && timeMinute.value < 60)){
  
        alert("invalid time in minutes"); 
        return false;
    } 
  }
  var numberOfPeople = 1;
  function incrementNumber() {
    if (numberOfPeople < 10) {
      numberOfPeople = numberOfPeople+1;
    } else if (numberOfPeople == 10) {
      numberOfPeople = 1;
    }
    if(numberOfPeople == 1) {
      document.getElementById("number").innerHTML = `${numberOfPeople} Person`;
    }
    else {
      document.getElementById("number").innerHTML = numberOfPeople + " People";
    } 
  } 
  function decrementNumber() {
    if (numberOfPeople > 1) {
      numberOfPeople = numberOfPeople -1;
    }
    if(numberOfPeople == 1) {
      document.getElementById("number").innerHTML = `${numberOfPeople} Person`; 
    }
    else {
      document.getElementById("number").innerHTML = `${numberOfPeople} People`;
    }
  
  }