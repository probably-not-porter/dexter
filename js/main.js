/*
    Dexter - Functional Gen 1 Dex
    Porter Libby

    Main functions - controls API loading, sequential text display.
*/

var current_entry = 1; // keep track of what pokemon is currently being displayed
var info_page = 1; // keep track of what information is being displayed on the right screen
var search_block = false; // false means new information can be rendered, true means new information cant be rendered

function load_by_num(n){
    
    document.getElementById("load_light").style.visibility = "visible"; // show loading light
    current_entry = n;
    if (n < 0 || n > 898){
        console.error("PKMN does not exist."); // number does not fit within current index of pokemon
        document.getElementById("load_light").style.visibility = "hidden"; // hide loading light
    }else{
        search_block = true; // block search from being performed until current is complete

        // get main pokemon information
        $.getJSON('https://pokeapi.co/api/v2/pokemon/' + n, function(data) {
            console.info(data);

            var img = data["sprites"]["other"]["official-artwork"]["front_default"];
            var name = data["name"];
            var types = data["types"];
            var height = data["height"];
            var weight = data["weight"];

            document.getElementById("sprite").src = img;
            document.getElementById("num").innerText = "#" + n;
            document.getElementById("name").innerText = name.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById("height").innerText = (Math.round(height / 10)).toFixed(1) + " meters";
            document.getElementById("weight").innerText = (Math.round(weight / 10)).toFixed(1) + " kilograms";

            // types
            let type1 = document.getElementById("type1");
            let type2 = document.getElementById("type2");
            type1.style.visibility = "hidden";
            type2.style.visibility = "hidden";
            for (let x = 0; x < types.length; x++ ){
                if (x == 0){
                    type1.style.visibility = "visible";
                    type1.style.backgroundColor = color_conv[types[x]["type"]["name"]];
                    type1.innerHTML = "<div class='slot'>TYPE 1</div>" + "<span class='name'>" + types[x]["type"]["name"].replace(/\b\w/g, l => l.toUpperCase()) + "</span>";
                }
                if (x == 1){
                    type2.style.visibility = "visible";
                    type2.style.backgroundColor = color_conv[types[x]["type"]["name"]];
                    type2.innerHTML = "<div class='slot'>TYPE 2</div>" + "<span class='name'>" + types[x]["type"]["name"].replace(/\b\w/g, l => l.toUpperCase()) + "</span>"
                }
            }

        });
        // get additional information like dex description
        $.getJSON('https://pokeapi.co/api/v2/pokemon-species/' + n, function(data) {
            document.getElementById("flavor").innerText = "";
            let flavor = null;
            let x = 0;
            while (flavor == null){
                if (data["flavor_text_entries"][x]["language"]["name"] == "en"){
                    flavor = data["flavor_text_entries"][x]["flavor_text"].replace(/(\r\n|\n|\r)/gm, " ").replace(/[\u000C]/g,' ');
                }else{
                    x++;
                }
            }
            setTimeout(function(){
                display_char(0, flavor, document.getElementById("flavor"));
            }, 5);
        }); 
        
    }
}

function display_char(n, s, el){ // recursively display text
    if (n < s.length){
        if (s[n] == " "){
            el.innerText += s[n] + s[n+1];
            n = n + 1
        }else{
            el.innerText += s[n];
        }
        setTimeout(function(){
            display_char(n+1, s, el); // recur
        }, 5);
    }else{
        search_block = false;
        document.getElementById("load_light").style.visibility = "hidden"; // hide loading light
    }

}
$( document ).ready(function() { load_by_num(1); }); // load bulbasaur on startup

