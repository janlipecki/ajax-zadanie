//.one - dana akcja będzie wykonana tylko raz
$('#get-data').one('click', function() {
    var divNew = document.createElement('div');
    document.body.appendChild(divNew);
    $('div:first').attr('id', 'dane-programisty');
});