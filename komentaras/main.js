let bnt1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    let form = document.getElementById("form");
    form.style.display = "block";
});
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function (e) {
    e.preventDefault();
    swal("Dėkojame už komentarą!", "Gražios dienos", "success");
    let form = document.getElementById("form");
    form.style.display = "none";

});