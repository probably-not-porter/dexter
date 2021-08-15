/*
    Dexter - Functional Gen 1 Dex
    Porter Libby

    Nav Functions - button events for navigation within the dex
*/

$( document ).ready(function() {
    // step forward one dex number
    document.getElementById('button_next').addEventListener('click', function (event) {
        if (search_block == false){
            if (current_entry + 1 < 899){
                load_by_num(current_entry + 1);
            }else{
                load_by_num(898);
            }
        }
    });
    // step forward ten dex numbers
    document.getElementById('button_next_10').addEventListener('click', function (event) {
        if (search_block == false){
            if (current_entry + 10 < 899){
                load_by_num(current_entry + 10);
            }else{
                load_by_num(898);
            }
        }
    });
    // step back one dex number
    document.getElementById('button_prev').addEventListener('click', function (event) {
        if (search_block == false){
            if (current_entry - 1 > 0){
                load_by_num(current_entry - 1);
            }else{
                load_by_num(1);
            }
        }
    });
    // step back ten dex numbers
    document.getElementById('button_prev_10').addEventListener('click', function (event) {
        if (search_block == false){
            if (current_entry - 10 > 0){
                load_by_num(current_entry - 10);
            }else{
                load_by_num(1);
            }
        }
    });
});


function info_next(){
    
}
function info_prev(){

}