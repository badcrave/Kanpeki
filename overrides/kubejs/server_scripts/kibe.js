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

// Tags
onEvent('item.tags', event => {
    event.add('okarin:deleted', 'kibe:regular_conveyor_belt')
    event.add('okarin:deleted', 'kibe:fast_conveyor_belt')
    event.add('okarin:deleted', 'kibe:express_conveyor_belt')
    event.add('okarin:deleted', 'kibe:slime_sling')
    event.add('okarin:deleted', 'kibe:chunk_loader')
    event.add('okarin:deleted', 'kibe:slime_boots')
})

// Recipies
events.listen("recipes", function (event) {
    event.remove({output: "#okarin:deleted"});
    })