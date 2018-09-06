$("#login").click(function(){
    let login = $("#login").val();
    let passwordLogin = $("#password-login").val();

    window.fetch(login, {
        method:'Post',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            user:login,
            password:passwordLogin
    })
    }).then(res => {
        console.log(res)
    })
});



$("#register").click(function(){
    let register = $("#register").val();
    let passwordRegister = $("#password-register").val();

    window.fetch(register, {
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