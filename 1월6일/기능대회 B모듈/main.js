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
    const listContainer = document.getElementById('shoppinglist_box')
    listContainer.innerHTML = ''

    items.forEach(item => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item')

        const itemImg = document.createElement('img');
        itemImg.src = item.photo;
        itemImg.setAttribute('draggable', 'true');
        itemImg.addEventListener('dragstart', (e) => {
            console.log('드래그 시작');
            console.log('드래그된 요소:', e.target);
            window.dragEvent = e;
        });

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details')

        const itemName = document.createElement('h4')
        itemName.textContent = item.product_name

        const itemBrand = document.createElement('p')
        itemBrand.textContent = item.brand

        const itemPrice = document.createElement('p')
        itemPrice.classList.add('item-price')
        itemPrice.textContent = `${item.price}원`

        itemDetails.appendChild(itemName)
        itemDetails.appendChild(itemBrand)
        itemDetails.appendChild(itemPrice)
        itemDiv.appendChild(itemImg)
        itemDiv.appendChild(itemDetails)

        listContainer.appendChild(itemDiv)
    })
}

document.addEventListener('DOMContentLoaded', fetchAndRenderItems)


document.querySelector("#search-input").addEventListener("input", search)

function search() {
    const name = document.querySelector("#search-input").value.trim().toLowerCase()
    const filterData = LIST.filter(item => item.product_name.toLowerCase().includes(name))
    renderItems(filterData)
}

// 드롭 이벤트
const container = document.querySelector(".box2");
container.addEventListener("dragover", (e) => {
    e.preventDefault();
    // 같은 e 객체를 사용
    if (window.dragEvent) {

    }
});

container.addEventListener("drop", (e) => {
    e.preventDefault();
    // 같은 e 객체를 사용
    if (window.dragEvent) {
        console.log("드래그 요소가 박스에 드롭됨");
        console.log('드래그된 요소:', window.dragEvent.target);
    }
});