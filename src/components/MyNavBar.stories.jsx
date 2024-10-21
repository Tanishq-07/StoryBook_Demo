import MyNavBar from "./MyNavBar";

export default{
    title : "My stories/My Nav Bar",
    component : MyNavBar,
    tags : ['autodocs'],
    parameters : {
        layout : "fullscreen"
    }
}


//Story 1
export const LoggedIn={
    args : {
        user : { name : "Tanishq Soni"},
        logoutFunc : ()=>alert("You have successfully logged out")
    }
}

export const LoggedOut={
    args : {
        loginFunc : ()=>alert("you have logged In"),
        signupFunc : ()=>alert ("Redirecting to account creation")
    }
}