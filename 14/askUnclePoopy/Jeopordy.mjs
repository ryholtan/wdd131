export class JeopardyButton {
    constructor(value, category=null) {
        this.value = value;
        this.category = category;
        this.question = jeopardyData[category][value].question;
        this.answer = jeopardyData[category][value].answer;
    }

    showQuestion() {
        if (this.category in jeopardyData) {
            document.getElementById("question-text").textContent = this.question;
        } else {
            document.getElementById("question-text").textContent = "This is a demo of the question/answer system.";
        }
        document.getElementById("overlay").style.display = "block";
        document.getElementById("question-box").style.display = "block";
        document.getElementById("question-box").style.cursor = "pointer";

        const showAnswer = () => {
            document.getElementById("question-box").style.cursor = "auto";
            if (this.category in jeopardyData) {
                document.getElementById("question-text").textContent = this.answer;
            } 
        };

        document.querySelector(".question-box").addEventListener("click", showAnswer);
    }

    cellCreator() {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.value;
        cell.onclick = () => this.showQuestion();
        board.appendChild(cell);
    } 

}

export const jeopardyData = {
    "Writing a Paper": {
        100: { question: "What is the first step in writing a paper?", answer: "Brainstorming and outlining ideas." },
        200: { question: "What is a thesis statement?", answer: "A sentence that summarizes the main point of a paper." },
        300: { question: "How can you avoid plagiarism?", answer: "Cite sources properly using MLA, APA, or Chicago style." },
        400: { question: "What is a peer-reviewed source?", answer: "An article reviewed by experts before publication." },
        500: { question: "What tool can help with grammar and clarity?", answer: "Grammarly or Purdue OWL." }
    },
    "Making a Picture": {
        100: { question: "What free tool can be used for graphic design?", answer: "Canva or GIMP." },
        200: { question: "What is resolution in an image?", answer: "The number of pixels per inch (PPI)." },
        300: { question: "What is the difference between JPG and PNG?", answer: "PNG supports transparency, JPG is smaller in file size." },
        400: { question: "What is vector vs raster graphics?", answer: "Vector graphics scale infinitely, raster graphics do not." },
        500: { question: "What is a color palette and why is it important?", answer: "A set of colors used for consistency and aesthetic appeal." }
    },
    "Friends & Activities": {
        100: { question: "What is the easiest way to meet people in college?", answer: "Join a club or attend campus events." },
        200: { question: "What app can help organize events with friends?", answer: "Google Calendar or GroupMe." },
        300: { question: "What are intramural sports?", answer: "Recreational sports leagues for students." },
        400: { question: "What is a great way to network?", answer: "Attend career fairs and talk to professors." },
        500: { question: "How can you stay safe at social events?", answer: "Go with friends, watch your drink, and have a way home." }
    },
    "Shopping & Cooking": {
        100: { question: "What is a budget-friendly grocery store?", answer: "Aldi or Walmart." },
        200: { question: "What is meal prepping?", answer: "Cooking meals in advance to save time and money." },
        300: { question: "How can you store produce longer?", answer: "Keep veggies in the crisper and freeze excess food." },
        400: { question: "What is the easiest meal for a college student?", answer: "Pasta with canned sauce or a rice bowl." },
        500: { question: "What is a cheap protein source?", answer: "Beans, eggs, and peanut butter." }
    },
    "Dating & Staying Safe": {
        100: { question: "What is a red flag in dating?", answer: "Controlling behavior or lack of respect for boundaries." },
        200: { question: "What is the safest way to meet someone online?", answer: "Meet in a public place and tell a friend where you are." },
        300: { question: "What should you do if someone makes you uncomfortable?", answer: "Trust your instincts and leave the situation." },
        400: { question: "What app can help with safety on a date?", answer: "Noonlight or sharing location with a friend." },
        500: { question: "What is consent in a relationship?", answer: "Freely given, enthusiastic, and reversible agreement." }
    },
    "Studying Tips": {
        100: { question: "What is the Pomodoro Technique?", answer: "Studying in 25-minute blocks with short breaks." },
        200: { question: "How can you improve focus while studying?", answer: "Turn off notifications and find a quiet space." },
        300: { question: "What is active recall?", answer: "Testing yourself rather than just rereading notes." },
        400: { question: "How much sleep should a student get?", answer: "7-9 hours per night for optimal brain function." },
        500: { question: "What is a good tool for flashcards?", answer: "Anki or Quizlet." }
    },
    "Scam Advice": {
        100: { question: "What is phishing?", answer: "A scam where someone tries to steal personal info via email or messages." },
        200: { question: "What is the safest way to buy used textbooks?", answer: "Through reputable sites like Chegg or Amazon." },
        300: { question: "How can you tell if a job offer is a scam?", answer: "If it asks for upfront payment or personal info right away." },
        400: { question: "What is a common online scam?", answer: "Fake rental listings or tech support scams." },
        500: { question: "How can you protect your personal information online?", answer: "Use strong passwords and enable two-factor authentication." }
    },
    "Registering for Classes": {
        100: { question: "When should you register for classes?", answer: "As soon as registration opens to get the best schedule." },
        200: { question: "What is a prerequisite?", answer: "A class you must take before enrolling in another course." },
        300: { question: "How can you find easy electives?", answer: "Check RateMyProfessors or ask upperclassmen." },
        400: { question: "What is the best way to balance a schedule?", answer: "Mix hard and easy classes to avoid burnout." },
        500: { question: "What is waitlisting a class?", answer: "Signing up in case a spot opens later." }
    },
    "Phrases to Understand in Your Area": {
        100: { question: "What is ‘syllabus week’?", answer: "The first week of class where professors go over expectations." },
        200: { question: "What does ‘pulling an all-nighter’ mean?", answer: "Staying up all night to study or finish assignments." },
        300: { question: "What does ‘TA’ stand for?", answer: "Teaching Assistant – a student who helps with a class." },
        400: { question: "What is a ‘study group’?", answer: "A group of students who study together for exams." },
        500: { question: "What does ‘gen ed’ mean?", answer: "General education courses required for all students." }
    },
    "Religion Information": {
        100: { question: "What is an interfaith group on campus?", answer: "A club where students from different religions meet and discuss beliefs." },
        200: { question: "Where can you find a place of worship?", answer: "Check student services or local directories." },
        300: { question: "How can you practice your faith in college?", answer: "Join campus religious groups or attend services nearby." },
        400: { question: "What is a faith-based scholarship?", answer: "A scholarship given based on religious involvement or values." },
        500: { question: "How can you learn about other religions?", answer: "Take a world religions class or attend interfaith events." }
    },
    "Website & Internet Information": {
        100: { question: "What is a secure website?", answer: "A site that uses HTTPS encryption." },
        200: { question: "What is a VPN and why use one?", answer: "A Virtual Private Network encrypts internet traffic for security." },
        300: { question: "How can you tell if an email is a scam?", answer: "Check for misspellings, urgent language, and suspicious links." },
        400: { question: "What is a good way to manage passwords?", answer: "Use a password manager like Bitwarden or LastPass." },
        500: { question: "What is phishing and how can you avoid it?", answer: "A scam trying to steal personal data; avoid clicking unknown links." }
    }
};


