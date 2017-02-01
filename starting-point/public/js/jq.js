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

        // var cloned = $('#itinerary').clone()
        // console.log(cloned);

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

let emptyClone =  $('#itinerary').clone(true)
let daysArray = []

    $(".day-btn:contains('1')").on('click', function(){
        makeMap();
        //index of prior day, state of prior day
        let priorDayIndex = +$('.current-day').text()
        let priorDay = $('#itinerary').clone(true)
        //puts clone of day on index of day
        daysArray[priorDayIndex] = priorDay;

        //add current day class
        $('.day-btn').removeClass('current-day');
        $(this).addClass('current-day');

        let currentIndex = +$(this).text()
        //remove all the current stuff
        $('#itinerary').remove()
        console.log(emptyClone)
        if (!daysArray[currentIndex]) $('#new-itinerary').append(emptyClone.clone(true))
        else $('#new-itinerary').append(daysArray[currentIndex])

        //add the clone from teh right index

    })
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
        var $newbtn = $('<button class="btn btn-circle day-btn ">' + dayCounter + '</button>').insertBefore('#day-add');


        $newbtn.on('click', function() {
             makeMap();
            //index of prior day, state of prior day
            let priorDayIndex = +$('.current-day').text()
            let priorDay = $('#itinerary').clone(true)
            //puts clone of day on index of day
            daysArray[priorDayIndex] = priorDay;

            //add current day class
            $('.day-btn').removeClass('current-day');
            $(this).addClass('current-day');

            let currentIndex = +$(this).text()
            //remove all the current stuff
            $('#itinerary').remove()
            // var x = $('#new-itinerary').append(daysArray[currentIndex])
            if (!daysArray[currentIndex]) $('#new-itinerary').append(emptyClone.clone(true))

            else $('#new-itinerary').append(daysArray[currentIndex])
            console.log(daysArray);

            //add the clone from teh right index


        })
    });

    function makeMarkers(){

    }


//day button itinerary


 });
