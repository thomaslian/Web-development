
(function () {
    var iceCreamDiv = document.getElementById("ice-cream-list");

    for (var j = 0; j < categories.length; j++) {
        //h2
        var iceCreamCategory = document.createElement("h2");
        iceCreamCategory.innerHTML = categories[j];
        iceCreamDiv.appendChild(iceCreamCategory);

        for (var i = 0; i < iceCreams[categories[j]].length; i++) {
            //div
            var myDiv = document.createElement("div");
            myDiv.setAttribute("id", "menu-item");
            iceCreamDiv.appendChild(myDiv);

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