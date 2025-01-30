// Create the main elements
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.padding = "50px";

// Create a heading
const heading = document.createElement("h1");
heading.innerText = "Welcome to My JavaScript Website!";
document.body.appendChild(heading);

// Create a paragraph
const paragraph = document.createElement("p");
paragraph.innerText = "This page is generated using pure JavaScript!";
document.body.appendChild(paragraph);

// Create a button
const button = document.createElement("button");
button.innerText = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.backgroundColor = "#007BFF";
button.style.color = "white";
button.onclick = () => alert("Hello! You clicked the button.");
document.body.appendChild(button);
