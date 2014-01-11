$(document).ready(function() {
    $('#add').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<li class="item">' + toAdd + '</li>');
        $('.item').sortable();
        status();
        $('input').val("");
    });
    $('input').keydown(function(e) {
        if (e.keyCode == '13') {
            e.preventDefault();
           var toAdd = $('input[name=checkListItem]').val();
            $('.list').append('<li class="item">' + toAdd + '</li>');
            $('.item').sortable();
            status();
            $('input').val(""); 
        }
    });
    $('#clearAll').mousedown(function() {
         $('.item').remove();
         status(); 
    });
    $('#clearChecked').mousedown(function() {
         $('.checked').remove();
         status();
    });
    $(document).on('click', '.item', function() {
        $(this).toggleClass('checked');
         status();
    });
    $(document).on('dblclick', '.item', function() {
        $(this).remove();
         status();
    });
    var status = function() {
        total = $('.item').length;
        console.log(total);
        done = $('.checked').length;
        console.log(done);
        $('span').html('<span>' + (total-done) + '/' + total + '</span>');
    };
    var verify = function() {
        $('toAdd').trim().length
    }
    $('ol').sortable();
});
