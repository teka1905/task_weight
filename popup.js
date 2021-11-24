function funcCalc() {
    let innovation = +document.getElementById("innovation").value;
    let risk = +document.getElementById("risk").value;
    let level = +document.getElementById("level").value;
    let result = ((innovation+risk)/level) * 10
    document.getElementById("total").innerHTML = Number(result.toFixed(2))
}

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
    element.addEventListener('change', window.funcCalc)
});

function copyToClipboard() {
  let area = document.createElement('textarea');

  document.body.appendChild(area);
    area.value = document.getElementById("total").textContent;
    area.select();
    document.execCommand("copy");
  document.body.removeChild(area);
}

const copyElement = document.querySelectorAll('[data-action="copyElement"]');
copyElement.forEach((element) => {
    element.addEventListener('click', window.copyToClipboard)
});