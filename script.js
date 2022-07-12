function sendMail(params){
    var tempParams = {
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    };

    emailjs.send('service_wnackcx','template_dav8rwp',tempParams)
    .then(function(res){
        console.log("success", res.status);
    
        alert("Yout mail sent successfully !")
    })
}