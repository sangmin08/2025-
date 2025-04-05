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
        category: '건강식품',
        items: [
          { id: 'p1', name: '이뮨 멀티비타민&미네랄', price: 65000, image: '/A-Module/images/건강식품/1.PNG' },
          { id: 'p2', name: '센트룸', price: 27000, image: '/A-Module/images/건강식품/2.PNG' },
          { id: 'p3', name: '닥터브라이언', price: 2000, image: '/A-Module/images/건강식품/3.PNG' },
          { id: 'p4', name: '액티브 멀티포맨', price: 30000, image: '/A-Module/images/건강식품/4.PNG' },
          { id: 'p5', name: '네이처메이드B12', price: 30000, image: '/A-Module/images/건강식품/5.PNG' }
        ]
      },
      {
        category: '디지털',
        items: [
          { id: 'p6', name: 'PANTONE PD충전 보조배터리', price: 24400, image: '/A-Module/images/디지털/1.PNG' },
          { id: 'p7', name: 'Bowie D05 무선 블루투스 5.3 헤드셋', price: 36900, image: '/A-Module/images/디지털/2.PNG' },
          { id: 'p8', name: '독거미 F99 기계식 키보드', price: 70750, image: '/A-Module/images/디지털/3.PNG' },
          { id: 'p9', name: '파이널마우스 스타라이트12 페가수스 미디엄', price: 1128600, image: '/A-Module/images/디지털/4.jpg' },
          { id: 'p10', name: '보이저5200 블루투스 이어폰', price: 146000, image: '/A-Module/images/디지털/5.PNG' }
        ]
      },
      {
        category: '팬시',
        items: [
          { id: 'p11', name: '명품 자동 장우산', price: 31600, image: '/A-Module/images/팬시/1.PNG' },
          { id: 'p12', name: '14K 윙블링 원터치 링 귀걸이(주문제작)', price: 250000, image: '/A-Module/images/팬시/2.PNG' },
          { id: 'p13', name: '14K 윙블링 메르시 목걸이(주문제작)', price: 265000, image: '/A-Module/images/팬시/3.PNG' },
          { id: 'p14', name: '게이밍 이어폰 VJJB NI', price: 28900, image: '/A-Module/images/팬시/4.PNG' },
          { id: 'p15', name: '인스탁스 미니 에보', price: 320000, image: '/A-Module/images/팬시/5.PNG' }
        ]
      },
      {
        category: '향수',
        items: [
          { id: 'p16', name: '에스쁘아 솔리드 퍼퓸', price: 26000, image: '/A-Module/images/향수/1.PNG' },
          { id: 'p17', name: '호텔도슨 향수 오드퍼퓸', price: 153000, image: '/A-Module/images/향수/2.PNG' },
          { id: 'p18', name: '랑방 레 플레르 EDT', price: 64500, image: '/A-Module/images/향수/3.PNG' },
          { id: 'p19', name: '몽블랑 익스플로러 EDP', price: 93000, image: '/A-Module/images/향수/4.PNG' },
          { id: 'p20', name: '캘빈클라인 One EDT', price: 58900, image: '/A-Module/images/향수/5.PNG' }
        ]
      },
      {
        category: '헤어케어',
        items: [
          { id: 'p21', name: '어노브 딥 데미지 트리트먼트 EX 더블', price: 29800, image: '/A-Module/images/헤어케어/1.PNG' },
          { id: 'p22', name: '려 루트젠 여성맞춤 볼륨 탈모증상케어 샴퓨', price: 21900, image: '/A-Module/images/헤어케어/2.PNG' },
          { id: 'p23', name: '라보에이치 두피쿨링&노세범 샴푸', price: 19800, image: '/A-Module/images/헤어케어/3.PNG' },
          { id: 'p24', name: '모로칸오일 헤어트리트먼트', price: 52200, image: '/A-Module/images/헤어케어/4.PNG' },
          { id: 'p25', name: '닥터포헤어 피토프레시 헤어쿨링 스프레이', price: 14400, image: '/A-Module/images/헤어케어/5.PNG' }
        ]
      },
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