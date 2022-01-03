var arr =JSON.parse(localStorage.getItem("credential")) ||  [];
    function signUp(){
        var data = {
            user: document.getElementById("user").value,
            Email: document.getElementById("email").value,
            Mobile: document.getElementById("mobile").value,
            Password: document.getElementById("pass").value,
        }
        arr.push(data);
        console.log(arr);

        localStorage.setItem("credential", JSON.stringify(arr));
    }