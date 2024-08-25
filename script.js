// Database of objects with their default properties
const objectDatabase = {
    // Town/City Items
    "barstool": { size: "Medium", defaultMaterial: "Wood" },
    "table": { size: "Medium", defaultMaterial: "Wood" },
    "chair": { size: "Medium", defaultMaterial: "Wood" },
    "bench": { size: "Medium", defaultMaterial: "Wood" },
    "door": { size: "Large", defaultMaterial: "Wood" },
    "window": { size: "Medium", defaultMaterial: "Glass" },
    "barrel": { size: "Medium", defaultMaterial: "Wood" },
    "crate": { size: "Medium", defaultMaterial: "Wood" },
    "wagon": { size: "Large", defaultMaterial: "Wood" },
    "signpost": { size: "Medium", defaultMaterial: "Wood" },
    "streetlamp": { size: "Medium", defaultMaterial: "Iron" },
    "fountain": { size: "Large", defaultMaterial: "Stone" },
    "statue": { size: "Large", defaultMaterial: "Stone" },
    "market_stall": { size: "Large", defaultMaterial: "Wood" },
    "well": { size: "Large", defaultMaterial: "Stone" },
    "chimney": { size: "Medium", defaultMaterial: "Stone" },
    "roof": { size: "Large", defaultMaterial: "Wood" },
    "shutter": { size: "Small", defaultMaterial: "Wood" },
    "fence": { size: "Medium", defaultMaterial: "Wood" },
    "gate": { size: "Large", defaultMaterial: "Wood" },
    "cobblestone": { size: "Tiny", defaultMaterial: "Stone" },
    "rain_barrel": { size: "Medium", defaultMaterial: "Wood" },
    "weathervane": { size: "Small", defaultMaterial: "Iron" },

    // Tavern/Inn Items
    "mug": { size: "Tiny", defaultMaterial: "Wood" },
    "plate": { size: "Tiny", defaultMaterial: "Wood" },
    "bottle": { size: "Tiny", defaultMaterial: "Glass" },
    "tankard": { size: "Tiny", defaultMaterial: "Wood" },
    "keg": { size: "Medium", defaultMaterial: "Wood" },
    "chandelier": { size: "Medium", defaultMaterial: "Iron" },
    "fireplace": { size: "Large", defaultMaterial: "Stone" },
    "bed": { size: "Large", defaultMaterial: "Wood" },
    "stool": { size: "Small", defaultMaterial: "Wood" },
    "candle": { size: "Tiny", defaultMaterial: "Wax" },
    "lantern": { size: "Tiny", defaultMaterial: "Iron" },
    "tablecloth": { size: "Medium", defaultMaterial: "Cloth" },
    "menu": { size: "Tiny", defaultMaterial: "Parchment" },
    "dartboard": { size: "Small", defaultMaterial: "Wood" },
    "bar": { size: "Large", defaultMaterial: "Wood" },
    "wine_rack": { size: "Medium", defaultMaterial: "Wood" },
    "spittoon": { size: "Small", defaultMaterial: "Brass" },

    // Dungeon Items
    "torch_holder": { size: "Small", defaultMaterial: "Iron" },
    "chain": { size: "Medium", defaultMaterial: "Iron" },
    "portcullis": { size: "Large", defaultMaterial: "Iron" },
    "chest": { size: "Medium", defaultMaterial: "Wood" },
    "coffin": { size: "Large", defaultMaterial: "Wood" },
    "sarcophagus": { size: "Large", defaultMaterial: "Stone" },
    "altar": { size: "Large", defaultMaterial: "Stone" },
    "pillar": { size: "Large", defaultMaterial: "Stone" },
    "pedestal": { size: "Medium", defaultMaterial: "Stone" },
    "brazier": { size: "Medium", defaultMaterial: "Iron" },
    "cauldron": { size: "Medium", defaultMaterial: "Iron" },
    "iron_maiden": { size: "Large", defaultMaterial: "Iron" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "stocks": { size: "Medium", defaultMaterial: "Wood" },
    "oubliette": { size: "Large", defaultMaterial: "Stone" },
    "gargoyle": { size: "Medium", defaultMaterial: "Stone" },
    "spike_trap": { size: "Medium", defaultMaterial: "Iron" },
    "pit": { size: "Large", defaultMaterial: "Stone" },
    "secret_door": { size: "Large", defaultMaterial: "Stone" },

    // Wilderness Items
    "tree": { size: "Large", defaultMaterial: "Wood" },
    "boulder": { size: "Large", defaultMaterial: "Stone" },
    "log": { size: "Medium", defaultMaterial: "Wood" },
    "campfire": { size: "Small", defaultMaterial: "Wood" },
    "tent": { size: "Medium", defaultMaterial: "Cloth" },
    "cart": { size: "Large", defaultMaterial: "Wood" },
    "bush": { size: "Medium", defaultMaterial: "Wood" },
    "rock": { size: "Medium", defaultMaterial: "Stone" },
    "stream": { size: "Large", defaultMaterial: "Water" },
    "fallen_tree": { size: "Large", defaultMaterial: "Wood" },
    "cave_entrance": { size: "Large", defaultMaterial: "Stone" },
    "vine": { size: "Medium", defaultMaterial: "Plant" },
    "mushroom": { size: "Tiny", defaultMaterial: "Plant" },
    "beehive": { size: "Small", defaultMaterial: "Wood" },

    // Castle/Keep Items
    "throne": { size: "Large", defaultMaterial: "Wood" },
    "tapestry": { size: "Large", defaultMaterial: "Cloth" },
    "suit_of_armor": { size: "Medium", defaultMaterial: "Steel" },
    "shield": { size: "Medium", defaultMaterial: "Wood" },
    "banner": { size: "Medium", defaultMaterial: "Cloth" },
    "candelabra": { size: "Medium", defaultMaterial: "Iron" },
    "drawbridge": { size: "Large", defaultMaterial: "Wood" },
    "arrow_slit": { size: "Small", defaultMaterial: "Stone" },
    "battlement": { size: "Large", defaultMaterial: "Stone" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "portcullis": { size: "Large", defaultMaterial: "Iron" },
    "moat": { size: "Large", defaultMaterial: "Water" },
    "coat_of_arms": { size: "Medium", defaultMaterial: "Wood" },

    // Common Items
    "book": { size: "Tiny", defaultMaterial: "Leather" },
    "scroll": { size: "Tiny", defaultMaterial: "Parchment" },
    "mirror": { size: "Small", defaultMaterial: "Glass" },
    "rug": { size: "Large", defaultMaterial: "Cloth" },
    "painting": { size: "Medium", defaultMaterial: "Wood" },
    "vase": { size: "Small", defaultMaterial: "Ceramic" },
    "chest_of_drawers": { size: "Large", defaultMaterial: "Wood" },
    "wardrobe": { size: "Large", defaultMaterial: "Wood" },
    "bookshelf": { size: "Large", defaultMaterial: "Wood" },
    "quill": { size: "Tiny", defaultMaterial: "Feather" },
    "inkwell": { size: "Tiny", defaultMaterial: "Glass" },
    "hourglass": { size: "Small", defaultMaterial: "Glass" },
    "globe": { size: "Medium", defaultMaterial: "Wood" },
    "abacus": { size: "Small", defaultMaterial: "Wood" },
    "bucket": { size: "Small", defaultMaterial: "Wood" },
    "telescope": { size: "Medium", defaultMaterial: "Brass" },

    // Miscellaneous
    "ladder": { size: "Large", defaultMaterial: "Wood" },
    "anvil": { size: "Medium", defaultMaterial: "Iron" },
    "forge": { size: "Large", defaultMaterial: "Stone" },
    "fishing_rod": { size: "Medium", defaultMaterial: "Wood" },
    "loom": { size: "Large", defaultMaterial: "Wood" },
    "spinning_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "plow": { size: "Large", defaultMaterial: "Wood" },
    "millstone": { size: "Large", defaultMaterial: "Stone" },
    "gallows": { size: "Large", defaultMaterial: "Wood" },
    "trebuchet": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "scarecrow": { size: "Medium", defaultMaterial: "Cloth" },
    "beehive": { size: "Medium", defaultMaterial: "Wood" },
    "birdcage": { size: "Small", defaultMaterial: "Iron" },
    "wagon_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "gravestone": { size: "Medium", defaultMaterial: "Stone" },
    "guillotine": { size: "Large", defaultMaterial: "Wood" },

    // Magical Items (treat as normal objects for gameplay purposes)
    "crystal_ball": { size: "Tiny", defaultMaterial: "Glass" },
    "magic_mirror": { size: "Medium", defaultMaterial: "Glass" },
    "enchanted_statue": { size: "Medium", defaultMaterial: "Stone" },
    "alchemy_table": { size: "Large", defaultMaterial: "Wood" },
    "spellbook": { size: "Small", defaultMaterial: "Leather" },
    "magical_orb": { size: "Tiny", defaultMaterial: "Glass" },
    "rune_stone": { size: "Small", defaultMaterial: "Stone" },
    "enchanted_weapon_rack": { size: "Medium", defaultMaterial: "Wood" },
    "potion_shelf": { size: "Medium", defaultMaterial: "Wood" },
    "arcane_circle": { size: "Large", defaultMaterial: "Stone" },
    "summoning_portal": { size: "Large", defaultMaterial: "Stone" },
    "enchanted_loom": { size: "Large", defaultMaterial: "Wood" },
    "scrying_pool": { size: "Medium", defaultMaterial: "Stone" },

    // Additional Items
    "lectern": { size: "Medium", defaultMaterial: "Wood" },
    "pulpit": { size: "Large", defaultMaterial: "Wood" },
    "pew": { size: "Large", defaultMaterial: "Wood" },
    "confessional": { size: "Large", defaultMaterial: "Wood" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "weathervane": { size: "Small", defaultMaterial: "Iron" },
    "bell": { size: "Medium", defaultMaterial: "Bronze" },
    "clocktower": { size: "Large", defaultMaterial: "Stone" },
    "battering_ram": { size: "Large", defaultMaterial: "Wood" },
    "siege_tower": { size: "Large", defaultMaterial: "Wood" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "gibbet": { size: "Medium", defaultMaterial: "Iron" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "iron_maiden": { size: "Large", defaultMaterial: "Iron" },
    "thumbscrew": { size: "Tiny", defaultMaterial: "Iron" },
    "branding_iron": { size: "Small", defaultMaterial: "Iron" },
    "ducking_stool": { size: "Large", defaultMaterial: "Wood" },
    "whipping_post": { size: "Medium", defaultMaterial: "Wood" },
};

// Expanded materialAC to include new materials
const materialAC = {
    "Wood": 15,
    "Stone": 17,
    "Iron": 19,
    "Steel": 19,
    "Glass": 13,
    "Cloth": 11,
    "Leather": 11,
    "Parchment": 11,
    "Ceramic": 12,
    "Wax": 5,
    "Brass": 18,
    "Water": 10,
    "Plant": 10,
    "Feather": 5,
    "Bronze": 18,
};

// Hit point values
const hitPoints = {
    "Tiny": { "Fragile": "1d4", "Resilient": "2d4" },
    "Small": { "Fragile": "1d6", "Resilient": "3d6" },
    "Medium": { "Fragile": "1d8", "Resilient": "4d8" },
    "Large": { "Fragile": "1d10", "Resilient": "5d10" },
};

// Size increase mapping
const sizeIncrease = {
    "Tiny": "Small",
    "Small": "Medium",
    "Medium": "Large",
    "Large": "Large" // Can't go larger than Large
};

// Synonyms for resilient
const resilientSynonyms = [
    "resilient", "tough", "durable", "sturdy", "robust", "hardy", "strong",
    "solid", "substantial", "rugged", "enduring", "long-lasting", "tenacious",
    "unyielding", "firm", "stout", "fortified", "reinforced", "strengthened"
];

// Material synonyms
const materialSynonyms = {
    "Wood": ["wood", "wooden", "timber", "lumber"],
    "Stone": ["stone", "rock", "granite", "marble", "slate"],
    "Iron": ["iron", "ferrous", "steel"],
    "Steel": ["steel", "metal", "iron"],
    "Glass": ["glass", "crystal", "transparent"],
    "Cloth": ["cloth", "fabric", "textile", "linen", "cotton", "wool", "silk"],
    "Leather": ["leather", "hide", "skin"],
    "Parchment": ["parchment", "paper", "scroll"],
    "Ceramic": ["ceramic", "pottery", "porcelain", "earthenware"],
    "Wax": ["wax", "beeswax", "paraffin"],
    "Brass": ["brass", "bronze"],
    "Water": ["water", "liquid", "fluid"],
    "Plant": ["plant", "vegetation", "foliage", "organic"],
    "Feather": ["feather", "plume", "down"],
    "Bronze": ["bronze", "copper", "brass"]
};

// Reverse lookup for material synonyms
const materialLookup = Object.entries(materialSynonyms).reduce((acc, [key, synonyms]) => {
    synonyms.forEach(synonym => {
        acc[synonym] = key;
    });
    return acc;
}, {});

function openTool(evt, toolName) {
    var i, tools, tabs;
    tools = document.getElementsByClassName("tool");
    for (i = 0; i < tools.length; i++) {
        tools[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(toolName).style.display = "block";
    evt.currentTarget.className += " active";
    if (toolName === 'flanking') {
        initializeGrid();
    }
}

function calculateTrackingDC() {
    const baseDC = parseInt(document.getElementById('surface').value);
    const days = parseInt(document.getElementById('days').value);
    const trail = parseInt(document.getElementById('trail').value);

    let dc = baseDC + (days * 5);
    if (trail === 1) {
        dc -= 5;
    }

     dc = Math.max(dc, 5);

      const result = document.getElementById('trackingResult');
      result.innerHTML = `<strong>Tracking DC:</strong> ${dc}`;

      let difficulty = "Very Easy";
      if (dc > 30) difficulty = "Nearly Impossible";
      else if (dc > 25) difficulty = "Very Hard";
      else if (dc > 20) difficulty = "Hard";
      else if (dc > 15) difficulty = "Moderate";
      else if (dc > 10) difficulty = "Easy";

      result.innerHTML += `<br><strong>Difficulty:</strong> ${difficulty}`;

      let explanation = `<br><br><strong>Explanation:</strong><br>`;
     explanation += `Base DC for the surface: ${baseDC}<br>`;
     if (days > 0) explanation += `Added ${days * 5} for ${days} day(s) passed<br>`;
     if (trail === 1) explanation += `Subtracted 5 for visible trail<br>`;
     result.innerHTML += explanation;
 }


function resolveSocialInteraction() {
    const attitude = document.getElementById('attitude').value;
    const checkResult = parseInt(document.getElementById('check-result').value);
    const risk = document.getElementById('risk').value;
    const result = document.getElementById('socialResult');

    if (isNaN(checkResult) || checkResult < 1 || checkResult > 30) {
        result.innerHTML = "Please enter a valid check result between 1 and 30.";
        return;
    }

    let outcome;

    if (attitude === 'friendly') {
        if (risk === 'none' && checkResult >= 0) outcome = "The creature helps.";
        else if (risk === 'minor' && checkResult >= 10) outcome = "The creature helps.";
        else if (risk === 'significant' && checkResult >= 20) outcome = "The creature helps.";
        else outcome = "The creature doesn't help but does no harm.";
    } else if (attitude === 'indifferent') {
        if (risk === 'none' && checkResult >= 10) outcome = "The creature helps.";
        else if (risk === 'minor' && checkResult >= 20) outcome = "The creature helps.";
        else if (checkResult >= 0) outcome = "The creature doesn't help but does no harm.";
        else outcome = "The creature harms.";
    } else if (attitude === 'hostile') {
        if (risk === 'none' && checkResult >= 20) outcome = "The creature helps.";
        else if (checkResult >= 10) outcome = "The creature doesn't help but does no harm.";
        else outcome = "The creature harms.";
    }

    result.innerHTML = `<strong>Interaction Outcome:</strong><br>${outcome}`;
}

const activityToSkill = {
    "Climbing": "Athletics", "Jumping": "Athletics", "Swimming": "Athletics", "Feats of strength": "Athletics",
    "Balancing": "Acrobatics", "Performing stunts": "Acrobatics", "Maintaining footing": "Acrobatics",
    "Picking pockets": "Sleight of Hand", "Concealing objects": "Sleight of Hand", "Manual trickery": "Sleight of Hand",
    "Hiding": "Stealth", "Moving quietly": "Stealth", "Avoiding detection": "Stealth",
    "Recalling magical lore": "Arcana", "Identifying magical effects": "Arcana",
    "Recalling historical events": "History", "Identifying historical figures": "History",
    "Finding clues": "Investigation", "Making deductions": "Investigation", "Analyzing details": "Investigation",
    "Identifying flora/fauna": "Nature", "Understanding environments": "Nature",
    "Recalling religious lore": "Religion", "Identifying religious symbols": "Religion",
    "Calming animals": "Animal Handling", "Understanding animal behavior": "Animal Handling", "Controlling mounts": "Animal Handling",
    "Reading body language": "Insight", "Detecting lies": "Insight", "Understanding intentions": "Insight",
    "Treating wounds": "Medicine", "Diagnosing illnesses": "Medicine", "Stabilizing the dying": "Medicine",
    "Spotting hidden objects": "Perception", "Noticing details": "Perception", "Using senses to gather information": "Perception",
    "Tracking": "Survival", "Foraging": "Survival", "Navigating wilderness": "Survival", "Predicting weather": "Survival",
    "Lying convincingly": "Deception", "Misleading others": "Deception", "Hiding the truth": "Deception",
    "Threatening others": "Intimidation", "Displaying hostility": "Intimidation", "Coercing information": "Intimidation",
    "Entertaining audiences": "Performance",
    "Influencing others": "Persuasion", "Negotiating": "Persuasion", "Diplomacy": "Persuasion"
};

function calculateDC() {
    const activity = document.getElementById('activity').value;
    const difficulty = parseInt(document.getElementById('difficulty').value);
    const modifier = parseInt(document.getElementById('modifier').value);
    const result = document.getElementById('dcResult');

    const skillCheck = activityToSkill[activity];
    const successChance = Math.min(Math.max(((21 + modifier - difficulty) / 20) * 100, 5), 95);

    result.innerHTML = `
        <strong>Activity:</strong> ${activity}<br>
        <strong>Skill Check:</strong> ${skillCheck}<br>
        <strong>Recommended DC:</strong> ${difficulty}<br>
        <strong>Success Chance:</strong> ${successChance.toFixed(2)}%
    `;
}

function calculateObject() {
    const input = document.getElementById("objectInput").value;
    
    const words = input.toLowerCase().split(' ');
    let objectName = words[words.length - 1];
    let modifiers = words.slice(0, -1);
    
    if (!objectDatabase[objectName]) {
        showResult("Object not found in database.");
        return;
    }
    
    let object = {
        size: objectDatabase[objectName].size,
        material: objectDatabase[objectName].defaultMaterial
    };
    
    let isResilient = false;
    let isBig = false;

    // Apply modifiers
    modifiers.forEach(modifier => {
        if (modifier === "big") {
            isBig = true;
        }
        
        if (resilientSynonyms.includes(modifier)) {
            isResilient = true;
        }
        
        const materialMatch = Object.keys(materialLookup).find(syn => syn === modifier);
        if (materialMatch) {
            object.material = materialLookup[materialMatch];
        }
    });
    
    if (isBig) {
        object.size = sizeIncrease[object.size];
    }
    
    let resilience = isResilient ? "Resilient" : "Fragile";
    
    let ac = materialAC[object.material];
    let hp = hitPoints[object.size][resilience];
    
    showResult(`AC: ${ac}<br>Hit Points: ${hp}`);
}

function showResult(message) {
    document.getElementById("mysticalResult").innerHTML = message;
}
const grid = document.getElementById('grid');
const placeAllyBtn = document.getElementById('placeAlly');
const placeEnemyBtn = document.getElementById('placeEnemy');
const tokenSizeSelect = document.getElementById('tokenSize');
const clearGridBtn = document.getElementById('clearGrid');
let placementMode = null;

// Generate grid
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    grid.appendChild(cell);
}

// Token placement logic
function placeToken(event) {
    if (!placementMode) return;

    const cell = event.target;
    if (!cell.classList.contains('cell')) return;

    const size = tokenSizeSelect.value;
    const token = placementMode === 'ally' ? 'A' : 'E';

    if (size === 'medium') {
        cell.textContent = token;
        cell.classList.add(placementMode);
    } else {
        const index = parseInt(cell.dataset.index);
        const row = Math.floor(index / 10);
        const col = index % 10;

        if (size === 'large' && col < 9 && row < 9) {
            for (let r = row; r < row + 2; r++) {
                for (let c = col; c < col + 2; c++) {
                    const targetCell = grid.children[r * 10 + c];
                    targetCell.textContent = token;
                    targetCell.classList.add(placementMode);
                    targetCell.dataset.groupId = `${placementMode}-${row}-${col}`;
                }
            }
        } else if (size === 'huge' && col < 8 && row < 8) {
            for (let r = row; r < row + 3; r++) {
                for (let c = col; c < col + 3; c++) {
                    const targetCell = grid.children[r * 10 + c];
                    targetCell.textContent = token;
                    targetCell.classList.add(placementMode);
                    targetCell.dataset.groupId = `${placementMode}-${row}-${col}`;
                }
            }
        }
    }

    placementMode = null;
    calculateFlanking();
}

function calculateFlanking() {
    const allTokens = Array.from(grid.getElementsByClassName('ally')).concat(Array.from(grid.getElementsByClassName('enemy')));
    
    // Clear previous flanking
    grid.querySelectorAll('.flanked').forEach(cell => cell.classList.remove('flanked'));

    // Group tokens by their groupId
    const tokenGroups = allTokens.reduce((groups, token) => {
        const groupId = token.dataset.groupId || token.dataset.index;
        if (!groups[groupId]) {
            groups[groupId] = [];
        }
        groups[groupId].push(token);
        return groups;
    }, {});

    Object.values(tokenGroups).forEach(tokenGroup => {
        const tokenType = tokenGroup[0].classList.contains('ally') ? 'enemy' : 'ally';
        const potentialFlankers = allTokens.filter(t => t.classList.contains(tokenType));

        const adjacentFlankers = potentialFlankers.filter(flanker => 
            tokenGroup.some(token => isAdjacent(token, flanker))
        );

        // Only proceed if there are at least two adjacent flankers
        if (adjacentFlankers.length >= 2) {
            let isFlanked = false;
            for (let i = 0; i < adjacentFlankers.length - 1; i++) {
                for (let j = i + 1; j < adjacentFlankers.length; j++) {
                    const flanker1 = adjacentFlankers[i];
                    const flanker2 = adjacentFlankers[j];

                    if (checkFlankingLine(flanker1, flanker2, tokenGroup)) {
                        isFlanked = true;
                        break;
                    }
                }
                if (isFlanked) break;
            }

            if (isFlanked) {
                tokenGroup.forEach(token => token.classList.add('flanked'));
            }
        }
    });
}

function isAdjacent(token1, token2) {
    const index1 = parseInt(token1.dataset.index);
    const index2 = parseInt(token2.dataset.index);
    const row1 = Math.floor(index1 / 10);
    const col1 = index1 % 10;
    const row2 = Math.floor(index2 / 10);
    const col2 = index2 % 10;

    return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1;
}

function checkFlankingLine(flanker1, flanker2, tokenGroup) {
    const flanker1Index = parseInt(flanker1.dataset.index);
    const flanker2Index = parseInt(flanker2.dataset.index);

    const flanker1Row = Math.floor(flanker1Index / 10);
    const flanker1Col = flanker1Index % 10;
    const flanker2Row = Math.floor(flanker2Index / 10);
    const flanker2Col = flanker2Index % 10;

    const tokenEdges = {
        left: Math.min(...tokenGroup.map(t => parseInt(t.dataset.index) % 10)),
        right: Math.max(...tokenGroup.map(t => parseInt(t.dataset.index) % 10)),
        top: Math.min(...tokenGroup.map(t => Math.floor(parseInt(t.dataset.index) / 10))),
        bottom: Math.max(...tokenGroup.map(t => Math.floor(parseInt(t.dataset.index) / 10)))
    };

    // Check if flankers are on opposite sides (horizontally or vertically)
    if ((flanker1Col < tokenEdges.left && flanker2Col > tokenEdges.right) ||
        (flanker2Col < tokenEdges.left && flanker1Col > tokenEdges.right) ||
        (flanker1Row < tokenEdges.top && flanker2Row > tokenEdges.bottom) ||
        (flanker2Row < tokenEdges.top && flanker1Row > tokenEdges.bottom)) {
        return true;
    }

    // Check diagonal flanking
    if ((flanker1Row < tokenEdges.top && flanker1Col < tokenEdges.left && flanker2Row > tokenEdges.bottom && flanker2Col > tokenEdges.right) ||
        (flanker2Row < tokenEdges.top && flanker2Col < tokenEdges.left && flanker1Row > tokenEdges.bottom && flanker1Col > tokenEdges.right) ||
        (flanker1Row < tokenEdges.top && flanker1Col > tokenEdges.right && flanker2Row > tokenEdges.bottom && flanker2Col < tokenEdges.left) ||
        (flanker2Row < tokenEdges.top && flanker2Col > tokenEdges.right && flanker1Row > tokenEdges.bottom && flanker1Col < tokenEdges.left)) {
        return true;
    }

    return false;
}

function clearGrid() {
    grid.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
        delete cell.dataset.groupId;
    });
}

placeAllyBtn.addEventListener('click', () => placementMode = 'ally');
placeEnemyBtn.addEventListener('click', () => placementMode = 'enemy');
grid.addEventListener('click', placeToken);
clearGridBtn.addEventListener('click', clearGrid);

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
 
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function(event) {
            const toolNames = ['dc', 'social', 'tracking', 'mystical', 'flanking'];
            const toolName = toolNames[index];
            openTool(event, toolName);
        });
    });

    openTool({ currentTarget: tabs[0] }, 'tracking');

    document.getElementById("analyzeButton").addEventListener("click", calculateObject);
});

