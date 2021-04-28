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

events.listen("recipes", function (event) {
    event.remove({mod: "kibe"});
    var colours = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ]
    //Elevators
    colours.forEach(function (items, index) {
        event.shaped(item.of("kibe:" + items + "_elevator"), [
            ["minecraft:" + items + "_dye", "minecraft:ender_pearl", "minecraft:" + items + "_dye"],
            ["minecraft:iron_ingot", "minecraft:piston", "minecraft:iron_ingot"],
            ["minecraft:" + items + "_dye", "minecraft:iron_ingot", "minecraft:" + items + "_dye"],
        ]);
    });
    //Vacuum Hopper
    event.shaped(item.of("kibe:vacuum_hopper"), [
        ["minecraft:obsidian", "minecraft:iron_bars", "minecraft:obsidian"],
        ["minecraft:chest", "minecraft:ender_eye", "minecraft:bucket"],
        ["minecraft:obsidian", "minecraft:iron_bars", "minecraft:obsidian"],
    ]);
    //Cursed Seeds
    event.shaped(item.of("kibe:cursed_seeds"), [
        [null, "kibe:cursed_droplets", null],
        ["kibe:cursed_droplets", "minecraft:wheat_seeds", "kibe:cursed_droplets"],
        [null, "kibe:cursed_droplets", null],
    ]);
    //Iron Spikes
    event.shaped(item.of("kibe:iron_spikes", 4), [
        [null, "minecraft:iron_sword", null],
        ["minecraft:iron_sword", "minecraft:cobblestone_slab", "minecraft:iron_sword"],
    ]);
    //Diamond Spikes
    event.shaped(item.of("kibe:diamond_spikes", 4), [
        [null, "minecraft:diamond_sword", null],
        ["minecraft:diamond_sword", "kibe:iron_spikes", "minecraft:diamond_sword"],
    ]);
    //Void Bucket
    event.shaped(item.of("kibe:void_bucket"), [
        [null, "minecraft:ender_eye", null],
        ["minecraft:obsidian", "minecraft:bucket", "minecraft:obsidian"],
        [null, "minecraft:obsidian", null],
    ]);
    //Magnet
    event.shaped(item.of("kibe:magnet"), [
        ["minecraft:red_dye", "minecraft:iron_ingot", "minecraft:iron_ingot"],
        ["minecraft:iron_ingot", "minecraft:ender_eye", null],
        ["minecraft:red_dye", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ]);
    //Tank
    event.shaped(item.of("kibe:tank"), [
        ["minecraft:obsidian", "minecraft:glass", "minecraft:obsidian"],
        ["minecraft:glass", null, "minecraft:glass"],
        ["minecraft:obsidian", "minecraft:glass", "minecraft:obsidian"],
    ]);
    //XP Shower
    event.shaped(item.of("kibe:xp_shower"), [
        ["minecraft:iron_ingot", "minecraft:bucket"],
        [null, "minecraft:iron_bars"],
    ]);
    //XP Drain
    event.shaped(item.of("kibe:xp_drain"), [
        ["minecraft:iron_ingot", "minecraft:iron_bars", "minecraft:iron_ingot"],
        [null, "minecraft:bucket", null],
    ]);
    //Trash Can
    event.shaped(item.of("kibe:trash_can"), [
        ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
        ["minecraft:stone_bricks", "minecraft:chest", "minecraft:stone_bricks"],
        ["minecraft:stone_bricks", "minecraft:cactus", "minecraft:stone_bricks"],
    ]);
    //Golden Lasso
    event.shaped(item.of("kibe:golden_lasso"), [
        ["minecraft:gold_nugget", "minecraft:ender_eye", "minecraft:gold_nugget"],
        ["minecraft:gold_ingot", "minecraft:lead", "minecraft:gold_ingot"],
        ["minecraft:gold_nugget", "minecraft:ender_eye", "minecraft:gold_nugget"],
    ]);
    //Cursed Lasso
    event.shaped(item.of("kibe:cursed_lasso"), [
        ["kibe:cursed_droplets", "kibe:cursed_droplets", "kibe:cursed_droplets"],
        ["kibe:cursed_droplets", "kibe:golden_lasso", "kibe:cursed_droplets"],
        ["kibe:cursed_droplets", "kibe:cursed_droplets", "kibe:cursed_droplets"],
    ]);
    //Diamond Lasso
    event.shaped(item.of("kibe:diamond_lasso"), [
        [null, "kibe:golden_lasso", null],
        ["minecraft:diamond", "minecraft:lead", "minecraft:diamond"],
        [null, "kibe:cursed_lasso", null],
    ]);
    //Pocket Trash Can
    event.shapeless(item.of("kibe:pocket_trash_can"), ["#minecraft:signs", "kibe:trash_can"]);
})