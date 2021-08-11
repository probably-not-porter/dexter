const current_entry = 1;


function load_by_num(n){
    if (n < 0 || n > 898){
        console.log("ERROR");
    }else{
        $.getJSON('https://pokeapi.co/api/v2/pokemon/' + n, function(data) {
            console.info(data);

            var img = data["sprites"]["other"]["official-artwork"]["front_default"];
            var name = data["name"];
            var types = data["types"];

            document.getElementById("sprite").src = img;
            document.getElementById("num").innerText = "#" + n;
            document.getElementById("name").innerText = name.replace(/\b\w/g, l => l.toUpperCase());

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
    }
}
load_by_num(1);

