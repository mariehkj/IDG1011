class Profile{
    setProfile(n,a,e,t){
        let inputName = n;
        let inputAge = a;
        let inputEmail = e;
        let inputTlf = t;
        this.saveProfile(inputName,inputAge,inputEmail,inputTlf);
    }

    getProfile(){
        if(localStorage.getItem("name") !== null ){
            document.getElementById("FN").value = localStorage.getItem("name");
            document.getElementById("age").value = localStorage.getItem("age");
            document.getElementById("e").value = localStorage.getItem("email");
            document.getElementById("num").value = localStorage.getItem("tlf");
        }
    }

    saveProfile(name,age,email,tlf){
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
        localStorage.setItem("email",email);
        localStorage.setItem("tlf",tlf);
    }
}