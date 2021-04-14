//Codename: Okarin - Maintained by Starvexia
//  This script adds additional mod unification to make
//  AOF3's unification script compatible w/ Kanpeki w/o
//  Violating the CC-BY-ND liscense it is released under.

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading unification scripts...')

onEvent('recipes', event => {

//Block Removal
  event.remove({output: 'indrev:tungsten_block'})
  event.remove({output: 'indrev:silver_block'})
  event.remove({output: 'indrev:lead_block'})
  event.remove({output: 'indrev:electrum_block'})
  event.remove({output: 'indrev:bronze_block'})

//Ore replacement
  event.replaceInput({}, 'indrev:tungsten_ore', 'techreborn:tungsten_ore')
  event.replaceInput({}, 'indrev:silver_ore', 'techreborn:silver_ore')
  event.replaceInput({}, 'indrev:lead_ore', 'techreborn:lead_ore')
  event.replaceInput({}, 'indrev:tin_ore', 'techreborn:tin_ore')
  event.replaceInput({}, 'indrev:copper_ore', 'techreborn:copper_ore')

//Ingot replacement
  event.replaceOutput({}, 'indrev:lead_ingot', 'techreborn:lead_ingot')
  event.replaceOutput({}, 'indrev:silver_ingot', 'techreborn:silver_ingot')
  event.replaceOutput({}, 'indrev:tungsten_ingot', 'techreborn:tungsten_ingot')
  event.replaceOutput({}, 'indrev:electrum_ingot', 'techreborn:electrum_ingot')
  event.replaceOutput({}, 'indrev:bronze_ingot', 'techreborn:bronze_ingot')

//Dust replacement
  event.replaceOutput({}, 'indrev:tungsten_dust', 'techreborn:tungsten_dust')
  event.replaceOutput({}, 'indrev:sulfur_dust', 'techreborn:sulfur_dust')
  event.replaceOutput({}, 'indrev:silver_dust', 'techreborn:silver_dust')
  event.replaceOutput({}, 'indrev:lead_dust', 'techreborn:lead_dust')
  event.replaceOutput({}, 'indrev:iron_dust', 'techreborn:iron_dust')
  event.replaceOutput({}, 'indrev:electrum_dust', 'techreborn:electrum_dust')
  event.replaceOutput({}, 'indrev:bronze_dust', 'techreborn:bronze_dust')
  event.replaceOutput({}, 'indrev:diamond_dust', 'techreborn:diamond_dust')
  event.replaceInput({}, 'indrev:tungsten_dust', 'techreborn:tungsten_dust')
  event.replaceInput({}, 'indrev:sulfur_dust', 'techreborn:sulfur_dust')
  event.replaceInput({}, 'indrev:silver_dust', 'techreborn:silver_dust')
  event.replaceInput({}, 'indrev:lead_dust', 'techreborn:lead_dust')
  event.replaceInput({}, 'indrev:iron_dust', 'techreborn:iron_dust')
  event.replaceInput({}, 'indrev:electrum_dust', 'techreborn:electrum_dust')
  event.replaceInput({}, 'indrev:bronze_dust', 'techreborn:bronze_dust')
  event.replaceInput({}, 'indrev:diamond_dust', 'techreborn:diamond_dust')

//Plate replacement
  event.replaceOutput({}, 'indrev:tungsten_plate', 'techreborn:tungsten_plate')
  event.replaceOutput({}, 'indrev:electrum_plate', 'techreborn:electrum_plate')
  event.replaceOutput({}, 'indrev:bronze_plate', 'techreborn:bronze_plate')
  event.replaceOutput({}, 'indrev:lead_plate', 'techreborn:lead_plate')
})