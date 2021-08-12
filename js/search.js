var search_block = false;

$( document ).ready(function() {
    document.getElementById('button_0').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '0';
            check_search();
        }
    });
    
    document.getElementById('button_1').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '1';
            check_search();
        }
    });
    
    document.getElementById('button_2').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '2';
            check_search();
        }
    });
    
    document.getElementById('button_3').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '3';
            check_search();
        }
    });
    
    document.getElementById('button_4').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '4';
            check_search();
        }
    });
    
    document.getElementById('button_5').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '5';
            check_search();
        }
    });
    
    document.getElementById('button_6').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '6';
            check_search();
        }
    });
    
    document.getElementById('button_7').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '7';
            check_search();
        }
    });
    
    document.getElementById('button_8').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '8';
            check_search();
        }
    });
    
    document.getElementById('button_9').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '9';
            check_search();
        }
    });
});



function check_search(){
    let search = document.getElementById("search").innerText;
    if (search.length > 2){
        search_block = true;
        if (parseInt(search) > 898 || parseInt(search) < 1){
            document.getElementById("search").innerText = "ERR"
        }
        setTimeout(function(){
            document.getElementById("search").innerText = "";
            search_block = false;
        }, 1000);
        
        load_by_num(parseInt(search));
    }
}