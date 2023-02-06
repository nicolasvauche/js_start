export const ParagraphFactory = (
  element,
  message,
  hasColorChanging = false
) => {
  // Initialisation automatique d'un objet HTML
  const para = document.createElement(element)

  // Déclaration d'une méthode privée
  const changeTextColor = () => {
    window.setTimeout(() => {
      para.style.color = 'red'
    }, 2000)
  }

  // Méthode qui permet de créer 1 élément HTML
  const createElement = () => {
    // Définition du message à afficher initialement
    let myMessage = message

    // Création du paragraphe avec son texte
    para.innerText = myMessage

    // On change la couleur du texte à la demande
    hasColorChanging && changeTextColor()

    // On renvoie l'élément, qui sera ajouté au DOM par le contrôleur JS
    return para
  }

  // On rend nos méthodes accessibles de l'extérieur
  return { createElement }
}
