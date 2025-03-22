import DragItem from "/DropItm.js"
import { products  } from "/product.js";

const container = document.querySelector(".drag-container");
const dropzone = document.querySelector(".dropzone");

let dropItemList = [];

function updateTotalPrice()
{
    const priceSpan = document.querySelector(".sum-price")
    let totalSum = dropItemList.reduce((sum, item)=> sum + item.sum, 0);
    priceSpan.innerHTML = totalSum.toLocaleString();
}

        products.forEach(pro => {
            const productDom = CreateBoxTemplate(pro);
            container.appendChild(productDom);

            container.addEventListener("dragstart", evt => {
                if(evt.target.classList.contains("box"))
                {   
                    console.log(evt.target.id);
                    evt.dataTransfer.setData("text/plain", evt.target.id)
                }
            })
        });
        
        //드래그 된 아이템이 내 위를지나갈 때 발생한다.
        dropzone.addEventListener("dragover", evt => evt.preventDefault())
        dropzone.addEventListener("drop", evt => {
            evt.preventDefault();
            evt.stopPropagation();
            const targetId = evt.dataTransfer.getData("text/plain")
            const targetElem = document.getElementById(targetId)

            if(targetElem == null || targetElem.classList.contains("box") == false)
                return;

            let idNumber = targetId.split("_")[1] * 1
            let productData = products.find(x => x.id === idNumber);
            const dropItem = new DragItem(productData, () => updateTotalPrice());
            dropItemList.push(dropItem)
            updateTotalPrice();
            dropzone.appendChild(dropItem.elem);
            targetElem.draggable = false;
            targetElem.classList.add("off");
        })

        dropzone.addEventListener("dragstart", evt => {
            if(evt.target.classList.contains("drop-item") == false) return;
            evt.dataTransfer.setData("text/plain", evt.target.id);
        });

        document.body.addEventListener("dragover", evt => evt.preventDefault());
        document.body.addEventListener("drop", evt => {
            //if(evt.target.classList.contains("drop-item") == false) return;
            evt.stopPropagation();
            evt.preventDefault();
            const targetId = evt.dataTransfer.getData("text/plain");
            const targetElem = document.getElementById(targetId);
            if(targetElem.classList.contains("drop-item") == false) return;

            targetElem.remove();

            let idNumber = targetId.split("_")[1] * 1
            // let productData = products.find(x => x.id === idNumber);
            const productElem = document.getElementById(`product_${idNumber}`)
            productElem.draggable = true;
            productElem.classList.remove("off")
        });

        function CreateBoxTemplate({id, price, image})
        {
            let div = document.createElement("div");
            div.innerHTML =`
            <div class="box me-1 mb-1" draggable="true" id="product_${id}">
                <div class="img-container">
                    <img src="${image}" alt="" draggable="false">
                </div>
                <div class="price-box">
                    <span class="price">${price}</span>
                </div>
            </div>`;
        return div.firstElementChild;
        }