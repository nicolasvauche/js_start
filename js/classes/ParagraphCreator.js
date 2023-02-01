export class paragraphCreator {
  constructor () {
    this.para = document.createElement('p')
  }

  createElement () {
    // Définition du message à afficher initialement
    let myMessage = "Coucou t'as vu"

    // Création du paragraphe avec son texte
    this.para.innerText = myMessage

    // Modification du message à afficher
    window.setTimeout(() => {
      myMessage = 'Salut'
      this.para.innerText = myMessage
    }, 2000)

    return this.para
  }

  clickOnElement () {
    this.para.addEventListener('click', () => {
      alert('tuclic')
    })
  }
}
