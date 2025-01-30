fetch("/api/message")
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;
    })
    .catch(error => console.error("Fout bij laden van API:", error));

