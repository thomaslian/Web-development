/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function() {
    console.log(categories.length);
    //Your code goes here...
    for(var i = 0; i < categories.length; i++){
        var para = document.createElement("P");
        var t = document.createTextNode(categories[i]);
        para.appendChild(t);   
        document.body.appendChild(para);
    }
})();