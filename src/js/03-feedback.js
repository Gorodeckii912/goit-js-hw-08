import throttle from "lodash.throttle";


const dataLocalStorage = getLocalStorageItem("feedback-form-state")

// const dataUserJson = localStorage.getItem("feedback-form-state");


const form = document.querySelector(".feedback-form");



const utils= {
    email: "",
    message: ""
}



if (dataLocalStorage) {
    try {
        
        const dataConvert = JSON.parse(dataLocalStorage);

        const {email, message} = dataConvert;

        // console.log(form.elements)
        if (email) {
            form.elements.email.value = email
        }

        if (message) {
            form.elements.message.value = message
        }


    } catch (err) {
        console.log(err.name)
        console.log(err.message)
    }
}






form.addEventListener("input", throttle(onSaveUserData, 500));
form.addEventListener("submit", onSendForm)




function onSaveUserData(e) {
    const target = e.target;
    //utils["email"] = "dum4ickov6102@gmail.com"
    //utils["message"] = "some text"
    utils[target.name] = target.value
    // localStorage.setItem("feedback-form-state", JSON.stringify(data));
    saveToLocalStorage(utils)

}


function onSendForm(e) {
    e.preventDefault();

    const currentForm = e.currentTarget.elements
    console.log(currentForm)

    const {email, message} = currentForm


    if (!email.value || !message.value) {
        alert('Please fill in all fields');
    } else {
        const formData = {
            email: email.value,
            message: message.value
        }

        console.log(formData)

        currentForm.reset()
        localStorage.removeItem("feedback-form-state");

        utils.email = ""
        utils.message = ""


    }
}



function saveToLocalStorage(data) {
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}


function getLocalStorageItem(key) {
    return localStorage.getItem(key)
}



// function f(data) {
//     // const data;
//     console.log("Result: ",data)
//     // return 5
//     // f(124)
// }


// // f(124125412)
// f([1,2,3,4,5])
// f()

// console.log(2 + 2)
// console.log(2 + 3)
// console.log(2 + 4)




// console.log(sum(2, 2))
// console.log(sum(2, 3))
// console.log(sum(2, 4))

// function sum(num1, num2) {
//     return num1 + num2
// }