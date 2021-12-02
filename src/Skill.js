class Skill {
    svgDelete = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                            <g clip-path=\"url(#clip0)\">\n" +
        "                                <path d=\"M12.7589 7.24609C12.5002 7.24609 12.2905 7.45577 12.2905 7.71448V16.5669C12.2905 16.8255 12.5002 17.0353 12.7589 17.0353C13.0176 17.0353 13.2273 16.8255 13.2273 16.5669V7.71448C13.2273 7.45577 13.0176 7.24609 12.7589 7.24609Z\"\n" +
        "                                      fill=\"#EE3F58\"/>\n" +
        "                                <path d=\"M7.23206 7.24609C6.97335 7.24609 6.76367 7.45577 6.76367 7.71448V16.5669C6.76367 16.8255 6.97335 17.0353 7.23206 17.0353C7.49077 17.0353 7.70044 16.8255 7.70044 16.5669V7.71448C7.70044 7.45577 7.49077 7.24609 7.23206 7.24609Z\"\n" +
        "                                      fill=\"#EE3F58\"/>\n" +
        "                                <path d=\"M3.20382 5.95419V17.4942C3.20382 18.1762 3.45393 18.8168 3.89084 19.2764C4.32574 19.7373 4.93098 19.9989 5.56439 20H14.4263C15.0599 19.9989 15.6652 19.7373 16.0999 19.2764C16.5368 18.8168 16.7869 18.1762 16.7869 17.4942V5.95419C17.6554 5.72366 18.2182 4.8846 18.102 3.99339C17.9857 3.10236 17.2266 2.43583 16.3279 2.43565H13.9298V1.85017C13.9325 1.35782 13.7379 0.885049 13.3893 0.537238C13.0408 0.18961 12.5673 -0.00396362 12.0749 6.15416e-05H7.91582C7.42347 -0.00396362 6.94996 0.18961 6.60142 0.537238C6.25288 0.885049 6.05821 1.35782 6.06095 1.85017V2.43565H3.66287C2.76416 2.43583 2.00505 3.10236 1.88869 3.99339C1.77251 4.8846 2.3353 5.72366 3.20382 5.95419ZM14.4263 19.0632H5.56439C4.76357 19.0632 4.14058 18.3753 4.14058 17.4942V5.99536H15.8501V17.4942C15.8501 18.3753 15.2272 19.0632 14.4263 19.0632ZM6.99772 1.85017C6.99461 1.60628 7.09048 1.37154 7.26356 1.19938C7.43646 1.02721 7.67175 0.932619 7.91582 0.936827H12.0749C12.319 0.932619 12.5543 1.02721 12.7272 1.19938C12.9003 1.37136 12.9961 1.60628 12.993 1.85017V2.43565H6.99772V1.85017ZM3.66287 3.37242H16.3279C16.7935 3.37242 17.171 3.74987 17.171 4.21551C17.171 4.68114 16.7935 5.05859 16.3279 5.05859H3.66287C3.19723 5.05859 2.81978 4.68114 2.81978 4.21551C2.81978 3.74987 3.19723 3.37242 3.66287 3.37242Z\"\n" +
        "                                      fill=\"#EE3F58\"/>\n" +
        "                                <path d=\"M9.99524 7.24609C9.73653 7.24609 9.52686 7.45577 9.52686 7.71448V16.5669C9.52686 16.8255 9.73653 17.0353 9.99524 17.0353C10.2539 17.0353 10.4636 16.8255 10.4636 16.5669V7.71448C10.4636 7.45577 10.2539 7.24609 9.99524 7.24609Z\"\n" +
        "                                      fill=\"#EE3F58\"/>\n" +
        "                            </g>\n" +
        "                            <defs>\n" +
        "                                <clipPath id=\"clip0\">\n" +
        "                                    <rect width=\"20\" height=\"20\" fill=\"white\"/>\n" +
        "                                </clipPath>\n" +
        "                            </defs>\n" +
        "                        </svg>";

    constructor(title = '', value = 0) {
        this.title = title;
        this.value = value;
    }

    render(parent) {
        const li = document.createElement("li");
        li.classList.add("skills__list-item");

        const skillName = document.createElement("span");
        skillName.classList.add("skills__list-item-header");
        skillName.innerText = this.title;

        const progressbarContainer = document.createElement("div");
        progressbarContainer.classList.add("progress-bar-container");
        progressbarContainer.classList.add("flex");

        const progress = document.createElement("progress");
        progress.value = this.value;
        progress.max = 100;

        const deleteBtn = document.createElement("div");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = this.svgDelete;

        const progressValue = document.createElement("span");
        progressValue.innerText = this.value + "%";
        progressValue.classList.add("progress-bar_value");

        progressbarContainer.appendChild(progress);
        progressbarContainer.appendChild(deleteBtn);

        li.appendChild(skillName);
        li.appendChild(progressbarContainer);
        li.appendChild(progressValue);

        parent.appendChild(li);

        deleteBtn.addEventListener('click', function () {
            parent.removeChild(li);
        });

    }
}


document.getElementById("btn-show-form").addEventListener('click', () => {
    document.getElementById("new-skill-form-container").classList.toggle("display-none");
}, false)

inputs = document.getElementById("new-skill-form").getElementsByClassName("new-skill-form__input");

document.getElementById("add-skill").addEventListener('click', (e) => {
    e.preventDefault();
    let ratio = Number.parseInt(inputs.namedItem("ratio").value);
    let title = inputs.namedItem("title").value;

    if (isNaN(ratio) || title === '') {
        alert("Incorrect input");
    } else {
        title = replaceAll(title, '<script>', '&gt;');
        title = replaceAll(title, '<', '&lt;');
        new Skill(title, ratio).render(document.getElementsByClassName("skills__list")[0]);
    }
    inputs.namedItem("ratio").value = "";
    inputs.namedItem("title").value = "";

});


new Skill('HTML', 30).render(document.getElementsByClassName("skills__list")[0]);
new Skill('JS', 20).render(document.getElementsByClassName("skills__list")[0]);
new Skill('CSS', 25).render(document.getElementsByClassName("skills__list")[0]);
new Skill('React', 5).render(document.getElementsByClassName("skills__list")[0]);

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
