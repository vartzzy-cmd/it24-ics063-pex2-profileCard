const createButton = document.getElementById("create");
const backgroundButton = document.getElementById("background");
const addSkillButton = document.getElementById("addSkill");
const removeButton = document.getElementById("remove");

const profile = document.getElementById("profile");

let skills = [];

createButton.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const language = document.getElementById("language").value;

    if (name === "" || course === "" || language === "") {
        alert("Please fill in all fields.");
        return;
    }

    profile.innerHTML = `
        <div class="profile-name">${name}</div>

        <div class="profile-info">
            <strong>Course:</strong> ${course}
        </div>

        <div class="profile-info">
            <strong>Favorite Language:</strong> ${language}
        </div>

        <div id="skills"></div>
    `;

    skills = [];
});

backgroundButton.addEventListener("click", function () {

    const backgrounds = [
        "#ffcccc",
        "#ccffcc",
        "#ccccff",
        "#ffffcc",
        "#ffd9b3",
        "#e6ccff",
        "#ccffff",
        "#ffccff",
        "#d9d9d9",
        "#cce6ff"
    ];

    const random = Math.floor(Math.random() * backgrounds.length);

    profile.style.backgroundColor = backgrounds[random];
});

addSkillButton.addEventListener("click", function () {

    if (profile.innerHTML === "") {
        alert("Create a profile first.");
        return;
    }

    const skill = prompt("Enter a skill:");

    if (skill !== null && skill.trim() !== "") {

        skills.push(skill);

        const skillsDiv = document.getElementById("skills");

        skillsDiv.innerHTML = "";

        skills.forEach(function (item) {
            skillsDiv.innerHTML += `
                <span class="skill">${item}</span>
            `;
        });
    }
});

removeButton.addEventListener("click", function () {

    profile.innerHTML = "";
    profile.style.backgroundColor = "white";

    skills = [];
});

