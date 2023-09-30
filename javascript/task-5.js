const validform=document.querySelector('button');
validform.addEventListener("click",function(){
    if (document.getElementById('name').value==undefined) {
        document.getElementById('name').innerHTML="This field is required";
        document.getElementById('Name-field').style.borderColor = "red";
    }
    if (document.getElementById('email').value==undefined) {
        document.getElementById('email').innerHTML="A valid email address is required";
        document.getElementById('Email-field').style.borderColor = "red";
    }
    if (document.getElementById('website').value==undefined) {
        document.getElementById('website').innerHTML="A valid url is required";
        document.getElementById('Website-field').style.borderColor = "red";
    }
    if (document.getElementById('message').value==undefined) {
        document.getElementById('message').innerHTML="This field is required";
        document.getElementById('Message-field').style.borderColor = "red";
    }
});
