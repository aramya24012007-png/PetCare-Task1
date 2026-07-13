// alert("JavaScript Loaded Successfully!");

// function bookNow() {
//     alert("✅ Thank You!\n\nYour message has been sent successfully.\nWe will contact you soon.");
// }
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
    // li.innerHTML = task + " <button onclick='this.parentElement.remove()'>Delete</button>";
// li.innerHTML = `
// ${task}
// <button onclick="this.parentElement.style.textDecoration='line-through'">
// Done
// </button>

// <button onclick="this.parentElement.remove()">
// Delete
// </button>
// `;
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