 // create element
        const li = document.createElement("li");
        li.textContent = "new item";
        document.getElementById("list").appendChild(li);
// remove element
        const box = document.getElementById("removeMe");
        box.remove();