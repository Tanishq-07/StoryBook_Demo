//Component Story Format(CSF)


import MyButton from "./MyButton"


//Meta object 
export default{
    title : "My Stories/My Button story",
    component : MyButton,
    tags : ['autodocs'],
    parameters : {
        layout : 'centered'
    },
}



/*Stories starts from here : */

//Story 1 
export const Primary={
    args : {
        label : "Primary button",
        primary : true,
        size : "large",
        onClickFunction : ()=>alert("Hi there!"),
    
    }
}

//Story 2
export const Secondary={
    args : {
        label : "Secondary button",
        primary : false,
        size : "large",
        onClickFunction : ()=>alert("You have clicked secondary button!")
    
    }
}

//Story 3
export const Danger={
    args : {
        label : "Don't click it",
        primary : false,
        backgroundColor : "#e00404",
        color : "#ffffff",
        size : "large",
        onClickFunction : ()=>alert("You are hacked!!!")
    
    }
}

//Story 4
export const Info = {
    args: {
        label: "Notifications",
        primary: false,
        backgroundColor: "#32eee1",
        color: "#110b0b",
        size: "large",
        onClickFunction : ()=>alert('This is your notifications')
    }
};