const container = document.getElementById("detail");

window.onload = function () {
  loadDetails();
};

const currentUrl = window.location.href;
const id = currentUrl.split("?")[1].split("=")[1];
console.log(id);

const loadDetails = async () => {
  console.log("details loaded");

  const response = await fetch(
    ` https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
    console.log(response);
  const data = await response.json();
  console.log(data);
  const foodList = data.recipe;
  console.log(foodList);
  const ingredient = foodList.ingredients;
  console.log(ingredient);
  printfooddetail(foodList);
  printIngredient(ingredient);
};

function printfooddetail(ele) {
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("detail_div");
  div.innerHTML = `
  <div class="section_header">
    <a href="../search_page/search.html" class="">
      <button class="button-37"> < Back to recipe page</button>
    </a>
    <h1>${ele.title}</h1>
    <h3 class="publisher">${ele.publisher}</h3>
    <img src="${ele.image_url}" alt="">
    <div class="detail_button_div">
        <a href="${ele.publisher_url}">
            <button class="button-37">Publisher Webpage</button>
        </a>
        <a href="${ele.source_url}">
            <button class="button-37">Recipe Webpage</button>
        </a>
    </div>
    
  </div>
  <div class="ingred">
    <h3>Ingredients</h3>
    <ul>
    </ul>
  </div>`;
  container.appendChild(div);
}

function printIngredient(ele) {
  for (let i of ele) {
    const li = `<li><span class="ingred">${i}</span></li>`;
    console.log(`${i}`);
    document.querySelector("ul").insertAdjacentHTML("beforeend", li);
  }
}
