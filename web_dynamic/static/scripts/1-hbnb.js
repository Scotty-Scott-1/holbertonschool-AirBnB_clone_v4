$(document).ready(function() {
  let selectedAmenities = [];
  $(document).on('change', 'input[type="checkbox"]', function() {
    let amenityID = $(this).data('id');
    if ($(this).prop('checked')) {
      selectedAmenities.push(amenityID);
    } else {
      selectedAmenities = selectedAmenities.filter(id => id !== amenityID);
    }
    $('div.Amenities h4').text('Selected Amenities: ' + selectedAmenities.join(', '));
  });
});

