const video = document.getElementById('video-element');
const controls = document.getElementById('controls');

// 재생
document.getElementById('play').addEventListener('click', () => {
  video.play();
});

// 일시정지
document.getElementById('pause').addEventListener('click', () => {
  video.pause();
});

// 정지 (정지 후 처음부터 재생 가능하도록 currentTime 초기화)
document.getElementById('stop').addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

// 10초 되감기
document.getElementById('rewind').addEventListener('click', () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// 10초 빨리감기
document.getElementById('fastforward').addEventListener('click', () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 10);
});

// 감속하기 (0.1배씩 감소, 최소 0.1배)
document.getElementById('slowDown').addEventListener('click', () => {
  video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
});

// 배속하기 (0.1배씩 증가)
document.getElementById('speedUp').addEventListener('click', () => {
  video.playbackRate += 0.1;
});

// 배속 원래대로 돌리기 (1배속)
document.getElementById('resetSpeed').addEventListener('click', () => {
  video.playbackRate = 1;
});

// 컨트롤러 보이기/숨기기
document.getElementById('toggleControls').addEventListener('click', (e) => {
  if (controls.style.display === 'none') {
    controls.style.display = 'flex';
    e.target.textContent = '컨트롤러 숨기기';
  } else {
    controls.style.display = 'none';
    e.target.textContent = '컨트롤러 보이기';
  }
});

// 반복 켜기/끄기
document.getElementById('toggleRepeat').addEventListener('click', (e) => {
  video.loop = !video.loop;
  e.target.textContent = video.loop ? '반복 켜짐' : '반복 꺼짐';
});

