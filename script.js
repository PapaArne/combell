document.addEventListener("DOMContentLoaded", function () {
    const benefits = [
        "Asynchronous and event-driven",
        "Fast execution using V8 Engine",
        "Single programming language (JavaScript)",
        "Great for real-time applications",
        "Huge open-source ecosystem (NPM)"
    ];

    const benefitsList = document.getElementById("benefits-list");

    benefits.forEach((benefit) => {
        const li = document.createElement("li");
        li.innerText = benefit;
        benefitsList.appendChild(li);
    });

    document.getElementById("learn-more").addEventListener("click", function () {
        alert("Visit nodejs.org to learn more about Node.js!");
    });
});
