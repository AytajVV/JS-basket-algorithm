let table = document.querySelector(".table"); 
let minus = document.getElementById("minus");

if (localStorage.getItem("basket")!=null) {
    let arr = JSON.parse(localStorage.getItem("basket"));
    table.classList.remove("d-none");
    

    arr.forEach(product => {
        let tr = `
        <tr>
            <td>
            <img src="${product.imgUrl}" alt="" width="150" height="150">
            </td>
            <td>${product.name}</td>
            <td>${product.price.slice(0, product.price.length-2)}</td>
            <td>
                <i class="fa-solid fa-plus" id="plus"></i>
                <span id="count">${product.count}</span>
                <i class="fa-solid fa-minus" id="minus"></i>
            </td>
            <td><i id="remove" class="fa-solid fa-xmark"></i></td>
        </tr>
        
        `
        table.lastElementChild.innerHTML+=tr;
        
    });

    CalcTotalPrice(arr);
    Plus("3");
    Minus("3");


    
    

}


function CalcTotalPrice(arr) {
    let sum = arr.reduce((prev, next)=>{
        return prev+ next.price.slice(0, next.price.length-2)*next.count;
    },0)

    console.log(sum);
}



function Plus(id){
    let plus = document.querySelectorAll(".fa-plus");
    plus.forEach(p=>{
        p.addEventListener("click", function(){
            let array = JSON.parse(localStorage.getItem("basket"));
            let result = array.filter(i=>i.id==id);
            result.forEach(a=>{
                a.count++;
                p.nextElementSibling.innerText=a.count;
                
            }) 
            localStorage.setItem("basket", JSON.stringify(array));
            CalcTotalPrice(array);
            

            
            
            
        });

        
        
        
    })
}


function Minus(id) {
    let minus = document.querySelectorAll(".fa-minus");
    let minusId = document.getElementById("count");
    minus.forEach(m => {
        m.addEventListener("click", function () {
            let array = JSON.parse(localStorage.getItem("basket"));
            let result = array.filter(i => i.id == id);
            result.forEach(a => {
                a.count--;
                m.previousElementSibling.innerText = a.count;
            })
            localStorage.setItem("basket", JSON.stringify(array));
            CalcTotalPrice(array);
        });


    })


}

