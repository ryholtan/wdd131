function savePassword() {
    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!site || !username || !password) {
        alert('Please fill all fields');
        return;
    }

    let passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.push({ site, username, password });
    localStorage.setItem('passwords', JSON.stringify(passwords));
    displayPasswords();
}

function displayPasswords() {
    const passwordList = document.getElementById('passwordList');
    passwordList.innerHTML = '';
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

    passwords.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${entry.site}</strong> - ${entry.username} - <span onclick="togglePassword(${index})" style="cursor:pointer; color:blue;">Show</span> ` +
            `<button onclick="deletePassword(${index})">Delete</button>`;
        passwordList.appendChild(li);
    });
}

function togglePassword(index) {
    let passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    alert(`Password for ${passwords[index].site}: ${passwords[index].password}`);
}

function deletePassword(index) {
    let passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.splice(index, 1);
    localStorage.setItem('passwords', JSON.stringify(passwords));
    displayPasswords();
}

displayPasswords();