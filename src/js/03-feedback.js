import throttle from "lodash.throttle";


const dataLocalStorage = getLocalStorageItem("feedback-form-state")




const form = document.querySelector(".feedback-form");



const utils= {
    email: "",
    message: ""
}



if (dataLocalStorage) {
    try {
        
        const dataConvert = JSON.parse(dataLocalStorage);

        const {email, message} = dataConvert;

       
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

    utils[target.name] = target.value
  
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


