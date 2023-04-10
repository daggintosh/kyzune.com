let img = document.getElementById("fox");
img.addEventListener("load", () => img.style.animationPlayState = "running")
fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(res => img.src = res.image)
    .catch(() => {
        let node = document.createElement("h4")
        node.textContent = "You are offline"
        node.style.animation = "fade 1s ease-out"
        document.getElementById("container").append(node)
        img.remove()
    })