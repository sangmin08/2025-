let LIST = []

function fetchAndRenderItems() {
    fetch('store.json')
        .then(response => response.json())
        .then(products => {
            LIST = products
            renderItems(products)
        })
        .catch(error => {
            console.error('Error loading JSON:', error)
        });
}

function renderItems(items) {
    const listContainer = document.getElementById('shoppinglist_box');
    listContainer.innerHTML = ''

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemImg = document.createElement('img');
        itemImg.src = item.photo;

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemName = document.createElement('h4');
        itemName.textContent = item.product_name;

        const itemBrand = document.createElement('p');
        itemBrand.textContent = item.brand;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `${item.price}원`;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemBrand);
        itemDetails.appendChild(itemPrice);
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemDetails);

        listContainer.appendChild(itemDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndRenderItems);

document.querySelector("#search-input").addEventListener("input", search);

function search() {
    const name = document.querySelector("#search-input").value.trim()
    const filterData = LIST.filter(item => item.product_name.toLowerCase().includes(name.toLowerCase()));
    renderItems(filterData)
}

const item = document.querySelectorAll(".item > .img")
const container = document.querySelector(".box2")

draggables.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
    })

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
})

containers.forEach(container => {
    container.addEventListener("dragover", e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientX)
        const draggable = document.querySelector(".dragging")
        if (afterElement  === undefined) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})