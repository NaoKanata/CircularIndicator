localStorage.setItem("progress", 0);
localStorage.setItem("length", 0);
setTimeout(timer, 16);

var data = 0
function timer() {
    var length = localStorage.getItem("length");
    var nowDate = localStorage.getItem("nowDate");
    if (length != 0)
    {
        var interval = ((new Date()).getTime() - nowDate) / (1000);
        var progress = Math.floor(interval / length * 100);
        if (progress >= 100)
        {
            localStorage.setItem("progress", 100);
            localStorage.setItem("length", 0);
            alert("終了しました！");
        }
        else
        {
            localStorage.setItem("progress", progress);
        }
        data+=1;
    }
    setTimeout(timer, 16);
}