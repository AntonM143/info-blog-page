
/* Btns */
const blogBtn = document.getElementById("blog-btn")
const contactBtn = document.getElementById("contact-btn")
const homeBtn = document.getElementById("home")

blogBtn.addEventListener("click", blogDirect)
contactBtn.addEventListener("click", contactDirect)
homeBtn.addEventListener("click", homeDirect)

function blogDirect (){
    document.getElementById("blogposts").scrollIntoView()
}
function contactDirect () {
    document.getElementById("footer").scrollIntoView()
}
function homeDirect (){
    document.getElementById("hem").scrollIntoView()
}
