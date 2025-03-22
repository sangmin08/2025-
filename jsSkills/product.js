let categories = {
    "health" :"건강식품",
    "digital" :"디지털",
    "fancy" :"팬시",
    "perfume" :"향수",
    "haircare" :"헤어케어"
}
export let products =[
    {
        id:1,
        title: "이뮨 멀티비타민&미네랄",
        description: "국내 판매 1위 멀티비타민 이뮨 14일분에 이중제형 + 남/녀 맞춤설계 포뮬러를 적용한 신제품",
        discountOption:"minus",
        discountValue:10000,
        price:75000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/health/1.PNG",
        category:"health"
    },
    {
        id:2,
        title: "센트룸",
        description: "생기 넘치는 일상을 위한 센트룸 우먼 더블업. 비타민 B군 8종 함량 2배, 23가지 비타민과 미네랄, 한국인 여성 맞춤 영양 설계",
        discountOption:"none",
        discountValue:0,
        price:27000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/health/2.PNG",
        category:"health"
    },
    {
        id:3,
        title: "닥터브라이언",
        description: "달콤한 청포도맛 구미로 맛있게 비타민 C와 D를 충전하세요. 활기찬 하루와 튼튼한 뼈 건강을 맛있게 충전하는 부드러운 젤리 타입",
        discountOption:"none",
        discountValue:0,
        price:2000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/health/3.PNG",
        category:"health"
    },
    {
        id:4,
        title: "액티브 멀티포맨",
        description: "미국판매 1위 내셔널 건강기능식품 브랜드. 남성 건강을 생각하는 22가지 주요 비타민&미네랄",
        discountOption:"none",
        discountValue:0,
        price:30000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/health/4.PNG",
        category:"health"
    },
    {
        id:5,
        title: "네이처메이드B12",
        description: "여성 건강을 생각하는 23가지 주요 비타민&미네랄, 한국인 1일 영양 권장량을 고려한 철분, 엽산이 강화된 여성종합비타민",
        discountOption:"none",
        discountValue:0,
        price:30000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/health/5.PNG",
        category:"health"
    },
    {
        id:6,
        title: "PANTONE PD충전 보조배터리",
        description: "230g의 가벼운 무게로 휴대성 극대화, 3way 빌트인 케이블 채용, 10,000mAh의 대용량 배터리팩 내장",
        discountOption:"none",
        discountValue:0,
        price:24400,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/digital/1.PNG",
        category:"digital"
    },
    {
        id:7,
        title: "Bowie D05 무선 블루투스 5.3 헤드셋 ",
        description: "현실같은 3D사운드 스테이지 제공, 70시간의 오디오 재생시간, 2시간으로 완전 충전",
        discountOption:"none",
        discountValue:0,
        price:36900,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/digital/2.PNG",
        category:"digital"
    },
    {
        id:8,
        title: "독거미 F99 기계식 키보드",
        description: "최고의 퍼포먼스를 경험하게 해주는 키보드, 안정적인 무선 전송, 저소음 디자인, 일체형 실리콘 패드 디자인으로 소음 최소화, 프리미엄 PCB기판 채용으로 안정적이고 편안한 타건감 제공 ",
        discountOption:"none",
        discountValue:0,
        price:70750,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/digital/3.PNG",
        category:"digital"
    },
    {
        id:9,
        title: "파이널마우스 스타라이트12 페가수스 미디엄",
        description: "최첨단 펌웨어를 갖춘 업계 최고의 노르딕 RF 플랫폼 기반의 무선 기술 채용, 최대 20,000CPI 해상도를 갖춘 e스포츠 센서 채용",
        discountOption:"percent",
        discountValue:0.1,
        price:1254000,
        shipPrice:3000,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/digital/4.jpg",
        category:"digital"
    },
    {
        id:10,
        title: "보이저5200 블루투스 이어폰",
        description: "4개의 마이크 탑재, 6중 바람차단, 강력한 노이즈 캔슬링, 공간의 소음을 최대로 줄여 최적의 업무 환경을 경험할 수 있습니다.",
        discountOption:"none",
        discountValue:0,
        price:146000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/digital/5.PNG",
        category:"digital"
    },
    {
        id:11,
        title: "명품 자동 장우산",
        description: "태풍에도 견디는 프리미엄 우드 장우산. 50개 이상 구매 시 손잡이 무료 각인 서비스 제공",
        discountOption:"none",
        discountValue:0,
        price:31600,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/fancy/1.PNG",
        category:"fancy"
    },
    {
        id:12,
        title: "14K 윙블링 원터치 링 귀걸이(주문제작)",
        description: "언제나 당신의 일상에 '편안한 멋' 평범한 순간마저 매력을 돋보이게 만들어 줄 14K Daily Collection. 본 상품은 주문 제작으로 배송은 약 7~10일 정도 소요됩니다(주말 및 공휴일 제외).",
        discountOption:"none",
        discountValue:0,
        price:250000,
        shipPrice:3000,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/fancy/2.PNG",
        category:"fancy"
    },
    {
        id:13,
        title: "14K 윙블링 메르시 목걸이(주문제작)",
        description: "언제나 변함없고 고급스러운 전체 14K 골드로 제작되어 소장 가치뿐만 아니라 우아한 아름다움을 선사합니다. 본 상품은 주문 제작으로 배송은 약 7~10일 정도 소요됩니다(주말 및 공휴일 제외).",
        discountOption:"none",
        discountValue:0,
        price:265000,
        shipPrice:3000,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/fancy/3.PNG",
        category:"fancy"
    },
    {
        id:14,
        title: "게이밍 이어폰 VJJB NI",
        description: "세계 1위 가성비 유선 이어폰. 듀얼 드라이버 기술로 완벽한 고품질 사운드와 교체가 가능한 분리형 커스텀 케이블",
        discountOption:"minus",
        discountValue:10000,
        price:38900,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/fancy/4.PNG",
        category:"fancy"
    },
    {
        id:15,
        title: "인스탁스 미니 에보",
        description: "당신이 보는 세상을 보여주세요. 가장 혁신적인 프리미엄 클래식 하이브리드 카메라, 묵직한 세련됨이 돋보이는 mini Evo의 클래식 디자인을 만나보세요.",
        discountOption:"none",
        discountValue:0,
        price:320000,
        shipPrice:3000,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/fancy/5.PNG",
        category:"fancy"
    },
    {
        id:16,
        title: "에스쁘아 솔리드 퍼퓸 4.2g",
        description: "새벽 달빛 아래 달큰한 체리가 어지럽게 흩어진 자리, 새하얀 자스민이 코끝을 스치고 자유롭게 남는 풍부한 머스크 향의 고체 향수",
        discountOption:"none",
        discountValue:0,
        price:26000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/perfume/1.PNG",
        category:"perfume"
    },
    {
        id:17,
        title: "호텔도슨 향수 오드퍼퓸 75ml",
        description: "향긋하고 보드라운 마른 꽃과 나무 향 뒤로 낙엽이 타는 듯한 베티버 향이 퍼지는 스파이시 플로럴 향",
        discountOption:"none",
        discountValue:0,
        price:153000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/perfume/2.PNG",
        category:"perfume"
    },
    {
        id:18,
        title: "랑방 레 플레르 EDT 90ml",
        description: "에너지 넘치고 빛나는 머스키 프루티 플로럴 향으로 부드러움과 반짝임의 완벽한 균형이 매력입니다.",
        discountOption:"none",
        discountValue:0,
        price:64500,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/perfume/3.PNG",
        category:"perfume"
    },
    {
        id:19,
        title: "몽블랑 익스플로러 EDP 60ml",
        description: "전 세계를 여행하는 탐험가의 향기. 에너제틱 베르가못에서 자연스러운 패출리로 이어지는 향의 여정(우디 레더리 아로마틱)",
        discountOption:"minus",
        discountValue:10000,
        price:103000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/perfume/4.PNG",
        category:"perfume"
    },
    {
        id:20,
        title: "캘빈클라인 One EDT 50ml",
        description: "남녀 모두에게 어울리는 현대적이며, 라이트한 향의 캘빈클라인 CK one 오 드 뚜왈렛. 상쾌하고 신선한 시트러스 계열의 향으로 편안하고 캐주얼한 향수",
        discountOption:"none",
        discountValue:0,
        price:58900,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/perfume/5.PNG",
        category:"perfume"
    },
    {
        id:21,
        title: "어노브 딥 데미지 트리트먼트 EX 더블",
        description: "부드러움에 집착하다! 어노브 집착 헤어팩! 단백질 3,000% UP으로 완성하는 극손상모 솔루션",
        discountOption:"none",
        discountValue:0,
        price:29800,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/haircare/1.PNG",
        category:"haircare"
    },
    {
        id:22,
        title: "려 루트젠 여성맞춤 볼륨 탈모증상케어 샴퓨 353ml",
        description: "근거있는 여성탈모 전문가 려 루트젠이 만든 촘촘탄탄 밀도탄력을 채우는 3D볼륨 탈모 샴푸. 부드럽고 향 좋은 약산성 비건 샴푸",
        discountOption:"none",
        discountValue:0,
        price:21900,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/haircare/2.PNG",
        category:"haircare"
    },
    {
        id:23,
        title: "라보에이치 두피쿨링&노세범 샴푸 333ml",
        description: "청량하게 리프레쉬-쿨링샴푸, 오래도록 뽀송뽀송-노세범샴푸, 두피장벽강화 특허기술-탈모증상 완화 기능성 샴푸",
        discountOption:"none",
        discountValue:0,
        price:19800,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/haircare/3.PNG",
        category:"haircare"
    },
    {
        id:24,
        title: "모로칸오일 헤어트리트먼트 100ml",
        description: "헤어케어, 컨디셔닝, 스타일링, 피니시까지 모두 가능한 단 하나의 헤어 오일 트리트먼트",
        discountOption:"none",
        discountValue:0,
        price:52200,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/haircare/4.PNG",
        category:"haircare"
    },
    {
        id:25,
        title: "닥터포헤어 피토프레시 헤어쿨링 스프레이 150ml",
        description: "열받아 예민해진 두피를 위한 즉각적인 두피 쿨링 솔루션. 온종일 느껴지는 상쾌함, 피토프레이 쿨링 스프레이",
        discountOption:"percent",
        discountValue:0.1,
        price:16000,
        shipPrice:2500,
        benefits:[
            "GIFTS카드 추가 10% 할인",
            "GiftsMall 포인트 최대 1% 적립"
        ],
        image:"/images/haircare/5.PNG",
        category:"haircare"
    },
];
