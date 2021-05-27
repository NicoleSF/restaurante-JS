function mostrarPromocao(){

    var produtoIn = document.getElementById("produtoIn");
    var precoIn = document.getElementById("precoIn");
    var promocaoOut = document.getElementById("promocaoOut");
    var produtoOut = document.getElementById("produtoOut");

    var produto = produtoIn.value;
    var promocao = Number(precoIn.value);

    
    var terceiroProduto = promocao / 2;
    var desconto = promocao + promocao + (terceiroProduto);
    
    promocaoOut.textContent = produto + " - Promoção: Leve 3 por R$: " + desconto;
    produtoOut.textContent = "O 3º produto custa apenas R$" + terceiroProduto;

}

var button = document.getElementById("button");
button.addEventListener("click", mostrarPromocao);