$(document).ready(function() {
  let selectedAmenities = [];
  let selectedAmenitiesNames = [];
  let selectedAmenitiesText = "";
  let myPlaceList = [];
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5001/api/v1/status/',
    success: function(data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    },
    error: function(error) {
      console.error('Erreur lors de la récupération du statut de l\'API :', error);
    }
  });
  // Request to fetch places data
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function(placesData) {
      // Loop through placesData and create article tags
      for (const place of placesData) {
        // Create article tag
        let article = `
          <article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
              <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
            </div>
            <div class="description">${place.description}</div>
          </article>
        `;

        // Append the article to section.places
        $('section.places').append(article);
      }
    },
    error: function(error) {
      console.error('Error fetching places data:', error);
    }
  });

  $(document).on('change', 'input[type="checkbox"]', function() {
    let amenityID = $(this).data('id');
    let amenityName = $(this).data('name');
    if ($(this).prop('checked')) {
      selectedAmenities.push(amenityID);
      selectedAmenitiesNames.push(amenityName);
    } else {
      selectedAmenities = selectedAmenities.filter(id => id !== amenityID);
      selectedAmenitiesNames = selectedAmenitiesNames.filter(name => name !== amenityName);
    }
    if (selectedAmenitiesNames.length > 3) {
      selectedAmenitiesText = `${selectedAmenitiesNames[0]}, ${selectedAmenitiesNames[1]}, ${selectedAmenitiesNames[2]}, ${selectedAmenitiesNames[3][0]}...`;
    } else {
      selectedAmenitiesText = selectedAmenitiesNames.join(', ');
    }
    $('div.amenities h4').text(selectedAmenitiesText);
  });


  $(document).ready(() => {
    $('#btn').click(() => {
      for (amenityId2 of selectedAmenities) {
        console.log(amenityId2);
      }
      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(placesData) {
          console.log(placesData);
          for (ob of placesData) {
            myPlaceList.push(ob.id);
          }

          console.log(myPlaceList);
      }

      });

      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:5001/api/v1/places_amenities/places/02d9a2b5-7dca-423f-8406-707bc76abf7e/amenities',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(amenitiesData) {
          console.log(amenitiesData);
      }

      });




});
});
});
