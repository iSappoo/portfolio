
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


// do not touch above the line.






// ==============================================================================
// home section
const pics = {};
const bioData = [
    // about me
    {
        paragraph: "Hello everyone! I am <strong>Sapana Priyadarshanee</strong>, graduated from <b>Chandigarh University</b>, Punjab. I am passionated about my career and have achieved many technical skills with a good understanding and experience.<br><br> I am currently looking for a part-time job."
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

// ==============================================================================
// skill section
const hardSkillList = [
    {
        skill_name: 'HTML',
        progress: 50
    },
    {
        skill_name: 'CSS',
        progress: 40
    },
    {
        skill_name: 'JavaScript',
        progress: 20
    },
    {
        skill_name: 'C',
        progress: 30
    },
    {
        skill_name: 'C++',
        progress: 20
    },
    {
        skill_name: 'PHP',
        progress: 40
    },
    {
        skill_name: 'SQL',
        progress: 30
    },
    {
        skill_name: 'Java',
        progress: 40
    },
    {
        skill_name: 'Python',
        progress: 20
    },
    {
        skill_name: 'DSA',
        progress: 20
    }
];

const hardSkill = document.querySelector(".hard-skills");



for(let ele of hardSkillList) {
    const skill = document.createElement("div");
    skill.classList.add("skill");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const progress = document.createElement("div");
    progress.classList.add("progress");
    hardSkill.appendChild(skill);
    skill.appendChild(div1);
    skill.appendChild(div2);
    div2.appendChild(progress);

    div1.textContent = ele.skill_name;
    div2.style.width = "85%";
    progress.textContent = ele.progress + "%"
    progress.style.width = ele.progress + "%";
}



// =============================================================================
// footer contents
const footerContainer = document.querySelector(".footer-container");
const mediaContainer = document.createElement("div");
footerContainer.appendChild(mediaContainer);

const socialMedia = [
    // insta
    {
        media_name: "Instagram",
        link: "https://instagram.com/iSappoo"
    },
    // LindedIn
    {
        media_name: "Linkedin",
        link: "https://linkedin.com/in/Sappoo"
    }
];

for(let ele of socialMedia) {
    const mediaDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const link = document.createElement("a");

    mediaContainer.appendChild(mediaDiv);
    mediaDiv.appendChild(span1);
    span1.appendChild(link);

    link.textContent = ele.media_name;
    link.setAttribute('href', ele.link);
    link.setAttribute('target', '_blank');
    link.style.textDecoration = 'none';
    link.style.backgroundColor = 'white';
    link.style.padding = '2px 5px';
}
