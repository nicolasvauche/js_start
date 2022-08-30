// Pointer sur un élément du DOM
const monBouton = document.getElementById('clickme')

// Écouter l'évènement Click déclenché sur notre bouton
monBouton.addEventListener('click', function () {
    // Demander une saisie à l'utilisateur
  const tonNom = window.prompt(
    'Tu as cliqué petit malin, dis-moi ton nom maintenant'
  )

  if (tonNom !== '' && tonNom !== null) {
    // Si la variable n'est pas vide et pas nulle non plus
    const paragraphe = document.querySelector('#message')
    paragraphe.innerText = 'Bonjour ' + tonNom
  } else {
    // Sinon
    window.alert('Ben du coup salut')
  }
})
