/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    //Your code goes here...
    //div
    var myDiv = document.createElement("div");
    myDiv.setAttribute("id", "menu-item");
    document.body.appendChild(myDiv);

    //h2
    var h2 = document.createElement("h2");
    h2.innerHTML = iceCreams["ice creams"][0].name;
    document.getElementById("menu-item").appendChild(h2);

    //p
    var myP = document.createElement("p");
    document.getElementById("menu-item").appendChild(myP);

    //Span1
    var span1 = document.createElement("span");
    span1.innerHTML = iceCreams["ice creams"][0].description;
    myP.appendChild(span1);

    //Span2
    var span2 = document.createElement("span");
    span2.innerHTML = iceCreams["ice creams"][0].price + " NOK";
    span2.setAttribute("class", "price");
    myP.appendChild(span2);
})();