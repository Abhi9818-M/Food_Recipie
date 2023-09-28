const container = document.getElementById("food_item");

const search = document.getElementById("search");
const button = document.getElementById("button");
const heading = document.getElementById(".heading")

button.addEventListener("click", async function getfood() {
  let foodname = search.value;

  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${foodname}`
  );
  let data = await response.json();
  console.log(data);
  const foodList = data.recipes;

  

    foodList.forEach((search) => {
      console.log(search);
      printFoodList(search);
    });
  
    function printFoodList(ele) {
      const div = document.createElement("div");
      div.classList.add("food_item_card");
      div.innerHTML="";
      if(ele.error === "Couldn't find recipe with that name. Please visit ...com/phrases.html for all available search queries"){
        const heading = document.createElement("h1");
        heading.innerText = "Wrong User Id"
        div.appendChild(heading)
        console.log(heading);
      }
      else{
       
        div.innerHTML = `
              <img src="${ele.image_url}" alt="">
              <h3>${ele.title}</h3>
              <div class="food_item_card_rank">Rank :- ${ele.social_rank}</div>
              <div class="food_item_card_title"><h5>${ele.publisher}</h5></div>
              <div class="food_item_card_button">
                <a href="../detail_page/detail.html?id=${ele.recipe_id}" id="${ele.recipe_id}" class="detail">
                  <button class="button_detail">  Detail  </button>
                </a>
                <a href="${ele.source_url}">
                  <button class="button_detail">Receipe Url</button>
                </a>  
              </div>`
            ;
        container.appendChild(div);
      }
    }
   
  
});
