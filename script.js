$(document).ready(function() {
    $('#add').mousedown(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<li class="item">' + toAdd + '</li>')
        // $('ol li').sortable();
    });
    $('input').keydown(function(e) {
        if (e.keyCode == '13') {
            e.preventDefault();
           var toAdd = $('input[name=checkListItem]').val();
            $('.list').append('<li class="item">' + toAdd + '</li>') 
        }
        // $('ol li').sortable();
    });
    // $('#add').mouseup(function() {
    //     $('checkListItem').;
    // });
    $('#clearAll').mousedown(function() {
         $('.item').remove();
    });
    $('#clearChecked').mousedown(function() {
         $('.checked').remove();
    });
    $(document).on('click', '.item', function() {
        $(this).toggleClass('checked');
    });
    $(document).on('dblclick', '.item', function() {
        $(this).remove();
    });
});

// clear input box
// return invalid for responses
// fix sortable