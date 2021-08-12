$( document ).ready(function() {
    document.getElementById('button_next').addEventListener('click', function (event) {
        if (current_entry + 1 < 899){
            load_by_num(current_entry + 1);
        }else{
            load_by_num(898);
        }
    });
    document.getElementById('button_next_10').addEventListener('click', function (event) {
        if (current_entry + 10 < 899){
            load_by_num(current_entry + 10);
        }else{
            load_by_num(898);
        }
    });
    document.getElementById('button_prev').addEventListener('click', function (event) {
        if (current_entry - 1 > 0){
            load_by_num(current_entry - 1);
        }else{
            load_by_num(1);
        }
    });
    document.getElementById('button_prev_10').addEventListener('click', function (event) {
        if (current_entry - 10 > 0){
            load_by_num(current_entry - 10);
        }else{
            load_by_num(1);
        }
    });
});