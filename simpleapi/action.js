document.querySelector("button").addEventListener('click', function () {
  var userInput = document.getElementById('feedMe').value
  fetch(`https://api.edamam.com/search?q=${userInput}&app_id=65e36c52&app_key=
  0d01d306c095131b0d3f68178048f6c8`)
    .then(res => res.json())
    .then(response => {
      let food = response.hits.forEach(el => {
      let label = el.recipe.label; //repcie is the object inside the array and label is the key and the tile is the vaule.
      let ul = document.querySelector("ul"); //ul connets to ul on the dom
      let li = document.createElement('li'); //is creating the LI
        li.appendChild(document.createTextNode(label)); // createTextNode creates a node and puts label in it (title of the repcie)
        ul.appendChild(li); // li attches to the ul
      })
    })
  })

// Line 1 - Enbles the eventListener to listen for a click which then fires a =>
// Line 2 - This line is storing the vaule the user enters inside the varible
// Line 3 - Queries the API url
// Line 5 - Takes the API Query and converts it into json
// Line 6 - The json file then gets passed into the varible response. Then a function runs.

// the forEach is going through the
// Line 7 - The vaible food then gets assinged the forEach method which runs through the hits array. El holds the vaule of the forEach method then runs a function.
// Line 8 - the vaible label =
// Line 9 -
// Line 10 -
// Line 11 -
// Line 12 -
