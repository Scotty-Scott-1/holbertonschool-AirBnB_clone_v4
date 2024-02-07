$(document).ready(function () {
  let selectedAmenities = [];
  let selectedAmenitiesNames = [];
  let selectedAmenitiesText = '';
  $(document).on('change', 'input[type="checkbox"]', function () {
    const amenityID = $(this).data('id');
    const amenityName = $(this).data('name');
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
