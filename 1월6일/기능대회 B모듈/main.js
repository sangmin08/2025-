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
        itemName.innerHTML = highlight(item.product_name)

        const itemBrand = document.createElement('p');
        itemBrand.textContent = item.brand;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `${item.price}원`

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

function highlight(text) {
    const search1 = document.querySelector("#search-input").value.toLowerCase();
    const regex = new RegExp(`(${search1})`, 'gi'); 
    return text.replace(regex, '<span class="highlight">$1</span>');
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

let CART = [];
let hap = 0;

const list = document.querySelector("#cart");
const allPrice = document.querySelector(".all_price");

function draw(data) {
    list.innerHTML = '';
    hap = 0;

    data.forEach((item, index) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ""))
        const num = parseInt(item.num)

        list.innerHTML += `
        <div class="pdt">
            <img src="${item.photo}"/>
            <div class="pdt_text">
                <h4>${item.product_name}</h4>
                <p>${item.brand}</p>
                <p>${price.toLocaleString()}원</p>
            </div>
            <div class="del">
                <button class="minus_btn" onclick="minus(${index})">-</button>
                <div class="num">${num}</div>
                <button class="plus_btn" onclick="plus(${index})">+</button>
                <button class="del_btn" onclick="del(${index})">삭제</button>
            </div>
        </div>
        <hr style="border: 2px solid black;">
        `;

        hap += price * num; 
    });

    if (allPrice) {
        allPrice.textContent = `${hap.toLocaleString()}`;
    }
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

const buybtn = document.getElementById("buyButton")
const modal = document.getElementById("modalWrap")
const closeBtn = document.getElementById("closeBtn")
const buycheckbtn = document.getElementById("buycheckButton")

buybtn.onclick = function () {
    if (CART.length === 0){
        alert("장바구니가 비어있습니다")
    } else {
        modal.style.display = "block"
    }
}

closeBtn.onclick = function () {
    modal.style.display = "none"; // 모달을 닫는 버튼(X)을 클릭하면 모달을 숨김
};

buycheckbtn.onclick = function () {
    const username = document.querySelector("#user_name").value
    const useraddress = document.querySelector("#user_address").value
    if (username == ""){
        alert("이름을 입력하세요")
        return
    }
    if (useraddress == ""){
        alert("주소를 입력하세요")
        return
    }

    modal.style.display = "none"
    alert("이름 : " + username + "\n배송지 : " + useraddress + "\n\n구매해주셔서 감사합니다!")
    list.innerHTML = ''
    CART = []
    allPrice.textContent = ''
    
    
}