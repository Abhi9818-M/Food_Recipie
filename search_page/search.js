
const container = document.getElementById("food_item")


const search = document.getElementById("search")
const button = document.getElementById("button")

button.addEventListener("click" ,
async function getfood(){
    let foodname = search.value;
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${foodname}`);
    let data = await response.json();
    console.log(data);
    const foodList = data.recipes;
    
    if(data.recipes){
        foodList.forEach((search) => {
            console.log(search);
            printFoodList(search)
        });
        
        function printFoodList(ele){
            const div = document.createElement("div")
            div.classList.add("food_item_card")
            div.innerHTML = `
            <img src="${ele.image_url}" alt="">
                <h3>${ele.title}</h3>
                <div class="food_item_card_rank_title"><div class="food_item_card_rank">Rank :- ${ele.social_rank}</div><div class="food_item_card_title">${ele.publisher}</div> </div>
                <div class="food_item_card_button">
                <a href="../detail_page/detail.html" class="detail"> 
                    <button >Detail</button>
                </a>
                <a href="${ele.source_url}">
                    <button>Receipe Url</button>
                </a>  
                </div>`
            container.appendChild(div);
        }
        search.value = "";
    }
    else{
        html = "Sorry, we didn't find any meal!";
        notf.classList.add('notFound');
    }
   
})

// const detail = document.getElementById('detail')
// console.log(detail)
// container.addEventListener('click', getList);
// function getList(e){
//     e.preventDefault();
//     if(e.target.classList.contains('detail')){
//         let mealItem = e.target.parentElement.parentElement;
//         fetch(`https://forkify-api.herokuapp.com/api/lookup.php?i=${mealItem.dataset.id}`)
//         .then(response => response.json())
//         .then(data => mealRecipeModal(data.recipes));
//         console.log(data);
//     }
// }
