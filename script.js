let allDrums = document.querySelectorAll('.drum');

document.addEventListener('keydown' , (e)=>{
    let targetedDrum = findSelectedElement(e.key);
    if (targetedDrum === null) { return }
    playDrum(targetedDrum)
});

function playDrum(targetedDrum) {
    targetedDrum.style.border = '3px solid yellow';
    targetedDrum.style.scale = 1.1;
    let audio = targetedDrum.nextElementSibling;
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        targetedDrum.style.border = 'none';
        targetedDrum.style.scale = 1;
    }, 500);
}

function findSelectedElement(eventKey) {
    for (const element of allDrums) {
        if (element.textContent.toLowerCase() === eventKey.toLowerCase()) {
            return element
        }
    } return null
};

allDrums.forEach(element => {
    element.addEventListener('click' , (e)=>{
        let targetedDrum = e.target;
        playDrum(targetedDrum);
    });
});