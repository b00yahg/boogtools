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
    "bell": { size: "Medium", defaultMaterial: "Bronze" },
    "clocktower": { size: "Large", defaultMaterial: "Stone" },
    "battering_ram": { size: "Large", defaultMaterial: "Wood" },
    "siege_tower": { size: "Large", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "gibbet": { size: "Medium", defaultMaterial: "Iron" },
    "thumbscrew": { size: "Tiny", defaultMaterial: "Iron" },
    "branding_iron": { size: "Small", defaultMaterial: "Iron" },
    "ducking_stool": { size: "Large", defaultMaterial: "Wood" },
    "whipping_post": { size: "Medium", defaultMaterial: "Wood" },
    
    // Additional Buildings and Structures
    "windmill": { size: "Large", defaultMaterial: "Wood" },
    "lighthouse": { size: "Large", defaultMaterial: "Stone" },
    "aqueduct": { size: "Large", defaultMaterial: "Stone" },
    "granary": { size: "Large", defaultMaterial: "Wood" },
    "townhall": { size: "Large", defaultMaterial: "Stone" },
    "guild_hall": { size: "Large", defaultMaterial: "Wood" },
    "amphitheater": { size: "Large", defaultMaterial: "Stone" },
    "colosseum": { size: "Large", defaultMaterial: "Stone" },
    "observatory": { size: "Large", defaultMaterial: "Stone" },
    "bathhouse": { size: "Large", defaultMaterial: "Stone" },
    "library": { size: "Large", defaultMaterial: "Stone" },
    "apothecary": { size: "Medium", defaultMaterial: "Wood" },
    "blacksmith": { size: "Medium", defaultMaterial: "Stone" },
    "tannery": { size: "Medium", defaultMaterial: "Wood" },
    "pottery": { size: "Medium", defaultMaterial: "Clay" },
    "glassblower": { size: "Medium", defaultMaterial: "Stone" },
    "jeweler": { size: "Medium", defaultMaterial: "Wood" },
    "shipyard": { size: "Large", defaultMaterial: "Wood" },
    "dockyard": { size: "Large", defaultMaterial: "Wood" },
    "warehouse": { size: "Large", defaultMaterial: "Stone" },
    "watchtower": { size: "Large", defaultMaterial: "Stone" },
    "guardhouse": { size: "Medium", defaultMaterial: "Stone" },
    "barracks": { size: "Large", defaultMaterial: "Stone" },
    "stable": { size: "Large", defaultMaterial: "Wood" },
    "silo": { size: "Large", defaultMaterial: "Stone" },
    "mill": { size: "Large", defaultMaterial: "Stone" },
    "brewery": { size: "Large", defaultMaterial: "Stone" },
    "winery": { size: "Large", defaultMaterial: "Stone" },
    "temple": { size: "Large", defaultMaterial: "Stone" },
    "monastery": { size: "Large", defaultMaterial: "Stone" },
    "prison": { size: "Large", defaultMaterial: "Stone" },
    "mausoleum": { size: "Medium", defaultMaterial: "Stone" },
    "crypt": { size: "Medium", defaultMaterial: "Stone" },
    "bridge": { size: "Large", defaultMaterial: "Stone" },
    "dam": { size: "Large", defaultMaterial: "Stone" },
    "mine_entrance": { size: "Large", defaultMaterial: "Wood" },
    "quarry": { size: "Large", defaultMaterial: "Stone" },
    "sawmill": { size: "Large", defaultMaterial: "Wood" },
    "tannery": { size: "Medium", defaultMaterial: "Wood" },
    "dye_works": { size: "Medium", defaultMaterial: "Stone" },
    "smithy": { size: "Medium", defaultMaterial: "Stone" },
    "carpenter_shop": { size: "Medium", defaultMaterial: "Wood" },
    "weaver_shop": { size: "Medium", defaultMaterial: "Wood" },
    "bakery": { size: "Medium", defaultMaterial: "Stone" },
    "butcher_shop": { size: "Medium", defaultMaterial: "Wood" },
    "fishmonger": { size: "Medium", defaultMaterial: "Wood" },
    "tailor_shop": { size: "Medium", defaultMaterial: "Wood" },
    "cobbler_shop": { size: "Medium", defaultMaterial: "Wood" },
    "herbalist": { size: "Medium", defaultMaterial: "Wood" },
    "alchemist_lab": { size: "Medium", defaultMaterial: "Stone" },

    // Fantasy-Specific Structures
    "wizard_tower": { size: "Large", defaultMaterial: "Stone" },
    "druid_grove": { size: "Large", defaultMaterial: "Wood" },
    "elven_treehouse": { size: "Large", defaultMaterial: "Wood" },
    "dwarven_forge": { size: "Large", defaultMaterial: "Stone" },
    "gnomish_workshop": { size: "Medium", defaultMaterial: "Wood" },
    "halfling_burrow": { size: "Medium", defaultMaterial: "Earth" },
    "orc_stronghold": { size: "Large", defaultMaterial: "Stone" },
    "goblin_warren": { size: "Medium", defaultMaterial: "Earth" },
    "dragon_lair": { size: "Large", defaultMaterial: "Stone" },
    "fey_circle": { size: "Medium", defaultMaterial: "Stone" },
    "necromancer_crypt": { size: "Large", defaultMaterial: "Stone" },
    "summoning_circle": { size: "Medium", defaultMaterial: "Stone" },
    "astral_observatory": { size: "Large", defaultMaterial: "Crystal" },
    "elemental_forge": { size: "Large", defaultMaterial: "Stone" },
    "golem_workshop": { size: "Large", defaultMaterial: "Stone" },
    "dimensional_gate": { size: "Large", defaultMaterial: "Stone" },
    "airship_dock": { size: "Large", defaultMaterial: "Wood" },
    "arcane_library": { size: "Large", defaultMaterial: "Stone" },
    "enchanted_greenhouse": { size: "Medium", defaultMaterial: "Glass" },
    "beast_master_arena": { size: "Large", defaultMaterial: "Stone" },
    "shapeshifter_sanctuary": { size: "Medium", defaultMaterial: "Wood" },
    "illusion_maze": { size: "Large", defaultMaterial: "Stone" },
    "time_warped_chamber": { size: "Medium", defaultMaterial: "Crystal" },
    "planar_nexus": { size: "Large", defaultMaterial: "Energy" },

    // Statue Components and Monuments
    "statue_head": { size: "Large", defaultMaterial: "Stone" },
    "statue_torso": { size: "Large", defaultMaterial: "Stone" },
    "statue_arm": { size: "Medium", defaultMaterial: "Stone" },
    "statue_leg": { size: "Medium", defaultMaterial: "Stone" },
    "obelisk": { size: "Large", defaultMaterial: "Stone" },
    "monolith": { size: "Large", defaultMaterial: "Stone" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "totem_pole": { size: "Large", defaultMaterial: "Wood" },
    "archway": { size: "Large", defaultMaterial: "Stone" },
    "fountain_statue": { size: "Large", defaultMaterial: "Stone" },
    "memorial_plaque": { size: "Medium", defaultMaterial: "Bronze" },
    "standing_stones": { size: "Large", defaultMaterial: "Stone" },
    "trilithon": { size: "Large", defaultMaterial: "Stone" },
    "ziggurat": { size: "Large", defaultMaterial: "Stone" },
    "pyramid": { size: "Large", defaultMaterial: "Stone" },

    // Miscellaneous Objects
    "ballista_bolt": { size: "Large", defaultMaterial: "Wood" },
    "catapult_stone": { size: "Large", defaultMaterial: "Stone" },
    "battering_ram": { size: "Large", defaultMaterial: "Steel" },
    "portcullis_chain": { size: "Medium", defaultMaterial: "Iron" },
    "drawbridge_mechanism": { size: "Large", defaultMaterial: "Iron" },
    "siege_ladder": { size: "Large", defaultMaterial: "Wood" },
    "war_banner": { size: "Large", defaultMaterial: "Cloth" },
    "trebuchet_counterweight": { size: "Large", defaultMaterial: "Stone" },
    "cannon": { size: "Large", defaultMaterial: "Iron" },
    "cannon_ball": { size: "Medium", defaultMaterial: "Iron" },
    "powder_keg": { size: "Medium", defaultMaterial: "Wood" },
    "ship_mast": { size: "Large", defaultMaterial: "Wood" },
    "ship_rudder": { size: "Large", defaultMaterial: "Wood" },
    "ship_anchor": { size: "Large", defaultMaterial: "Iron" },
    "ship_sail": { size: "Large", defaultMaterial: "Cloth" },
    "wagon_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "millstone": { size: "Large", defaultMaterial: "Stone" },
    "printing_press": { size: "Large", defaultMaterial: "Iron" },
    "sundial_gnomon": { size: "Small", defaultMaterial: "Bronze" },
    "weathervane": { size: "Small", defaultMaterial: "Iron" },
    "bell_tower_bell": { size: "Large", defaultMaterial: "Bronze" },
    "water_wheel": { size: "Large", defaultMaterial: "Wood" },
    "jousting_list": { size: "Large", defaultMaterial: "Wood" },
    "stocks": { size: "Medium", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "ducking_stool": { size: "Large", defaultMaterial: "Wood" },
    "execution_block": { size: "Medium", defaultMaterial: "Wood" },
    "hanging_cage": { size: "Medium", defaultMaterial: "Iron" },
    "iron_maiden": { size: "Large", defaultMaterial: "Iron" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "thumbscrew": { size: "Tiny", defaultMaterial: "Iron" },
    "branding_iron": { size: "Small", defaultMaterial: "Iron" },
    "manacles": { size: "Small", defaultMaterial: "Iron" },
    "gibbet": { size: "Medium", defaultMaterial: "Iron" },
    "whipping_post": { size: "Medium", defaultMaterial: "Wood" },
        "wall": { size: "Large", defaultMaterial: "Stone" },

    // ... (previous items remain unchanged)

    // Simple Buildings and Structures
    "barn": { size: "Large", defaultMaterial: "Wood" },
    "tavern": { size: "Large", defaultMaterial: "Wood" },
    "inn": { size: "Large", defaultMaterial: "Wood" },
    "cottage": { size: "Medium", defaultMaterial: "Wood" },
    "hut": { size: "Small", defaultMaterial: "Wood" },
    "shack": { size: "Small", defaultMaterial: "Wood" },
    "shed": { size: "Small", defaultMaterial: "Wood" },
    "outhouse": { size: "Small", defaultMaterial: "Wood" },
    "chicken_coop": { size: "Small", defaultMaterial: "Wood" },
    "pigpen": { size: "Medium", defaultMaterial: "Wood" },
    "storehouse": { size: "Medium", defaultMaterial: "Wood" },
    "smokehouse": { size: "Small", defaultMaterial: "Wood" },
    "root_cellar": { size: "Small", defaultMaterial: "Earth" },
    "watchtower": { size: "Medium", defaultMaterial: "Wood" },
    "guardpost": { size: "Small", defaultMaterial: "Wood" },
    "gatehouse": { size: "Medium", defaultMaterial: "Stone" },
    "chapel": { size: "Medium", defaultMaterial: "Stone" },
    "shrine": { size: "Small", defaultMaterial: "Stone" },
    "well_house": { size: "Small", defaultMaterial: "Wood" },
    "bunkhouse": { size: "Medium", defaultMaterial: "Wood" },
    "toolshed": { size: "Small", defaultMaterial: "Wood" },
    "sentry_box": { size: "Small", defaultMaterial: "Wood" },
    "privy": { size: "Small", defaultMaterial: "Wood" },
    "dovecote": { size: "Small", defaultMaterial: "Wood" },
    "greenhouse": { size: "Medium", defaultMaterial: "Glass" },
    "icehouse": { size: "Medium", defaultMaterial: "Stone" },

    // Additional Fantasy-Themed Structures
    "alchemist_tower": { size: "Large", defaultMaterial: "Stone" },
    "witches_hut": { size: "Small", defaultMaterial: "Wood" },
    "fairy_ring": { size: "Medium", defaultMaterial: "Mushroom" },
    "troll_bridge": { size: "Large", defaultMaterial: "Stone" },
    "enchanted_well": { size: "Medium", defaultMaterial: "Stone" },
    "haunted_mansion": { size: "Large", defaultMaterial: "Wood" },
    "sylvan_glade": { size: "Large", defaultMaterial: "Wood" },
    "pixie_hollow": { size: "Small", defaultMaterial: "Wood" },
    "merfolk_grotto": { size: "Medium", defaultMaterial: "Stone" },
    "giant's_causeway": { size: "Large", defaultMaterial: "Stone" },
    "dragon_hatchery": { size: "Large", defaultMaterial: "Stone" },
    "phoenix_nest": { size: "Medium", defaultMaterial: "Stone" },
    "chimera_den": { size: "Medium", defaultMaterial: "Stone" },
    "unicorn_stable": { size: "Medium", defaultMaterial: "Wood" },
    "griffon_aerie": { size: "Large", defaultMaterial: "Stone" },
    "basilisk_cave": { size: "Medium", defaultMaterial: "Stone" },
    "harpy_nest": { size: "Medium", defaultMaterial: "Wood" },
    "minotaur_maze": { size: "Large", defaultMaterial: "Stone" },
    "nymph_pool": { size: "Medium", defaultMaterial: "Water" },
    "centaur_grove": { size: "Large", defaultMaterial: "Wood" },

    // Miscellaneous Structures and Objects
    "wishing_well": { size: "Medium", defaultMaterial: "Stone" },
    "sacrificial_altar": { size: "Medium", defaultMaterial: "Stone" },
    "oracle_chamber": { size: "Medium", defaultMaterial: "Stone" },
    "ley_line_nexus": { size: "Large", defaultMaterial: "Energy" },
    "soul_forge": { size: "Large", defaultMaterial: "Stone" },
    "mana_crystal": { size: "Medium", defaultMaterial: "Crystal" },
    "runestone": { size: "Medium", defaultMaterial: "Stone" },
    "spirit_totem": { size: "Medium", defaultMaterial: "Wood" },
    "elemental_node": { size: "Large", defaultMaterial: "Energy" },
    "dimensional_anchor": { size: "Large", defaultMaterial: "Metal" },
    "astral_beacon": { size: "Large", defaultMaterial: "Crystal" },
    "shadow_gate": { size: "Large", defaultMaterial: "Shadow" },
    "dreamcatcher": { size: "Medium", defaultMaterial: "Wood" },
    "magic_circle": { size: "Medium", defaultMaterial: "Energy" },
    "scrying_pool": { size: "Medium", defaultMaterial: "Water" },
    "phylactery": { size: "Tiny", defaultMaterial: "Metal" },
    "hellmouth": { size: "Large", defaultMaterial: "Stone" },
    "planar_rift": { size: "Large", defaultMaterial: "Energy" },
    "time_loop_anchor": { size: "Medium", defaultMaterial: "Metal" },
    "reality_shard": { size: "Small", defaultMaterial: "Crystal" },

    // Common Village/Town Features
    "village_square": { size: "Large", defaultMaterial: "Stone" },
    "market_stall": { size: "Medium", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "notice_board": { size: "Small", defaultMaterial: "Wood" },
    "communal_oven": { size: "Medium", defaultMaterial: "Stone" },
    "hitching_post": { size: "Small", defaultMaterial: "Wood" },
    "watering_trough": { size: "Medium", defaultMaterial: "Stone" },
    "wash_house": { size: "Medium", defaultMaterial: "Wood" },
    "public_bath": { size: "Large", defaultMaterial: "Stone" },
    "guildhouse": { size: "Large", defaultMaterial: "Stone" },
    "town_hall": { size: "Large", defaultMaterial: "Stone" },
    "clocktower": { size: "Large", defaultMaterial: "Stone" },
    "gallows": { size: "Medium", defaultMaterial: "Wood" },
    "stocks": { size: "Medium", defaultMaterial: "Wood" },
    "whipping_post": { size: "Medium", defaultMaterial: "Wood" },
    "ducking_stool": { size: "Medium", defaultMaterial: "Wood" },
    "maypole": { size: "Large", defaultMaterial: "Wood" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "milestone": { size: "Small", defaultMaterial: "Stone" },
    "boundary_stone": { size: "Medium", defaultMaterial: "Stone" },

    // Additional Miscellaneous Items
    "siege_tower": { size: "Large", defaultMaterial: "Wood" },
    "battering_ram": { size: "Large", defaultMaterial: "Wood" },
    "trebuchet": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "portcullis": { size: "Large", defaultMaterial: "Iron" },
    "watchtower": { size: "Large", defaultMaterial: "Stone" },
    "drawbridge": { size: "Large", defaultMaterial: "Wood" },
    "moat": { size: "Large", defaultMaterial: "Earth" },
    "palisade": { size: "Large", defaultMaterial: "Wood" },
    "loophole": { size: "Small", defaultMaterial: "Stone" },
    "murder_hole": { size: "Small", defaultMaterial: "Stone" },
    "machicolation": { size: "Medium", defaultMaterial: "Stone" },
    "battlement": { size: "Large", defaultMaterial: "Stone" },
    "arrow_slit": { size: "Small", defaultMaterial: "Stone" },
    "barbican": { size: "Large", defaultMaterial: "Stone" },
    "keep": { size: "Large", defaultMaterial: "Stone" },
    "bailey": { size: "Large", defaultMaterial: "Earth" },
    "curtain_wall": { size: "Large", defaultMaterial: "Stone" },
    "rampart": { size: "Large", defaultMaterial: "Earth" },
        // Additional Medieval/D&D Objects
    "spinning_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "loom": { size: "Large", defaultMaterial: "Wood" },
    "butter_churn": { size: "Medium", defaultMaterial: "Wood" },
    "beehive": { size: "Medium", defaultMaterial: "Wood" },
    "scarecrow": { size: "Medium", defaultMaterial: "Cloth" },
    "hay_bale": { size: "Medium", defaultMaterial: "Straw" },
    "wagon_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "ox_yoke": { size: "Medium", defaultMaterial: "Wood" },
    "plow": { size: "Large", defaultMaterial: "Wood" },
    "scythe": { size: "Medium", defaultMaterial: "Metal" },
    "grain_flail": { size: "Medium", defaultMaterial: "Wood" },
    "wine_press": { size: "Large", defaultMaterial: "Wood" },
    "cheese_press": { size: "Medium", defaultMaterial: "Wood" },
    "quern_stone": { size: "Medium", defaultMaterial: "Stone" },
    "distillation_apparatus": { size: "Medium", defaultMaterial: "Glass" },
    "beehive_smoker": { size: "Small", defaultMaterial: "Metal" },
    "grain_silo": { size: "Large", defaultMaterial: "Wood" },
    "water_trough": { size: "Medium", defaultMaterial: "Stone" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "astrolabe": { size: "Small", defaultMaterial: "Metal" },
    "sextant": { size: "Small", defaultMaterial: "Metal" },
    "prayer_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "reliquary": { size: "Small", defaultMaterial: "Metal" },
    "jousting_quintain": { size: "Large", defaultMaterial: "Wood" },
    "archery_target": { size: "Medium", defaultMaterial: "Straw" },
    "practice_dummy": { size: "Medium", defaultMaterial: "Cloth" },
    "stocks": { size: "Medium", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "iron_maiden": { size: "Large", defaultMaterial: "Metal" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "trebuchet": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "battering_ram": { size: "Large", defaultMaterial: "Wood" },
    "siege_tower": { size: "Large", defaultMaterial: "Wood" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "portcullis": { size: "Large", defaultMaterial: "Metal" },
    "drawbridge": { size: "Large", defaultMaterial: "Wood" },
    "coat_of_arms": { size: "Medium", defaultMaterial: "Cloth" },
    "heraldic_banner": { size: "Large", defaultMaterial: "Cloth" },
    "war_drum": { size: "Large", defaultMaterial: "Wood" },
    "signaling_horn": { size: "Medium", defaultMaterial: "Bone" },
    "pigeon_coop": { size: "Medium", defaultMaterial: "Wood" },
    "smoke_signal_platform": { size: "Large", defaultMaterial: "Wood" },
    "semaphore_tower": { size: "Large", defaultMaterial: "Wood" },
    "heliograph": { size: "Medium", defaultMaterial: "Metal" },
    "apothecary_cabinet": { size: "Large", defaultMaterial: "Wood" },
    "alchemy_still": { size: "Medium", defaultMaterial: "Metal" },
    "herbalist_drying_rack": { size: "Medium", defaultMaterial: "Wood" },
    "plague_doctor_mask": { size: "Small", defaultMaterial: "Leather" },
    "leech_jar": { size: "Small", defaultMaterial: "Glass" },
    "bloodletting_bowl": { size: "Small", defaultMaterial: "Metal" },
    "crystal_ball": { size: "Small", defaultMaterial: "Glass" },
    "tarot_deck": { size: "Tiny", defaultMaterial: "Parchment" },
    "rune_stones": { size: "Small", defaultMaterial: "Stone" },
    "ouija_board": { size: "Medium", defaultMaterial: "Wood" },
    "fortune_teller_tent": { size: "Large", defaultMaterial: "Cloth" },
    "divining_rod": { size: "Medium", defaultMaterial: "Wood" },
    "magical_grimoire": { size: "Medium", defaultMaterial: "Leather" },
    "spell_component_pouch": { size: "Small", defaultMaterial: "Leather" },
    "wizard_staff": { size: "Medium", defaultMaterial: "Wood" },
    "magic_wand": { size: "Small", defaultMaterial: "Wood" },
    "enchanted_mirror": { size: "Medium", defaultMaterial: "Glass" },
    "magical_orb": { size: "Small", defaultMaterial: "Crystal" },
    "flying_carpet": { size: "Large", defaultMaterial: "Cloth" },
    "enchanted_broom": { size: "Medium", defaultMaterial: "Wood" },
    "portable_hole": { size: "Small", defaultMaterial: "Cloth" },
    "bag_of_holding": { size: "Small", defaultMaterial: "Cloth" },
    "philosophers_stone": { size: "Tiny", defaultMaterial: "Stone" },
    "horn_of_plenty": { size: "Medium", defaultMaterial: "Bone" },
    "genie_lamp": { size: "Small", defaultMaterial: "Metal" },
    "enchanted_music_box": { size: "Small", defaultMaterial: "Wood" },
    "magical_lyre": { size: "Medium", defaultMaterial: "Wood" },
    "pipes_of_haunting": { size: "Small", defaultMaterial: "Wood" },
    "dragon_egg": { size: "Medium", defaultMaterial: "Shell" },
    "phoenix_feather": { size: "Small", defaultMaterial: "Feather" },
    "unicorn_horn": { size: "Medium", defaultMaterial: "Bone" },
    "basilisk_eye": { size: "Tiny", defaultMaterial: "Organic" },
    "troll_heart": { size: "Small", defaultMaterial: "Organic" },
    "mermaid_scale": { size: "Tiny", defaultMaterial: "Organic" },
    "giant's_tooth": { size: "Medium", defaultMaterial: "Bone" },
    "fairy_dust_vial": { size: "Tiny", defaultMaterial: "Glass" },
    "vampire_coffin": { size: "Large", defaultMaterial: "Wood" },
    "trap": { size: "Large", defaultMaterial: "iron" },
    "ghost_trap": { size: "Medium", defaultMaterial: "Iron" },
    "demon_summoning_circle": { size: "Large", defaultMaterial: "Stone" },
    "angel_feather": { size: "Small", defaultMaterial: "Feather" },
    "soul_gem": { size: "Small", defaultMaterial: "Crystal" },
    "cursed_doll": { size: "Small", defaultMaterial: "Cloth" },
    "voodoo_doll": { size: "Small", defaultMaterial: "Cloth" },
    "enchanted_chess_set": { size: "Medium", defaultMaterial: "Wood" },
    "magical_sundial": { size: "Medium", defaultMaterial: "Stone" },
    "time_turner": { size: "Tiny", defaultMaterial: "Iron" },
    "scrying_bowl": { size: "Medium", defaultMaterial: "Iron" },
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
    "Straw": 8,
    "Bone": 16,
    "Crystal": 14,
    "Shell": 15,
    "Organic": 12,
    "Energy": 20  // Highest AC for magical energy constructs
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

// Modify the openTool function
function openTool(evt, toolName) {
    var tools = document.getElementsByClassName("tool");
    for (var i = 0; i < tools.length; i++) {
        tools[i].style.display = "none";
    }
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(toolName).style.display = "block";
    evt.currentTarget.className += " active";
    if (toolName === 'flanking') {
        initializeGrid();
    }
}

// Modify the DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const toolNames = ['dc', 'social', 'tracking', 'mystical', 'flanking'];
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function(event) {
            openTool(event, toolNames[index]);
        });
    });

    // Initialize the first tool (Tracking) as active
    openTool({ currentTarget: tabs[2] }, 'tracking');

    document.getElementById("analyzeButton").addEventListener("click", calculateObject);
    
    // Add event listeners for flanking tool buttons
    document.getElementById('placeAlly').addEventListener('click', () => placementMode = 'ally');
    document.getElementById('placeEnemy').addEventListener('click', () => placementMode = 'enemy');
    document.getElementById('clearGrid').addEventListener('click', initializeGrid);
    
    // Initialize the grid
    initializeGrid();
});

// Add the initializeGrid function if it's not already present
function initializeGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        grid.appendChild(cell);
    }
    grid.addEventListener('click', placeToken);
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

// Constants
const GRID_SIZE = 10;
const TOKEN_SIZES = {
  medium: 1,
  large: 2,
  huge: 3
};

// DOM Elements
const grid = document.getElementById('grid');
const placeAllyBtn = document.getElementById('placeAlly');
const placeEnemyBtn = document.getElementById('placeEnemy');
const tokenSizeSelect = document.getElementById('tokenSize');
const clearGridBtn = document.getElementById('clearGrid');

let placementMode = null;

// Initialize grid
function initializeGrid() {
  grid.innerHTML = '';
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    grid.appendChild(cell);
  }
}

// Place token on the grid
function placeToken(event) {
  if (!placementMode) return;

  const cell = event.target;
  if (!cell.classList.contains('cell')) return;

  const size = TOKEN_SIZES[tokenSizeSelect.value];
  const token = placementMode === 'ally' ? 'A' : 'E';
  const index = parseInt(cell.dataset.index);
  const row = Math.floor(index / GRID_SIZE);
  const col = index % GRID_SIZE;

  if (col <= GRID_SIZE - size && row <= GRID_SIZE - size) {
    for (let r = row; r < row + size; r++) {
      for (let c = col; c < col + size; c++) {
        const targetCell = grid.children[r * GRID_SIZE + c];
        targetCell.textContent = token;
        targetCell.className = `cell ${placementMode} ${tokenSizeSelect.value}`;
        targetCell.dataset.groupId = `${placementMode}-${row}-${col}-${size}`;
      }
    }
  }

  placementMode = null;
  calculateFlanking();
}

// ... (keep the existing constants and DOM elements)

function getTokenInfo(token) {
  const index = parseInt(token.dataset.index);
  const row = Math.floor(index / GRID_SIZE);
  const col = index % GRID_SIZE;
  const size = token.classList.contains('huge') ? 3 : 
               token.classList.contains('large') ? 2 : 1;
  return {
    row,
    col,
    size,
    centerX: col + size / 2 - 0.5,
    centerY: row + size / 2 - 0.5
  };
}

function lineIntersectsSquare(x1, y1, x2, y2, squareX, squareY, squareSize) {
  const left = squareX - 0.5;
  const right = squareX + squareSize - 0.5;
  const top = squareY - 0.5;
  const bottom = squareY + squareSize - 0.5;

  // Check intersection with each side of the square
  return (
    (y1 <= top && y2 >= bottom || y1 >= bottom && y2 <= top) && 
    (x1 + (top - y1) * (x2 - x1) / (y2 - y1) >= left && 
     x1 + (top - y1) * (x2 - x1) / (y2 - y1) <= right)
  ) || (
    (y1 <= bottom && y2 >= top || y1 >= top && y2 <= bottom) && 
    (x1 + (bottom - y1) * (x2 - x1) / (y2 - y1) >= left && 
     x1 + (bottom - y1) * (x2 - x1) / (y2 - y1) <= right)
  ) || (
    (x1 <= left && x2 >= right || x1 >= right && x2 <= left) && 
    (y1 + (left - x1) * (y2 - y1) / (x2 - x1) >= top && 
     y1 + (left - x1) * (y2 - y1) / (x2 - x1) <= bottom)
  ) || (
    (x1 <= right && x2 >= left || x1 >= left && x2 <= right) && 
    (y1 + (right - x1) * (y2 - y1) / (x2 - x1) >= top && 
     y1 + (right - x1) * (y2 - y1) / (x2 - x1) <= bottom)
  );
}

function areFlanking(token1, token2, target) {
  const t1 = getTokenInfo(token1);
  const t2 = getTokenInfo(token2);
  const tgt = getTokenInfo(target);

  // Check if the line between centers intersects opposite sides of the target
  return (
    lineIntersectsSquare(t1.centerX, t1.centerY, t2.centerX, t2.centerY, tgt.col, tgt.row, tgt.size) &&
    !lineIntersectsSquare(t1.centerX, t1.centerY, t2.centerX, t2.centerY, tgt.col + 0.5, tgt.row + 0.5, tgt.size - 1)
  );
}

function calculateFlanking() {
  const allTokens = Array.from(grid.querySelectorAll('.ally, .enemy'));
  
  grid.querySelectorAll('.flanked').forEach(cell => cell.classList.remove('flanked'));

  const tokenGroups = allTokens.reduce((groups, token) => {
    const groupId = token.dataset.groupId;
    if (!groups[groupId]) {
      groups[groupId] = [];
    }
    groups[groupId].push(token);
    return groups;
  }, {});

  Object.values(tokenGroups).forEach(tokenGroup => {
    const tokenType = tokenGroup[0].classList.contains('ally') ? 'enemy' : 'ally';
    const potentialFlankers = allTokens.filter(t => t.classList.contains(tokenType));

    for (let i = 0; i < potentialFlankers.length - 1; i++) {
      for (let j = i + 1; j < potentialFlankers.length; j++) {
        if (areFlanking(potentialFlankers[i], potentialFlankers[j], tokenGroup[0])) {
          tokenGroup.forEach(token => token.classList.add('flanked'));
          return;  // Exit once we find a flanking pair
        }
      }
    }
  });
}

// ... (keep the existing event listeners and initialization)

// Event Listeners
placeAllyBtn.addEventListener('click', () => placementMode = 'ally');
placeEnemyBtn.addEventListener('click', () => placementMode = 'enemy');
grid.addEventListener('click', placeToken);
clearGridBtn.addEventListener('click', initializeGrid);

// Initialize the grid on load
initializeGrid();
