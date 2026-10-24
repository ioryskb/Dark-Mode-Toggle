const toggleEl = document.getElementById("dark-mode")

toggleEl.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-theme')
})