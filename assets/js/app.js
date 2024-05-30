function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")

}
window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) {
        backtotop.style.display = 'block'
    }
    else {
        backtotop.style.display = 'none'
    }
})


