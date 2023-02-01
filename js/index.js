// Récupération du conteneur DOM
const userInfos = document.getElementById('user')

// Méthode 1. Création d'un paragraphe en appelant un bête et simple module
//import { createParagraph } from './modules/paragraphModule.js'
//const newPara = createParagraph()

// Méthode 2. Création d'un paragraphe en appelant une classe
//import { paragraphCreator } from "./classes/ParagraphCreator.js"
//const creator = new paragraphCreator()
//const newPara = creator.createElement()
//creator.clickOnElement()

// Méthode 3a. Création d'un paragraphe en créant une factory et ajout du paragraphe au DOM
import { ParagraphFactory } from './factories/ParagraphFactory.js'
let creator = ParagraphFactory('p', "Coucou t'as vu", true)
let newPara = creator.createElement()
userInfos.appendChild(newPara)

// Méthode 3b. Création d'un titre en créant une factory et ajout du titre au DOM
creator = ParagraphFactory('h2', "Autre chose")
newPara = creator.createElement()
userInfos.appendChild(newPara)
