const form = document.querySelector("form")
const items = document.querySelector(".items")
const error = document.querySelector(".error")
const deleteSmall = document.querySelector(".delete-small")

const text = document.querySelector(".text")


form.onsubmit = (event) => {
  event.preventDefault();

  if(text.value.trim() === ""){
    alert("Favor digitar o nome do item.")
    return
  }

  const id = text.value.replace(/ /g, "-").toLowerCase()
  const content = text.value
  
  const div = document.createElement("div")
  div.classList.add("item")

  const input = document.createElement("input")
  input.type = "checkbox"
  input.id = id
  input.name = id

  const label = document.createElement("label")
  label.htmlFor = id
  label.textContent = content

  const img = document.createElement("img")
  img.src = "assets/Frame-3.png"
  img.alt = "lixeira"
  img.classList.add("trash")
  
  img.onclick = () => {
    div.remove()
    error.style.display = "flex"
  }

  div.append(input, label, img)
  items.appendChild(div)

  text.value = ""
  error.style.display = "none"
  deleteSmall.onclick = () => error.style.display = "none"
}

