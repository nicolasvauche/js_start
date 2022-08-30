// Envoyer une requete asynchrone avec JS
fetch('data/users.json')
  // Séparer les données de la réponse reçue
  .then(response => response.json())
  // Traiter les données reçues
  .then(userData => {
    const userInfos = document.getElementById('user')
    userInfos.innerHTML = "<p><strong>Nom :</strong> " + userData.name + "</p>"
    userInfos.innerHTML += "<p><strong>Email :</strong> " + userData.email + "</p>"
    userInfos.innerHTML += "<p><strong>Mot de passe :</strong> " + userData.password + "</p>"
  })
  // Agir en cas d'erreur
  .catch(e => {
    console.log(e.message)
  })
