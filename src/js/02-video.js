import Player from "@vimeo/player";

import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const saveCurentTimeJson = localStorage.getItem("videoplayer-current-time");

playTime(saveCurentTimeJson)

player.on("timeupdate", throttle(saveLocalStorage, 1000))

player.off("timeupdate", saveLocalStorage)





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




