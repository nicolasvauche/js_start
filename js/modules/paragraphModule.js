/**
 * MODULE DE CREATION DE PARAGRAPHE
 */

export const createParagraph = () => {
  // Définition du message à afficher initialement
  let myMessage = "Coucou t'as vu"

  // Création du paragraphe avec son texte
  const para = document.createElement('p')
  para.innerText = myMessage

  // Modification du message à afficher
  window.setTimeout(() => {
    myMessage = 'Salut'
    para.innerText = myMessage
  }, 2000)

  // On écoute le clic sur le paragraphe
  para.addEventListener('click', () => {
    alert('tuclic')
  })

  return para
}
