$('#get-data').one('click', function() {
//  console.log('Test - czy wyświetli się tylko raz?');
//    document.body.createElement('div');
//    $.create("div");
    var divNew = document.createElement('div');
    document.body.appendChild(divNew);
    
    $('div:first').attr('id', 'dane-programisty');

//         div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.background = "red";
//    document.getElementsByTagName('div').id = 'dane-programisty';
//    $(HTMLDivElement).css('height', '25px');
//    $(HTMLDivElement).css('background-color', 'red');

});