document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("button");
  let monsterSearch = document.querySelector("input");
  let monsterImg = document.querySelector("img");
  let monsterTitle = document.querySelector(".monster-title");
  let monsterActions = document.querySelector(".monster-actions");
  let monsterAlignment = document.querySelector(".alignment");
  let monsterArmorClass = document.querySelector(".armor-class");
  let monsterChallengeRating = document.querySelector(".challenge-rating");
  let monsterCharisma = document.querySelector(".charisma");
  let monsterConstitution = document.querySelector(".constitution");
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
    const monsterIndex = monsterSearch.value.toLowerCase().split(" ").join("-");
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        clearContent();

        console.log(data);

        // monsterImg.src = `https://www.dnd5eapi.co/${data.url}.png`;
        monsterTitle.innerHTML = data.name;

        data.actions.forEach((actions) => {
          let nameElement = document.createElement("span");
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
          let typeElement = document.createElement("span");
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
        monsterConstitution.innerHTML = data.constitution;
        monsterDex.innerHTML = data.dexterity;
        monsterHitDice.innerHTML = data.hit_dice;
        monsterHitPoints.innerHTML = data.hit_points;
        monsterHitPointsRoll.innerHTML = data.hit_points_roll;
        monsterIntelligence.innerHTML = data.intelligence;
        monsterLanguages.innerHTML = data.languages;

        data.legendary_actions.forEach((legendary_action) => {
          let nameElement = document.createElement("span");
          nameElement.textContent = legendary_action.name;

          let descElement = document.createElement("p");
          descElement.textContent = legendary_action.desc;

          monsterLegendaryActions.appendChild(nameElement);
          monsterLegendaryActions.appendChild(descElement);
        });

        data.proficiencies.forEach((proficiency) => {
          let nameElement = document.createElement("span");
          nameElement.textContent = proficiency.proficiency.name;

          let valueElement = document.createElement("p");
          valueElement.textContent = "Value: " + proficiency.value;

          monsterProficiencies.appendChild(nameElement);
          monsterProficiencies.appendChild(valueElement);
        });

        let darkvisionElement = document.createElement("p");
        darkvisionElement.textContent = "Darkvision: " + data.senses.darkvision;

        let passivePerceptionElement = document.createElement("p");
        passivePerceptionElement.textContent =
          "Passive Perception: " + data.senses.passive_perception;

        monsterSenses.appendChild(darkvisionElement);
        monsterSenses.appendChild(passivePerceptionElement);
        monsterSize.innerHTML = data.size;

        data.special_abilities.forEach((special_ability) => {
          let nameElement = document.createElement("span");
          nameElement.textContent = special_ability.name;

          let descElement = document.createElement("p");
          descElement.textContent = "Description: " + special_ability.desc;

          monsterSpecialAbilities.appendChild(nameElement);
          monsterSpecialAbilities.appendChild(descElement);
        });

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

  function clearContent() {
    // monsterImg.src = "";
    monsterTitle.innerHTML = "";
    monsterActions.innerHTML = "";
    monsterLegendaryActions.innerHTML = "";
    monsterProficiencies.innerHTML = "";
    monsterSenses.innerHTML = "";
    monsterSpecialAbilities.innerHTML = "";
    monsterAlignment.innerHTML = "";
    monsterArmorClass.innerHTML = "";
    monsterChallengeRating.innerHTML = "";
    monsterCharisma.innerHTML = "";
    monsterConstitution.innerHTML = "";
    monsterDex.innerHTML = "";
    monsterHitDice.innerHTML = "";
    monsterHitPoints.innerHTML = "";
    monsterHitPointsRoll.innerHTML = "";
    monsterIntelligence.innerHTML = "";
    monsterLanguages.innerHTML = "";
    monsterSize.innerHTML = "";
    monsterSpeed.innerHTML = "";
    monsterStrength.innerHTML = "";
    monsterType.innerHTML = "";
    monsterWisdom.innerHTML = "";
    monsterXp.innerHTML = "";
  }
});
