const player = document.querySelector(".player");
const video = player.querySelector(".player__video");

const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");

const volume = player.querySelector(".volume");
const playbackSpeed = player.querySelector(".playbackSpeed");

const skipButtons = player.querySelectorAll("[data-skip]");

// Play and Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Change button icon
function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";
}

toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// Update progress bar
function updateProgress() {
    const percentage = (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percentage}%`;
}

video.addEventListener("timeupdate", updateProgress);

// Seek video using progress bar
progress.addEventListener("click", function(e) {
    const position = e.offsetX / progress.offsetWidth;

    video.currentTime = position * video.duration;
});

// Control volume
volume.addEventListener("input", function() {
    video.volume = this.value;
});

// Control playback speed
playbackSpeed.addEventListener("input", function() {
    video.playbackRate = this.value;
});

// Skip forward and backward
skipButtons.forEach(button => {
    button.addEventListener("click", function() {
        video.currentTime += Number(this.dataset.skip);
    });
});