// import '../styles/style.scss'

let isDark = false;
document.getElementById('cv__download').addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.className = "dark";
    }
    else
    {
        document.documentElement.className = "";
    }
},true)
