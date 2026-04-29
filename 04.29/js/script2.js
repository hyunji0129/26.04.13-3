const tabs = document.querySelectorAll(".tab-button");
const resultText = document.querySelector("#selected-category");

tabs.forEach((tab) => {
    tab.addEventListener("click", function(event){
        const clickedTarget = event.target;

        tabs.forEach((btn) => btn.classList.remove("active"));
        clickedTarget.classList.add("active");
        resultText.textContent = clickedTarget.innerText;

        console.log("클릭된 요소:", clickedTarget);
    });
});

