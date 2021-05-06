//███████████████████████████████████████████████████████████████████████
//████ 00  1   ███1 ███████████████████████████████████10 ███████████████
//███001█████0  ██0 █████████████████████████████████████████████████████
//██1 `1█████01 0█  ████ 1 ████1`00  11███11 █ 011  ███100█  00101 1 ████
//██01  █████  10█ 1██ 01█████████████  ██ 0`1 ████ 01█ 1 █00 █████110 ██
//██  11█████101 █11  1 ███████ 001 1 10██01  █████████0  █1 ███████ 0███
//██110 █████0 1 █0 100  ████11 ████00  ██  1██████████ 00█ 0███████  ███
//███  10███ 1  ██ 10█ 1 0███0n██████ `0██1  ██████████1 1█7 ███████11███
//█████   1 10████0 ████ 01████0 0010  1██ 01██████████  0█1 0███████ 0 █
//███████████████████████████████████████████████████████████████████████

// I am Hououin Kyouma!

// Tags
onEvent('item.tags', event => {
  // Make Kibe rings slottable
  event.add('curios:ring', 'kibe:angel_ring')
  event.add('curios:ring', 'kibe:magma_ring')
  event.add('curios:ring', 'kibe:water_ring')
  // Crafting Ingredient Unification
  event.add('okarin:rod','adorn:stone_rod')
  event.add('okarin:rod','minecraft:blaze_rod')
  event.add('okarin:rod','minecraft:stick')
  // Kibe Crafting Tables
  event.add('okarin:workbench','minecraft:crafting_table')
  event.add('okarin:workbench','#c:workbench')
  event.add('okarin:workbench',/^morecraftingtables:/)
  event.add('okarin:workbench','betterend:mossy_glowshroom_crafting_table')
  event.add('okarin:workbench','betterend:pythadendron_crafting_table')
  event.add('okarin:workbench','betterend:end_lotus_crafting_table')
  event.add('okarin:workbench','betterend:lacugrove_crafting_table')
  event.add('okarin:workbench','betterend:dragon_tree_crafting_table')
  event.add('okarin:workbench','betterend:tenanea_crafting_table')
  event.add('okarin:workbench','betterend:umbrella_tree_crafting_table')
  event.add('okarin:workbench','betterend:jellyshroom_crafting_table')
  event.add('okarin:workbench','betterend:helix_tree_crafting_table')
  // Charm Portable Crafting
  event.removeAll('charm:crafting_tables')
  event.add('charm:crafting_tables','kibe:pocket_crafting_table')
  // Enderite Shulkers
  event.add('okarin:netherite_shulker','netherite_plus:netherite_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_white_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_orange_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_magenta_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_yellow_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_lime_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_pink_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_gray_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_light_blue_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_light_gray_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_cyan_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_purple_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_blue_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_brown_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_green_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_red_shulker_box')
  event.add('okarin:netherite_shulker','netherite_plus:netherite_black_shulker_box')
  // Curious Shulker
  event.add('curios:back','#enderitemod:shulker_boxes')
  event.add('curios:back','#okarin:netherite_shulker')
  // Charm Barrels Disabled
  event.remove('charm:barrels','minecraft:barrel')
  // Chest Unification
  event.add('c:chest','#charm:chests/wooden')
})

// Missed Recipies and QOL
events.listen("recipes", function (event) {

  // Wool Tarp
  event.shaped(item.of("campanion:wool_tarp"), [
    ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
  ]);

  // Campanion Bed
  event.replaceOutput({}, 'campanion:sleeping_bag','kibe:white_sleeping_bag')

// Broken Stuff
  event.remove({output: 'redstonebits:breaker'})
  event.remove({output: 'conveyance:catwalk_stairs'})
  event.remove({output: 'conveyance:catwalk'})
  event.remove({output: 'toms_storage:ts.paint_kit'})

// Chest Unification Recipe
  event.replaceInput({}, 'minecraft:chest', '#c:chest')

// Enderite Mod
  event.smithing('enderitemod:enderite_shulker_box','#okarin:netherite_shulker','enderitemod:enderite_ingot')
  event.smithing('gofish:ender_rod','netherite_plus:netherite_fishing_rod','enderitemod:enderite_ingot')
  event.remove({output: 'enderitemod:enderite_crossbow'})
  event.smithing('enderitemod:enderite_crossbow','netherite_plus:netherite_crossbow','enderitemod:enderite_ingot')
  event.remove({output: 'enderitemod:enderite_shield'})
  event.smithing('enderitemod:enderite_shield','netherite_plus:netherite_shield','enderitemod:enderite_ingot')
  event.remove({output: 'enderitemod:enderite_bow'})
  event.smithing('enderitemod:enderite_bow','netherite_plus:netherite_bow','enderitemod:enderite_ingot')
  event.remove({output: 'enderitemod:enderite_elytra_seperated'})
  event.smithing('enderitemod:enderite_elytra_seperated','netherite_plus:netherite_elytra','enderitemod:enderite_ingot')

// Pocket Wormhole recipe
  event.remove({output: 'waystones:pocket_wormhole'})
  event.shaped('waystones:pocket_wormhole', [
    'VBV',
    'VXV',
    'VBV'
  ], {
    X: 'blockus:ender_block',
    V: 'minecraft:end_stone_bricks',
    B: 'minecraft:obsidian'
  })

// Kibe Entangled requires Pocket Wormhole
event.replaceInput({mod: 'kibe'}, 'minecraft:gold_block', 'waystones:pocket_wormhole')

// Sticks QOL
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);

// Pocket Trash Can
  event.remove({output: 'kibe:pocket_crafting_table'})
  event.shaped(item.of('kibe:pocket_crafting_table', 1), [
    ["#okarin:workbench"],
    ["#okarin:rod"],
  ]);

// Pocket Crfting Table
event.shaped(item.of('kibe:pocket_trash_can', 1), [
  ['kibe:trash_can'],
  ["#okarin:rod"],
]);

//Charm Barrels
event.remove({output: '#charm:barrels'})
});