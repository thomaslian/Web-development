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
    //Creates the "sort by" menu
    //This is the div that will hold the menu
    var sortingMenu = document.createElement("div");
    sortingMenu.setAttribute("id", "sorting-menu");
    iceCreamDiv.appendChild(sortingMenu);

    //Sorting description
    var sortByNameButton = document.createElement("p");
    sortByNameButton.innerHTML = "Sort by (will be sorted in each category): ";
    sortingMenu.appendChild(sortByNameButton);

    //Defualt button, just reloads the page
    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "default ";
    sortByNameButton.href = "ice-creams.html";
    sortingMenu.appendChild(sortByNameButton);

    //Sort by name button. 
    // This sets "sortingByName" to true, removes everything inside the ice-cream-list
    // and runs loopCategories function again.
    var sortByNameButton = document.createElement("a");
    sortByNameButton.innerHTML = "name ";
    sortByNameButton.href = "#";
    sortByNameButton.addEventListener("click", function(){
        sortingByName = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByNameButton);

    //Sort by price button
    var sortByPriceButton = document.createElement("a");
    sortByPriceButton.innerHTML = "price ";
    sortByPriceButton.href = "#";
    sortByPriceButton.addEventListener("click", function(){
        sortingByPrice = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByPriceButton);

    // Sort by description button
    var sortByDescButton = document.createElement("a");
    sortByDescButton.innerHTML = "description";
    sortByDescButton.href = "#";
    sortByDescButton.addEventListener("click", function(){
        sortingByDescription = true; removeOldIceCream(); loopCategories();
    });
    sortingMenu.appendChild(sortByDescButton);


    // Goes through each category loop
    for (var j = 0; j < categories.length; j++) {
        //h2 (the header for each category)
        var iceCreamCategory = document.createElement("h2");
        iceCreamCategory.innerHTML = categories[j];

        // If sortingByName is true, sort products within each category by name.
        // Also add a "sorted by name" of the end of each category.
        if (sortingByName) {
            sortByName(j);
            iceCreamCategory.innerHTML += " (sorted by name)";
        }
        
        // Sort by price
        if (sortingByPrice) {
            sortByPrice(j);
            iceCreamCategory.innerHTML += " (sorted by price)";
        }

        //Sort by description
        if (sortingByDescription) {
            sortByDescription(j);
            iceCreamCategory.innerHTML += " (sorted by description)";
        }
        //This adds the category name to the page
        iceCreamDiv.appendChild(iceCreamCategory);

        //Store current category in a variable to make it more readable
        currentCategory = iceCreams[categories[j]];
        //Go through each icecream in that category and list it on the page
        for (var i = 0; i < currentCategory.length; i++) {
            //div (id: menu-item)
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

    // Make sure that everything is set to false, otherwise multiple items will be set to true
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
