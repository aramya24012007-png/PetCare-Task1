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
    li.innerHTML = task + " <button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}