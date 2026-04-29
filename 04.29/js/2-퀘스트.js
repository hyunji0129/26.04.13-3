// 1. 모든 탭 버튼 선택
const tabs = document.querySelectorAll(".tab-button");

// 2. 결과 출력 요소 선택
const resultText = document.querySelector("#selected-category");


// 3. 각 탭 버튼에 클릭 이벤트 등록
tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {

        // 4. 실제 클릭된 요소 저장
        const clickedTarget = event.target;

        // 5. 모든 버튼의 active 클래스 제거
        tabs.forEach((btn) => btn.classList.remove("active"));

        // 6. 클릭된 요소에 active 클래스 추가
        clickedTarget.classList.add("active");

        // 7. 클릭된 버튼의 텍스트를 화면에 출력
        resultText.textContent = clickedTarget.innerText;

        // 8. 콘솔 출력
        console.log("클릭된 요소:", clickedTarget);
    });
});