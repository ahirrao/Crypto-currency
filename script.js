 
 var bitn = document.getElementById("b");
 var eth = document.getElementById("e");
 var dog = document.getElementById("d");
 
 
 var settings = {
    "async": true,
     "scrossDomain": true,
     "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
     "method": "GET",
     "headers": {}
}
$.ajax(settings).done(function(response){
    bitn.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dog.innerHTML = response.dogecoin.usd;
});