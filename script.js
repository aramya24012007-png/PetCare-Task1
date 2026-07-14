
function bookNow() {
    alert("📅 Appointment request received!\n\nThank you for choosing Happy Paws.\nPlease contact us through the Contact page to confirm your appointment.");
}
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
}
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
   
li.innerHTML = `
<span>${task}</span>

<div>
    <button onclick="this.closest('li').querySelector('span').style.textDecoration='line-through'">
        Done
    </button>

    <button onclick="this.closest('li').remove()">
        Delete
    </button>
</div>
`;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
const images = [

"https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",

"https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",

"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"

];

let current = 0;

const slider = document.getElementById("sliderImage");

if(slider){

document.getElementById("next").onclick=function(){

current++;

if(current>=images.length){
current=0;
}

slider.src=images[current];

}

document.getElementById("prev").onclick=function(){

current--;

if(current<0){
current=images.length-1;
}

slider.src=images[current];

}

setInterval(function(){

current++;

if(current>=images.length){
current=0;
}

slider.src=images[current];

},3000);

}

async function getDogImage(){

const response = await fetch("https://dog.ceo/api/breeds/image/random");

const data = await response.json();

document.getElementById("dogImage").src=data.message;

}

if(document.getElementById("dogImage")){

getDogImage();

}
// const products = [
// {
// name:"Dog Food",
// category:"Food",
// price:600,
// image:"https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400"
// },
// {
// name:"Dog Toy",
// category:"Toy",
// price:300,
// image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400"
// },
// {
// name:"Dog Belt",
// category:"Accessory",
// price:450,
// image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400"
// }
// ];

// function displayProducts(){

// let category=document.getElementById("filterCategory").value;
// let sort=document.getElementById("sortPrice").value;

// let list=[...products];

// if(category!="all"){
// list=list.filter(item=>item.category===category);
// }

// if(sort=="low"){
// list.sort((a,b)=>a.price-b.price);
// }

// if(sort=="high"){
// list.sort((a,b)=>b.price-a.price);
// }

// let container=document.getElementById("productContainer");

// container.innerHTML="";

// list.forEach(item=>{

// container.innerHTML+=`
// <div class="card">
// <img src="${item.image}">
// <h3>${item.name}</h3>
// <p>${item.category}</p>
// <h4>₹${item.price}</h4>
// </div>
// `;

// });

// }

// displayProducts();




// ================= PET SHOP =================

let cart = 0;

const products = [
{
name:"Premium Dog Food",
category:"Food",
price:699,
discount:"20% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400"
},
{
name:"Puppy Food",
category:"Food",
price:499,
discount:"15% OFF",
rating:"⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400"
},
{
name:"Dog Biscuits",
category:"Food",
price:349,
discount:"10% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://i5.walmartimages.com/seo/Dole-Freshly-Fetched-Dog-Biscuit-Treats-Spinach-Pumpkin-Flavors-No-Wheat-Corn-or-Soy-7oz_d948eb79-12b4-49dc-8f62-666fe63fd47b.3c334568a43009ce05d10f7da90c31f3.jpeg"
},
{
name:"Chicken Treats",
category:"Food",
price:399,
discount:"18% OFF",
rating:"⭐⭐⭐⭐",
image:"https://i5.walmartimages.com/seo/Freshpet-Dog-Joy-Chicken-Treats-for-Dogs_c00c8ef4-b9c0-45f8-b2e5-af23e3224658.61053f22df6233236cd44050a7abdae9.jpeg"
},
{
name:"Chew Toy",
category:"Toy",
price:250,
discount:"25% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400"
},
{
name:"Rubber Ball",
category:"Toy",
price:199,
discount:"30% OFF",
rating:"⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400"
},
{
name:"Rope Toy",
category:"Toy",
price:299,
discount:"20% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://tse3.mm.bing.net/th/id/OIP.iuPUfoSQMn_e2i9b7tWJnQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
name:"Dog Collar",
category:"Accessory",
price:450,
discount:"10% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400"
},
{
name:"Frisbee",
category:"Toy",
price:349,
discount:"15% OFF",
rating:"⭐⭐⭐⭐",
image:"https://www.thedogclinic.com/wp-content/uploads/2020/08/featured-image-dog-frisbee.jpg"
},
{
name:"Dog Leash",
category:"Accessory",
price:550,
discount:"12% OFF",
rating:"⭐⭐⭐⭐",
image:"https://m.media-amazon.com/images/I/81NDg4XIyNL._SL1500_.jpg"
},
{
name:"Pet Bed",
category:"Accessory",
price:999,
discount:"35% OFF",
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1583512603806-077998240c7a?w=400"
},
{
name:"Food Bowl",
category:"Accessory",
price:299,
discount:"20% OFF",
rating:"⭐⭐⭐⭐",
image:"https://m.media-amazon.com/images/I/61nXkob1sBL._AC_SL1500_.jpg"
}
];

