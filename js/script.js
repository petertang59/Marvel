$('search').click(function() {
    var i = $(this).index();
    $('.fullarticle').hide();
    $('#article' + (i+1)).show();
});