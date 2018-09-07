var pokemonDatabase = {
    "EN": 
        [
        {
            attack: [{
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }, {
                "name": "Vine Whip",
                "type": "grass",
                "class": "grass",
                "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 2,
                    name: 'Ivysaur'
                },
                from: {}
            },
            id: 1,
            name: 'Bulbasaur',
            image: 'Bulbasaur.png'
        },
        {
            attack: [{
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }, {
                "name": "Vine Whip",
                "type": "grass",
                "class": "grass",
                "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them."
            }],
            evolution: {
                to: {
                    level: '32',
                    id: 3,
                    name: 'Venusaur'
                },
                from: {
                    id: 1,
                    name: 'Bulbasaur',
                    level: '16'
                }
            },
            id: 2,
            name: 'Ivysaur',
            image: 'Ivysaur.png'
        },
        {
            attack: [{
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Mega Drain",
                "type": "grass",
                "class": "grass",
                "description": "The user attacks enemies in front of itself, dealing damage to them. Some of the damage dealt is absorbed by the user, restoring its HP."
            }, {
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Solar Beam",
                "type": "grass",
                "class": "grass",
                "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }, {
                "name": "Vine Whip",
                "type": "grass",
                "class": "grass",
                "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 2,
                    name: 'Ivysaur',
                    level: '32'
                }
            },
            id: 3,
            name: 'Venusaur',
            image: 'Venusaur.png'
        },
        {
            attack: [{
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Punch",
                "type": "fire",
                "class": "fire",
                "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 5,
                    name: 'Charmeleon'
                },
                from: {}
            },
            id: 4,
            name: 'Charmander',
            image: 'Charmander.png'
        },
        {
            attack: [{
                "name": "Dragon Claw",
                "type": "dragon",
                "class": "dragon",
                "description": "The user gathers its strength, then charges forward while spinning, damaging enemies with its sharp claws."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Punch",
                "type": "fire",
                "class": "fire",
                "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 6,
                    name: 'Charizard'
                },
                from: {
                    id: 4,
                    name: 'Charmander',
                    level: '16'
                }
            },
            id: 5,
            name: 'Charmeleon',
            image: 'Charmeleon.png'
        },
        {
            attack: [{
                "name": "Dragon Claw",
                "type": "dragon",
                "class": "dragon",
                "description": "The user gathers its strength, then charges forward while spinning, damaging enemies with its sharp claws."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Punch",
                "type": "fire",
                "class": "fire",
                "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Flare Blitz",
                "type": "fire",
                "class": "fire",
                "description": "The user creates a path of flames in front of itself and charges forward along it. Deals damage to enemies. Sometimes burns enemies."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 5,
                    name: 'Charmeleon',
                    level: '36'
                }
            },
            id: 6,
            name: 'Charizard',
            image: 'Charizard.png'
        },
        {
            attack: [{
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 8,
                    name: 'Wartortle'
                },
                from: {}
            },
            id: 7,
            name: 'Squirtle',
            image: 'Squirtle.png'
        },
        {
            attack: [{
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Aqua Ring",
                "type": "water",
                "class": "water",
                "description": "The user envelops itself in a veil made of water, restoring some of its HP."
            }, {
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 9,
                    name: 'Blastoise'
                },
                from: {
                    id: 7,
                    name: 'Squirtle',
                    level: '16'
                }
            },
            id: 8,
            name: 'Wartortle',
            image: 'Wartortle.png'
        },
        {
            attack: [{
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Aqua Ring",
                "type": "water",
                "class": "water",
                "description": "The user envelops itself in a veil made of water, restoring some of its HP."
            }, {
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 8,
                    name: 'Wartortle',
                    level: '36'
                }
            },
            id: 9,
            name: 'Blastoise',
            image: 'Blastoise.png'
        },
        {
            attack: [{
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '7',
                    id: 11,
                    name: 'Metapod'
                },
                from: {}
            },
            id: 10,
            name: 'Caterpie',
            image: 'Caterpie.png'
        },
        {
            attack: [{
                "name": "Iron Defense",
                "type": "steel",
                "class": "steel",
                "description": "The user hardens its skin until it\'s like iron, lowering the damage it takes for a while."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '10',
                    id: 12,
                    name: 'Butterfree'
                },
                from: {
                    id: 10,
                    name: 'Caterpie',
                    level: '7'
                }
            },
            id: 11,
            name: 'Metapod',
            image: 'Metapod.png'
        },
        {
            attack: [{
                "name": "Electroweb",
                "type": "electric",
                "class": "electric",
                "description": "The user spreads an electric net out directly in front of itself, lowering the movement speed of enemies hit by it for a while."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Rage Powder",
                "type": "bug",
                "class": "bug",
                "description": "The user scatters a cloud of irritating powder on itself, causing surrounding enemies to target it."
            }, {
                "name": "Silver Wind",
                "type": "bug",
                "class": "bug",
                "description": "Scales carried by the wind swirl around the user, damaging enemies hit by them. Some or all of the user\'s stats sometimes rise at random."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 11,
                    name: 'Metapod',
                    level: '10'
                }
            },
            id: 12,
            name: 'Butterfree',
            image: 'Butterfree.png'
        },
        {
            attack: [{
                "name": "Lunge",
                "type": "bug",
                "class": "bug",
                "description": "The user lunges toward enemies in front of itself, damaging them."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {
                    level: '7',
                    id: 14,
                    name: 'Kakuna'
                },
                from: {}
            },
            id: 13,
            name: 'Weedle',
            image: 'Weedle.png'
        },
        {
            attack: [{
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {
                    level: '10',
                    id: 15,
                    name: 'Beedrill'
                },
                from: {
                    id: 13,
                    name: 'Weedle',
                    level: '7'
                }
            },
            id: 14,
            name: 'Kakuna',
            image: 'Kakuna.png'
        },
        {
            attack: [{
                "name": "Electroweb",
                "type": "electric",
                "class": "electric",
                "description": "The user spreads an electric net out directly in front of itself, lowering the movement speed of enemies hit by it for a while."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Lunge",
                "type": "bug",
                "class": "bug",
                "description": "The user lunges toward enemies in front of itself, damaging them."
            }, {
                "name": "Pin Missile",
                "type": "bug",
                "class": "bug",
                "description": "The user shoots three sharp spikes in front of itself, damaging enemies hit by them."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 14,
                    name: 'Kakuna',
                    level: '10'
                }
            },
            id: 15,
            name: 'Beedrill',
            image: 'Beedrill.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }, {
                "name": "Whirlwind",
                "type": "normal",
                "class": "normal",
                "description": "The user whips up a strong wind around itself, blowing away enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '18',
                    id: 17,
                    name: 'Pidgeotto'
                },
                from: {}
            },
            id: 16,
            name: 'Pidgey',
            image: 'Pidgey.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Hurricane",
                "type": "flying",
                "class": "flying",
                "description": "The user whips up an intense wind around itself, damaging surrounding enemies and sometimes confusing them."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }, {
                "name": "Whirlwind",
                "type": "normal",
                "class": "normal",
                "description": "The user whips up a strong wind around itself, blowing away enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 18,
                    name: 'Pidgeot'
                },
                from: {
                    id: 16,
                    name: 'Pidgey',
                    level: '18'
                }
            },
            id: 17,
            name: 'Pidgeotto',
            image: 'Pidgeotto.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Heat Wave",
                "type": "fire",
                "class": "fire",
                "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 17,
                    name: 'Pidgeotto',
                    level: '36'
                }
            },
            id: 18,
            name: 'Pidgeot',
            image: 'Pidgeot.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '20',
                    id: 20,
                    name: 'Raticate'
                },
                from: {}
            },
            id: 19,
            name: 'Rattata',
            image: 'Rattata.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Flame Wheel",
                "type": "fire",
                "class": "fire",
                "description": "The user cloaks itself in fire and charges forward, damaging enemies it hits and sometimes burning them."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Zen Headbutt",
                "type": "psychic",
                "class": "psychic",
                "description": "The user focuses its willpower to its head, then smashes it into enemies directly in front of itself, dealing damage to enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 19,
                    name: 'Rattata',
                    level: '20'
                }
            },
            id: 20,
            name: 'Raticate',
            image: 'Raticate.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Fly",
                "type": "flying",
                "class": "flying",
                "description": "The user flies toward enemies far in front of itself, then swoops down to deal damage to them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '20',
                    id: 22,
                    name: 'Fearow'
                },
                from: {}
            },
            id: 21,
            name: 'Spearow',
            image: 'Spearow.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Drill Peck",
                "type": "flying",
                "class": "flying",
                "description": "The user attacks enemies directly in front of itself with its sharp beak, damaging them."
            }, {
                "name": "Fly",
                "type": "flying",
                "class": "flying",
                "description": "The user flies toward enemies far in front of itself, then swoops down to deal damage to them."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Whirlwind",
                "type": "normal",
                "class": "normal",
                "description": "The user whips up a strong wind around itself, blowing away enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 21,
                    name: 'Spearow',
                    level: '20'
                }
            },
            id: 22,
            name: 'Fearow',
            image: 'Fearow.png'
        },
        {
            attack: [{
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }],
            evolution: {
                to: {
                    level: '22',
                    id: 24,
                    name: 'Arbok'
                },
                from: {}
            },
            id: 23,
            name: 'Ekans',
            image: 'Ekans.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }],
            evolution: {
                to: {},
                from: {
                    id: 23,
                    name: 'Ekans',
                    level: '22'
                }
            },
            id: 24,
            name: 'Arbok',
            image: 'Arbok.png'
        },
        {
            attack: [{
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Spark",
                "type": "electric",
                "class": "electric",
                "description": "The user charges its body with electricity and charges toward enemies in front of itself. Sometimes paralyzes enemies."
            }, {
                "name": "Thunder Shock",
                "type": "electric",
                "class": "electric",
                "description": "After storing up electricity, the user fires it toward enemies in front of itself, dealing damage to them. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }, {
                "name": "Volt Tackle",
                "type": "electric",
                "class": "electric",
                "description": "After electrifying itself and charging toward enemies, the user jumps and discharges electricity, damaging enemies hit by it and sometimes paralyzing them."
            }],
            evolution: {
                to: {
                    level: '22',
                    id: 26,
                    name: 'Raichu'
                },
                from: {}
            },
            id: 25,
            name: 'Pikachu',
            image: 'Pikachu.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Electric Terrain",
                "type": "electric",
                "class": "electric",
                "description": "The user gathers electrical power beneath itself, raising the damage it deals for a while."
            }, {
                "name": "Giga Impact",
                "type": "normal",
                "class": "normal",
                "description": "The user focuses every bit of its power and charges toward enemies in front of itself, dealing huge damage to them."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Spark",
                "type": "electric",
                "class": "electric",
                "description": "The user charges its body with electricity and charges toward enemies in front of itself. Sometimes paralyzes enemies."
            }, {
                "name": "Thunder",
                "type": "electric",
                "class": "electric",
                "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }, {
                "name": "Volt Tackle",
                "type": "electric",
                "class": "electric",
                "description": "After electrifying itself and charging toward enemies, the user jumps and discharges electricity, damaging enemies hit by it and sometimes paralyzing them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 25,
                    name: 'Pikachu',
                    level: '22'
                }
            },
            id: 26,
            name: 'Raichu',
            image: 'Raichu.png'
        },
        {
            attack: [{
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }],
            evolution: {
                to: {
                    level: '22',
                    id: 28,
                    name: 'Sandslash'
                },
                from: {}
            },
            id: 27,
            name: 'Sandshrew',
            image: 'Sandshrew.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 27,
                    name: 'Sandshrew',
                    level: '22'
                }
            },
            id: 28,
            name: 'Sandslash',
            image: 'Sandslash.png'
        },
        {
            attack: [{
                "name": "Flatter",
                "type": "dark",
                "class": "dark",
                "description": "The user flatters enemies in front of itself, which confuses them but raises the amount of damage they deal and reduces the amount of damage they take."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 30,
                    name: 'Nidorina'
                },
                from: {}
            },
            id: 29,
            name: 'Nidoran♀',
            image: 'Nidoran♀.png'
        },
        {
            attack: [{
                "name": "Flatter",
                "type": "dark",
                "class": "dark",
                "description": "The user flatters enemies in front of itself, which confuses them but raises the amount of damage they deal and reduces the amount of damage they take."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 31,
                    name: 'Nidoqueen'
                },
                from: {
                    id: 29,
                    name: 'Nidoran',
                    level: '16'
                }
            },
            id: 30,
            name: 'Nidorina',
            image: 'Nidorina.png'
        },
        {
            attack: [{
                "name": "Flatter",
                "type": "dark",
                "class": "dark",
                "description": "The user flatters enemies in front of itself, which confuses them but raises the amount of damage they deal and reduces the amount of damage they take."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }, {
                "name": "Venom Drench",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison in front of itself, sometimes raising the amount of damage enemies take."
            }],
            evolution: {
                to: {},
                from: {
                    id: 30,
                    name: 'Nidorina',
                    level: '36'
                }
            },
            id: 31,
            name: 'Nidoqueen',
            image: 'Nidoqueen.png'
        },
        {
            attack: [{
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 33,
                    name: 'Nidorino'
                },
                from: {}
            },
            id: 32,
            name: 'Nidoran♂',
            image: 'Nidoran♂.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 34,
                    name: 'Nidoking'
                },
                from: {
                    id: 32,
                    name: 'Nidoran',
                    level: '16'
                }
            },
            id: 33,
            name: 'Nidorino',
            image: 'Nidorino.png'
        },
        {
            attack: [{
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Megahorn",
                "type": "bug",
                "class": "bug",
                "description": "Using its tough and impressive horn, the user rams into enemies in front of itself with no letup, dealing huge damage to them."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 33,
                    name: 'Nidorino',
                    level: '36'
                }
            },
            id: 34,
            name: 'Nidoking',
            image: 'Nidoking.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 36,
                    name: 'Clefable'
                },
                from: {}
            },
            id: 35,
            name: 'Clefairy',
            image: 'Clefairy.png'
        },
        {
            attack: [{
                "name": "Dazzling Gleam",
                "type": "fairy",
                "class": "fairy",
                "description": "The user moves about as it emits a powerful flash that damages enemies hit by it."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Follow Me",
                "type": "normal",
                "class": "normal",
                "description": "The user grabs the attention of surrounding enemies, forcing them to target it."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 35,
                    name: 'Clefairy',
                    level: '36'
                }
            },
            id: 36,
            name: 'Clefable',
            image: 'Clefable.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 38,
                    name: 'Ninetales'
                },
                from: {}
            },
            id: 37,
            name: 'Vulpix',
            image: 'Vulpix.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Blast",
                "type": "fire",
                "class": "fire",
                "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Heat Wave",
                "type": "fire",
                "class": "fire",
                "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }, {
                "name": "Solar Beam",
                "type": "grass",
                "class": "grass",
                "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it."
            }, {
                "name": "Will-O-Wisp",
                "type": "fire",
                "class": "fire",
                "description": "The user drapes itself with sinister flames and attacks enemies directly in front of it. Often burns enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 37,
                    name: 'Vulpix',
                    level: '36'
                }
            },
            id: 38,
            name: 'Ninetales',
            image: 'Ninetales.png'
        },
        {
            attack: [{
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Sing",
                "type": "normal",
                "class": "normal",
                "description": "The user sings to enemies around itself with its calming voice, often putting them to sleep."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 40,
                    name: 'Wigglytuff'
                },
                from: {}
            },
            id: 39,
            name: 'Jigglypuff',
            image: 'Jigglypuff.png'
        },
        {
            attack: [{
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }],
            evolution: {
                to: {},
                from: {
                    id: 39,
                    name: 'Jigglypuff',
                    level: '36'
                }
            },
            id: 40,
            name: 'Wigglytuff',
            image: 'Wigglytuff.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Leech Life",
                "type": "bug",
                "class": "bug",
                "description": "The user drains the blood of enemies directly in front of itself, damaging them. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }, {
                "name": "Whirlwind",
                "type": "normal",
                "class": "normal",
                "description": "The user whips up a strong wind around itself, blowing away enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '22',
                    id: 42,
                    name: 'Golbat'
                },
                from: {}
            },
            id: 41,
            name: 'Zubat',
            image: 'Zubat.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Leech Life",
                "type": "bug",
                "class": "bug",
                "description": "The user drains the blood of enemies directly in front of itself, damaging them. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Nasty Plot",
                "type": "dark",
                "class": "dark",
                "description": "The user stimulates its brain by thinking bad thoughts, raising the amount of damage it deals for a while."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Venom Drench",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Whirlwind",
                "type": "normal",
                "class": "normal",
                "description": "The user whips up a strong wind around itself, blowing away enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 41,
                    name: 'Zubat',
                    level: '22'
                }
            },
            id: 42,
            name: 'Golbat',
            image: 'Golbat.png'
        },
        {
            attack: [{
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '21',
                    id: 44,
                    name: 'Gloom'
                },
                from: {}
            },
            id: 43,
            name: 'Oddish',
            image: 'Oddish.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 45,
                    name: 'Vileplume'
                },
                from: {
                    id: 43,
                    name: 'Oddish',
                    level: '21'
                }
            },
            id: 44,
            name: 'Gloom',
            image: 'Gloom.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Petal Dance",
                "type": "grass",
                "class": "grass",
                "description": "The user spins in place, scattering petals that deal damage to enemies around it."
            }, {
                "name": "Solar Beam",
                "type": "grass",
                "class": "grass",
                "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 44,
                    name: 'Gloom',
                    level: '36'
                }
            },
            id: 45,
            name: 'Vileplume',
            image: 'Vileplume.png'
        },
        {
            attack: [{
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Rage Powder",
                "type": "bug",
                "class": "bug",
                "description": "The user scatters a cloud of irritating powder on itself, causing surrounding enemies to target it."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '24',
                    id: 47,
                    name: 'Parasect'
                },
                from: {}
            },
            id: 46,
            name: 'Paras',
            image: 'Paras.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Metal Claw",
                "type": "steel",
                "class": "steel",
                "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Rage Powder",
                "type": "bug",
                "class": "bug",
                "description": "The user scatters a cloud of irritating powder on itself, causing surrounding enemies to target it."
            }, {
                "name": "Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters sleep-inducing spores directly in front of itself, often making enemies fall asleep."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 46,
                    name: 'Paras',
                    level: '24'
                }
            },
            id: 47,
            name: 'Parasect',
            image: 'Parasect.png'
        },
        {
            attack: [{
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '31',
                    id: 49,
                    name: 'Venomoth'
                },
                from: {}
            },
            id: 48,
            name: 'Venonat',
            image: 'Venonat.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Poison Powder",
                "type": "poison",
                "class": "poison",
                "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "String Shot",
                "type": "bug",
                "class": "bug",
                "description": "The user spews a sticky thread in three directions, creating nets that will damage enemies and often lower their movement speed."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 48,
                    name: 'Venonat',
                    level: '31'
                }
            },
            id: 49,
            name: 'Venomoth',
            image: 'Venomoth.png'
        },
        {
            attack: [{
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Mud Bomb",
                "type": "ground",
                "class": "ground",
                "description": "The user throws a lump of mud in front of itself that splits open when it hits the ground, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }],
            evolution: {
                to: {
                    level: '26',
                    id: 51,
                    name: 'Dugtrio'
                },
                from: {}
            },
            id: 50,
            name: 'Diglett',
            image: 'Diglett.png'
        },
        {
            attack: [{
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Mud Bomb",
                "type": "ground",
                "class": "ground",
                "description": "The user throws a lump of mud in front of itself that splits open when it hits the ground, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Mud-Slap",
                "type": "ground",
                "class": "ground",
                "description": "The user hurls mud in three directions, dealing damage to enemies hit by it. Sometimes reduces their movement speed."
            }, {
                "name": "Rock Throw",
                "type": "rock",
                "class": "rock",
                "description": "The user picks up two rocks and hurls them in front of itself, damaging enemies hit by them."
            }, {
                "name": "Shore Up",
                "type": "ground",
                "class": "ground",
                "description": "The user gathers sand from beneath itself, restoring a bit of its HP."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 50,
                    name: 'Diglett',
                    level: '26'
                }
            },
            id: 51,
            name: 'Dugtrio',
            image: 'Dugtrio.png'
        },
        {
            attack: [{
                "name": "Fury Swipes",
                "type": "normal",
                "class": "normal",
                "description": "The user repeatedly swipes at enemies directly in front of itself, damaging them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }],
            evolution: {
                to: {
                    level: '28',
                    id: 53,
                    name: 'Persian'
                },
                from: {}
            },
            id: 52,
            name: 'Meowth',
            image: 'Meowth.png'
        },
        {
            attack: [{
                "name": "Fury Swipes",
                "type": "normal",
                "class": "normal",
                "description": "The user repeatedly swipes at enemies directly in front of itself, damaging them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Nasty Plot",
                "type": "dark",
                "class": "dark",
                "description": "The user stimulates its brain by thinking bad thoughts, raising the amount of damage it deals for a while."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Play Rough",
                "type": "fairy",
                "class": "fairy",
                "description": "The user plays rough with enemies in front of itself, damaging them. Sometimes lowers the damage enemies deal."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }],
            evolution: {
                to: {},
                from: {
                    id: 52,
                    name: 'Meowth',
                    level: '28'
                }
            },
            id: 53,
            name: 'Persian',
            image: 'Persian.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {
                    level: '33',
                    id: 55,
                    name: 'Golduck'
                },
                from: {}
            },
            id: 54,
            name: 'Psyduck',
            image: 'Psyduck.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Mud Bomb",
                "type": "ground",
                "class": "ground",
                "description": "The user throws a lump of mud in front of itself that splits open when it hits the ground, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }],
            evolution: {
                to: {},
                from: {
                    id: 54,
                    name: 'Psyduck',
                    level: '33'
                }
            },
            id: 55,
            name: 'Golduck',
            image: 'Golduck.png'
        },
        {
            attack: [{
                "name": "Fury Swipes",
                "type": "normal",
                "class": "normal",
                "description": "The user repeatedly swipes at enemies directly in front of itself, damaging them."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }],
            evolution: {
                to: {
                    level: '28',
                    id: 57,
                    name: 'Primeape'
                },
                from: {}
            },
            id: 56,
            name: 'Mankey',
            image: 'Mankey.png'
        },
        {
            attack: [{
                "name": "Close Combat",
                "type": "fighting",
                "class": "fighting",
                "description": "The user gets right up on enemies in front of itself and smacks them with a single blow, damaging them. Sometimes raises the amount of damage the user takes."
            }, {
                "name": "Cross Chop",
                "type": "fighting",
                "class": "fighting",
                "description": "The user jumps toward enemies in front of itself and smacks them with a two-handed chop, damaging them. Critical hits land more easily."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Fury Swipes",
                "type": "normal",
                "class": "normal",
                "description": "The user repeatedly swipes at enemies directly in front of itself, damaging them."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Meditate",
                "type": "psychic",
                "class": "psychic",
                "description": "The user meditates to awaken the power deep within its body, raising the amount of damage it deals for a while."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Scratch",
                "type": "normal",
                "class": "normal",
                "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 56,
                    name: 'Mankey',
                    level: '28'
                }
            },
            id: 57,
            name: 'Primeape',
            image: 'Primeape.png'
        },
        {
            attack: [{
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flame Wheel",
                "type": "fire",
                "class": "fire",
                "description": "The user cloaks itself in fire and charges forward, damaging enemies it hits and sometimes burning them."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 59,
                    name: 'Arcanine'
                },
                from: {}
            },
            id: 58,
            name: 'Growlithe',
            image: 'Growlithe.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Blast",
                "type": "fire",
                "class": "fire",
                "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flame Wheel",
                "type": "fire",
                "class": "fire",
                "description": "The user cloaks itself in fire and charges forward, damaging enemies it hits and sometimes burning them."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Flare Blitz",
                "type": "fire",
                "class": "fire",
                "description": "The user creates a path of flames in front of itself and charges forward along it. Deals damage to enemies. Sometimes burns enemies."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 58,
                    name: 'Growlithe',
                    level: '36'
                }
            },
            id: 59,
            name: 'Arcanine',
            image: 'Arcanine.png'
        },
        {
            attack: [{
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }],
            evolution: {
                to: {
                    level: '25',
                    id: 61,
                    name: 'Poliwhirl'
                },
                from: {}
            },
            id: 60,
            name: 'Poliwag',
            image: 'Poliwag.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 62,
                    name: 'Poliwrath'
                },
                from: {
                    id: 60,
                    name: 'Poliwag',
                    level: '25'
                }
            },
            id: 61,
            name: 'Poliwhirl',
            image: 'Poliwhirl.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Dynamic Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user punches enemies directly in front of itself with its full, concentrated power. Sometimes confuses enemies."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Ice Punch",
                "type": "ice",
                "class": "ice",
                "description": "The user chills its fist and unleashes a freezing punch on enemies directly in front of it. Sometimes freezes enemies."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }],
            evolution: {
                to: {},
                from: {
                    id: 61,
                    name: 'Poliwhirl',
                    level: '36'
                }
            },
            id: 62,
            name: 'Poliwrath',
            image: 'Poliwrath.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Teleport",
                "type": "psychic",
                "class": "psychic",
                "description": "The user utilizes its psychic powers to teleport."
            }],
            evolution: {
                to: {
                    level: '16',
                    id: 64,
                    name: 'Kadabra'
                },
                from: {}
            },
            id: 63,
            name: 'Abra',
            image: 'Abra.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Dazzling Gleam",
                "type": "fairy",
                "class": "fairy",
                "description": "The user moves about as it emits a powerful flash that damages enemies hit by it."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Teleport",
                "type": "psychic",
                "class": "psychic",
                "description": "The user utilizes its psychic powers to teleport."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 65,
                    name: 'Alakazam'
                },
                from: {
                    id: 63,
                    name: 'Abra',
                    level: '16'
                }
            },
            id: 64,
            name: 'Kadabra',
            image: 'Kadabra.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Dazzling Gleam",
                "type": "fairy",
                "class": "fairy",
                "description": "The user moves about as it emits a powerful flash that damages enemies hit by it."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Psycho Cut",
                "type": "psychic",
                "class": "psychic",
                "description": "After moving forward, the user deals damage to enemies with blades formed by psychic power. Critical hits land more easily."
            }, {
                "name": "Recover",
                "type": "normal",
                "class": "normal",
                "description": "Restoring its own cells, the user restores its HP."
            }, {
                "name": "Shadow Ball",
                "type": "ghost",
                "class": "ghost",
                "description": "The user hurls a shadowy blob in front of itself, damaging enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Teleport",
                "type": "psychic",
                "class": "psychic",
                "description": "The user utilizes its psychic powers to teleport."
            }],
            evolution: {
                to: {},
                from: {
                    id: 64,
                    name: 'Kadabra',
                    level: '36'
                }
            },
            id: 65,
            name: 'Alakazam',
            image: 'Alakazam.png'
        },
        {
            attack: [{
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rolling Kick",
                "type": "fighting",
                "class": "fighting",
                "description": "The user kicks as it spins in place, dealing damage to surrounding enemies."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }],
            evolution: {
                to: {
                    level: '28',
                    id: 67,
                    name: 'Machoke'
                },
                from: {}
            },
            id: 66,
            name: 'Machop',
            image: 'Machop.png'
        },
        {
            attack: [{
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rolling Kick",
                "type": "fighting",
                "class": "fighting",
                "description": "The user kicks as it spins in place, dealing damage to surrounding enemies."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }, {
                "name": "Work Up",
                "type": "normal",
                "class": "normal",
                "description": "The user is roused, raising the amount of damage it deals and reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 68,
                    name: 'Machamp'
                },
                from: {
                    id: 66,
                    name: 'Machop',
                    level: '28'
                }
            },
            id: 67,
            name: 'Machoke',
            image: 'Machoke.png'
        },
        {
            attack: [{
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Close Combat",
                "type": "fighting",
                "class": "fighting",
                "description": "The user gets right up on enemies in front of itself and smacks them with a single blow, damaging them. Sometimes raises the amount of damage the user takes."
            }, {
                "name": "Cross Chop",
                "type": "fighting",
                "class": "fighting",
                "description": "The user jumps toward enemies in front of itself and smacks them with a two-handed chop, damaging them. Critical hits land more easily."
            }, {
                "name": "Dynamic Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user punches enemies directly in front of itself with its full, concentrated power. Sometimes confuses enemies."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rolling Kick",
                "type": "fighting",
                "class": "fighting",
                "description": "The user kicks as it spins in place, dealing damage to surrounding enemies."
            }, {
                "name": "Work Up",
                "type": "normal",
                "class": "normal",
                "description": "The user is roused, raising the amount of damage it deals and reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 67,
                    name: 'Machoke',
                    level: '36'
                }
            },
            id: 68,
            name: 'Machamp',
            image: 'Machamp.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Razor Leaf",
                "type": "grass",
                "class": "grass",
                "description": "The user launches sharp-edged leaves to slash at enemies, damaging them. Critical hits land more easily."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }],
            evolution: {
                to: {
                    level: '21',
                    id: 70,
                    name: 'Weepinbell'
                },
                from: {}
            },
            id: 69,
            name: 'Bellsprout',
            image: 'Bellsprout.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Razor Leaf",
                "type": "grass",
                "class": "grass",
                "description": "The user launches sharp-edged leaves to slash at enemies, damaging them. Critical hits land more easily."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 71,
                    name: 'Victreebel'
                },
                from: {
                    id: 69,
                    name: 'Bellsprout',
                    level: '21'
                }
            },
            id: 70,
            name: 'Weepinbell',
            image: 'Weepinbell.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Solar Beam",
                "type": "grass",
                "class": "grass",
                "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }, {
                "name": "Vine Whip",
                "type": "grass",
                "class": "grass",
                "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 70,
                    name: 'Weepinbell',
                    level: '36'
                }
            },
            id: 71,
            name: 'Victreebel',
            image: 'Victreebel.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {
                    level: '30',
                    id: 73,
                    name: 'Tentacruel'
                },
                from: {}
            },
            id: 72,
            name: 'Tentacool',
            image: 'Tentacool.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Poison Sting",
                "type": "poison",
                "class": "poison",
                "description": "The user fires a poisonous stinger at enemies in front of itself. Sometimes poisons enemies hit by it."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {},
                from: {
                    id: 72,
                    name: 'Tentacool',
                    level: '30'
                }
            },
            id: 73,
            name: 'Tentacruel',
            image: 'Tentacruel.png'
        },
        {
            attack: [{
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {
                    level: '25',
                    id: 75,
                    name: 'Graveler'
                },
                from: {}
            },
            id: 74,
            name: 'Geodude',
            image: 'Geodude.png'
        },
        {
            attack: [{
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 76,
                    name: 'Golem'
                },
                from: {
                    id: 74,
                    name: 'Geodude',
                    level: '24'
                }
            },
            id: 75,
            name: 'Graveler',
            image: 'Graveler.png'
        },
        {
            attack: [{
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Explosion",
                "type": "normal",
                "class": "normal",
                "description": "The user causes a tremendous explosion, dealing huge damage to surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Rock Polish",
                "type": "rock",
                "class": "rock",
                "description": "The user polishes its body to reduce drag, raising its movement speed for a while."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 75,
                    name: 'Graveler',
                    level: '36'
                }
            },
            id: 76,
            name: 'Golem',
            image: 'Golem.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Bounce",
                "type": "flying",
                "class": "flying",
                "description": "The user bounces forward high into the air twice, damaging enemies it hits."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }],
            evolution: {
                to: {
                    level: '40',
                    id: 78,
                    name: 'Rapidash'
                },
                from: {}
            },
            id: 77,
            name: 'Ponyta',
            image: 'Ponyta.png'
        },
        {
            attack: [{
                "name": "Bounce",
                "type": "flying",
                "class": "flying",
                "description": "The user bounces forward high into the air twice, damaging enemies it hits."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Fire Blast",
                "type": "fire",
                "class": "fire",
                "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flame Charge",
                "type": "fire",
                "class": "fire",
                "description": "The user stores up the power of flames, raising the damage it deals for a while."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Flare Blitz",
                "type": "fire",
                "class": "fire",
                "description": "The user creates a path of flames in front of itself and charges forward along it. Deals damage to enemies. Sometimes burns enemies."
            }, {
                "name": "Megahorn",
                "type": "bug",
                "class": "bug",
                "description": "Using its tough and impressive horn, the user rams into enemies in front of itself with no letup, dealing huge damage to them."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Will-O-Wisp",
                "type": "fire",
                "class": "fire",
                "description": "The user drapes itself with sinister flames and attacks enemies directly in front of it. Often burns enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 77,
                    name: 'Ponyta',
                    level: '40'
                }
            },
            id: 78,
            name: 'Rapidash',
            image: 'Rapidash.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Ice Punch",
                "type": "ice",
                "class": "ice",
                "description": "The user chills its fist and unleashes a freezing punch on enemies directly in front of it. Sometimes freezes enemies."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Zen Headbutt",
                "type": "psychic",
                "class": "psychic",
                "description": "The user focuses its willpower to its head, then smashes it into enemies directly in front of itself, dealing damage to enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '37',
                    id: 80,
                    name: 'Slowbro'
                },
                from: {}
            },
            id: 79,
            name: 'Slowpoke',
            image: 'Slowpoke.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Belly Drum",
                "type": "normal",
                "class": "normal",
                "description": "The user uses its own HP to raise all of its stats for a while."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Ice Punch",
                "type": "ice",
                "class": "ice",
                "description": "The user chills its fist and unleashes a freezing punch on enemies directly in front of it. Sometimes freezes enemies."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }, {
                "name": "Zen Headbutt",
                "type": "psychic",
                "class": "psychic",
                "description": "The user focuses its willpower to its head, then smashes it into enemies directly in front of itself, dealing damage to enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 79,
                    name: 'Slowpoke',
                    level: '37'
                }
            },
            id: 80,
            name: 'Slowbro',
            image: 'Slowbro.png'
        },
        {
            attack: [{
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Electroweb",
                "type": "electric",
                "class": "electric",
                "description": "The user spreads an electric net out directly in front of itself, lowering the movement speed of enemies hit by it for a while."
            }, {
                "name": "Flash Cannon",
                "type": "steel",
                "class": "steel",
                "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Metal Sound",
                "type": "steel",
                "class": "steel",
                "description": "Enemies near the user are forced to listen to a horrible sound like metal scraping, often raising the amount of damage they take."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }],
            evolution: {
                to: {
                    level: '30',
                    id: 82,
                    name: 'Magneton'
                },
                from: {}
            },
            id: 81,
            name: 'Magnemite',
            image: 'Magnemite.png'
        },
        {
            attack: [{
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Electric Terrain",
                "type": "electric",
                "class": "electric",
                "description": "The user gathers electrical power beneath itself, raising the damage it deals for a while."
            }, {
                "name": "Explosion",
                "type": "normal",
                "class": "normal",
                "description": "The user causes a tremendous explosion, dealing huge damage to surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Flash Cannon",
                "type": "steel",
                "class": "steel",
                "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Metal Sound",
                "type": "steel",
                "class": "steel",
                "description": "Enemies near the user are forced to listen to a horrible sound like metal scraping, often raising the amount of damage they take."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }, {
                "name": "Thunder",
                "type": "electric",
                "class": "electric",
                "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 81,
                    name: 'Magnemite',
                    level: '30'
                }
            },
            id: 82,
            name: 'Magneton',
            image: 'Magneton.png'
        },
        {
            attack: [{
                "name": "Gust",
                "type": "flying",
                "class": "flying",
                "description": "The user sends an intense gust of wind out in front of itself that whirls around and damages enemies hit by it."
            }, {
                "name": "Heat Wave",
                "type": "fire",
                "class": "fire",
                "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Steel Wing",
                "type": "steel",
                "class": "steel",
                "description": "The user charges at enemies in front of itself and smacks them with its hard wings, dealing damage. Sometimes reduces the amount of damage the user takes."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }, {
                "name": "Swords Dance",
                "type": "normal",
                "class": "normal",
                "description": "With a frenetic dance to uplift the fighting spirit, the user raises the amount of damage it deals for a while."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 83,
            name: "Farfetch'd",
            image: 'Farfetch-d.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Drill Peck",
                "type": "flying",
                "class": "flying",
                "description": "The user attacks enemies directly in front of itself with its sharp beak, damaging them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '31',
                    id: 85,
                    name: 'Dodrio'
                },
                from: {}
            },
            id: 84,
            name: 'Doduo',
            image: 'Doduo.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Drill Peck",
                "type": "flying",
                "class": "flying",
                "description": "The user attacks enemies directly in front of itself with its sharp beak, damaging them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Work Up",
                "type": "normal",
                "class": "normal",
                "description": "The user is roused, raising the amount of damage it deals and reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 84,
                    name: 'Doduo',
                    level: '31'
                }
            },
            id: 85,
            name: 'Dodrio',
            image: 'Dodrio.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '34',
                    id: 87,
                    name: 'Dewgong'
                },
                from: {}
            },
            id: 86,
            name: 'Seel',
            image: 'Seel.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {
                    id: 86,
                    name: 'Seel',
                    level: '34'
                }
            },
            id: 87,
            name: 'Dewgong',
            image: 'Dewgong.png'
        },
        {
            attack: [{
                "name": "Acid Armor",
                "type": "poison",
                "class": "poison",
                "description": "The user alters its cellular structure to liquefy itself, reducing the damage it takes for a while."
            }, {
                "name": "Slam",
                "type": "normal",
                "class": "normal",
                "description": "The user slams nearby enemies with a long tail, vines, or the like, damaging all of them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }, {
                "name": "Venom Drench",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison in front of itself, sometimes raising the amount of damage enemies take."
            }],
            evolution: {
                to: {
                    level: '38',
                    id: 89,
                    name: 'Muk'
                },
                from: {}
            },
            id: 88,
            name: 'Grimer',
            image: 'Grimer.png'
        },
        {
            attack: [{
                "name": "Acid Armor",
                "type": "poison",
                "class": "poison",
                "description": "The user alters its cellular structure to liquefy itself, reducing the damage it takes for a while."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Slam",
                "type": "normal",
                "class": "normal",
                "description": "The user slams nearby enemies with a long tail, vines, or the like, damaging all of them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Venom Drench",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison in front of itself, sometimes raising the amount of damage enemies take."
            }],
            evolution: {
                to: {},
                from: {
                    id: 88,
                    name: 'Grimer',
                    level: '38'
                }
            },
            id: 89,
            name: 'Muk',
            image: 'Muk.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Iron Defense",
                "type": "steel",
                "class": "steel",
                "description": "The user hardens its skin until it\'s like iron, lowering the damage it takes for a while."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 91,
                    name: 'Cloyster'
                },
                from: {}
            },
            id: 90,
            name: 'Shellder',
            image: 'Shellder.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Icicle Crash",
                "type": "ice",
                "class": "ice",
                "description": "The user drops frigid icicles in front of itself. Deals damage to enemies hit by them and sometimes freezes them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Rock Blast",
                "type": "rock",
                "class": "rock",
                "description": "The user hurls hard rocks in front of itself, damaging enemies hit by them."
            }, {
                "name": "Spikes",
                "type": "ground",
                "class": "ground",
                "description": "The user scatters spikes in front of itself, damaging enemies that step on them."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 90,
                    name: 'Shellder',
                    level: '36'
                }
            },
            id: 91,
            name: 'Cloyster',
            image: 'Cloyster.png'
        },
        {
            attack: [{
                "name": "Astonish",
                "type": "ghost",
                "class": "ghost",
                "description": "The user tries to startle enemies directly in front of itself, damaging those taken by surprise."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }],
            evolution: {
                to: {
                    level: '25',
                    id: 93,
                    name: 'Haunter'
                },
                from: {}
            },
            id: 92,
            name: 'Gastly',
            image: 'Gastly.png'
        },
        {
            attack: [{
                "name": "Astonish",
                "type": "ghost",
                "class": "ghost",
                "description": "The user tries to startle enemies directly in front of itself, damaging those taken by surprise."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 94,
                    name: 'Gengar'
                },
                from: {
                    id: 92,
                    name: 'Gastly',
                    level: '25'
                }
            },
            id: 93,
            name: 'Haunter',
            image: 'Haunter.png'
        },
        {
            attack: [{
                "name": "Astonish",
                "type": "ghost",
                "class": "ghost",
                "description": "The user tries to startle enemies directly in front of itself, damaging those taken by surprise."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Hypnosis",
                "type": "psychic",
                "class": "psychic",
                "description": "The user employs hypnotic suggestion, often making enemies in front of itself fall asleep."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Mega Drain",
                "type": "grass",
                "class": "grass",
                "description": "The user attacks enemies in front of itself, dealing damage to them. Some of the damage dealt is absorbed by the user, restoring its HP."
            }, {
                "name": "Shadow Ball",
                "type": "ghost",
                "class": "ghost",
                "description": "The user hurls a shadowy blob in front of itself, damaging enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }, {
                "name": "Toxic",
                "type": "poison",
                "class": "poison",
                "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 93,
                    name: 'Haunter',
                    level: '36'
                }
            },
            id: 94,
            name: 'Gengar',
            image: 'Gengar.png'
        },
        {
            attack: [{
                "name": "Flash Cannon",
                "type": "steel",
                "class": "steel",
                "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }, {
                "name": "Rock Polish",
                "type": "rock",
                "class": "rock",
                "description": "The user polishes its body to reduce drag, raising its movement speed for a while."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rock Throw",
                "type": "rock",
                "class": "rock",
                "description": "The user picks up two rocks and hurls them in front of itself, damaging enemies hit by them."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }, {
                "name": "Stealth Rock",
                "type": "rock",
                "class": "rock",
                "description": "The user creates pillars of stone from the ground, damaging enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 95,
            name: 'Onix',
            image: 'Onix.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }],
            evolution: {
                to: {
                    level: '26',
                    id: 97,
                    name: 'Hypno'
                },
                from: {}
            },
            id: 96,
            name: 'Drowzee',
            image: 'Drowzee.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Flatter",
                "type": "dark",
                "class": "dark",
                "description": "The user flatters enemies in front of itself, which confuses them but raises the amount of damage they deal and reduces the amount of damage they take."
            }, {
                "name": "Hypnosis",
                "type": "psychic",
                "class": "psychic",
                "description": "The user employs hypnotic suggestion, often making enemies in front of itself fall asleep."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Meditate",
                "type": "psychic",
                "class": "psychic",
                "description": "The user meditates to awaken the power deep within its body, raising the amount of damage it deals for a while."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Shadow Ball",
                "type": "ghost",
                "class": "ghost",
                "description": "The user hurls a shadowy blob in front of itself, damaging enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 96,
                    name: 'Drowzee',
                    level: '26'
                }
            },
            id: 97,
            name: 'Hypno',
            image: 'Hypno.png'
        },
        {
            attack: [{
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }],
            evolution: {
                to: {
                    level: '28',
                    id: 99,
                    name: 'Kingler'
                },
                from: {}
            },
            id: 98,
            name: 'Krabby',
            image: 'Krabby.png'
        },
        {
            attack: [{
                "name": "Giga Impact",
                "type": "normal",
                "class": "normal",
                "description": "The user focuses every bit of its power and charges toward enemies in front of itself, dealing huge damage to them."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Slam",
                "type": "normal",
                "class": "normal",
                "description": "The user slams nearby enemies with a long tail, vines, or the like, damaging all of them."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }],
            evolution: {
                to: {},
                from: {
                    id: 98,
                    name: 'Krabby',
                    level: '28'
                }
            },
            id: 99,
            name: 'Kingler',
            image: 'Kingler.png'
        },
        {
            attack: [{
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Thunder Shock",
                "type": "electric",
                "class": "electric",
                "description": "After storing up electricity, the user fires it toward enemies in front of itself, dealing damage to them. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {
                    level: '30',
                    id: 101,
                    name: 'Electrode'
                },
                from: {}
            },
            id: 100,
            name: 'Voltorb',
            image: 'Voltorb.png'
        },
        {
            attack: [{
                "name": "Explosion",
                "type": "normal",
                "class": "normal",
                "description": "The user causes a tremendous explosion, dealing huge damage to surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Thunder Shock",
                "type": "electric",
                "class": "electric",
                "description": "After storing up electricity, the user fires it toward enemies in front of itself, dealing damage to them. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {},
                from: {
                    id: 100,
                    name: 'Voltorb',
                    level: '30'
                }
            },
            id: 101,
            name: 'Electrode',
            image: 'Electrode.png'
        },
        {
            attack: [{
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 103,
                    name: 'Exeggutor\n\n'
                },
                from: {}
            },
            id: 102,
            name: 'Exeggcute',
            image: 'Exeggcute.png'
        },
        {
            attack: [{
                "name": "Bullet Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user sends several seeds flying out in front of itself simultaneously, damaging enemies hit by them."
            }, {
                "name": "Egg Bomb",
                "type": "normal",
                "class": "normal",
                "description": "The user scatters eggs around itself, damaging enemies hit by them."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Solar Beam",
                "type": "grass",
                "class": "grass",
                "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 102,
                    name: 'Exeggcute',
                    level: '36'
                }
            },
            id: 103,
            name: 'Exeggutor',
            image: 'Exeggutor.png'
        },
        {
            attack: [{
                "name": "Bonemerang",
                "type": "ground",
                "class": "ground",
                "description": "The user throws a boomerang made of bone, damaging enemies hit by it."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }],
            evolution: {
                to: {
                    level: '28',
                    id: 105,
                    name: 'Marowak'
                },
                from: {}
            },
            id: 104,
            name: 'Cubone',
            image: 'Cubone.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Bonemerang",
                "type": "ground",
                "class": "ground",
                "description": "The user throws a boomerang made of bone, damaging enemies hit by it."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {
                    id: 104,
                    name: 'Cubone',
                    level: '28'
                }
            },
            id: 105,
            name: 'Marowak',
            image: 'Marowak.png'
        },
        {
            attack: [{
                "name": "Bounce",
                "type": "flying",
                "class": "flying",
                "description": "The user bounces forward high into the air twice, damaging enemies it hits."
            }, {
                "name": "Close Combat",
                "type": "fighting",
                "class": "fighting",
                "description": "The user gets right up on enemies in front of itself and smacks them with a single blow, damaging them. Sometimes raises the amount of damage the user takes."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "High Jump Kick",
                "type": "fighting",
                "class": "fighting",
                "description": "After charging toward enemies in front of itself, the user jumps up and deals damage with a knee kick. The user also takes recoil damage."
            }, {
                "name": "Meditate",
                "type": "psychic",
                "class": "psychic",
                "description": "The user meditates to awaken the power deep within its body, raising the amount of damage it deals for a while."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rolling Kick",
                "type": "fighting",
                "class": "fighting",
                "description": "The user kicks as it spins in place, dealing damage to surrounding enemies."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }, {
                "name": "Sucker Punch",
                "type": "dark",
                "class": "dark",
                "description": "The user briefly disappears and moves a short distance. It then charges toward enemies, damaging them."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 106,
            name: 'Hitmonlee',
            image: 'Hitmonlee.png'
        },
        {
            attack: [{
                "name": "Close Combat",
                "type": "fighting",
                "class": "fighting",
                "description": "The user gets right up on enemies in front of itself and smacks them with a single blow, damaging them. Sometimes raises the amount of damage the user takes."
            }, {
                "name": "Comet Punch",
                "type": "normal",
                "class": "normal",
                "description": "The user unleashes a flurry of punches on enemies directly in front of itself, damaging them."
            }, {
                "name": "Drain Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user fires a punch at enemies directly in front of itself, damaging them. It also absorbs power with its fist, restoring its own HP."
            }, {
                "name": "Dynamic Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user punches enemies directly in front of itself with its full, concentrated power. Sometimes confuses enemies."
            }, {
                "name": "Fire Punch",
                "type": "fire",
                "class": "fire",
                "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies."
            }, {
                "name": "Ice Punch",
                "type": "ice",
                "class": "ice",
                "description": "The user chills its fist and unleashes a freezing punch on enemies directly in front of it. Sometimes freezes enemies."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 107,
            name: 'Hitmonchan',
            image: 'Hitmonchan.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Belly Drum",
                "type": "normal",
                "class": "normal",
                "description": "The user uses its own HP to raise all of its stats for a while."
            }, {
                "name": "Lick",
                "type": "ghost",
                "class": "ghost",
                "description": "The user licks enemies all around itself with its long tongue, damaging them. Sometimes paralyzes enemies."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Slam",
                "type": "normal",
                "class": "normal",
                "description": "The user slams nearby enemies with a long tail, vines, or the like, damaging all of them."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 108,
            name: 'Lickitung',
            image: 'Lickitung.png'
        },
        {
            attack: [{
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Lava Plume",
                "type": "fire",
                "class": "fire",
                "description": "The user spouts scarlet flames all around itself. Deals damage to enemies around it. Sometimes burns enemies."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }],
            evolution: {
                to: {
                    level: '35',
                    id: 110,
                    name: 'Weezing'
                },
                from: {}
            },
            id: 109,
            name: 'Koffing',
            image: 'Koffing.png'
        },
        {
            attack: [{
                "name": "Explosion",
                "type": "normal",
                "class": "normal",
                "description": "The user causes a tremendous explosion, dealing huge damage to surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Lava Plume",
                "type": "fire",
                "class": "fire",
                "description": "The user spouts scarlet flames all around itself. Deals damage to enemies around it. Sometimes burns enemies."
            }, {
                "name": "Self-Destruct",
                "type": "normal",
                "class": "normal",
                "description": "The user approaches enemies and causes an explosion, damaging all surrounding enemies. The trade-off is that the user takes enough damage to knock itself out."
            }, {
                "name": "Sludge Bomb",
                "type": "poison",
                "class": "poison",
                "description": "The user shoots out a glob of sludge that splits open when it hits the ground, damaging surrounding enemies. Sometimes poisons enemies."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }, {
                "name": "Venom Drench",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison in front of itself, sometimes raising the amount of damage enemies take."
            }],
            evolution: {
                to: {},
                from: {
                    id: 109,
                    name: 'Koffing',
                    level: '35'
                }
            },
            id: 110,
            name: 'Weezing',
            image: 'Weezing.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '42',
                    id: 112,
                    name: 'Rhydon'
                },
                from: {}
            },
            id: 111,
            name: 'Rhyhorn',
            image: 'Rhyhorn.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Dragon Rush",
                "type": "dragon",
                "class": "dragon",
                "description": "The user flies into enemies a short distance from itself with great intensity, damaging them."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Megahorn",
                "type": "bug",
                "class": "bug",
                "description": "Using its tough and impressive horn, the user rams into enemies in front of itself with no letup, dealing huge damage to them."
            }, {
                "name": "Roar",
                "type": "normal",
                "class": "normal",
                "description": "The user roars intensely, blowing away surrounding enemies."
            }, {
                "name": "Rock Polish",
                "type": "rock",
                "class": "rock",
                "description": "The user polishes its body to reduce drag, raising its movement speed for a while."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {
                    id: 111,
                    name: 'Rhyhorn',
                    level: '42'
                }
            },
            id: 112,
            name: 'Rhydon',
            image: 'Rhydon.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Egg Bomb",
                "type": "normal",
                "class": "normal",
                "description": "The user scatters eggs around itself, damaging enemies hit by them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Light Screen",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Soft-Boiled",
                "type": "normal",
                "class": "normal",
                "description": "The user restores its HP with the power of eggs."
            }, {
                "name": "Sweet Kiss",
                "type": "fairy",
                "class": "fairy",
                "description": "The user kisses enemies directly in front of itself with a sweet, angelic kiss that often confuses them."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 113,
            name: 'Chansey',
            image: 'Chansey.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Leech Seed",
                "type": "grass",
                "class": "grass",
                "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user\'s HP."
            }, {
                "name": "Mega Drain",
                "type": "grass",
                "class": "grass",
                "description": "The user attacks enemies in front of itself, dealing damage to them. Some of the damage dealt is absorbed by the user, restoring its HP."
            }, {
                "name": "Rage Powder",
                "type": "bug",
                "class": "bug",
                "description": "The user scatters a cloud of irritating powder on itself, causing surrounding enemies to target it."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Slam",
                "type": "normal",
                "class": "normal",
                "description": "The user slams nearby enemies with a long tail, vines, or the like, damaging all of them."
            }, {
                "name": "Stun Spore",
                "type": "grass",
                "class": "grass",
                "description": "The user scatters numbing powder directly in front of itself. Often paralyzes enemies hit by it."
            }, {
                "name": "Substitute",
                "type": "normal",
                "class": "normal",
                "description": "The user puts out a substitute for itself that enemies are forced to attack."
            }, {
                "name": "Synthesis",
                "type": "grass",
                "class": "grass",
                "description": "The user absorbs light, raising the damage it deals for a while."
            }, {
                "name": "Vine Whip",
                "type": "grass",
                "class": "grass",
                "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 114,
            name: 'Tangela',
            image: 'Tangela.png'
        },
        {
            attack: [{
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Stomp",
                "type": "normal",
                "class": "normal",
                "description": "The user stomps on enemies in front of itself with a big foot, damaging them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 115,
            name: 'Kangaskhan',
            image: 'Kangaskhan.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {
                    level: '32',
                    id: 117,
                    name: 'Seadra'
                },
                from: {}
            },
            id: 116,
            name: 'Horsea',
            image: 'Horsea.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Dragon Pulse",
                "type": "dragon",
                "class": "dragon",
                "description": "The user sends a shock wave flying from its mouth, damaging enemies hit by it."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {},
                from: {
                    id: 116,
                    name: 'Horsea',
                    level: '32'
                }
            },
            id: 117,
            name: 'Seadra',
            image: 'Seadra.png'
        },
        {
            attack: [{
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Splash",
                "type": "normal",
                "class": "normal",
                "description": "The user splashes in place."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {
                    level: '33',
                    id: 119,
                    name: 'Seaking'
                },
                from: {}
            },
            id: 118,
            name: 'Goldeen',
            image: 'Goldeen.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Megahorn",
                "type": "bug",
                "class": "bug",
                "description": "Using its tough and impressive horn, the user rams into enemies in front of itself with no letup, dealing huge damage to them."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }],
            evolution: {
                to: {},
                from: {
                    id: 118,
                    name: 'Goldeen',
                    level: '33'
                }
            },
            id: 119,
            name: 'Seaking',
            image: 'Seaking.png'
        },
        {
            attack: [{
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Flash Cannon",
                "type": "steel",
                "class": "steel",
                "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }],
            evolution: {
                to: {
                    level: '36',
                    id: 121,
                    name: 'Starmie'
                },
                from: {}
            },
            id: 120,
            name: 'Staryu',
            image: 'Staryu.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Confuse Ray",
                "type": "ghost",
                "class": "ghost",
                "description": "The user exposes surrounding enemies to a sinister ray, often confusing them."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Flash Cannon",
                "type": "steel",
                "class": "steel",
                "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 120,
                    name: 'Staryu',
                    level: '36'
                }
            },
            id: 121,
            name: 'Starmie',
            image: 'Starmie.png'
        },
        {
            attack: [{
                "name": "Barrier",
                "type": "psychic",
                "class": "psychic",
                "description": "The user throws up a wall around itself, lowering the amount of damage it takes for a while."
            }, {
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Follow Me",
                "type": "normal",
                "class": "normal",
                "description": "The user grabs the attention of surrounding enemies, forcing them to target it."
            }, {
                "name": "Hypnosis",
                "type": "psychic",
                "class": "psychic",
                "description": "The user employs hypnotic suggestion, often making enemies in front of itself fall asleep."
            }, {
                "name": "Nasty Plot",
                "type": "dark",
                "class": "dark",
                "description": "The user stimulates its brain by thinking bad thoughts, raising the amount of damage it deals for a while."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Substitute",
                "type": "normal",
                "class": "normal",
                "description": "The user puts out a substitute for itself that enemies are forced to attack."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 122,
            name: 'Mr. Mime',
            image: 'Mr.Mime.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Lunge",
                "type": "bug",
                "class": "bug",
                "description": "The user lunges toward enemies in front of itself, damaging them."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Silver Wind",
                "type": "bug",
                "class": "bug",
                "description": "Scales carried by the wind swirl around the user, damaging enemies hit by them. Some or all of the user\'s stats sometimes rise at random."
            }, {
                "name": "Steel Wing",
                "type": "steel",
                "class": "steel",
                "description": "The user charges at enemies in front of itself and smacks them with its hard wings, dealing damage. Sometimes reduces the amount of damage the user takes."
            }, {
                "name": "Tailwind",
                "type": "flying",
                "class": "flying",
                "description": "The user creates an intense swirling wind that raises its movement speed for a while."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 123,
            name: 'Scyther',
            image: 'Scyther.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Draining Kiss",
                "type": "fairy",
                "class": "fairy",
                "description": "The user kisses enemies directly in front of itself and damages them. Part of the damage dealt restores the user\'s HP."
            }, {
                "name": "Flash",
                "type": "normal",
                "class": "normal",
                "description": "The user suddenly flashes a bright light at surrounding enemies, often lowering their movement speed."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Sing",
                "type": "normal",
                "class": "normal",
                "description": "The user sings to enemies around itself with its calming voice, often putting them to sleep."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 124,
            name: 'Jynx',
            image: 'Jynx.png'
        },
        {
            attack: [{
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Cross Chop",
                "type": "fighting",
                "class": "fighting",
                "description": "The user jumps toward enemies in front of itself and smacks them with a two-handed chop, damaging them. Critical hits land more easily."
            }, {
                "name": "Dynamic Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user punches enemies directly in front of itself with its full, concentrated power. Sometimes confuses enemies."
            }, {
                "name": "Electroweb",
                "type": "electric",
                "class": "electric",
                "description": "The user spreads an electric net out directly in front of itself, lowering the movement speed of enemies hit by it for a while."
            }, {
                "name": "Meditate",
                "type": "psychic",
                "class": "psychic",
                "description": "The user meditates to awaken the power deep within its body, raising the amount of damage it deals for a while."
            }, {
                "name": "Power-Up Punch",
                "type": "fighting",
                "class": "fighting",
                "description": "The user delivers a punch with its hard fist to enemies directly in front of itself, damaging them. Often raises the amount of damage the user deals."
            }, {
                "name": "Thunder",
                "type": "electric",
                "class": "electric",
                "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
            }, {
                "name": "Thunder Punch",
                "type": "electric",
                "class": "electric",
                "description": "The user charges its fist with electricity and unleashes a shocking punch on enemies directly in front of itself, sometimes paralyzing them."
            }, {
                "name": "Thunder Shock",
                "type": "electric",
                "class": "electric",
                "description": "After storing up electricity, the user fires it toward enemies in front of itself, dealing damage to them. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 125,
            name: 'Electabuzz',
            image: 'Electabuzz.png'
        },
        {
            attack: [{
                "name": "Belly Drum",
                "type": "normal",
                "class": "normal",
                "description": "The user uses its own HP to raise all of its stats for a while."
            }, {
                "name": "Cross Chop",
                "type": "fighting",
                "class": "fighting",
                "description": "The user jumps toward enemies in front of itself and smacks them with a two-handed chop, damaging them. Critical hits land more easily."
            }, {
                "name": "Fire Blast",
                "type": "fire",
                "class": "fire",
                "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Smog",
                "type": "poison",
                "class": "poison",
                "description": "The user spews poison around itself, damaging enemies. Sometimes poisons enemies."
            }, {
                "name": "Will-O-Wisp",
                "type": "fire",
                "class": "fire",
                "description": "The user drapes itself with sinister flames and attacks enemies directly in front of it. Often burns enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 126,
            name: 'Magmar',
            image: 'Magmar.png'
        },
        {
            attack: [{
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Close Combat",
                "type": "fighting",
                "class": "fighting",
                "description": "The user gets right up on enemies in front of itself and smacks them with a single blow, damaging them. Sometimes raises the amount of damage the user takes."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Focus Energy",
                "type": "normal",
                "class": "normal",
                "description": "The user takes a deep breath and focuses, raising the amount of damage it deals for a while."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Rock Smash",
                "type": "fighting",
                "class": "fighting",
                "description": "The user unleashes its fury, damaging enemies in a broad area nearby and destroying surrounding trees and rocks."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Submission",
                "type": "fighting",
                "class": "fighting",
                "description": "The user spins toward enemies in front of itself, smashing into them. Deals damage to enemies hit by the user as it whirls around."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 127,
            name: 'Pinsir',
            image: 'Pinsir.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Zen Headbutt",
                "type": "psychic",
                "class": "psychic",
                "description": "The user focuses its willpower to its head, then smashes it into enemies directly in front of itself, dealing damage to enemies hit by it."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 128,
            name: 'Tauros',
            image: 'Tauros.png'
        },
        {
            attack: [{
                "name": "Bounce",
                "type": "flying",
                "class": "flying",
                "description": "The user bounces forward high into the air twice, damaging enemies it hits."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Splash",
                "type": "normal",
                "class": "normal",
                "description": "The user splashes in place."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }],
            evolution: {
                to: {
                    level: '20',
                    id: 130,
                    name: 'Gyarados'
                },
                from: {}
            },
            id: 129,
            name: 'Magikarp',
            image: 'Magikarp.png'
        },
        {
            attack: [{
                "name": "Bounce",
                "type": "flying",
                "class": "flying",
                "description": "The user bounces forward high into the air twice, damaging enemies it hits."
            }, {
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Tackle",
                "type": "normal",
                "class": "normal",
                "description": "The user smashes into enemies in front of itself with all its might, damaging them."
            }, {
                "name": "Taunt",
                "type": "dark",
                "class": "dark",
                "description": "The user taunts surrounding enemies, forcing them to target it."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }],
            evolution: {
                to: {},
                from: {
                    id: 129,
                    name: 'Magikarp',
                    level: '20'
                }
            },
            id: 130,
            name: 'Gyarados',
            image: 'Gyarados.png'
        },
        {
            attack: [{
                "name": "Aurora Veil",
                "type": "ice",
                "class": "ice",
                "description": "The user cloaks itself in a veil of light, reducing the amount of damage it takes for a while."
            }, {
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Icicle Crash",
                "type": "ice",
                "class": "ice",
                "description": "The user drops frigid icicles in front of itself. Deals damage to enemies hit by them and sometimes freezes them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Sing",
                "type": "normal",
                "class": "normal",
                "description": "The user sings to enemies around itself with its calming voice, often putting them to sleep."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 131,
            name: 'Lapras',
            image: 'Lapras.png'
        },
        {
            attack: [{
                "name": "Transform",
                "type": "normal",
                "class": "normal",
                "description": "When Ditto transforms into another Pokémon, this changes into a move that Pokémon can learn."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 132,
            name: 'Ditto',
            image: 'Ditto.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Flail",
                "type": "normal",
                "class": "normal",
                "description": "The user flails about, damaging enemies it hits."
            }, {
                "name": "Growl",
                "type": "normal",
                "class": "normal",
                "description": "The user growls in an endearing way, making surrounding enemies less wary and often reducing the amount of damage they deal."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {},
            id: 133,
            name: 'Eevee',
            image: 'Eevee.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Thunder",
                "type": "electric",
                "class": "electric",
                "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }],
            evolution: {},
            id: 135,
            name: 'Jolteon',
            image: 'Jolteon.png'
        },
        {
            attack: [{
                "name": "Acid Armor",
                "type": "poison",
                "class": "poison",
                "description": "The user alters its cellular structure to liquefy itself, reducing the damage it takes for a while."
            }, {
                "name": "Aqua Ring",
                "type": "water",
                "class": "water",
                "description": "The user envelops itself in a veil made of water, restoring some of its HP."
            }, {
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {},
            id: 134,
            name: 'Vaporeon',
            image: 'Vaporeon.png'
        },
        {
            attack: [{
                "name": "Charm",
                "type": "fairy",
                "class": "fairy",
                "description": "The user makes surrounding enemies less wary with its cute behavior, often reducing the amount of damage they deal."
            }, {
                "name": "Dig",
                "type": "ground",
                "class": "ground",
                "description": "The user digs a tunnel to travel beneath the feet of enemies in front of itself, then pops out from beneath them to damage them."
            }, {
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Flare Blitz",
                "type": "fire",
                "class": "fire",
                "description": "The user creates a path of flames in front of itself and charges forward along it. Deals damage to enemies. Sometimes burns enemies."
            }, {
                "name": "Lava Plume",
                "type": "fire",
                "class": "fire",
                "description": "The user spouts scarlet flames all around itself. Deals damage to enemies around it. Sometimes burns enemies."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {},
            id: 136,
            name: 'Flareon',
            image: 'Flareon.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Iron Tail",
                "type": "steel",
                "class": "steel",
                "description": "The user swings its steel-hard tail, damaging surrounding enemies and sometimes raising the amount of damage they take."
            }, {
                "name": "Psybeam",
                "type": "psychic",
                "class": "psychic",
                "description": "The user sends peculiar rays of light out in three directions, damaging enemies hit by them. Sometimes confuses enemies."
            }, {
                "name": "Recover",
                "type": "normal",
                "class": "normal",
                "description": "Restoring its own cells, the user restores its HP."
            }, {
                "name": "Shadow Ball",
                "type": "ghost",
                "class": "ghost",
                "description": "The user hurls a shadowy blob in front of itself, damaging enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }, {
                "name": "Tri Attack",
                "type": "normal",
                "class": "normal",
                "description": "The user\'s body is imbued with three powers as it attacks enemies in front of itself, damaging them. Sometimes burns, paralyzes, or freezes enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 137,
            name: 'Porygon',
            image: 'Porygon.png'
        },
        {
            attack: [{
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Spikes",
                "type": "ground",
                "class": "ground",
                "description": "The user scatters spikes in front of itself, damaging enemies that step on them."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {
                    level: '40',
                    id: 139,
                    name: 'Omastar'
                },
                from: {}
            },
            id: 138,
            name: 'Omanyte',
            image: 'Omanyte.png'
        },
        {
            attack: [{
                "name": "Bubble",
                "type": "water",
                "class": "water",
                "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed."
            }, {
                "name": "Hydro Pump",
                "type": "water",
                "class": "water",
                "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them."
            }, {
                "name": "Ice Beam",
                "type": "ice",
                "class": "ice",
                "description": "The user fires an icy-cold beam at enemies in front of itself. Deals damage to enemies and sometimes freezes them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Rock Polish",
                "type": "rock",
                "class": "rock",
                "description": "The user polishes its body to reduce drag, raising its movement speed for a while."
            }, {
                "name": "Supersonic",
                "type": "normal",
                "class": "normal",
                "description": "The user generates odd sound waves from its body, often confusing surrounding enemies."
            }, {
                "name": "Whirlpool",
                "type": "water",
                "class": "water",
                "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user."
            }],
            evolution: {
                to: {},
                from: {
                    id: 138,
                    name: 'Omanyte',
                    level: '40'
                }
            },
            id: 139,
            name: 'Omastar',
            image: 'Omastar.png'
        },
        {
            attack: [{
                "name": "Aqua Jet",
                "type": "water",
                "class": "water",
                "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them."
            }, {
                "name": "Metal Sound",
                "type": "steel",
                "class": "steel",
                "description": "Enemies near the user are forced to listen to a horrible sound like metal scraping, often raising the amount of damage they take."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Surf",
                "type": "water",
                "class": "water",
                "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {
                    level: '40',
                    id: 141,
                    name: 'Kabutops'
                },
                from: {}
            },
            id: 140,
            name: 'Kabuto',
            image: 'Kabuto.png'
        },
        {
            attack: [{
                "name": "Aerial Ace",
                "type": "flying",
                "class": "flying",
                "description": "The user quickly slashes in front of itself twice, dealing damage."
            }, {
                "name": "Night Slash",
                "type": "dark",
                "class": "dark",
                "description": "The user dashes forward, slashing surrounding enemies and damaging them. Critical hits land more easily."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Waterfall",
                "type": "water",
                "class": "water",
                "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits."
            }, {
                "name": "Withdraw",
                "type": "water",
                "class": "water",
                "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while."
            }],
            evolution: {
                to: {},
                from: {
                    id: 140,
                    name: 'Kabuto',
                    level: '40'
                }
            },
            id: 141,
            name: 'Kabutops',
            image: 'Kabutops.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Crunch",
                "type": "dark",
                "class": "dark",
                "description": "The user takes aim and then bites on to enemies a short distance in front of itself, damaging them."
            }, {
                "name": "Dragon Claw",
                "type": "dragon",
                "class": "dragon",
                "description": "The user gathers its strength, then charges forward while spinning, damaging enemies with its sharp claws."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Fly",
                "type": "flying",
                "class": "flying",
                "description": "The user flies toward enemies far in front of itself, then swoops down to deal damage to them."
            }, {
                "name": "Rock Tomb",
                "type": "rock",
                "class": "rock",
                "description": "The user drops boulders directly in front of itself, damaging enemies hit by them and sometimes lowering their movement speed."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Sandstorm",
                "type": "rock",
                "class": "rock",
                "description": "The user creates a sandstorm around itself, damaging enemies hit by it."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 142,
            name: 'Aerodactyl',
            image: 'Aerodactyl.png'
        },
        {
            attack: [{
                "name": "Amnesia",
                "type": "psychic",
                "class": "psychic",
                "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
            }, {
                "name": "Belly Drum",
                "type": "normal",
                "class": "normal",
                "description": "The user uses its own HP to raise all of its stats for a while."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Harden",
                "type": "normal",
                "class": "normal",
                "description": "The user stiffens all the muscles in its body, lowering the damage it takes for a while."
            }, {
                "name": "Mega Punch",
                "type": "normal",
                "class": "normal",
                "description": "After approaching enemies in front of itself, the user slugs enemies directly in front of itself with a muscle-packed punch, damaging them."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Rest",
                "type": "psychic",
                "class": "psychic",
                "description": "The user rests in place, greatly restoring its HP."
            }, {
                "name": "Rollout",
                "type": "rock",
                "class": "rock",
                "description": "The user spins around, damaging surrounding enemies it smashes into."
            }, {
                "name": "Take Down",
                "type": "normal",
                "class": "normal",
                "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 143,
            name: 'Snorlax',
            image: 'Snorlax.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Aurora Veil",
                "type": "ice",
                "class": "ice",
                "description": "The user cloaks itself in a veil of light, reducing the amount of damage it takes for a while."
            }, {
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Hurricane",
                "type": "flying",
                "class": "flying",
                "description": "The user whips up an intense wind around itself, damaging surrounding enemies and sometimes confusing them."
            }, {
                "name": "Icy Wind",
                "type": "ice",
                "class": "ice",
                "description": "The user sends a freezing gust of chilled air at enemies in front of itself, damaging them. Sometimes lowers enemies\' movement speed."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Steel Wing",
                "type": "steel",
                "class": "steel",
                "description": "The user charges at enemies in front of itself and smacks them with its hard wings, dealing damage. Sometimes reduces the amount of damage the user takes."
            }, {
                "name": "U-turn",
                "type": "bug",
                "class": "bug",
                "description": "After attacking surrounding enemies, the user moves back to dodge enemies\' counterattacks."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 144,
            name: 'Articuno',
            image: 'Articuno.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Charge",
                "type": "electric",
                "class": "electric",
                "description": "The user stores up electricity, raising the damage it deals and making it resistant to negative effects for a while."
            }, {
                "name": "Drill Peck",
                "type": "flying",
                "class": "flying",
                "description": "The user attacks enemies directly in front of itself with its sharp beak, damaging them."
            }, {
                "name": "Metal Sound",
                "type": "steel",
                "class": "steel",
                "description": "Enemies near the user are forced to listen to a horrible sound like metal scraping, often raising the amount of damage they take."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Thunder",
                "type": "electric",
                "class": "electric",
                "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
            }, {
                "name": "Thunder Shock",
                "type": "electric",
                "class": "electric",
                "description": "After storing up electricity, the user fires it toward enemies in front of itself, dealing damage to them. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 145,
            name: 'Zapdos',
            image: 'Zapdos.png'
        },
        {
            attack: [{
                "name": "Ember",
                "type": "fire",
                "class": "fire",
                "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Fire Blast",
                "type": "fire",
                "class": "fire",
                "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Fire Spin",
                "type": "fire",
                "class": "fire",
                "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies."
            }, {
                "name": "Flamethrower",
                "type": "fire",
                "class": "fire",
                "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies."
            }, {
                "name": "Heat Wave",
                "type": "fire",
                "class": "fire",
                "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them."
            }, {
                "name": "Lava Plume",
                "type": "fire",
                "class": "fire",
                "description": "The user spouts scarlet flames all around itself. Deals damage to enemies around it. Sometimes burns enemies."
            }, {
                "name": "Leer",
                "type": "normal",
                "class": "normal",
                "description": "The user glares at nearby enemies to intimidate them, often raising the amount of damage they take."
            }, {
                "name": "Roost",
                "type": "flying",
                "class": "flying",
                "description": "The user briefly rests its body, restoring a bit of its HP."
            }, {
                "name": "Sky Attack",
                "type": "flying",
                "class": "flying",
                "description": "After flying up and bracing itself, the user charges at enemies directly in front of itself, damaging them. Critical hits land more easily."
            }, {
                "name": "Will-O-Wisp",
                "type": "fire",
                "class": "fire",
                "description": "The user drapes itself with sinister flames and attacks enemies directly in front of it. Often burns enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 146,
            name: 'Moltres',
            image: 'Moltres.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Dragon Pulse",
                "type": "dragon",
                "class": "dragon",
                "description": "The user sends a shock wave flying from its mouth, damaging enemies hit by it."
            }, {
                "name": "Dragon Rush",
                "type": "dragon",
                "class": "dragon",
                "description": "The user flies into enemies a short distance from itself with great intensity, damaging them."
            }, {
                "name": "Extreme Speed",
                "type": "normal",
                "class": "normal",
                "description": "The user charges into enemies in front of itself with blinding speed, damaging them."
            }],
            evolution: {
                to: {
                    level: '30',
                    id: 148,
                    name: 'Dragonair'
                },
                from: {}
            },
            id: 147,
            name: 'Dratini',
            image: 'Dratini.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Dragon Pulse",
                "type": "dragon",
                "class": "dragon",
                "description": "The user sends a shock wave flying from its mouth, damaging enemies hit by it."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }],
            evolution: {
                to: {
                    level: '55',
                    id: 149,
                    name: 'Dragonite'
                },
                from: {
                    id: 147,
                    name: 'Dratini',
                    level: '30'
                }
            },
            id: 148,
            name: 'Dragonair',
            image: 'Dragonair.png'
        },
        {
            attack: [{
                "name": "Agility",
                "type": "psychic",
                "class": "psychic",
                "description": "The user relaxes and lightens its body, raising its movement speed for a while."
            }, {
                "name": "Draco Meteor",
                "type": "dragon",
                "class": "dragon",
                "description": "The user summons several meteors down around itself, damaging enemies hit by them. Sometimes reduces the amount of damage the user deals."
            }, {
                "name": "Dragon Dance",
                "type": "dragon",
                "class": "dragon",
                "description": "The user vigorously performs a mystic, powerful dance that raises the amount of damage it deals and its movement speed for a while."
            }, {
                "name": "Dragon Pulse",
                "type": "dragon",
                "class": "dragon",
                "description": "The user sends a shock wave flying from its mouth, damaging enemies hit by it."
            }, {
                "name": "Dragon Rush",
                "type": "dragon",
                "class": "dragon",
                "description": "The user flies into enemies a short distance from itself with great intensity, damaging them."
            }, {
                "name": "Earthquake",
                "type": "ground",
                "class": "ground",
                "description": "The user causes an earthquake that damages surrounding enemies."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Outrage",
                "type": "dragon",
                "class": "dragon",
                "description": "The user rampages about, attacking and damaging any enemies in its path. Sometimes confuses the user."
            }, {
                "name": "Twister",
                "type": "dragon",
                "class": "dragon",
                "description": "The user whips up several tornadoes and sends them out in front of itself, damaging enemies hit by them."
            }],
            evolution: {
                to: {},
                from: {
                    id: 148,
                    name: 'Dragonair',
                    level: '55'
                }
            },
            id: 149,
            name: 'Dragonite',
            image: 'Dragonite.png'
        },
        {
            attack: [{
                "name": "Blizzard",
                "type": "ice",
                "class": "ice",
                "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them."
            }, {
                "name": "Bulk Up",
                "type": "fighting",
                "class": "fighting",
                "description": "The user tenses its muscles to bulk up its body, raising the damage it deals for a while. This also reduces the damage the user takes."
            }, {
                "name": "Giga Impact",
                "type": "normal",
                "class": "normal",
                "description": "The user focuses every bit of its power and charges toward enemies in front of itself, dealing huge damage to them."
            }, {
                "name": "Hyper Beam",
                "type": "normal",
                "class": "normal",
                "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
            }, {
                "name": "Psychic",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Psycho Cut",
                "type": "psychic",
                "class": "psychic",
                "description": "After moving forward, the user deals damage to enemies with blades formed by psychic power. Critical hits land more easily."
            }, {
                "name": "Psystrike",
                "type": "psychic",
                "class": "psychic",
                "description": "The user creates à large orb of light in front of itself. The orb then splits into many smaller ones that fly out in all directions, dealing damage to surrounding enemies."
            }, {
                "name": "Recover",
                "type": "normal",
                "class": "normal",
                "description": "Restoring its own cells, the user restores its HP."
            }, {
                "name": "Shadow Ball",
                "type": "ghost",
                "class": "ghost",
                "description": "The user hurls a shadowy blob in front of itself, damaging enemies hit by it. Sometimes raises the amount of damage they take."
            }, {
                "name": "Thunderbolt",
                "type": "electric",
                "class": "electric",
                "description": "The user discharges tremendous electricity all around itself. Deals damage to enemies around the user. Sometimes paralyzes enemies."
            }],
            evolution: {
                to: {},
                from: {}
            },
            id: 150,
            name: 'Mewtwo',
            image: 'Mewtwo.png'
        },
        {
            attack: [
                {
                    "name": "Amnesia", 
                    "type": "psychic", 
                    "class": "psychic", 
                    "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects."
                }, 
                {
                    "name": "Flash Cannon", 
                    "type": "steel", 
                    "class": "steel", 
                    "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take."
                }, {
                    "name": "Giga Impact", 
                    "type": "normal", 
                    "class": "normal", 
                    "description": "The user focuses every bit of its power and charges toward enemies in front of itself, dealing huge damage to them."
                }, {
                    "name": "Heat Wave", 
                    "type": "fire", 
                    "class": "fire", 
                    "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them."
                }, {
                    "name": "Hyper Beam", 
                    "type": "normal", 
                    "class": "normal", 
                    "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits."
                }, {
                    "name": "Light Screen", 
                    "type": "psychic", 
                    "class": "psychic", 
                    "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while."
                }, {
                    "name": "Psychic", 
                    "type": "psychic", 
                    "class": "psychic", 
                    "description": "The user creates à large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take."
                }, {
                    "name": "Recover", 
                    "type": "normal", 
                    "class": "normal", 
                    "description": "Restoring its own cells, the user restores its HP."
                }, {
                    "name": "Thunder", 
                    "type": "electric", 
                    "class": "electric", 
                    "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies."
                }, {
                    "name": "Transform", 
                    "type": "normal", 
                    "class": "normal", 
                    "description": "When Mew transforms into another Pokémon, this changes into a move that Pokémon can learn."
                }, {
                    "name": "Tri Attack", 
                    "type": "normal", 
                    "class": "normal", 
                    "description": "The user\'s body is imbued with three powers as it attacks enemies in front of itself, damaging them. Sometimes burns, paralyzes, or freezes enemies."
                }
            ],
            evolution: {
                to: {},
                from: {}
            },
            id: 151,
            name: 'Mew',
            image: 'Mew.png'
        }
    ]
}