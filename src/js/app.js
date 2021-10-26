import '../styles/style.scss'

let isDark = false;
document.getElementById('cv__download').addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty('--main-color-left', 'white');
        document.documentElement.style.setProperty('--main-color-right', '#CEBCBCFF');
        document.documentElement.style.setProperty('--main-color-text', 'black');
        document.documentElement.style.setProperty('--main-background-color', 'black');
    }
    else
    {
        document.documentElement.style.setProperty('--main-color-left', '#444444');
        document.documentElement.style.setProperty('--main-color-right', '#222222');
        document.documentElement.style.setProperty('--main-color-text', 'white');
        document.documentElement.style.setProperty('--main-background-color', 'white');
    }
})