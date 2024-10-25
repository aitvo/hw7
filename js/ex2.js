// character list. each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// DOM (access html content)
const houseDropdown = document.getElementById('house');
const characterList = document.getElementById('characters');

// house options
houses.forEach(house => {
  const houseSelect = document.createElement('option'); // option stored in houseSelect
  houseSelect.value = house.code; // { code: "ST", name: "Stark" }, value attribute will be set to "ST"
  houseSelect.innerHTML = house.name; // make it visible "Stark"
  houseDropdown.appendChild(houseSelect); // adds to dropdown
});

// update list (change, not click)
houseDropdown.addEventListener('change', (e) => {
  // Clear previous character list
  characterList.innerHTML = '';

  // Get the selected house code
  const selectedHouseCode = e.target.value;

  // Get characters for the selected house
  const characters = getCharacters(selectedHouseCode);

  // Populate the character list
  characters.forEach(character => {
    const li = document.createElement('li');  // new list item
    li.innerHTML = character;  // set list item to each character
    characterList.appendChild(li);  // add list item to name
  });
});

// call
populateHouseDropdown(); 
