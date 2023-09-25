
const container = document.getElementById("detail")

window.onload = function () {
  loadDetails();
};

async function loadDetails() {
  console.log("details loaded");
  // const currentPath = window.location.href;
  // const urlObj = new URL(currentPath);
  // const params = new URLSearchParams(urlObj.search);
  
  // const data = await fetch(
  //   `https://forkify-api.herokuapp.com/api/${params.get(
  //     "recipe_id"
  //   )}`
  // );
  // console.log(data);
  // const res = await data.json();
  // console.log(res);
  // renderDetails(res)
  
  let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`);
    let data = await response.json();
    console.log(data);
    const foodList = data.recipe;
    console.log(foodList);
    const ingredient = foodList.ingredients;
    console.log(ingredient);

    printfooddetail(foodList)
    printIngredient(ingredient)
};

function printfooddetail(ele){
  container.innerHTML="";
  const div = document.createElement("div")
  div.classList.add("detail_div")
  div.innerHTML = `
  <div>
  <h1>${ele.title}</h1>
    <h3>${ele.publisher}</h3>
    <img src="${ele.image_url}" alt="">
    <p>Social Rank :- ${ele.social_rank}</p>
    <h3>Ingredients</h3>
    <ul>
    </ul>
  </div>
  `
  container.appendChild(div)
}

function printIngredient(ele){

  for (let i of ele ){
    const li =  `<li><span class="ingred">${i}</span></li>`
    console.log(`${i}`)
    document.querySelector('ul').insertAdjacentHTML('beforeend',li)
  }
}
