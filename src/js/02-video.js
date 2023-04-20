import Player from "@vimeo/player";
// const throttle = require("lodash.throttle");

import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const saveCurentTimeJson = localStorage.getItem("videoplayer-current-time");

playTime(saveCurentTimeJson)

player.on("timeupdate", throttle(saveLocalStorage, 1000))

player.off("timeupdate", saveLocalStorage)

player.off("timeupdate", function (data) {
    console.log(data)

    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
})



function playTime(obj) {
    console.log(obj);
    if (!obj) return;

    try {
        const { seconds } = JSON.parse(obj);
        player.setCurrentTime(seconds)

    } catch (err) {
        console.log(err.name)
        console.log(err.message)
    }
}



function saveLocalStorage(currentTime) {
    console.log(currentTime)

    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
}





    // let arr = [1,2,3,4,5]


    // function f(n) {
    //     return n * n
    // }


    // arr.map(f)


    // arr.map( function (n) {
    //     return n * n
    // })


    // arr.map((item) => {
    //     return item * item
    // })

    // arr.map((item) => item * item)


    // arr.map((item) => f(item))