function funcCalc() {
    let benefit = document.getElementById("benefit").value;
    let innovation = document.getElementById("innovation").value;
    let risk = document.getElementById("risk").value;
    let level = document.getElementById("level").value;
    document.getElementById("total").innerHTML = Math.round((benefit*innovation*risk)/level)
}

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
    element.addEventListener('change', window.funcCalc)
});