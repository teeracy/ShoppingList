$(document).ready(function() {
    $('#add').mousedown(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item"><div class="checked"></div>' + toAdd + '</div>')
    });
    $('#add').mouseup(function() {
        $('checkListItem').val(' ');
    });
    $(document).on('dblclick', '.item', function() {
    $(this).remove();
    });
})