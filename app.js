const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const responses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titleResult = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const helpResultat = document.querySelector('.aide');
const allTheQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === responses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titleResult.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            helpResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titleResult.innerText = `✨ Vous y êtes presque ! ✨`
            helpResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titleResult.innerText = `✨ Encore un effort ... 👀`
            helpResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titleResult.innerText = `👀 Il reste quelques erreurs. 😭`
            helpResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titleResult.innerText = `😭 Peux mieux faire ! 😭`
            helpResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titleResult.innerText = `👎 Peux mieux faire ! 👎`
            helpResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}


function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            allTheQuestions[j].style.background = 'lightgreen';
        } else {
            allTheQuestions[j].style.background = '#ffb8b8';
            allTheQuestions[j].classList.add('echec');

            setTimeout(() => {
                allTheQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

allTheQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})