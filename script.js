function checkForm(form){
    if(form.inputfield.value == ""){
        alert("false");
        form.inputfield.focus();
        return false;
    }
}
var re = /^[\w ]+$/;

if(!re.test(form.inputfield.value)){
    alert("invalido");
    form.inputfield.focus();
    return false;
}