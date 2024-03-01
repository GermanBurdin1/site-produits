let templateElement = document.querySelector('#row-template');
let tbodyElement = document.querySelector('#tbody');

console.log('Делаем fetch запрос...');

fetch('http://ajax.local/pages/client/json_client.php')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }
        return response.json();
    })
    .then(json_resultat => {
        console.log('Полученные данные:', json_resultat);
        for (const valeur of json_resultat) {
            let cloneTemplate = templateElement.content.cloneNode(true);
            let ligne = cloneTemplate.firstElementChild;
            ligne.innerHTML = ligne.innerHTML.replace("{{numero}}", valeur.id)
                .replace("{{userid}}", valeur.num_client)
                .replace("{{nom}}", valeur.nom_client)
                .replace("{{prenom}}", valeur.prenom_client)
                .replace("{{ville}}", valeur.ville_nom_reel);
            tbodyElement.appendChild(ligne);
        }
    })
    .catch(error => {
        console.error('Ошибка в fetch запросе:', error);
    });




















// Utilisation d'API
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json_resultat => {
//     const tbody = document.getElementById('tbody');
//     const template = document.getElementById('row-template');

//     json_resultat.forEach((valeur, index) => {
//       const clone = document.importNode(template.content, true);
//       const numeroCell = clone.querySelector('td:nth-child(1)');
//       const useridCell = clone.querySelector('td:nth-child(2)');
//       const libelleCell = clone.querySelector('td:nth-child(3)');
//       const termineCell = clone.querySelector('td:nth-child(4)');
//       console.log(clone);

//       numeroCell.textContent = index + 1;
//       useridCell.textContent = valeur.userId;
//       libelleCell.textContent = valeur.title;
//       termineCell.textContent = valeur.completed ? 'Oui' : 'Non';

//       tbody.appendChild(clone);
//     });
//   });