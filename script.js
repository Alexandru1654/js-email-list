const emailList = [];

// Function for email
function getEmails() {
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => {
            emailList.push(data.response);
            if (emailList.length === 10) {
                displayEmails();
            }
        })
        .catch(error => console.error('Errore:', error));
    }
}

// View emails in the dom
function displayEmails() {
    const ul = documentgetElementById('email-list');
    emailList.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        ul.appendChild(li);
    });
};

// Email recovery process
getEmails();

