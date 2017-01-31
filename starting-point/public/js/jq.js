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
        $('#hotelList').append('<span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button><br>');
        hotels.forEach(function(hotel){
            if (hotel.name === $data){
               googleMaps.drawMarker('hotel', hotel.place.location);
            }
        });
    });

    $('#restAdd').on('click', function(){
        var $data = $('#restaurant-choices option:selected').text();
        $('#restList').append('<span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button><br>');
        restaurants.forEach(function(restaurant){
            if (restaurant.name === $data){
                googleMaps.drawMarker('restaurant', restaurant.place.location);
            }
        });
    });

    $('#actAdd').on('click', function(){
        var $data = $('#activity-choices option:selected').text();
        $('#actList').append('<span class="title">' + $data + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button><br>');
        activities.forEach(function(activity){
            if (activity.name === $data){
                googleMaps.drawMarker('activity', activity.place.location);
            }
        });
    });

    $('#hotelList').on('click', '.remove', function(){
        $(this).prev('span').remove();
        $(this).remove();
    });
    $('#restList').on('click', '.remove', function(){
        $(this).prev('span').remove();
        $(this).remove();
    });
    $('#actList').on('click', '.remove', function(){
        $(this).prev('span').remove();
        $(this).remove();
    });

    //add day to trip
    $('#day-add').on('click', function(){
        dayCounter++;
        $('<button class="btn btn-circle day-btn ">' + dayCounter + '</button>').insertBefore('#day-add');
    });
 });
