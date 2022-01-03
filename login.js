var array =JSON.parse(localStorage.getItem("credential"));
console.log(array);
function signIn(){
   
       
         let Email1= document.getElementById("email");
        
        let Password1= document.getElementById("pass");

        for(let i = 0; i<array.length; i++){
            if(Email1.value === array[i].Email && Password1.value === array[i].Password){
                alert("Login Successful");
            }
            else{
                alert("Invalid Credentials");
            }
        }

    
}