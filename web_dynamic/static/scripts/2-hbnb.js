$(document).ready(function() {
  let selectedAmenities = [];
  let selectedAmenitiesNames = [];
  let selectedAmenitiesText = "";
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
    console.log(selectedAmenitiesNames.length);
    if (selectedAmenitiesNames.length > 3) {
      selectedAmenitiesText = `${selectedAmenitiesNames[0]}, ${selectedAmenitiesNames[1]}, ${selectedAmenitiesNames[2]}, ${selectedAmenitiesNames[3][0]}...`;
    } else {
      selectedAmenitiesText = selectedAmenitiesNames.join(', ');
    }
    $('div.amenities h4').text(selectedAmenitiesText);
  });
});
