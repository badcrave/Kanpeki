////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {
    // --------- INDUSTRIAL REVOLUTION --------- //
  
    var indrev_materials = ["copper", "gold", "iron", "tin", "steel", "silver"];
  
    var indrev_dusts = [
      "copper",
      "gold",
      "iron",
      "tin",
      "steel",
      "diamond",
      "coal",
    ];
  
    var indrev_metals = ["copper", "tin", "steel"];
  
    var indrev_ores = ["copper", "tin"];
  
    // Plates
    indrev_materials.forEach(function (item, index) {
      event.remove({
        type: "crafting_shaped",
        output: "techreborn:" + item + "_plate",
      });
  
      event.replaceOutput(
        {},
        "indrev:" + item + "_plate",
        "techreborn:" + item + "_plate"
      );
  
      event.remove({
        id: "indrev:shapeless/" + item + "_plate" + "_from_hammer",
      });
    });
  
    // Dusts
    indrev_dusts.forEach(function (item, index) {
      event.replaceOutput(
        {},
        "indrev:" + item + "_dust",
        "techreborn:" + item + "_dust"
      );
    });
  
    // Ingots
    indrev_metals.forEach(function (item, index) {
      event.replaceOutput(
        {},
        "indrev:" + item + "_ingot",
        "techreborn:" + item + "_ingot"
      );
  
      // Blocks
      event.replaceOutput(
        {},
        "indrev:" + item + "_block",
        "techreborn:" + item + "_storage_block"
      );
  
      // REI
      event.remove({ id: "indrev:shapeless/" + item + "_ingot_from_block" });
      event.remove({ id: "indrev:shapeless/" + item + "_nugget" });
      event.remove({ id: "indrev:shaped/" + item + "_ingot_from_nuggets" });
      event.remove({ id: "indrev:shaped/" + item + "_block" });
    });
  
    indrev_materials.forEach(function (item, index) {
      event.remove({ id: "indrev:smelting/" + item + "_ingot_from_smelting" });
      event.remove({ id: "indrev:smelting/" + item + "_ingot_from_dust" });
      event.remove({ id: "indrev:smelting/" + item + "_ingot" });
      event.remove({ id: "indrev:blasting/" + item + "_ingot_from_smelting" });
      event.remove({ id: "indrev:blasting/" + item + "_ingot_from_dust" });
    });
  
    indrev_ores.forEach(function (item, index) {
      event.remove({ id: "indrev:smelting/" + item + "_ingot_from_ore" });
      event.remove({ id: "indrev:blasting/" + item + "_ingot_from_ore" });
    });
  
    // --------- ULTIMATE REI FIX --------- //
  
    var rei_materials = [
      "tin",
      "copper",
      "lead",
      "aluminum",
      "chrome",
      "bronze",
      "silicon",
      "electrum",
      "invar",
      "nickel",
      "iron",
      "gold",
      "silver",
      "steel",
      "titanium",
      "tungsten",
    ];
  
    var rei_ingots = [
      "tin",
      "copper",
      "lead",
      "aluminum",
      "bronze",
      "electrum",
      "chrome",
      "invar",
      "nickel",
      "silver",
      "steel",
      "titanium",
      "tungsten",
    ];
  
    var rei_dusts = [
      "coal",
      "charcoal",
      "iron",
      "gold",
      "diamond",
      "emerald",
      "manganese",
      "chrome",
      "ruby",
      "nickel",
      "quartz",
      "copper",
      "aluminum",
      "lead",
      "tin",
      "silver",
      "steel",
      "bronze",
      "electrum",
      "titanium",
      "chrome",
    ];
  
    var rei_tinydusts = [
      "coal",
      "charcoal",
      "iron",
      "gold",
      "diamond",
      "emerald",
      "quartz",
      "copper",
      "lead",
      "tin",
      "silver",
      "steel",
      "bronze",
      "electrum",
    ];
  
    var rei_ores = ["tin", "copper", "lead", "bauxite", "silver", "salt"];
  
    var rei_gears = ["steel", "copper", "bronze", "tin"];
  
    // REI Dusts
    rei_dusts.forEach(function (item, index) {
      event.replaceInput(
        {},
        "#c:" + item + "_dusts",
        "techreborn:" + item + "_dust"
      );
    });

    // REI Gears
    rei_gears.forEach(function (item, index) {
      event.replaceInput(
        {},
        "#c:" + item + "_gears",
        "astromine:" + item + "_gear"
      );
    });
  
    // REI Ores
    rei_ores.forEach(function (item, index) {
      event.replaceInput(
        { id: "techreborn:smelting/" + item + "_ingot" },
        "#c:" + item + "_ores",
        "techreborn:" + item + "_ore"
      );
    });
  
    rei_ores.forEach(function (item, index) {
      event.replaceInput(
        { id: "techreborn:blasting/" + item + "_ingot" },
        "#c:" + item + "_ores",
        "techreborn:" + item + "_ore"
      );
    });
  
    // REI Ingots
    rei_ingots.forEach(function (item, index) {
      event.replaceInput(
        {},
        "#c:" + item + "_ingots",
        "techreborn:" + item + "_ingot"
      );
    });
  
    // REI Nuggets
    rei_ingots.forEach(function (item, index) {
      event.replaceInput(
        {},
        "#c:" + item + "_nuggets",
        "techreborn:" + item + "_nugget"
      );
    });
  
    // REI Blocks
    rei_ingots.forEach(function (item, index) {
      event.replaceInput(
        {},
        "#c:" + item + "_blocks",
        "techreborn:" + item + "_storage_block"
      );
    });
  });