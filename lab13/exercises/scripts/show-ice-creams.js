/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function() {
    //your code goes here...
    console.log(iceCreams["ice creams"][0].name);
    for(var i = 0; i < iceCreams["ice creams"].length; i++){
        var ul = document.createElement("ul");
        var t = document.createTextNode("Menu[" + i + "] => " + iceCreams["ice creams"][i].name + ":" + iceCreams["ice creams"][i].description + ". " + iceCreams["ice creams"][i].price + " NOK");
        ul.appendChild(t);   
        document.body.appendChild(ul);
    }
})();