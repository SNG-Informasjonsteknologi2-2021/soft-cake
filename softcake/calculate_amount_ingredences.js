/*
 * Oppgave 1 - IT2 - 2021
 * Forslag til løsning
 * Author: Robert Strind<robstr@innlandetfylke.no>
 */
const servings = 100
/*
 * Sugar bread
 */
const eggs = 5 / 16
const sugar = 150 / 16
const flour = 150 / 16
const bakingSoda = 1 / 16

/*
 * Filling
 */
const cream = 3 / 16
const powderedSugar = 2 / 16
const milk = 1 / 16
const strawberyJam = 8 / 16
const walnut = 50 / 16
const banana = 1 / 16
const strawberries = 2 / 16

/*
 * Skriver ut kakeoppskrift
 * For ikke å få desimalverdier bruker jeg
 * Math.ceil() for å runde opp til nærmeste hele verdi.
 */
console.log(`Oppskrift bløtkake (${servings} porsjoner):

Sukkerbrød:
${Math.ceil(eggs * servings)} stk. egg
${Math.ceil(sugar * servings)} g sukker
${Math.ceil(flour * servings)} g hvetemel
${Math.ceil(bakingSoda * servings)} ts bakepulver

Fyll og pynt:
${Math.ceil(cream * servings)} pk kremfløte
${Math.ceil(powderedSugar * servings)} ss melis
${Math.ceil(milk * servings)} dl melk eller eplejuice til dynking
${Math.ceil(strawberyJam * servings)} ss jordbærsyltetøy
${Math.ceil(walnut * servings)} g grovhakkede valnøttkjerner
${Math.ceil(banana * servings)} stk. banan i skiver
${Math.ceil(strawberries * servings)} pk jordbær
`)
