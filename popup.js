function funcCalc() {
    let benefit = +document.getElementById("benefit").value;
    let innovation = +document.getElementById("innovation").value;
    let risk = +document.getElementById("risk").value;
    let level = +document.getElementById("level").value;
    let result = (benefit+innovation+risk)/level
    document.getElementById("total").innerHTML = result.toFixed(2)
}

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
    element.addEventListener('change', window.funcCalc)
});