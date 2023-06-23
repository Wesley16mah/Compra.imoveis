function addImovel(){
    let addImovel = document.createElement("tr")

    let name = document.querySelector("input#nameOwner").value
    let phone = document.querySelector("input#phone").value
    let type = document.querySelector("input#typeImovel:checked").value
    let area = document.querySelector("input#area").value
    let rented = document.querySelector("input#rentedImovel:checked").value

    let newRented = document.createElement("td")
    let newType = document.createElement("td")
    let newArea = document.createElement("td")
    let newName = document.createElement("td")
    let newPhone = document.createElement("td")

    let removeButton = document.createElement("button")
    
    if (rented == "Alugado") {
        newRented.style.backgroundColor = "red"
        newRented.style.color = "white"
    }

    newRented.innerText = rented
    newType.innerText = type
    newArea.innerText = area + "m²"
    newName.innerText = name
    newPhone.innerText = phone
    removeButton.type = "button"
    removeButton.innerText= "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    
    addImovel.appendChild(newRented)
    addImovel.appendChild(newType)
    addImovel.appendChild(newArea)
    addImovel.appendChild(newName)
    addImovel.appendChild(newPhone)
    addImovel.appendChild(removeButton)   

    document.querySelector("tbody#listImovel").appendChild(addImovel)

    document.querySelector("form").reset()
}

function removeHouse(element) {
    let removeHouse = element.parentNode
    document.querySelector("tbody#listImovel").removeChild(removeHouse)
}