function displayProducts(){

const container = document.getElementById("productContainer");

if(!container) return;

let category = document.getElementById("filterCategory").value;
let sort = document.getElementById("sortPrice").value;
let search = document.getElementById("searchProduct").value.toLowerCase();

let list = [...products];

if(category !== "all"){
list = list.filter(p => p.category === category);
}

if(search){
list = list.filter(p => p.name.toLowerCase().includes(search));
}

if(sort === "low"){
list.sort((a,b)=>a.price-b.price);
}

if(sort === "high"){
list.sort((a,b)=>b.price-a.price);
}

container.innerHTML="";

// list.forEach(product=>{

// container.innerHTML += `
// <div class="card">
// <img src="${product.image}" alt="${product.name}">
// <h3>${product.name}</h3>
// <p>${product.category}</p>
// <h4>₹${product.price}</h4>
// <button onclick="buyNow('${product.name}')">Buy Now</button>
// </div>
// `;

// });

list.forEach(product => {

container.innerHTML += `
<div class="product-card">

<div class="discount">${product.discount}</div>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.rating}</p>

<h4>₹${product.price}</h4>

<button onclick="addToCart('${product.name}')">
Add to Cart
</button>

<button onclick="buyNow('${product.name}')">
Buy Now
</button>

</div>
`;

});
}

// function buyNow(product){

// cart++;

// document.getElementById("cartCount").innerText = cart;

// alert(product + " added to cart successfully!");

// }

// displayProducts();
function addToCart(product){

cart++;

document.getElementById("cartCount").innerText = cart;

alert(product + " added to cart successfully!");

}

function buyNow(product){

document.getElementById("productName").value=product;

document.getElementById("orderPopup").style.display="flex";

}
displayProducts();






// ================= TO-DO LIST WITH LOCAL STORAGE =================

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    if (!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
        <span style="${task.completed ? 'text-decoration:line-through;color:gray;' : ''}">
            ${task.text}
        </span>

        <div>

            <button onclick="completeTask(${index})">
                ${task.completed ? "Undo" : "Done"}
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>

        </div>
        `;

        taskList.appendChild(li);

    });

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function closePopup(){

document.getElementById("orderPopup").style.display="none";

}

const orderForm=document.getElementById("orderForm");

if(orderForm){

orderForm.addEventListener("submit",function(e){

e.preventDefault();

const product=document.getElementById("productName").value;

const name=document.getElementById("customerName").value;

const phone=document.getElementById("customerPhone").value;

const email=document.getElementById("customerEmail").value;

const address=document.getElementById("customerAddress").value;

alert(

"🎉 Order Placed Successfully!\n\n"+

"Product : "+product+

"\n\nCustomer : "+name+

"\nPhone : "+phone+

"\nEmail : "+email+

"\nAddress : "+address+

"\n\nThank you for shopping with Happy Paws 🐶"

);

orderForm.reset();

closePopup();

});

}



