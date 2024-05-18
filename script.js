// ==============================================================================
// home section
const pics = {};
const bioData = [
    // about me
    {
        paragraph: "Hello everyone! I am <strong>Sapana Priyadarshanee</strong>, graducate from <b>Chandigarh University</b> Punjab. I am very passinated about my career and have achieved many technical skill with good understanding and experience.<br><br> I am currentaly looking for a part-time job."
    }
]
// Academic record
const academic = [
    // 10th
    {
        course: "10th",
        session: "2015 - 2017",
        greade: "First Division"
    },
    // 12th
    {
        course: "12th",
        session: "2019 - 2021",
        greade: "Second Division"
    },
    // graduation
    {
        course: "BCA",
        session: "2021 - 2024",
        greade: 'A'
    }
    // Post-graduation

];

const paragraph = document.querySelector(".paragraph");
paragraph.innerHTML = bioData[0].paragraph;

// home section ends

// ===================================================================================
// project section
const project = [
    {
        projectName: "Voice recognazation machine",
        description: "This machine will take voice command and perform task."
    }
];

const projectContainer = document.querySelector(".projects-container");
projectContainer.innerHTML = '';
const projectDiv = document.createElement("div");
projectDiv.classList.add("project-div");
projectContainer.appendChild(projectDiv);

const projectName = document.createElement("h1");
const description = document.createElement("p");

projectDiv.appendChild(projectName);
projectDiv.appendChild(description);

projectName.innerHTML = project[0].projectName;
description.innerHTML = project[0].description;
// project section ends

// ========================================================
// navigation button
const selected = document.querySelectorAll("nav li a");

function addEffect(e) {
    selected.forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected');
}
selected.forEach(button => button.addEventListener('click', addEffect));


// ============================================================
// disabling image download
document.querySelectorAll('img').forEach(img => {
    img.oncontextmenu = e => {
        e.preventDefault();
    };
});



// ===================================================================================
// top margin
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(window.innerWidth > 750) {
            e.preventDefault();
    
            let target = document.querySelector(this.getAttribute('href'));
            let headerOffset = 58; // height of your header
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
