// 👉 아래 질문에 답해보세요!

// event.target은 무엇을 의미하나요?
// → 이벤트가 발생했을 때, 실제로 클릭(또는 이벤트가 발생한) 요소를 가리키는 객체

// closest('.cart-item')은 어떤 역할을 하나요?
// → 현재 요소를 기준으로, 가장 가까운 부모 요소 중에서 .cart-item 클래스를 가진 요소를 찾아 반환한다.

// children.length === 0은 어떤 상태를 의미하나요?
// → 해당 요소 안에 자식 요소가 하나도 없는 상태, 즉 장바구니가 비어있는 상태를 의미한다.

/* ------------------------------------------------------------
   [문제 1] 상단 배너 제거 기능 완성하기
------------------------------------------------------------ */

function removeBanner() {

    // 1. id가 top-banner인 요소 선택
    const banner = document.querySelsctor('#top-banner');
    
    // 2. 요소가 존재하면 제거
    if (banner) {
        banner.remove();
    }
}



/* ------------------------------------------------------------
   [문제 2] 장바구니 삭제 기능 완성하기
------------------------------------------------------------ */

// 1. 모든 삭제 버튼 선택
const deleteButtons = document.quserySelectorAll('.btn-delete');

// 2. 장바구니 리스트 선택
const cartList = document.querySelector('#cart-list');

// 3. 빈 메시지 요소 선택
const emptyMsg = document.querySelector('#empty-cart');


// 4. 각 버튼에 클릭 이벤트 추가
deleteButtons.forEach(button => {

    button.addEventListener('click', function(event) {

        // 5. 클릭된 버튼 기준으로 가장 가까운 .cart-item 찾기
        const item = event.target.closest('.cart-item');
        
        // 6. 해당 요소 제거
        if (item) {
            item.remove();
        }

        // 7. 장바구니가 비어있으면 메시지 표시
        if (cartList.children.length === 0) {
            emptyMsg.style.display = 'block';
        }
    });

});