// 자동재생 켜기/끄기 (페이지 로드 후 자동재생 여부를 변경)
document.getElementById('toggleAutoplay').addEventListener('click', (e) => {
  // 자동재생 설정은 video.autoplay 속성에 의해 제어됨.
  // 단, 이미 로드된 후에는 변경되더라도 즉시 반영되지 않을 수 있으므로 새로고침 필요.
  video.autoplay = !video.autoplay;
  e.target.textContent = video.autoplay ? '자동재생 켜짐' : '자동재생 꺼짐';
});

    // 샘플 상품 데이터 (카테고리별)
    const productsData = [
      {
        category: '전자제품',
        items: [
          { id: 'p1', name: '스마트폰', price: 300000, image: 'https://via.placeholder.com/100?text=스마트폰' },
          { id: 'p2', name: '노트북', price: 1500000, image: 'https://via.placeholder.com/100?text=노트북' }
        ]
      },
      {
        category: '의류',
        items: [
          { id: 'p3', name: '티셔츠', price: 20000, image: 'https://via.placeholder.com/100?text=티셔츠' },
          { id: 'p4', name: '청바지', price: 50000, image: 'https://via.placeholder.com/100?text=청바지' }
        ]
      }
    ];

    const nonMemberOrderBtn = document.getElementById('nonMemberOrderBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const nonMemberIDSpan = document.getElementById('nonMemberID');
    const displayArea = document.getElementById('displayArea');
    const orderTableBody = document.querySelector('#orderTable tbody');
    const totalAmountSpan = document.getElementById('totalAmount');
    const submitOrderBtn = document.getElementById('submitOrderBtn');
    const orderMessageDiv = document.getElementById('orderMessage');

    // 주문 데이터: key: product id, value: {product, quantity}
    const orderData = {};

    // 모달 열기 이벤트
    nonMemberOrderBtn.addEventListener('click', openModal);

    // 주문하기 버튼 이벤트 (모달 닫기 및 메인페이지 메시지 출력)
    submitOrderBtn.addEventListener('click', () => {
      const total = calculateTotal();
      const nonMemberID = nonMemberIDSpan.textContent;
      closeModal();
      showOrderMessage(`방금 비회원 ${nonMemberID}님이 ${total.toLocaleString()}원을 결제하셨습니다!`);
    });

    // 모달 열기 함수
    function openModal() {
      // 생성 시 비회원 랜덤ID 생성
      nonMemberIDSpan.textContent = generateRandomID(6);
      // 초기화 주문 데이터 및 UI
      for (let key in orderData) delete orderData[key];
      orderTableBody.innerHTML = '';
      totalAmountSpan.textContent = 0;
      // 전시영역 초기화
      renderDisplayArea();
      modalOverlay.style.display = 'flex';
    }

    // 모달 닫기 함수
    function closeModal() {
      modalOverlay.style.display = 'none';
    }

    // 랜덤 알파벳+숫자 6자리 생성
    function generateRandomID(length) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for(let i=0; i<length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }

    // 전시영역 렌더링: 카테고리별로 상품 출력
    function renderDisplayArea() {
      displayArea.innerHTML = '';
      productsData.forEach(categoryData => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'display-category';
        const title = document.createElement('h4');
        title.textContent = categoryData.category;
        categoryDiv.appendChild(title);

        const productsDiv = document.createElement('div');
        productsDiv.className = 'display-products';
        categoryData.items.forEach(product => {
          const prodDiv = document.createElement('div');
          prodDiv.className = 'display-product';
          prodDiv.setAttribute('draggable', true);
          prodDiv.dataset.id = product.id;
          prodDiv.dataset.name = product.name;
          prodDiv.dataset.price = product.price;
          prodDiv.innerHTML = `<img src="${product.image}" alt="${product.name}"><br>${product.name}<br>${product.price.toLocaleString()} 원`;
          // 드래그 이벤트
          prodDiv.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', product.id);
          });
          productsDiv.appendChild(prodDiv);
        });
        categoryDiv.appendChild(productsDiv);
        displayArea.appendChild(categoryDiv);
      });
    }

    // 주문영역에 상품 드랍 핸들러
    function orderDropHandler(e) {
      e.preventDefault();
      const prodId = e.dataTransfer.getData('text/plain');
      // 전시영역에서 해당 상품을 반투명 처리
      const prodElem = document.querySelector(`.display-product[data-id="${prodId}"]`);
      if (prodElem && !orderData[prodId]) {
        prodElem.classList.add('selected');
        // 주문 데이터에 추가 (최초 수량 1)
        orderData[prodId] = {
          id: prodId,
          name: prodElem.dataset.name,
          price: parseInt(prodElem.dataset.price),
          image: prodElem.querySelector('img').src,
          quantity: 1
        };
        renderOrderTable();
      }
    }

    // 주문영역 테이블 렌더링
    function renderOrderTable() {
      orderTableBody.innerHTML = '';
      for (let id in orderData) {
        const item = orderData[id];
        const row = document.createElement('tr');
        // 이미지
        const imgTd = document.createElement('td');
        imgTd.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50">`;
        row.appendChild(imgTd);
        // 상품명
        const nameTd = document.createElement('td');
        nameTd.textContent = item.name;
        row.appendChild(nameTd);
        // 수량 (변경가능)
        const qtyTd = document.createElement('td');
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = 1;
        qtyInput.value = item.quantity;
        qtyInput.addEventListener('change', (e) => {
          const newQty = parseInt(e.target.value);
          if(newQty < 1) {
            e.target.value = item.quantity;
            return;
          }
          item.quantity = newQty;
          renderOrderTable();
        });
        qtyTd.appendChild(qtyInput);
        row.appendChild(qtyTd);
        // 단가
        const priceTd = document.createElement('td');
        priceTd.textContent = item.price.toLocaleString();
        row.appendChild(priceTd);
        // 금액 (수량 * 단가)
        const amountTd = document.createElement('td');
        amountTd.textContent = (item.price * item.quantity).toLocaleString();
        row.appendChild(amountTd);

        // 주문 취소를 위한 드래그 이벤트 (주문영역 내 항목을 취소영역으로 드랍)
        row.setAttribute('draggable', true);
        row.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('orderId', id);
        });
        orderTableBody.appendChild(row);
      }
      updateTotalAmount();
    }

    // 총 결제금액 업데이트
    function updateTotalAmount() {
      let total = 0;
      for (let id in orderData) {
        total += orderData[id].price * orderData[id].quantity;
      }
      totalAmountSpan.textContent = total;
    }

    // 취소영역 드랍 핸들러: 주문영역에서 상품 선택 취소
    function cancelDropHandler(e) {
      e.preventDefault();
      const orderId = e.dataTransfer.getData('orderId');
      if(orderId && orderData[orderId]) {
        // 주문 취소: 주문데이터 삭제 및 전시영역의 해당 상품 반투명 해제
        delete orderData[orderId];
        const prodElem = document.querySelector(`.display-product[data-id="${orderId}"]`);
        if(prodElem){
          prodElem.classList.remove('selected');
        }
        renderOrderTable();
      }
    }

    // 메인페이지 주문 완료 메시지 출력 (3초간)
    function showOrderMessage(message) {
      orderMessageDiv.textContent = message;
      orderMessageDiv.style.display = 'block';
      setTimeout(() => {
        orderMessageDiv.style.display = 'none';
      }, 3000);
    }

    // 계산용 함수
    function calculateTotal() {
      let total = 0;
      for (let id in orderData) {
        total += orderData[id].price * orderData[id].quantity;
      }
      return total;
    }