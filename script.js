const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [], audio = new Audio("tunes/a.wav"); //set a as default tone

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    } , 200);
}


const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key));
})


const pressedKey = (e) => {
    if(allKeys.includes(e.key))
    playTune(e.key)
}

keysCheckbox.addEventListener("input",showHideKeys)
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);