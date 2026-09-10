function createProfile() {

    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var language = document.getElementById("language").value;

    if (name === "" || course === "" || language === "") {

        alert("Please fill in all information.");

        return;
    }

    document.getElementById("studentName").textContent = name;

    document.getElementById("studentCourse").textContent = course;

    document.getElementById("studentLanguage").textContent = language;

    alert("Profile created successfully!");
}



// ADD SKILL

function addSkill() {

    var skillInput = document.getElementById("newSkill");

    var skill = skillInput.value.trim();

    if (skill === "") {

        alert("Please enter a skill.");

        return;
    }

    var newSkill = document.createElement("li");

    newSkill.textContent = skill;

    document.getElementById("skillList").appendChild(newSkill);

    skillInput.value = "";
}



// CHANGE BACKGROUND BUTTON

function changeBackground() {

    document.getElementById("profileCard").style.backgroundColor =
        "#081827";
}



// CHANGE PROFILE CARD COLOR

function changeCardColor(color) {

    document.getElementById("profileCard").style.backgroundColor =
        color;
}



// REMOVE PROFILE

function removeProfile() {

    document.getElementById("studentName").textContent =
        "John Doe";

    document.getElementById("studentCourse").textContent =
        "Computer Science";

    document.getElementById("studentLanguage").textContent =
        "JavaScript";


    document.getElementById("skillList").innerHTML =
        "<li>HTML</li>" +
        "<li>CSS</li>" +
        "<li>JavaScript</li>";


    document.getElementById("name").value = "";

    document.getElementById("course").value = "";

    document.getElementById("language").value = "";

    document.getElementById("newSkill").value = "";


    document.getElementById("profileCard").style.backgroundColor =
        "#081827";
}
