function Verifie()                                    
{ 
    var name = document.forms["RegForm"]["Nom"]; 
    var premon = document.forms["RegForm"]["Prenom"];                            
    var email = document.forms["RegForm"]["Email"];    
    var password = document.forms["RegForm"]["Password"];  
    
    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }    
    if (prenom.value == "")                               
    { 
        alert("Mettez votre prenom."); 
        prenom.focus(); 
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Entrer une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    
    if (password.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    }    
    
     return true; 
}


    
