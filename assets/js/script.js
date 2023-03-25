//let a = 5;
//console.log(a);
//localStorage.setItem("num", a);

// localStorage.getItem("num");
// let user = {
//     name: "aytaj",
//     surname: "veyisli",
//     age: "19"
// }
// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));
// sessionStorage.setItem("sessionStorage", JSON.stringify(user));


let btns = document.querySelectorAll(".btn-primary");
let basketCount=document.getElementById("basketCount");
btns.forEach(btn=>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        let id = btn.parentNode.getAttribute("data-id");
        if (localStorage.getItem("basket")==null) {
            localStorage.setItem("basket", JSON.stringify([]));
        };
        let arr = JSON.parse(localStorage.getItem("basket"));
        let exist = arr.find(p=>p.id==id);
        if (exist==undefined) {
            arr.push({
                id:id,
                imgUrl:btn.parentNode.previousElementSibling.getAttribute("src"),
                name:btn.parentNode.firstElementChild.innerText,
                price:btn.previousElementSibling.innerText,
                count:1
            });
        }
        else{
            exist.count++;
        }
       
        localStorage.setItem("basket", JSON.stringify(arr));
        CalcCount();
    });
});


function CalcCount() {
    if (localStorage.getItem("basket")!=null) {
        let arr = JSON.parse(localStorage.getItem("basket"));
        basketCount.innerText=arr.length;
    }
}
CalcCount();