let btn = document.querySelector('button');
let monsterSearch = document.querySelector('input');
let monsterImg = document.querySelector('img');
let monsterTitle = document.querySelector('.monster-title');
let monsterActions = document.querySelector('.monster-actions');
let monsterAlignment = document.querySelector('.alignment');
let monsterArmorClass = document.querySelector('.armor-class');
let monsterChallengeRating = document.querySelector('.challenge-rating');
let monsterCharisma = document.querySelector('.charisma');
let monsterConditionImmunities = document.querySelector('.condition-immunities');
let monsterConstitution = document.querySelector('.constitution');
let monsterDamageImmunities = document.querySelector('.damage_immunities');
let monsterDamageResistance = document.querySelector('.damage-resistance');
let monsterDamageVulnerabilities = document.querySelector('.damage-vulnerabilities');
let monsterDex = document.querySelector('.dexterity');
let monsterHitDice= document.querySelector('.hit-dice');
let monsterHitPoints = document.querySelector('.hit-points');
let monsterHitPointsRoll = document.querySelector('.hit-points-roll');
let monsterIntelligence = document.querySelector('.intelligence');
let monsterLanguages = document.querySelector('.languages');
let monsterLegendaryActions = document.querySelector('.legendary-actions');
let monsterProficiencies = document.querySelector('.proficiencies');
let monsterSenses = document.querySelector('.senses');
let monsterSize = document.querySelector('.size');
let monsterSpecialAbilities = document.querySelector('.special-abilities');
let monsterSpeed = document.querySelector('.speed');
let monsterStrength = document.querySelector('.strength');
let monsterType = document.querySelector('.type');
let monsterWisdom = document.querySelector('.wisdom');
let monsterXp = document.querySelector('.xp');

btn.addEventListener('click', getFetch)

function getFetch() {
    const monsterIndex = monsterSearch.value;
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // monsterImg.src = `https://www.dnd5eapi.co/${data.image}`
        monsterTitle.innerHTML = data.name;
        monsterActions.innerHTML = data.actions;
        monsterAlignment.innerHTML = data.alignment;
        monsterArmorClass.innerHTML = data.armor_class;
        monsterChallengeRating.innerHTML = data.challenge_rating;
        monsterCharisma.innerHTML = data.charisma;
        monsterConditionImmunities.innerHTML = data.condition_immunities;
        monsterConstitution.innerHTML = data.constitution;
        monsterDamageImmunities.innerHTML= data.damage_immunities;
        monsterDamageResistance.innerHTML = data.damage_resistances;
        monsterDamageVulnerabilities.innerHTML = data.damage_vulnerabilities;
        monsterDex.innerHTML = data.dexterity;
        monsterHitDice.innerHTML = data.hit_dice;
        monsterHitPoints.innerHTML = data.hit_points;
        monsterHitPointsRoll.innerHTML = data.hit_points_roll;
        monsterIntelligence.innerHTML = data.intelligence;
        monsterLanguages.innerHTML = data.languages;
        monsterLegendaryActions.innerHTML = data.legendary_actions;
        monsterProficiencies.innerHTML = data.proficiencies;
        monsterSenses.innerHTML = data.senses;
        monsterSize.innerHTML = data.size;
        monsterSpecialAbilities.innerHTML = data.special_abilities;
        monsterSpeed.innerHTML = data.speed;
        monsterStrength.innerHTML = data.strength;
        monsterType.innerHTML = data.type;
        monsterWisdom.innerHTML = data.wisdom;
        monsterXp.innerHTML = data.xp;
      })
    
      .catch((err) => {
        console.log(`error ${err}`);
      }); 
  }