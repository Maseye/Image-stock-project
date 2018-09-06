$("#confirm-login").click(function(){
    let login = $("#login").val();
    let passwordLogin = $("#password-login").val();

    console.log("click")

    window.fetch("http://192.168.43.248/login", {
        method:'Post',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            user:login,
            password:passwordLogin
    })
    }).then(res => {
        window.fetch('http://192.168.43.248/gallery', {
            method: 'get',
            headers: {
                'Content-type':'application/json',
            },
        })
    }).then(res => {
        console.log(res)
    })
});



$("#confirm-register").click(function(){
    let register = $("#register").val();
    let passwordRegister = $("#password-register").val();



    window.fetch("http://192.168.43.248/register", {
        method:'Post',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            user:register,
            password:passwordRegister
    })
    }).then(res => {
        console.log(res)
    })

});

