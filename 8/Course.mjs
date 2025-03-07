const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'T,R', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'T,R', instructor: 'Sis A' }
    ],
    updateEnrollment: function (sectionNum, enroll = true) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        console.log(sectionIndex);
        if (sectionIndex !== -1) {
            if (enroll) {
                this.sections[sectionIndex].enrolled++;
            } else if (this.sections[sectionIndex].enrolled > 0) {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    },
    init: function () {
        injectCourseData(this);
        renderSections(this.sections);
    }
};

function injectCourseData(course) {
    document.getElementById("courseName").textContent = course.name
    document.getElementById("courseCode").textContent = course.code
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
} 

export default aCourse;