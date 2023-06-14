const toggleSwitch = () => {
    let switchElement = document.getElementById("theme-switch");
    if (switchElement.checked) {
        document.documentElement.className = "solarized";
        window.localStorage.setItem("theme", "solarized");
    } else {
        document.documentElement.className = "light";
        window.localStorage.setItem("theme", "light");
    }
}

let theme = window.localStorage.getItem("theme");

if (theme) {
    if (theme === "solarized") {
        document.getElementById("theme-switch").checked = true;
    }
    document.documentElement.className = theme;
} else {
    window.localStorage.setItem("theme", "light");
    document.documentElement.className = "light";
}
