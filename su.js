const wbutton = document.getElementById("wuqibutton");
const winfo = document.getElementById("wuqiinfo");
const jbutton = document.getElementById("jinengbutton");
const jinfo = document.getElementById("jinenginfo");

wbutton.addEventListener("click", function () {
    winfo.classList.toggle("hidden");

    if (info.classList.contains("hidden")) {
        button.textContent = "查看武器介绍";
    } else {
        button.textContent = "收起武器介绍";
    }
});
jbutton.addEventListener("click", function () {
    jinfo.classList.toggle("hidden");

    if (info.classList.contains("hidden")) {
        button.textContent = "查看技能介绍";
    } else {
        button.textContent = "收起技能介绍";
    }
});
