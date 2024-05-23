/*
    Dexter - Functional Gen 1 Dex
    Porter Libby

    Search functions - control numerical search for dex entries
*/

$( document ).ready(function() {

    const search_elem = document.getElementById("search");
    var num = ""
    // each event corrosponds to a digit
    document.getElementById('button_0').addEventListener('click', function (event) {
        if (search_block == false){ add_num('0'); }
    });
    
    document.getElementById('button_1').addEventListener('click', function (event) {
        if (search_block == false){ add_num('1'); }
    });
    
    document.getElementById('button_2').addEventListener('click', function (event) {
        if (search_block == false){ add_num('2'); }
    });
    
    document.getElementById('button_3').addEventListener('click', function (event) {
        if (search_block == false){ add_num('3'); }
    });
    
    document.getElementById('button_4').addEventListener('click', function (event) {
        if (search_block == false){ add_num('4'); }
    });
    
    document.getElementById('button_5').addEventListener('click', function (event) {
        if (search_block == false){ add_num('5'); }
    });
    
    document.getElementById('button_6').addEventListener('click', function (event) {
        if (search_block == false){ add_num('6'); }
    });
    
    document.getElementById('button_7').addEventListener('click', function (event) {
        if (search_block == false){ add_num('7'); }
    });
    
    document.getElementById('button_8').addEventListener('click', function (event) {
        if (search_block == false){ add_num('8'); }
    });
    
    document.getElementById('button_9').addEventListener('click', function (event) {
        if (search_block == false){ add_num('9'); }
    });

    function add_num(n){
        num += n;
        check_search();
    }

    function check_search(){ // checks to see if search is complete 3-digit (001, 121, 032)
        if (num.length == DEX_COUNT.toString().length){
            if (parseInt(num) > DEX_COUNT || parseInt(num) < 1){
                search_elem.innerText = "ERR" // if pokemon does not exist, display ERR
            }
            else{
                load_by_num(parseInt(num)); // load search integer (dex num)
                num = ""
            }
            setTimeout(function(){
                search_elem.innerText = "";
                num = ""
            }, 500);
        }
        let underscore_len = DEX_COUNT.toString().length - num.length;
        if (underscore_len == 4){
            search_elem.innerText = "";
        }
        else{
            search_elem.innerText = num + "_".repeat(underscore_len);
        }
        
    }
});




