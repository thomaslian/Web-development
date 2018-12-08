function validateForm(){
    //Date
    var dateFromForm = document.forms["form"]["date"].value;
    var inputDate = new Date(dateFromForm).setHours(0,0,0,0);
    var todaysDate = new Date();

    //Time
    var inputHour;
    var inputTime = document.forms["form"]["time"].value;
    
    //Get the input hour from the form
    if (inputTime.value !== "") {
        inputHour = inputTime.split(":")[0];
    }

    //Check date
    if (inputDate < todaysDate.setHours(0,0,0,0)) {
        alert("You cannot make a reservation back in time.");
        return false;
    }

    //Check time
    if (inputHour < 10 || inputHour > 22) {
        alert("We are not open at this time. Please check our contact us page for opening hours.");
        return false;
    }
}