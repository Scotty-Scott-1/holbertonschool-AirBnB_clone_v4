$(document).ready(function() {
  let selectedAmenities = [];
  let selectedAmenitiesNames = [];
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
    $('div.amenities h4').text(selectedAmenitiesNames.join(', '));
  });
});

