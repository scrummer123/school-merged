/*
*
*   Welcome to my js file :D. I used ES6 functions
*
*/

// I decided to use sweetAlert, because i really like the clean toast messages
// Configuring sweetalert message
const msg = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

// Form submission
$("button").click(() => {
    $("#firstName").next().empty();
    $("#lastName").next().empty();
    $("#email").next().empty();
    $("#phone").next().empty();
    // Passing data to validator and to mailchimp POST function
    let data = {
        firstname: $("#firstName").val(),
        lastname: $("#lastName").val(),
        phone: $("#phone").val(),
        email: $("#email").val()
    };
    if(validateName(data)) sendToChimp(data);
});

// Validating form
validateName = ({firstname, lastname, phone, email}) => {
    if(!firstname) $("#firstName").next().text("Vul uw voornaam in");
    if(!lastname) $("#lastName").next().text("Vul uw achternaam in");

    // Regex
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
        $("#email").next().text("Vul een correct email-adres in");
        $("#email").attr("title", "Vul een correct email-adres in");
    }

    // Regex, 3 digits first 2, 4 digits last
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phone.match(phoneno)) $("#phone").next().text("Vul een correct telefoon nummer in");

    // One or more fields failed, return false;
    if(!firstname || !lastname || !email.match(mailformat) || !phone.match(phoneno)) {
        msg.fire({icon: "error", title: "Een of meerdere velden zijn niet juist ingevuld"});
        return false;
    }
    // Form validation successful, ready to be handled by mailchimp
    return true;
};

sendToChimp = ({firstname, lastname, phone, email}) => {
    let url = "https://us19.list-manage.com/subscribe/post-json?u=96995cd001655db14d94ec06a&amp;id=3d0c4f6c2a&c=?";
    let data = {FNAME: firstname, LNAME:lastname, EMAIL: email, PHONE: phone};
    let dataArray = $(this).serializeArray().map(item => data[item.name] = item.value);
    console.log(data);
    console.log(url);
    // Mailchimp post request
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        crossDomain: true,
        dataType: 'jsonp',
        success: (resp, text) => {
            if(resp.result === "error") {
                $("table tbody tr:last-child").after(`<tr class="table-danger text-dark"><td>${email}</td><td>${firstname}</td><td>${lastname}</td><td>${resp.msg}</td><td>${resp.result}</td></tr>`);
                msg.fire({icon: "error", title: resp.msg});
            } else {
                msg.fire({icon: "success", title: resp.msg});
                $("table tbody tr:last-child").after(`<tr class="table-success text-dark"><td>${email}</td><td>${firstname}</td><td>${lastname}</td><td>${resp.msg}</td><td>${resp.result}</td></tr>`);
            }
            console.log('mailchimp ajax submit success: ' + text);
            console.log(resp);
        },
        error: (resp, text) => {
            console.log('mailchimp ajax submit error: ' + text);
        }
    });
};