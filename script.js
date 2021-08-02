const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=' && display.value !== '')
        display.value = eval(display.value);
    else if (clickedButtonValue === 'C')
        display.value = '';
    else
        display.value += clickedButtonValue;
}