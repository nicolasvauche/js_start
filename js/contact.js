import { createParagraph } from './modules/paragraphModule.js'

// Récupération du conteneur DOM
const divInfos = document.getElementById('info')

// Création d'un paragraphe en appelant un bête et simple module
const newPara = createParagraph()

// Ajout du paragraphe au DOM
divInfos.appendChild(newPara)
