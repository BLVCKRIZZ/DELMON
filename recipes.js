const RECIPES={};
function addRecipe(name,ingredients,steps,station='Crafting table',output=1){
  RECIPES[name]={name,ingredients,steps,station,output};
}
addRecipe('crafting table',[['Any planks',4]],'Place the 4 planks in a 2×2 square.');
addRecipe('planks',[['Any log or stem',1]],'Place a log or stem anywhere in the crafting grid.','Crafting grid',4);
addRecipe('stick',[['Any planks',2]],'Place 2 planks vertically in one column.', 'Crafting grid',4);
addRecipe('chest',[['Any planks',8]],'Fill every slot except the center slot.');
addRecipe('furnace',[['Cobblestone or blackstone',8]],'Fill every slot except the center slot.');
addRecipe('torch',[['Coal or charcoal',1],['Stick',1]],'Place coal or charcoal above a stick.', 'Crafting grid',4);
addRecipe('ladder',[['Sticks',7]],'Arrange the sticks in an H shape.','Crafting table',3);
addRecipe('barrel',[['Any planks',6],['Any wooden slabs',2]],'Place planks down both sides, with a slab at the top and bottom.');
addRecipe('slab',[['Same slab-compatible block (all 3 must match)',3]],'Use 3 blocks of the same slab-compatible material, such as stone bricks or oak planks.','Crafting table',6);
addRecipe('stairs',[['Same stair-compatible block (all 6 must match)',6]],'Use 6 blocks of the same stair-compatible material, such as stone bricks or oak planks.','Crafting table',4);
const STAIR_MATERIALS=[
  ['stone','Stone'],['cobblestone','Cobblestone'],['mossy cobblestone','Mossy cobblestone'],
  ['stone bricks','Stone bricks'],['stone brick','Stone bricks'],['mossy stone bricks','Mossy stone bricks'],['mossy stone brick','Mossy stone bricks'],
  ['granite','Granite'],['polished granite','Polished granite'],['diorite','Diorite'],['polished diorite','Polished diorite'],
  ['andesite','Andesite'],['polished andesite','Polished andesite'],
  ['cobbled deepslate','Cobbled deepslate'],['polished deepslate','Polished deepslate'],
  ['deepslate bricks','Deepslate bricks'],['deepslate brick','Deepslate bricks'],['deepslate tiles','Deepslate tiles'],['deepslate tile','Deepslate tiles'],
  ['tuff','Tuff'],['polished tuff','Polished tuff'],['tuff bricks','Tuff bricks'],['tuff brick','Tuff bricks'],
  ['bricks','Bricks'],['mud bricks','Mud bricks'],['mud brick','Mud bricks'],['sandstone','Sandstone'],
  ['smooth sandstone','Smooth sandstone'],['red sandstone','Red sandstone'],['smooth red sandstone','Smooth red sandstone'],
  ['quartz','Quartz block'],['smooth quartz','Smooth quartz'],
  ['prismarine','Prismarine'],['prismarine bricks','Prismarine bricks'],['prismarine brick','Prismarine bricks'],['dark prismarine','Dark prismarine'],
  ['purpur','Purpur block'],['nether bricks','Nether bricks'],['nether brick','Nether bricks'],['red nether bricks','Red nether bricks'],['red nether brick','Red nether bricks'],
  ['blackstone','Blackstone'],['polished blackstone','Polished blackstone'],
  ['polished blackstone bricks','Polished blackstone bricks'],['polished blackstone brick','Polished blackstone bricks'],['end stone bricks','End stone bricks'],['end stone brick','End stone bricks'],
  ['oak','Oak planks'],['spruce','Spruce planks'],['birch','Birch planks'],['jungle','Jungle planks'],
  ['acacia','Acacia planks'],['dark oak','Dark oak planks'],['mangrove','Mangrove planks'],
  ['cherry','Cherry planks'],['bamboo','Bamboo planks'],['crimson','Crimson planks'],['warped','Warped planks']
];
for(const [name,block] of STAIR_MATERIALS){
  addRecipe(`${name} stairs`,[[block,6]],`Use 6 ${block.toLowerCase()} of the same type in the stair pattern.`,'Crafting table',4);
  addRecipe(`${name} slab`,[[block,3]],`Use 3 ${block.toLowerCase()} of the same type in a horizontal row.`,'Crafting table',6);
}
addRecipe('glass pane',[['Glass',6]],'Fill the top and middle rows with glass.','Crafting grid',16);
addRecipe('stone bricks',[['Stone',4]],'Place 4 stone in a 2×2 square.','Crafting grid',4);
addRecipe('tnt',[['Gunpowder',5],['Sand or red sand',4]],'Alternate gunpowder and sand in a checkerboard pattern.');
addRecipe('bucket',[['Iron ingot',3]],'Place iron ingots in a V shape.','Crafting grid');
addRecipe('bread',[['Wheat',3]],'Place 3 wheat in a horizontal row.');
addRecipe('paper',[['Sugar cane',3]],'Place 3 sugar cane in a horizontal row.','Crafting table',3);
addRecipe('book',[['Paper',3],['Leather',1]],'Place 3 paper and 1 leather anywhere in the grid.');
addRecipe('bookshelf',[['Books',3],['Any planks',6]],'Place 3 books in the middle row and planks in the top and bottom rows.');
addRecipe('bow',[['Sticks',3],['String',3]],'Place sticks in a curve and string down the opposite column.');
addRecipe('crossbow',[['Sticks',3],['String',2],['Iron ingot',1],['Tripwire hook',1]],'Place the iron ingot in the top center, sticks in the top corners and middle sides, string above the center, and the tripwire hook in the center.');
addRecipe('shield',[['Any planks',6],['Iron ingot',1]],'Place an iron ingot at the top center and planks in a Y shape.');
addRecipe('fishing rod',[['Sticks',3],['String',2]],'Place sticks diagonally and string below the top-right stick.');
addRecipe('shears',[['Iron ingot',2]],'Place the 2 iron ingots diagonally.', 'Crafting grid');
addRecipe('flint and steel',[['Iron ingot',1],['Flint',1]],'Place the iron ingot and flint diagonally.', 'Crafting grid');
addRecipe('lever',[['Stick',1],['Cobblestone',1]],'Place a stick directly above cobblestone.','Crafting grid');
addRecipe('redstone torch',[['Stick',1],['Redstone dust',1]],'Place redstone dust directly above a stick.','Crafting grid');
addRecipe('piston',[['Any planks',3],['Cobblestone',4],['Iron ingot',1],['Redstone dust',1]],'Fill the top row with planks, put iron in the center, redstone at the bottom, and cobblestone in the remaining slots.');
addRecipe('sticky piston',[['Piston',1],['Slimeball',1]],'Place a slimeball directly above a piston.','Crafting grid');
addRecipe('dropper',[['Cobblestone',7],['Redstone dust',1]],'Fill every slot except the center and bottom-center slots; place redstone dust in the bottom-center slot.');
addRecipe('dispenser',[['Cobblestone',7],['Bow',1],['Redstone dust',1]],'Place a bow in the center, redstone dust at the bottom-center, and cobblestone in all other slots.');
addRecipe('hopper',[['Iron ingot',5],['Chest',1]],'Place a chest in the center with iron ingots around it in a V shape.');
addRecipe('repeater',[['Stone',3],['Redstone dust',1],['Redstone torches',2]],'Place 3 stone across the bottom, redstone dust in the center, and a redstone torch on each side.');
addRecipe('comparator',[['Stone',3],['Nether quartz',1],['Redstone torches',3]],'Place 3 stone across the bottom, quartz in the center, and 3 redstone torches across the top.');
addRecipe('observer',[['Cobblestone',6],['Redstone dust',2],['Nether quartz',1]],'Place 3 cobblestone across the top, cobblestone and quartz in the middle, then cobblestone and redstone dust across the bottom.');
addRecipe('stone button',[['Stone',1]],'Place stone anywhere in the crafting grid.','Crafting grid');
addRecipe('wooden button',[['Any planks',1]],'Place a plank anywhere in the crafting grid.','Crafting grid');
addRecipe('stone pressure plate',[['Stone',2]],'Place 2 stone side-by-side.','Crafting grid');
addRecipe('wooden pressure plate',[['Any planks',2]],'Place 2 planks side-by-side.','Crafting grid');
addRecipe('golden apple',[['Apple',1],['Gold ingot',8]],'Place the apple in the center and surround it with gold ingots.');
addRecipe('golden carrot',[['Carrot',1],['Gold nugget',8]],'Place the carrot in the center and surround it with gold nuggets.');
addRecipe('glistering melon',[['Melon slice',1],['Gold nugget',8]],'Place the melon slice in the center and surround it with gold nuggets.');
addRecipe('fermented spider eye',[['Spider eye',1],['Brown mushroom',1],['Sugar',1]],'Combine the spider eye, brown mushroom, and sugar anywhere in the grid.');
addRecipe('magma cream',[['Blaze powder',1],['Slimeball',1]],'Combine blaze powder and a slimeball anywhere in the grid.', 'Crafting grid');
addRecipe('netherite ingot',[['Netherite scrap',4],['Gold ingot',4]],'Combine 4 netherite scraps and 4 gold ingots anywhere in the grid.');
addRecipe('prismarine bricks',[['Prismarine shards',9]],'Fill the crafting grid with 9 prismarine shards.');
addRecipe('sea lantern',[['Prismarine crystals',5],['Prismarine shards',4]],'Put a prismarine shard in each corner and crystals in the other slots.');
addRecipe('end rod',[['Blaze rod',1],['Popped chorus fruit',1]],'Place the popped chorus fruit above a blaze rod.', 'Crafting grid',4);
addRecipe('eye of ender',[['Ender pearl',1],['Blaze powder',1]],'Combine an ender pearl and blaze powder anywhere in the grid.', 'Crafting grid');
addRecipe('conduit',[['Heart of the Sea',1],['Nautilus shells',8]],'Place the Heart of the Sea in the center and surround it with nautilus shells.');
for(const [wood,log] of [['oak','Oak log'],['spruce','Spruce log'],['birch','Birch log'],['jungle','Jungle log'],['acacia','Acacia log'],['dark oak','Dark oak log'],['mangrove','Mangrove log'],['cherry','Cherry log']]){
  addRecipe(`${wood} planks`,[[log,1]],'Place the log anywhere in the crafting grid.','Crafting grid',4);
  addRecipe(`${wood} door`,[[`${wood} planks`,6]],'Fill the first two columns with planks.','Crafting grid',3);
}
const TOOL_MATERIALS=[
  {name:'wooden',ingredient:'Any planks'},
  {name:'stone',ingredient:'Cobblestone or blackstone'},
  {name:'iron',ingredient:'Iron ingot'},
  {name:'golden',ingredient:'Gold ingot'},
  {name:'diamond',ingredient:'Diamond'}
];
const TOOL_RECIPES={
  pickaxe:{count:3,steps:'Place 3 materials across the top row and 2 sticks down the center.'},
  axe:{count:3,steps:'Place 3 materials in an axe-head pattern and 2 sticks down the handle.'},
  hoe:{count:2,steps:'Place 2 materials across the top-left and top-center, then 2 sticks down the center.'},
  sword:{count:2,stickCount:1,steps:'Place 2 materials vertically above a stick in the center column.'},
  shovel:{count:1,steps:'Place 1 material above 2 sticks in the center column.'}
};
for(const material of TOOL_MATERIALS){
  for(const [tool,recipe] of Object.entries(TOOL_RECIPES)){
    addRecipe(`${material.name} ${tool}`,[[material.ingredient,recipe.count],['Stick',recipe.stickCount||2]],recipe.steps);
  }
}
for(const [material,ingredient] of [['leather','Leather'],['iron','Iron ingot'],['golden','Gold ingot'],['diamond','Diamond']]){
  for(const [armor,count,steps] of [
    ['helmet',5,'Fill the top row and the two sides of the middle row.'],
    ['chestplate',8,'Fill every slot except the top-center slot.'],
    ['leggings',7,'Fill the top row and both sides down the next two rows.'],
    ['boots',4,'Place 2 materials on each side in the bottom two rows.']
  ]){
    addRecipe(`${material} ${armor}`,[[ingredient,count]],steps);
  }
}


