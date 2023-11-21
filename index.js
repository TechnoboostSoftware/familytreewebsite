function dropDownAnswer(element) {
    if (element.parentElement.classList.contains('close')) {
        element.parentElement.classList.remove('close');
        element.parentElement.classList.add('open');
    }
    else {
        element.parentElement.classList.add('close');
        element.parentElement.classList.remove('open');
    }
}

function contactUs() {
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var ContactNo = document.getElementById("ContactNo");
    var message = document.getElementById("message");
    let isError = false;

    var contactInfo = [name, mail, ContactNo, message];
    for (let i = 0; i < contactInfo.length; i++) {
        if (contactInfo[i].value == "") {
            contactInfo[i].style.border = "1px solid red"
            isError = true;
            // return false;
        }
    }
}
function removeErrorBorder(id) {
    document.getElementById(id).style.border = 'none'
}
