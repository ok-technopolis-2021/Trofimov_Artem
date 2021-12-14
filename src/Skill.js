class Skill {

    constructor(title = '', value = 0, onSkillRemove) {
        this.title = title;
        this.value = value;
        this.onSkillRemove = onSkillRemove;
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

        const progressValue = document.createElement("span");
        progressValue.innerText = this.value + "%";
        progressValue.classList.add("progress-bar_value");

        progressbarContainer.appendChild(progress);
        progressbarContainer.appendChild(deleteBtn);

        li.appendChild(skillName);
        li.appendChild(progressbarContainer);
        li.appendChild(progressValue);

        parent.appendChild(li);

        deleteBtn.addEventListener('click', () => {
            parent.removeChild(li);
            if (this.onSkillRemove !== undefined) {
                this.onSkillRemove();
            }
        });

    }
}


document.getElementById("btn-show-form").addEventListener('click', () => {
    document.getElementById("new-skill-form-container").classList.toggle("display-none");
}, false)

inputs = document.getElementById("new-skill-form").getElementsByClassName("new-skill-form__input");

document.getElementById("new-skill-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const ratio = Number.parseInt(inputs.namedItem("ratio").value);
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

