
// VARIABLES GLOBALES
const recipesMain = document.querySelector(".recipes");
const sectionSpa = document.createElement("section");
const stepsSection = document.createElement("section");
stepsSection.id = "steps-section";
const startButton = document.getElementById('start-button');

// VARIABLES CON LOS ENDPOINTS
// Meet
const meetUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=meat&number=4';
// Veggie
const veggieUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian&number=4';
// Vegan
const veganUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegan&number=4";
// Datos nutricionales con ID
const nutritionUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/660109/nutritionWidget.json';
// Opciones método get
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "78198d0a6bmsh9d0a7c5571db4ecp1579e0jsn0314fb10d7e4",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

// ---------FUNCIONES PINTAR-------
// Conexión API
async function getRecipes() {
  try {
    let response = [];
    switch (recipesMain.id) {
      case 'meet-main' :
        response = await fetch(meetUrl, options);
        break;
      case 'veggie-main' :
        response = await fetch(meetUrl, options);
        break;
      case 'vegan-main' :
        response = await fetch(meetUrl, options);
        break;
    }
    const {recipes} = await response.json();
    return recipes;
    console.log(randomRecipes);
  } catch (error) {
    console.error(`ERROR: ${error.stack}`);
  }
}
async function getNutrition(id) {
  try {
    let response = [];
    response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`, options);
    const nutrition = await response.json();
    return nutrition;
  } catch (error) {
    console.error(`ERROR: ${error.stack}`);
  }
}

// Pintar lista
function printList(array) {
  // Acorto los nombres que sean demasiado largos
  let heading = '';
  switch (recipesMain.id) {
    case 'meet-main' :
      heading = 'Meat'
      break;
    case 'veggie-main' :
      heading = 'Veggie'
      break;
    case 'vegan-main' :
      heading = 'Vegan'
      break;
  }
  let titles = [];
  array.forEach(element => {
    titles.push(element.title.substr(0,22));
  });
  sectionSpa.id = "list-section"
  sectionSpa.innerHTML = ` 
      <h1>${heading}</h1>
      <article class="suggestion" id="suggestion-1">
          <div class="text">
              <h4>${titles[0]}</h4>
              <p>${array[0].readyInMinutes} min</p>
              <p>${array[0].servings} servings</p>
          </div>
          <div class="image">
              <a href="#/first">
                  <img src=${array[0].image} alt="">
              </a>
          </div>
      </article>
      <article class="suggestion" id="suggestion-2">
      <div class="text">
          <h4>${titles[1]}</h4>
          <p>${array[1].readyInMinutes} min</p>
          <p>${array[1].servings} servings</p>
      </div>
          <div class="image">
              <a href="#/second">
                  <img src=${array[1].image} alt="">
              </a>
          </div>
      </article>
      <article class="suggestion" id="suggestion-3">
      <div class="text">
      <h4>${titles[2]}</h4>
          <p>${array[2].readyInMinutes} min</p>
          <p>${array[2].servings} servings</p>
      </div>
      <div class="image">
          <a href="#/third">
              <img src=${array[2].image} alt="">
          </a>
      </div>
      </article>
      <article class="suggestion" id="suggestion-4">
      <div class="text">
      <h4>${titles[3]}</h4>
          <p>${array[3].readyInMinutes} min</p>
          <p>${array[3].servings} servings</p>
      </div>
      <div class="image">
          <a href="#/fourth">
              <img src=${array[3].image} alt="">
          </a>
      </div>
      </article>
      <article id="article-btn">
        <button id="back-diet-button">Back</button>
      </article>`;
  recipesMain.appendChild(sectionSpa);
  const backDietButton = document.getElementById("back-diet-button");
  backDietButton.addEventListener('click', function() {
    window.location = './diet.html';
  })
}
// Pintar detalle
function printDetail(array, i) {
  // Acorto los nombres que sean demasiado largos
  let titles = [];
  array.forEach(element => {
    titles.push(element.title.substr(0,22));
  });

  sectionSpa.id = 'detail-section';
  sectionSpa.innerHTML = `
    <h2>${titles[i]}</h2>
    <article class="detail-image">
        <img src="${array[i].image}" alt="">
    </article>
    <article class="ingredients">
        <h3>Ingredients</h3>
        <div>
            <ul id="ig-quantity">
            </ul>
            <ul id="ig-name">
            </ul>
        </div>
    </article>
    <article id="graph-art">
        <h3>Nutricional Value</h3>
        <div>
            <canvas id="myChart"></canvas>
        </div>
    </article>`;
  recipesMain.appendChild(sectionSpa);
  // Pintamos ingredientes
  const igQuantity = document.getElementById("ig-quantity");
  const igName = document.getElementById("ig-name");
    array[i].extendedIngredients.forEach(element => {
      const liQuantity = document.createElement('li');
      const liName = document.createElement('li');
      liQuantity.innerText = `${element.amount} ${element.unit}`;
      liName.innerText = `${element.name}`;
      igQuantity.appendChild(liQuantity);
      igName.appendChild(liName);
    })
  // Gráfica con valor nutricional
  const nutritionValues = getNutrition(array[i].id);
  nutritionValues.then(data=>{
    console.log(data);
    const calories = data.nutrients[0].amount;
    const fat = data.nutrients[1].amount;
    const sat = data.nutrients[2].amount;
    const carb = data.nutrients[3].amount;
    const prot = data.nutrients[8].amount;
    console.log(calories);
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fat', 'S.Fat', 'Carb', 'Prot'],
        datasets: [{
          label: 'gr',
          data: [fat, sat, carb, prot],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
            display: false
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  
};
// Pintar instrucciones
function printSteps(array, i) {
  const directionsHeader = document.createElement('h2');
  directionsHeader.innerHTML = 'Directions';
  stepsSection.appendChild(directionsHeader);
  const articleBtn = document.createElement("article");
  articleBtn.id = 'article-btn';
  array[i].analyzedInstructions[0].steps.forEach((step, j) => {
    const stepArticle = document.createElement("article");
    stepArticle.classList.add("step-article");
    const stepH3 = document.createElement("h3");
    const stepP = document.createElement("p");

    stepH3.innerText = `${step.number}`;
    stepP.innerText = `${step.step}`;
    articleBtn.innerHTML = 
    `<button id="back-button">Back to list</button>`;

    stepArticle.appendChild(stepH3);
    stepArticle.appendChild(stepP);
    
    stepsSection.appendChild(stepArticle);
    recipesMain.appendChild(stepsSection);
  })

  // Botón volver atrás
  
  stepsSection.appendChild(articleBtn);
  const backButton = document.getElementById("back-button");
  backButton.addEventListener('click', function() {
    window.location.hash = '';
  })
}

// ----------NAVEGACIÓN-------------
// 
// Pantalla inicial - Lista 4 recetas
let randomRecipes = getRecipes();
randomRecipes.then((data) => {
  if (recipesMain) {
    printList(data);
  }
})
// Pantalla detalle receta 
window.addEventListener("hashchange", function() {
  let hash = window.location.hash;
  sectionSpa.innerHTML = '';
  randomRecipes.then((data) => {
    switch (hash) {
      case '' :
        randomRecipes.then((data) => {
          if (recipesMain) {
            stepsSection.innerHTML = '';
            stepsSection.remove();
            printList(data);
          }
        })
      case '#/first' :
        printDetail(data, 0);
        printSteps(data, 0);
        break;
      case '#/second' :
        printDetail(data, 1);
        printSteps(data, 1);
        break;
      case '#/third' :
        printDetail(data, 2);
        printSteps(data, 2);
        break;
      case '#/fourth' :
        printDetail(data, 3);
        printSteps(data, 3);
        break;
    }
  })
})
