//document.getElementById("count-el").innerText=5
let count=0
let welcomeEl = document.getElementById("welcome-el")
let name = "Karan Bhatt"
let greeting = "Welcome back "
welcomeEl.innerText = greeting + name
welcomeEl.innerText = welcomeEl.innerText + " 🙏" //short hand operators can also be user;
// console.log(count) // this is generally used for debugging purposes.
let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.innerText = count
}
let totalCount= document.getElementById("totalCount")
function save(){
    totalCount.textContent += count   + " - "
    countEl.textContent = 0
    count=0
}

 
