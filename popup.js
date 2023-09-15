class State {
  constructor(name, calc_method) {
    this.name = name;
    this.calculate_weight = calc_method;
  }
}

const Task = new State('task', function () {
  let innovation = +document.getElementById("innovation").value;
  let risk = +document.getElementById("risk").value;
  let level = +document.getElementById("level").value;
  let irritation = +document.getElementById("irritation").checked;
  console.log(irritation)

  let result = ((innovation + risk) / level) * 10
  if (irritation) {
    result += 100
    console.log('result')
    console.log(result)
  }
  document.getElementById("total").innerHTML = Math.round(result)
})

const Flaky = new State('flaky', function () {
  let mass = document.getElementById("mass").value;
  let block = document.getElementById("block").value;
  let critical = document.getElementById("critical").value;
  document.getElementById("total").innerHTML = mass * block * critical * 10
})

const STATES = {
  'flaky': Flaky,
  'task': Task,
}

const FormMachine = {
  transit(new_state) {
    var new_state = document.querySelector('input[name="switch-one"]:checked').value;

    var old_state
    if (new_state == "flaky")
      old_state = "task"
    else
      old_state = "flaky"
    
    var mode = document.querySelector("#" + old_state);
    mode.style.display = 'none';

    mode = document.querySelector('#' + new_state);
    mode.style.display = 'grid';

    STATES[new_state].calculate_weight()
  },

  calculate() {
    var cur_state = document.querySelector('input[name="switch-one"]:checked').value;
    STATES[cur_state].calculate_weight()
  },

};

const form = Object.create(FormMachine)
form.transit()
form.calculate()


// _______________________Запуск подсчёта_______________________

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
  element.addEventListener('change', form.calculate)
});

// _____________________Радио-батоны режимов_____________________

const stateInputElements = document.querySelectorAll('[name="switch-one"]');
stateInputElements.forEach((element) => {
  element.addEventListener('change',  () => {
    for (const radioButton of stateInputElements) {
        if (radioButton.checked) {
          form.transit(radioButton.value);
            break;
        }
    }})
});

// ____________________Копирование веса в буфер____________________

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
