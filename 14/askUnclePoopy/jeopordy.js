import { JeopardyButton, jeopardyData } from './Jeopordy.mjs';

const categories = Object.keys(jeopardyData);

categories.forEach((category) => {
    Array.from({length: 5}, (_, i) => (i + 1) * 100).forEach(num => {
        const button = new JeopardyButton(num, category);
        button.cellCreator();
    })
});

function closeQuestion() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


document.getElementById("overlay").addEventListener("click", closeQuestion);