function show(id) {
    $(".desc-" + id).slideToggle(100);
    $(".fai-" + id).toggleClass("rotateicon");
}

var row = 0;
function addToCart(id) {
    var gpu     = document.getElementById("gpu-" + id).innerHTML;
    var price   = document.getElementById("price-" + id).innerHTML;
    var name    = gpu.replace("<br>", "");
    var eur     = price.replace(",- EUR", ",00");

    var calcPrice = parseInt(eur.replace(",00", ".00"));
    row++;
    addToTotal(eur);
    var amount = 1;
    var total = calcPrice * amount;
    var trash = "<i id='myicon-" + id + "' onclick='deleteFromTotal("+row+")' class='trash fas fa-trash-alt'></i>";
    $('#mytable').append( '<tr>' + '<td>' + name + '</td>' + '<td class="total-' + id + '">' + calcPrice+",00" + '</td><td id="quantity-"' + id + '>'+amount+'</td><td id="'+row+'">'+total+",00"+'</td>' + '<td>' + trash + '</td>' + '</tr>' );
}

function addToTotal(amount) {
    amount = parseInt(amount);
    var currentTotal = document.getElementById("totalPrice").innerHTML;
    var qTotal = parseInt(document.getElementById("totalQuantity").innerHTML);
    currentTotal = currentTotal.replace(",", ".");
    currentTotal = parseInt(currentTotal);
    qTotal++;  
    currentTotal+=amount;
    document.getElementById("totalPrice").innerHTML = currentTotal+",00";
    document.getElementById("totalQuantity").innerHTML = qTotal;
}

function deleteFromTotal(id) {
    var deleteAmount = document.getElementById(id).innerHTML;
    deleteAmount = parseInt(deleteAmount);
    var currentTotal = document.getElementById("totalPrice").innerHTML;
    var qTotal = parseInt(document.getElementById("totalQuantity").innerHTML);
    currentTotal = currentTotal.replace(",", ".");
    currentTotal = parseInt(currentTotal);
    currentTotal-=deleteAmount;
    qTotal--;  
    document.getElementById("totalPrice").innerHTML = currentTotal+",00";
    document.getElementById("totalQuantity").innerHTML = qTotal;
}

function validateInp() {
    var num = document.getElementById("input").value;
    if (num.length == 4) {
        document.getElementById("input").style.background = "rgb(31, 255, 57)";
        document.getElementById("input").style.fontWeight = "bold";
        document.getElementById("input").style.color = "black";
    } else {
        document.getElementById("input").style.background = "transparent";
        document.getElementById("input").style.fontWeight = "normal";
        document.getElementById("input").style.color = "white";
    }
}

$('table').on('click', 'i', function() {
    $(this).closest('tr').remove();
})
