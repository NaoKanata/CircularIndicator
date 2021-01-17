localStorage.setItem("progress", 0);
localStorage.setItem("length", 0);
localStorage.setItem("isRunning", false);
setTimeout(timer, 16);
var image_data = new ImageData(256, 256);
var audio = new Audio("sound.mp3")

function timer() {
    var length = localStorage.getItem("length");
    var nowDate = localStorage.getItem("nowDate");
    var isRunning = localStorage.getItem("isRunning");
    if (isRunning == "true")
    {
        var interval = ((new Date()).getTime() - nowDate) / (1000);
        var progress = Math.floor(interval / length * 100);
        if (progress >= 100)
        {
            localStorage.setItem("progress", 100);
            localStorage.setItem("length", 0);
            localStorage.setItem("isRunning", false);
            audio.play();
            chrome.browserAction.setIcon({
                path: 'icons/19w/10.png'
            });
            localStorage.setItem("progress", 0);
            setTimeout(alertWait, 100);
        }
        else
        {
            localStorage.setItem("progress", progress);
            chrome.browserAction.setIcon({
                path: 'icons/19w/' + Math.floor(progress/10) + '.png'
            });
        }
    }
    else
    {
        localStorage.setItem("progress", 0);
        chrome.browserAction.setIcon({
            path: 'icons/19w/10.png'
        });
    }
    setTimeout(timer, 16);
}

function alertWait() {
    alert("Finished!");
}