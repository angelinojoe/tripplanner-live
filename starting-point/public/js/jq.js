 var dayCounter = 1;

 $(function thisShitisHard() {   //populate dropdowns
    $.each(hotels, function(i, hotel){
        $('#hotel-choices').append('<option>' + hotel.name + '</option>');
    });
    $.each(restaurants, function(i, rest){
        $('#restaurant-choices').append('<option>' + rest.name + '</option>');
    });
    $.each(activities, function(i, activity){
        $('#activity-choices').append('<option>' + activity.name + '</option>');
    });
    //add functionality to buttons

    $('#hotelAdd').on('click', function(){

        var $data = $('#hotel-choices option:selected').text();

        $('#hotelList').append('<div class="itenarary-item"><span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        let currentHotel = hotels.filter(hotel => hotel.name === $data)[0]
        let currentMarker = googleMaps.drawMarker('hotel', currentHotel.place.location)

        let $lastButton = $('#hotelList').children().last().children().last();

        $lastButton.on('click', function() {
            currentMarker.setMap(null)
            $(this).parent().remove();
        })
    });

    $('#restAdd').on('click', function(){
        var $data = $('#restaurant-choices option:selected').text();

        $('#restList').append('<div class="itenarary-item"><span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        let currentRestaurant = restaurants.filter(rest => rest.name === $data)[0]
        let currentMarker = googleMaps.drawMarker('restaurant', currentRestaurant.place.location)

        let $lastButton = $('#restList').children().last().children().last();

        $lastButton.on('click', function() {
            currentMarker.setMap(null)
            $(this).parent().remove();
        })

    });

    $('#actAdd').on('click', function(){
        var $data = $('#activity-choices option:selected').text();

        $('#actList').append('<div class="itenarary-item"><span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        let currentActivity = activities.filter(act => act.name === $data)[0]
        let currentMarker = googleMaps.drawMarker('activity', currentActivity.place.location)

        let $lastButton = $('#actList').children().last().children().last();

        $lastButton.on('click', function() {
            currentMarker.setMap(null)
            $(this).parent().remove();
        })
    });

//old name & button removal code
    // $('#hotelList').on('click', '.remove', function(){
    //     $(this).prev('span').remove();
    //     $(this).remove();
    // });
    // $('#restList').on('click', '.remove', function(){
    //     $(this).prev('span').remove();
    //     $(this).remove();
    // });
    // $('#actList').on('click', '.remove', function(){
    //     $(this).prev('span').remove();
    //     $(this).remove();
    // });

//
//add day to trip
    $('#day-add').on('click', function(){
        dayCounter++;
        $('<button class="btn btn-circle day-btn ">' + dayCounter + '</button>').insertBefore('#day-add');
    });
 });
