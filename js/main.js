const current_entry = 1;


function load_by_num(n){
    if (n < 0 || n > 898){
        console.log("ERROR");
    }else{
        $.getJSON('https://pokeapi.co/api/v2/pokemon/' + n, function(data) {
            console.info(data);
            var img = data["sprites"]["other"]["official-artwork"]["front_default"];
            var name = data["name"];
            document.getElementById("sprite").src = img;
            document.getElementById("num").innerText = "#" + n;
            document.getElementById("name").innerText = name.replace(/\b\w/g, l => l.toUpperCase());
        });
    }
}
load_by_num(1);

