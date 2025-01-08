let LIST = [];

function fetchAndRenderItems() {
    fetch('store.json')
        .then(response => response.json())
        .then(products => {
            LIST = products;
            renderItems(products);
        })
        .catch(error => {
            console.error('JSON을 불러오는 중 오류가 발생했습니다:', error);
        });
}

function renderItems(items) {
    const listContainer = document.getElementById('shoppinglist_box');
    listContainer.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemImg = document.createElement('img');
        itemImg.src = item.photo;
        itemImg.setAttribute('draggable', 'true');
        itemImg.addEventListener('dragstart', (e) => {
            dragItemData = item
        });

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
    const name = document.querySelector("#search-input").value.trim().toLowerCase();
    const filterData = LIST.filter(item => item.product_name.toLowerCase().includes(name));
    if (45032 <= name <= 55203)
    renderItems(filterData);

}

function hanguel(str) {
    let cho = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    let result = [];
    for (let i in str) {
        let char = str.substr(i, 1);
        let index = (char.charCodeAt() - 44032) / 588
        result.push(cho[index] || char);
    }
    return result.join('');
}

const CART = [];

function draw(data) {
    const list = document.querySelector("#cart");
    list.innerHTML = '';

    data.forEach(item => {
        list.innerHTML += `
        <div class="pdt">
            <img src="${item.photo}"/>
            <div class="pdt_text">
                <h4>${item.product_name}</h4>
                <p>${item.brand}</p>
                <p>${item.price}원</p>
                </div>
            <div class="del">
            <button id="plus_btn">+</button>
            <div class="num">1</div>
            <button id="minus_btn">-</button>
            <button id="del_btn">삭제</button>
            </div>
        </div>
        <hr style="border: 2px solid black;">
        `;
    });
}

const container = document.querySelector(".box2");
container.addEventListener("dragover", (e) => {
    e.preventDefault();
});

container.addEventListener("drop", (e) => {
    e.preventDefault();
    
    if (dragItemData) {
        CART.push(dragItemData)
        draw(CART)
    }
});

const PLUS_BUTTON = document.getElementById("plus_btn");
const TEXT = document.querySelector(".num")

PLUS_BUTTON.addEventListener("click", plus)

function plus() {
    add = 1
    add += 1
    TEXT.innerHTML = add
}