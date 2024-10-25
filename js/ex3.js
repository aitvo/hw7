// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan"
];

const input = document.getElementById('country');
const suggestionsDiv = document.getElementById('suggestions'); // Use the same variable name consistently

// Event listener for input changes
input.addEventListener('input', () => {
  const query = input.value.toLowerCase(); // Get input value
  suggestionsDiv.innerHTML = ''; // Clear previous suggestions

  if (query.startsWith('a')) {
      const filteredCountries = countryList.filter(country => 
          country.toLowerCase().startsWith(query)
      );

      filteredCountries.forEach(country => {
          const suggestion = document.createElement('div');
          suggestion.textContent = country; // Set the suggestion text
          suggestion.classList.add('suggestion'); // Add the suggestion class
          suggestion.addEventListener('click', function() {
              input.value = country; // Set to selected country
              suggestionsDiv.innerHTML = ''; // Clear suggestions
          });
          suggestionsDiv.appendChild(suggestion); // Append the suggestion
      });
  }
});

// Close suggestions when clicking outside
document.addEventListener('click', function(event) {
  if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
      suggestionsDiv.innerHTML = ''; // Clear suggestions
  }
});
