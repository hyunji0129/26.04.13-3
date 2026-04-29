function removeBanner(){
    const banner = document.querySelector("#top-banner");

    if(banner){
        banner.remove();
        console.log("배너가 제거 되었습니다.");
    }
}

const deleteButtons = document.querySelectorAll(".btn-delete");
const cartList = document.querySelector("#cart-list");
const empTyMsg = document.querySelector("#empty-cart");

deleteButtons.forEach((button) => {

    button.addEventListener("click", function (event){

        const item = event.target.closest(".cart-item");

        if(item){
            item.remove();
        }

        if(cartList.children.length === 0){
            empTyMsg.computedStyleMap.display = "block";
        }
    });

});
