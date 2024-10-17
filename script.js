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

