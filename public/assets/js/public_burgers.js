

$(function(){
    //on click of the yum button, it will change state of devoured boolean.
    $('.change-dev').on('click', function(event){

        //data from partial burger button fields
        var id = $(this).data('id');
        var newDev = $(this).data('newdev');
        // create new data object to send in put request.
        var newDevState = {
            devoured: newDev
        };

        // Send the PUT request with id of burger to change boolean.
        $.ajax("/api/burgers/" + id, {
            type: 'PUT',
            data: newDevState
        }).then(
            function() {
                //reloads the page to update the list.
                location.reload();
            }
        );
    });


















})