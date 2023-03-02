import View from './view.js';

const view = new View();

export default function submitData() {
    view.elements.form.addEventListener('submit', submit);
    view.elements.phone.addEventListener('keyup', formatPhone);
    view.elements.radioGroup.addEventListener('click', warningForAppruval);
    view.elements.resetBtn.addEventListener('click', resetForm)
}

function submit(e) {
    e.preventDefault();
    view.getInputs();
    view.validateData();
    view.submitData();
}

function formatPhone(e){
    view.formatPhone(e)
}

function warningForAppruval(e){
    view.warningForAppruval(e)
}
function resetForm(){
    view.resetForm()
}