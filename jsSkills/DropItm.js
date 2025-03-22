

export default class DropItm 
        {
            constructor(product , callback)
            {
                this.price = product.price;
                this.image = product.image;
                this.count = 1;
                this.sum = this.price;

                this.elem = this.createTemplate(product);
                this.countLabel = this.elem.querySelector(".count");
                this.priceLabel = this.elem.querySelector(".price");
                this.updateCallback = callback;
                this.addEvent();
            }

            addEvent = () =>
            {
                this.elem.querySelector(".add-btn").addEventListener("click", this.addCount)
                this.elem.querySelector(".dec-btn").addEventListener("click", this.decCount)

            }

            addCount = () =>
            {
                this.count += 1;
                this.sum = this.price * this.count;
                this.updateCountLabel();
            }

            decCount = () =>
            {
                if(this.count == 1) return;
                this.count -= 1;
                this.sum = this.price * this.count;
                this.updateCountLabel();
            }

            updateCountLabel = () => {
                this.countLabel.innerHTML = this.count;
                this.priceLabel.innerHTML = this.sum.toLocaleString();
                this.updateCallback();
            }

            createTemplate = ({id, price, image}) =>
            {
                let div = document.createElement("div");
                div.innerHTML = `
                <div class="drop-item d-flex py-1 px-2 bg-primary text-white" id="drop_${id}" draggable="true">
                    <div class="img-box me-2">
                        <img src="${image}" alt="" style="width: 20px;height: 20px;">
                    </div>
                    <div class="data-row d-flex me-2">
                        <button class="dec-btn btn btn-danger btn-sm">-</button>
                        <span class="count">1</span>
                        <button class="add-btn btn btn-warning btn-sm">+</button>
                    </div>
                    <div class="price-box">
                        <span class="price">${price}</span>
                    </div>
                </div>`;
                return div.firstElementChild;
                }
        }