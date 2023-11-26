window.onload = function() {
    const button = document.getElementById("button");
    const res = document.getElementById("reset");
    const span = document.getElementById("span");
    const inp = document.getElementById("input");
    let money = localStorage.getItem("mny");

    if (money === null) {
        localStorage.setItem("mny", "0");
        money = "0";
    }

    button.addEventListener("click", clicked)
    res.addEventListener("click", reset)

    function clicked() {
        money = parseInt(money) + parseInt(inp.value);
        localStorage.setItem("mny", money.toString());
    }    

    function reset() {
        money = 0
        localStorage.setItem("mny", money.toString())
    }

    function update() {
        span.innerHTML = money;
        setTimeout(update, 50);
    }

    update();
}