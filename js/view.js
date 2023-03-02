export default class ViewForm {
    constructor() {
        this.data = {}
    }

    elements = {
        form: document.querySelector('#form'),
        submitBtn: document.querySelector('#submitBtn'),
        name: document.querySelector('#name'),
        surname: document.querySelector('#surname'),
        birthDate: document.querySelector('#birthDate'),
        sex: document.querySelector('#sex'),
        phone: document.querySelector('#phone'),
        email: document.querySelector('#email'),
        adresse: document.querySelector('#adresse'),
        approvalYes: document.querySelector('#approvalYes'),
        approvalNo: document.querySelector('#approvalNo'),
        radioGroup: document.querySelector('.radioGroup'),
        resetBtn: document.querySelector('#resetBtn'),
        thanksForm: document.querySelector('.thanks')
    }

    getInputs() {
        this.data = {
            name: this.elements.name.value,
            surname: this.elements.surname.value,
            birthDate: this.elements.birthDate.value,
            sex: this.elements.sex.value,
            phone: this.elements.phone.value,
            email: this.elements.email.value,
            adresse: this.elements.adresse.value,
            appruval: this.elements.approvalYes.checked ? true : false
        }  
    }

    validateData() {
        (this.isOnlyString(this.data.name) || this.data.name === null) ? this.addValidateStyle(this.elements.name) : this.removeValidateStyle(this.elements.name);
        (this.isOnlyString(this.data.surname) || this.data.surname === null) ? this.addValidateStyle(this.elements.surname) : this.removeValidateStyle(this.elements.surname);
        (this.data.birthDate === null) ? this.addValidateStyle(this.elements.birthDate) : this.removeValidateStyle(this.elements.birthDate);
        (this.data.phone === null) ? this.addValidateStyle(this.elements.phone) : this.removeValidateStyle(this.elements.phone);
        this.isValidEmail(this.data.email) ? this.addValidateStyle(this.elements.email) : this.removeValidateStyle(this.elements.email);
    }

    submitData(){
        const markup = `<h1 >Thanks you ${this.data.name} ${this.data.surname} for submitting the form</h1>`
        if(!this.elements.form.querySelector('.notValid')){
            this.elements.form.classList.add('hide');
            this.elements.thanksForm.classList.remove('hide');
            this.elements.thanksForm.insertAdjacentHTML('beforeend', markup)
        }
    }

    addValidateStyle(element) {
        element.classList.add('notValid');
        element.closest('.input-container').querySelector('.errorMess').classList.remove('hide');
    }

    removeValidateStyle(element) {
        element.classList.remove('notValid');
        element.closest('.input-container').querySelector('.errorMess').classList.add('hide')
    }

    isOnlyString(myString) {
        let result;
        myString.match(/^[a-zA-Zа-яА-Я]+$/) !== null ? result = false : result = true;
        return result;
    }

    isValidEmail(myString) {
        let result;
        myString.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/) !== null ? result = false : result = true;
        return result;
    }

    formatPhone(phone) {
        let num = phone.target.value.replace(/\D/g, '').split(/(?=.)/), i = num.length - 1;
        console.log(num)
        if (phone[0] !== 7) num[0] = 7;
        if (0 <= i) num.unshift('+ ');
        if (1 <= i) num.splice(2, 0, ' (');
        if (4 <= i) num.splice(6, 0, ') ');
        if (7 <= i) num.splice(10, 0, '-');
        if (9 <= i) num.splice(13, 0, '-');
        if(num.length >= 17) num.pop();
        phone.target.value = num.join('');
    }

    warningForAppruval(element) {
        if (element.target.type === "radio") {
            element.target.value === 'Yes' ? this.hideWarning() : this.showWarning();
        }
    }

    hideWarning() {
        this.elements.radioGroup.querySelector('.warning').classList.add('hide');
    }

    showWarning() {
        this.elements.radioGroup.querySelector('.warning').classList.remove('hide');
    }

    resetForm(){
        this.elements.name.value = null;
        this.elements.surname.value = null;
        this.elements.birthDate.value = null;
        this.elements.phone.value = null;
        this.elements.email.value = null;
        this.elements.adresse.value = null;
        this.elements.approvalNo.checked = true;
    }
}