function findRecipe(q){
  const normalized=q.toLowerCase().trim().replace(/\s+/g,' ');
  return RECIPES[normalized]||RECIPES[normalized.replace(/s$/,'')]||null;
}

function getRecipeSlots(recipe,size){
  const slots=Array(size*size).fill(null);
  const patterns={
    'crafting table':[[0,1,2,3],[0,1,2,3]],
    stick:[[0,2],[0,2]],
    chest:[[0,1,2,3,5,6,7,8],[0,1,2,3]],
    furnace:[[0,1,2,3,5,6,7,8],[0,1,2,3]],
    torch:[[0],[2]],
    ladder:[[0,2,3,5,6,8,4],[0,2,3,5]],
    barrel:[[0,2,3,5,6,8],[1,7]],
    bread:[[3,4,5],[0,1,2]],
    paper:[[3,4,5],[0,1,2]],
    bookshelf:[[3,4,5],[0,1,2,6,7,8]],
    bow:[[1,3,7],[2,5,8]],
    crossbow:[[0,2,3],[1,7],[4],[6]],
    shield:[[0,2,3,4,6,7],[1]],
    'fishing rod':[[2,4,6],[5,8]],
    shears:[[1,3],[1,2]],
    'flint and steel':[[0,4],[0,3]],

    lever:[[0],[2]],
    'redstone torch':[[2],[0]],
    piston:[[0,1,2],[3,5,6,7],[4],[8]],
    'sticky piston':[[1],[4]],
    dropper:[[0,1,2,3,5,6,8],[7]],
    dispenser:[[0,1,2,3,5,6,8],[4],[7]],
    hopper:[[0,2,3,5,7],[4]],
    repeater:[[6,7,8],[4],[3,5]],
    comparator:[[6,7,8],[4],[0,1,2]],
    observer:[[0,1,2,5,7,8],[3,6],[4]],
    'golden apple':[[4],[0,1,2,3,5,6,7,8]],
    'golden carrot':[[4],[0,1,2,3,5,6,7,8]],
    'glistering melon':[[4],[0,1,2,3,5,6,7,8]],
    'stone bricks':[[0,1,3,4],[0,1,2,3]],
    'glass pane':[[0,1,2,3,4,5],[0,1,2,3]],
    tnt:[[0,2,4,6,8],[1,3,5,7]],
    bucket:[[1,3,5],[0,2,3]],
    slab:[[3,4,5],[0,1,2]],
    stairs:[[2,5,8,4,7,6],[0,1,2,3]],
    'prismarine bricks':[[0,1,2,3,4,5,6,7,8],[0,1,2,3]],
    'sea lantern':[[1,3,4,5,7],[0,2,6,8]],
    'end rod':[[0],[2]],
    'eye of ender':[[0,3],[0,3]],
    conduit:[[4],[0,1,2,3,5,6,7,8]],
    door:[[0,1,3,4,6,7],[0,1,2,3]]
  };
  let positions;
  const name=recipe.name.toLowerCase();
  const tool=name.match(/^(?:wooden|stone|iron|golden|diamond) (pickaxe|axe|hoe|sword|shovel)$/)?.[1];
  const armor=name.match(/^(?:leather|iron|golden|diamond) (helmet|chestplate|leggings|boots)$/)?.[1];
  if(tool){
    const shapes={pickaxe:[[0,1,2],[4,7]],axe:[[0,1,3],[4,7]],hoe:[[0,1],[4,7]],sword:[[1,4],[7]],shovel:[[1],[4,7]]};
    positions=shapes[tool];
  }else if(armor){
    const shapes={helmet:[[0,1,2,3,5]],chestplate:[[0,2,3,4,5,6,7,8]],leggings:[[0,1,2,3,5,6,8]],boots:[[3,5,6,8]]};
    positions=[shapes[armor][0]];
  }else{
    const pattern=Object.keys(patterns).find(key=>name===key||name.endsWith(` ${key}`));
    positions=pattern?patterns[pattern]:null;
  }
  for(let ingredientIndex=0;ingredientIndex<recipe.ingredients.length;ingredientIndex++){
    const [item,count]=recipe.ingredients[ingredientIndex];
    let target=positions?.[ingredientIndex];
    if(!target){
      const occupied=slots.reduce((indexes,slot,index)=>{if(slot)indexes.push(index);return indexes},[]);
      target=Array.from({length:size*size},(_,index)=>index).filter(index=>!occupied.includes(index)).slice(0,Math.min(count,size*size));
    }
    const usable=target.filter(index=>index<size*size);
    if(!usable.length)continue;
    if(count>usable.length){
      slots[usable[0]]={item,count};
    }else{
      usable.slice(0,count).forEach(index=>{slots[index]={item,count:1}});
    }
  }
  return slots;
}


window.MinecraftCrafting={RECIPES,findRecipe,getRecipeSlots};
