/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    // var helpers = HELPERS();

    //Your code goes here...
    for (var j = 0; j < categories.length; j++) {
        //h2
        var iceCreamCategory = document.createElement("h2");
        //Create a text node, otherwise it wont make a h2 element
        var category = document.createTextNode(categories[j]);
        iceCreamCategory.appendChild(category);
        document.body.append(iceCreamCategory);

        for (var i = 0; i < iceCreams[categories[j]].length; i++) {
            //div
            var myDiv = document.createElement("div");
            myDiv.setAttribute("id", "menu-item");
            document.body.appendChild(myDiv);

            //h2
            var h2 = document.createElement("h2");
            h2.innerHTML = iceCreams[categories[j]][i].name;
            myDiv.appendChild(h2);

            //p
            var myP = document.createElement("p");
            myDiv.appendChild(myP);

            //Span1
            var span1 = document.createElement("span");
            span1.innerHTML = iceCreams[categories[j]][i].description;
            myP.appendChild(span1);

            //Span2
            var span2 = document.createElement("span");
            span2.innerHTML = iceCreams[categories[j]][i].price + " NOK";
            span2.setAttribute("class", "price");
            myP.appendChild(span2);
        }
    }
})();