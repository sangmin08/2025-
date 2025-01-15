let LIST = [];

function fetchAndRenderItems() {
    fetch('store.json')
        .then(response => response.json())
        .then(products => {
            LIST = products;
            renderItems(products);
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
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
        itemImg.addEventListener('dragstart', () => {
            dragItemData = item;
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
    const cho = hanguel(name);
    let filterData;

    if (name === cho) {
        filterData = LIST.filter(item => {
            const productCho = hanguel(item.product_name.toLowerCase());
            return productCho.includes(cho);
        });
    } else {
        filterData = LIST.filter(item => item.product_name.toLowerCase().includes(name));
    }

    renderItems(filterData);
}

function hanguel(str) {
    const cho = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let code = char.charCodeAt(0);

        if (code >= 44032 && code <= 55203) { 
            const choIndex = Math.floor((code - 44032) / 588);
            result += cho[choIndex];
        } else {
            result += char;
        }
    }
    return result;
}

const CART = [];
let hap = 0;

function draw(data) {
    const list = document.querySelector("#cart");
    list.innerHTML = '';

    data.forEach((item, index) => {
        list.innerHTML += `
        <div class="pdt">
            <img src="${item.photo}"/>
            <div class="pdt_text">
                <h4>${item.product_name}</h4>
                <p>${item.brand}</p>
                <p>${item.price}원</p>
            </div>
            <div class="del">
                <button class="minus_btn" onclick="minus(${index})">-</button>
                <div class="num">${item.num}</div>
                <button class="plus_btn" onclick="plus(${index})">+</button>
                <button class="del_btn" onclick="del(${index})">삭제</button>
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
        const existingItemIndex = CART.findIndex(item => item.product_name === dragItemData.product_name);
        if (existingItemIndex === -1) {
            dragItemData.num = 1;
            CART.push(dragItemData);
        } else {
            alert("이미 장바구니에 담긴 상품입니다.");
        }
        draw(CART);
    }
});

function plus(index) {
    const item = CART[index];
    item.num += 1;
    draw(CART);
}

function minus(index) {
    const item = CART[index];
    if (item.num > 1) {
        item.num -= 1;
    }
    draw(CART);
}

function del(index) {
    CART.splice(index, 1);
    draw(CART);
}