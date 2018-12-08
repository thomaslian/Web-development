var iceCreamDiv = document.getElementById("ice-cream-list");
var sortingByName = false;
var sortingByPrice = false;
var sortingByDescription = false;
// Current category in the loop
var currentCategory;

(function () {
    loopCategories();
})();

function loopCategories() {
    var sortingMenu = document.createElement("div");
    sortingMenu.setAttribute("id", "sorting-menu");
    iceCreamDiv.appendChild(sortingMenu);

    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "Sort by (will be sorted in each category): ";
    sortingMenu.appendChild(sortByNameButton);

    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "default ";
    sortByNameButton.href = "ice-creams.html";
    sortingMenu.appendChild(sortByNameButton);

    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "name ";
    sortByNameButton.href = "#";
    sortByNameButton.addEventListener("click", function(){
        sortingByName = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByNameButton);

    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "price ";
    sortByNameButton.href = "#";
    sortByNameButton.addEventListener("click", function(){
        sortingByPrice = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByNameButton);

    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "description";
    sortByNameButton.href = "#";
    sortByNameButton.addEventListener("click", function(){
        sortingByDescription = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByNameButton);


    for (var j = 0; j < categories.length; j++) {
        //h2
        var iceCreamCategory = document.createElement("h2");
        iceCreamCategory.innerHTML = categories[j];

        // If sortingByName is true, sort products within each category by name.
        // Also add a "sorted by name" of the end of each category.
        if (sortingByName) {
            sortByName(j);
            iceCreamCategory.innerHTML += " (sorted by name)";
        }
        
        if (sortingByPrice) {
            sortByPrice(j);
            iceCreamCategory.innerHTML += " (sorted by price)";
        }

        if (sortingByDescription) {
            sortByDescription(j);
            iceCreamCategory.innerHTML += " (sorted by description)";
        }
        iceCreamDiv.appendChild(iceCreamCategory);

        currentCategory = iceCreams[categories[j]];
        for (var i = 0; i < currentCategory.length; i++) {
            //div
            var myDiv = document.createElement("div");
            myDiv.setAttribute("id", "menu-item");
            iceCreamDiv.appendChild(myDiv);

            //h2
            var h2 = document.createElement("h2");
            h2.innerHTML = currentCategory[i].name;
            myDiv.appendChild(h2);

            //p
            var myP = document.createElement("p");
            myDiv.appendChild(myP);

            //Span1
            var span1 = document.createElement("span");
            span1.innerHTML = currentCategory[i].description;
            myP.appendChild(span1);

            //Span2
            var span2 = document.createElement("span");
            span2.innerHTML = currentCategory[i].price + " NOK";
            span2.setAttribute("class", "price");
            myP.appendChild(span2);
        }
    }

    //  Make sure that everything is set to false, otherwise multiple items will set to true
    sortingByName = false;
    sortingByPrice = false;
    sortingByDescription = false;
}

// Removes the old divs from the page
function removeOldIceCream() {
    var div = document.getElementById("ice-cream-list");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

// Sorts the ice cream by name
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

// Sorts the ice cream by price
function sortByPrice(j) {
    iceCreams[categories[j]].sort(function(a, b) { 
        return a.price - b.price  ||  a.name.localeCompare(b.name);
      });
}

// Sorts the ice cream by description
function sortByDescription(j) {
    iceCreams[categories[j]].sort(function (a, b) {
        var nameA = a.description.toUpperCase();
        var nameB = b.description.toUpperCase();

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
