let btn = document.querySelector("button");
let monsterSearch = document.querySelector("input");
let monsterImg = document.querySelector("img");
let monsterTitle = document.querySelector(".monster-title");
let monsterActions = document.querySelector(".monster-actions");
let monsterAlignment = document.querySelector(".alignment");
let monsterArmorClass = document.querySelector(".armor-class");
let monsterChallengeRating = document.querySelector(".challenge-rating");
let monsterCharisma = document.querySelector(".charisma");
let monsterConditionImmunities = document.querySelector(
  ".condition-immunities"
);
let monsterConstitution = document.querySelector(".constitution");
let monsterDamageImmunities = document.querySelector(".damage_immunities");
let monsterDamageResistance = document.querySelector(".damage-resistance");
let monsterDamageVulnerabilities = document.querySelector(
  ".damage-vulnerabilities"
);
let monsterDex = document.querySelector(".dexterity");
let monsterHitDice = document.querySelector(".hit-dice");
let monsterHitPoints = document.querySelector(".hit-points");
let monsterHitPointsRoll = document.querySelector(".hit-points-roll");
let monsterIntelligence = document.querySelector(".intelligence");
let monsterLanguages = document.querySelector(".languages");
let monsterLegendaryActions = document.querySelector(".legendary-actions");
let monsterProficiencies = document.querySelector(".proficiencies");
let monsterSenses = document.querySelector(".senses");
let monsterSize = document.querySelector(".size");
let monsterSpecialAbilities = document.querySelector(".special-abilities");
let monsterSpeed = document.querySelector(".speed");
let monsterStrength = document.querySelector(".strength");
let monsterType = document.querySelector(".type");
let monsterWisdom = document.querySelector(".wisdom");
let monsterXp = document.querySelector(".xp");

btn.addEventListener("click", getFetch);

function getFetch() {
  const monsterIndex = monsterSearch.value;
  const url = `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // monsterImg.src = `https://www.dnd5eapi.co/${data.image}`
      monsterTitle.innerHTML = data.name;

      data.actions.forEach((actions) => {
        let nameElement = document.createElement("h3");
        nameElement.textContent = actions.name;

        let descElement = document.createElement("p");
        descElement.textContent = actions.desc;

        let attackBonusElement = document.createElement("p");
        attackBonusElement.textContent =
          "Attack Bonus: " + actions.attack_bonus;

        let damageElement = document.createElement("p");
        damageElement.textContent = "Damage: " + actions.damage;

        monsterActions.appendChild(nameElement);
        monsterActions.appendChild(descElement);
        monsterActions.appendChild(attackBonusElement);
        monsterActions.appendChild(damageElement);
      });
      monsterAlignment.innerHTML = data.alignment;

      data.armor_class.forEach((armor_class) => {
        let typeElement = document.createElement("h3");
        typeElement.textContent = armor_class.type;

        let valueElement = document.createElement("p");
        valueElement.textContent = "Value: " + armor_class.value;

        let armorDetailsElement = document.createElement("p");
        armorDetailsElement.textContent = "Armor: " + armor_class.armor;

        monsterArmorClass.appendChild(typeElement);
        monsterArmorClass.appendChild(valueElement);
        monsterArmorClass.appendChild(armorDetailsElement);
      });
      monsterChallengeRating.innerHTML = data.challenge_rating;
      monsterCharisma.innerHTML = data.charisma;

      // monsterConditionImmunities.innerHTML = data.condition_immunities;

      monsterConstitution.innerHTML = data.constitution;
      // monsterDamageImmunities.innerHTML= data.damage_immunities;
      // monsterDamageResistance.innerHTML = data.damage_resistances;
      // monsterDamageVulnerabilities.innerHTML = data.damage_vulnerabilities;
      monsterDex.innerHTML = data.dexterity;
      monsterHitDice.innerHTML = data.hit_dice;
      monsterHitPoints.innerHTML = data.hit_points;
      monsterHitPointsRoll.innerHTML = data.hit_points_roll;
      monsterIntelligence.innerHTML = data.intelligence;
      // monsterLanguages.innerHTML = data.languages;

      data.legendary_actions.forEach((legendary_action) => {
        let nameElement = document.createElement("h3");
        nameElement.textContent = legendary_action.name;

        let descElement = document.createElement("p");
        descElement.textContent = legendary_action.desc;

        monsterLegendaryActions.appendChild(nameElement);
        monsterLegendaryActions.appendChild(descElement);
      });

      data.proficiencies.forEach((proficiencies) => {
        let nameElement = document.createElement("h3");
        nameElement.textContent = proficiencies.proficiency.name;

        let valueElement = document.createElement("p");
        valueElement.textContent = "Value: " + proficiencies.value;

        monsterProficiencies.appendChild(nameElement);
        monsterProficiencies.appendChild(valueElement);
      });

      // monsterSenses.innerHTML = data.senses;
      monsterSize.innerHTML = data.size;
      // monsterSpecialAbilities.innerHTML = data.special_abilities;
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
