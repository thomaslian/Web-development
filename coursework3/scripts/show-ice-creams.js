var iceCreamDiv = document.getElementById("ice-cream-list");
var sortingByName = false;

(function () {
    loopCategories();
})();

function loopCategories() {
    for (var j = 0; j < categories.length; j++) {
        //h2
        var iceCreamCategory = document.createElement("h2");
        iceCreamCategory.innerHTML = categories[j];

        if (sortingByName){
            sortByName(j);
            iceCreamCategory.innerHTML =  iceCreamCategory.innerHTML + " (Sorted by name)";
        }

        iceCreamDiv.appendChild(iceCreamCategory);

        displayIceCreams(iceCreams[categories[j]]);
    }
}

function displayIceCreams(j) {
    for (var i = 0; i < j.length; i++) {
        //div
        var myDiv = document.createElement("div");
        myDiv.setAttribute("id", "menu-item");
        iceCreamDiv.appendChild(myDiv);

        //h2
        var h2 = document.createElement("h2");
        h2.innerHTML = j[i].name;
        myDiv.appendChild(h2);

        //p
        var myP = document.createElement("p");
        myDiv.appendChild(myP);

        //Span1
        var span1 = document.createElement("span");
        span1.innerHTML = j[i].description;
        myP.appendChild(span1);

        //Span2
        var span2 = document.createElement("span");
        span2.innerHTML = j[i].price + " NOK";
        span2.setAttribute("class", "price");
        myP.appendChild(span2);
    }
}

// For the visible click button for the user 
function onClickSortByName(){
    sortingByName = true;
    removeOldIceCream();
    loopCategories();
}

// Removes the old divs from the page
function removeOldIceCream(){
    var div = document.getElementById("ice-cream-list");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

// Sorts the ice cream by name in each category
function sortByName(j) {
    iceCreams[categories[j]].sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    })
}