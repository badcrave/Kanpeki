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

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.information', event => {
  event.add('heartbond:ender_soul', 'Instructions', [
  'To craft: Combine any two ender hearts with a pieace of soul sand or soil in the crafting table.', 
  'To use: Both players must equip the ender heart in their Curios inventory (press g by default). Use the Ender Soul by holding down the use key. Voiala!'])
})