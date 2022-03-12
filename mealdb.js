//keyboard er enter e click korle kaaj korbe
const serachBtn = document.getElementById("button-search");
const inputField = document.getElementById("search-field");

inputField.addEventListener("keypress", function (event) {
    //event.preventDefault();
    if (event.key == 'Enter') {
        serachBtn.click();
    }

});

const toggoleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggoleSearchResult = displayStyle => {
    document.getElementById('search-result').style.display = displayStyle;
}
const NoResultsFound = displayStyle => {
    document.getElementById('no-results').style.display = displayStyle;
}
const writeSomething = displayStyle => {
    document.getElementById('write-something').style.display = displayStyle;
}


const searchfood = () => {
    toggoleSpinner('block')
    toggoleSearchResult('none')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText)

    searchField.value = ''
    // searchbox e jodi kisu na likhe tokhon
    if (searchText == '') {
        writeSomething('block')
        toggoleSpinner('none')

    }
    else {
        writeSomething('none')

        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))


    }




}

const displaySearchResult = meals => {
    //console.log(meals)
    const searchResult = document.getElementById('search-result');
    //remove previous result
    searchResult.innerHTML = ''
    // searchbox e ultapalta kisu likhle jeta array te thakbe na
    if (!meals) {
        NoResultsFound('block')

    }
    else {
        NoResultsFound('none')
    }


    meals?.forEach(meal => {
        //console.log(meal)

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div onclick="loadMealDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>`;
        searchResult.appendChild(div)
    });
    toggoleSpinner('none');
    toggoleSearchResult('flex')

}

//single meal details load
const loadMealDetails = mealId => {
    //console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}
// single meals display
const displayMealDetail = meal => {
    console.log(meal)
    const singleMealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
    singleMealDetails.appendChild(div)
}
