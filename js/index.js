// Envoyer une requete asynchrone avec JS
fetch('data/users.json')
  // Séparer les données de la réponse reçue
  .then(response => response.json())
  // Traiter les données reçues
  .then(users => {
    const userInfos = document.getElementById('user')

    // Boucler sur le tableau des utilisateurs
    users.forEach(user => {
      // Créer un div pour contenir l'utilisateur
      const userContainer = document.createElement('div')
      userContainer.classList.add('user')

      for (const key in user) {
        // Créer un paragraphe pour chaque propriété de l'utilisateur
        const userInfoContainer = document.createElement('p')
        userInfoContainer.innerHTML = '<strong>' + key.toUpperCase() + ' :</strong> ' + user[key]
        // Ajouter la proopriété au conteneur
        userContainer.appendChild(userInfoContainer)
      }

      // Ajouter le conteneur à notre DOM
      userInfos.appendChild(userContainer)
    })
  })
  // Agir en cas d'erreur
  .catch(e => {
    console.log(e.message)
  })
