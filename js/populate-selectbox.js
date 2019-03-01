(function() {
  var county  = document.getElementById('county');	// county select box
  var town = document.getElementById('town');        // town select box
  var cavan = {                                      					// Object stores cavan
    cavan: 'Cavan',
    bailieborough: 'Bailieborough',
    kingscourt: 'Kingscourt',
    virginia: 'Virginia'
  };
  var roscommon = {                                  				// Store roscommon
    athleague: 'Athleague',
    boyle: 'Boyle',
    castlerea: 'Castlerea',
    roscommon: 'Roscommon'
  };  
    var westmeath = {                                  				// Store westmeath
    athlone: 'Athlone',
    kilbegan: 'Kilbegan',
    moate: 'Moate',
    horseleap: 'Horseleap'
  };

  // WHEN THE USER CHANGES THE county SELECT BOX
  addEvent(county, 'change', function() {
    if (this.value === 'choose') {                // No selection made
      town.innerHTML = '<option>Please choose a county first</option>';
      return;                                     // No need to proceed further
    }
    var towns = gettowns(this.value);           // Select the right object

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = '<option>Please choose a town</option>';
    var key;
    for (key in towns) {                     // Loop through towns
      options += '<option value="' + key + '">' + towns[key] + '</option>';
    }
    town.innerHTML = options;                    // Update select box
  });

  function gettowns(county) {
    if (county === 'cavan') {            // If county is cavan
      return cavan;                             // Return cavan object
    } else if (county === 'roscommon') {  // If county is roscommon
      return roscommon;                          // Return roscommon object
    } else if (county === 'westmeath') {
		return westmeath;
	}
  }
}());