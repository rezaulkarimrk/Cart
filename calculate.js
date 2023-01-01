// product 1
function productIncrement(id, productValueid, OtherProductValue, addOrMinus){
    let productNumber = parseInt(document.getElementById(id).value);
 
    let productTotalValue = parseFloat(document.getElementById(productValueid).innerHTML);

    let perProductrate = productTotalValue/productNumber;
    
    productNumber+=addOrMinus;     //increement product
    if(productNumber===0) return;
    productTotalValue = productNumber*perProductrate;  //add increment product value
    document.getElementById(productValueid).innerHTML=productTotalValue;
    document.getElementById(id).value = productNumber;

    // other product value select
    let OtherProductValueTotal = parseInt(document.getElementById(OtherProductValue).innerHTML);

    let subTotalAmount = document.getElementById('subTotal');

    subTotalAmount = productTotalValue+OtherProductValueTotal;

    document.getElementById('subTotal').innerHTML=subTotalAmount;
    document.getElementById( 'Total').innerHTML=subTotalAmount;

 }

 const plusProdcut1 = document.getElementById('plusProdcut1');
 plusProdcut1.addEventListener('click', function(event){

    productIncrement('productNumber1', 'productValue1', 'producValue2', 1);
 });

 const plusProdcut2 = document.getElementById('plusProdcut2');
 plusProdcut2.addEventListener('click', function(event){
    productIncrement('productNumber2', 'producValue2', 'productValue1', 1);
 });
 const minusButton1 = document.getElementById('minusButton1');
 minusButton1.addEventListener('click', function(){
    productIncrement('productNumber1', 'productValue1', 'producValue2', -1);
 });
 const minusButton2 = document.getElementById('minusButton2');
 minusButton2.addEventListener('click', function(){
    productIncrement('productNumber2', 'producValue2', 'productValue1', -1);
 });