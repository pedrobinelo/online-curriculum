const translations = {
    en: {
        mainTitle: "Hello, I am Pedro Binelo",
        job: "Junior software developer",
        location: "Campo Grande - MS / Brazil",
        selectLanguage: "Select language:",
        skills: "Skills",
        professionalSkills: "Professional skills:",
        personalSkills: "Personal skills:",
        organization: "Organization",
        communication: "Communication",
        teamwork: "Teamwork",
        commitment: "Commitment",
        languages: "Languages",
        portuguese: "Portuguese (BR)",
        english: "English",
        education: "Education",
        educationTitle: "Bachelor's Degree in Computer Engineering",
        educationDescription: "Federal University of Mato Grosso do Sul (UFMS)",
        portfolio: 'Portfolio',
        projectRepository: 'Project repository',
        professionalExperience: "Professional experience",
        firstOpportunity: "Looking for the first opportunity!",
        current: "Current",
        workDescription: "Looking for my first opportunity in front-end development."
    },
    pt: {
        mainTitle: "Olá, eu sou o Pedro Binelo",
        job: "Desenvolvedor de software júnior",
        location: "Campo Grande - MS / Brasil",
        selectLanguage: "Selecione o idioma:",
        skills: "Habilidades",
        professionalSkills: "Habilidades profissionais:",
        personalSkills: "Habilidades pessoais:",
        organization: "Organização",
        communication: "Comunicação",
        teamwork: "Trabalho em equipe",
        commitment: "Compromisso",
        languages: "Idiomas",
        portuguese: "Português (BR)",
        english: "Inglês",
        education: "Educação",
        educationTitle: "Bacharelado em Engenharia da Computação",
        educationDescription: "Universidade Federal de Mato Grosso do Sul (UFMS)",
        portfolio: 'Portfólio',
        projectRepository: 'Repositório do projeto',
        professionalExperience: "Experiência profissional",
        firstOpportunity: "Buscando a primeira oportunidade!",
        current: "Atual",
        workDescription: "Buscando minha primeira oportunidade no desenvolvimento front-end."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language");

    // Function to update the content based on selected language
    const updateLanguage = (lang) => {
        document.getElementById("main-title").textContent = translations[lang].mainTitle;
        document.getElementById("job").textContent = translations[lang].job;
        document.getElementById("location").textContent = translations[lang].location;

        // Skills section
        document.querySelector('button.trigger').textContent = translations[lang].skills;
        document.querySelector('#tools h3').textContent = translations[lang].professionalSkills;
        document.querySelector('#personal-skills h3').textContent = translations[lang].personalSkills;
        const personalSkillsList = document.querySelectorAll("#personal-skills li");
        personalSkillsList[0].textContent = translations[lang].organization;
        personalSkillsList[1].textContent = translations[lang].communication;
        personalSkillsList[2].textContent = translations[lang].teamwork;
        personalSkillsList[3].textContent = translations[lang].commitment;

        // Languages section
        const languageButton = document.querySelectorAll(".btn.trigger")[1];
        languageButton.textContent = translations[lang].languages;
        const langContent = document.querySelector("#spoken-languages");
        langContent.innerHTML = `
            <li>${translations[lang].portuguese}</li>
            <li>${translations[lang].english}</li>
        `;

        // Education section
        const educationButton = document.querySelectorAll(".btn.trigger")[2];
        educationButton.textContent = translations[lang].education;
        document.querySelector(".education-title").textContent = translations[lang].educationTitle;
        document.querySelector(".education-description").textContent = translations[lang].educationDescription;

       // Portfolio section
       const portfolioButton = document.querySelectorAll(".btn.trigger")[3];
       const repository = document.querySelectorAll(".repository");
       portfolioButton.textContent = translations[lang].portfolio;
       repository.forEach(repo => {
            repo.textContent = translations[lang].projectRepository;
       });

        // Professional experience section
        const experienceButton = document.querySelectorAll(".btn.trigger")[4];
        experienceButton.textContent = translations[lang].professionalExperience;
        document.querySelector(".prof-exp-title").textContent = translations[lang].firstOpportunity;
        document.querySelector(".work-time").textContent = translations[lang].current;
        document.querySelector(".work-description").textContent = translations[lang].workDescription;

        // Update label for language selector
        document.querySelector('label[for="language"]').textContent = translations[lang].selectLanguage;
    };

    // Change language on selection
    languageSelector.addEventListener("change", (event) => {
        updateLanguage(event.target.value);
    });

    // Set default language
    updateLanguage("en");
});
