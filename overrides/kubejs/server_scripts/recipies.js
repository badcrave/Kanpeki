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

// I am Hououiin Kyouma!

// Missed Recipies and QOL

events.listen("recipes", function (event) {

// Broken Stuff
  event.remove({output: 'redstonebits:breaker'})
  event.remove({output: 'conveyance:catwalk_stairs'})
  event.remove({output: 'conveyance:catwalk'})

// Ender Heart
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


// Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);

// Crafting Pad
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:spruce_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:birch_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:jungle_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:acacia_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:dark_oak_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:crimson_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["morecraftingtables:warped_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:mossy_glowshroom_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:pythadendron_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:end_lotus_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:lacugrove_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:dragon_tree_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:tenanea_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:jellyshroom_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:helix_tree_crafting_table"],
    ["minecraft:stick"],
  ]);
  event.shaped(item.of("craftingpad:craftingpad", 1), [
    ["betterend:umbrella_tree_crafting_table"],
    ["minecraft:stick"],
  ]);
});
