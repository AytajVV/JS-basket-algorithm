let a = 5;
//console.log(a);
//localStorage.setItem("num", a);

localStorage.getItem("num");
let user = {
    name: "aytaj",
    surname: "veyisli",
    age: "19"
}
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));
sessionStorage.setItem("sessionStorage", JSON.stringify(user));