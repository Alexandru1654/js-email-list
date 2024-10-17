const emailList = [];

// Function for email
function getEmails() {
    const requests = [];
    for (let i = 0; i < 10; i++) {
        requests.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
    }

    axios.all(requests)
        .then(axios.spread((...responses) => {
            responses.forEach(response => {
                emailList.push(response.data.response);
            });
            displayEmails();
        }))
        .catch(error => console.error('Errore:', error));
}

// View emails in the dom
function displayEmails() {
    const ul = document.getElementById('email-list');
    emailList.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        ul.appendChild(li);
    });
}

// Email recovery process
getEmails();




