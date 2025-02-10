let quantities = {};
let totalPrice = {};
let productArray=[];
document.querySelector(`.info`).innerHTML =1;
function toggleItem(productQuantity, productPrice, action)
{
if (!quantities[productQuantity]){
    quantities[productQuantity]=1;
    totalPrice[productQuantity]=productPrice;
    
}
if(action === 'add'){
quantities[productQuantity]++;
totalPrice[productQuantity]+=productPrice;
productArray.push(productQuantity)
productArray.push(productPrice)
console.log(productArray)
document.querySelector(`.info[data-product="${productQuantity}"]`).innerHTML = quantities[productQuantity];
document.querySelector(`.cash[data-product="${productQuantity}"]`).innerHTML = `${totalPrice[productQuantity].toLocaleString()} Ush`; 
}
else if((quantities[productQuantity] <=1 && totalPrice[productQuantity] === productPrice) && action ==='remove'){
    document.querySelector(`.info[data-product="${productQuantity}"]`).innerHTML = 1;
    document.querySelector(`.cash[data-product="${productQuantity}"]`).innerHTML = totalPrice[productQuantity].toLocaleString(); 
}
else if (action ==='remove'){
    quantities[productQuantity]--;
totalPrice[productQuantity]-=productPrice;
productArray.splice(productQuantity)
productArray.splice(productPrice)
console.log(productArray)
document.querySelector(`.info[data-product="${productQuantity}"]`).innerHTML = quantities[productQuantity];
document.querySelector(`.cash[data-product="${productQuantity}"]`).innerHTML = totalPrice[productQuantity].toLocaleString();
   }
}
function addCartItem(productQuantity) {
   
    let totalQuantity =0;
    if(totalQuantity === 0)
    {
        document.querySelector('.quantity').innerHTML =1; 
        document.querySelector('.quantity1').innerHTML =1;
        document.querySelector('.quantity2').innerHTML =1; 
    }
    for (let product in quantities) {
        totalQuantity += quantities[product];
    }
    document.querySelector('.quantity').innerHTML = totalQuantity;
    document.querySelector('.quantity1').innerHTML = totalQuantity;
    document.querySelector('.quantity2').innerHTML = totalQuantity;


}
function showPopuo(){
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none'
        }, 200)
    }, 2000)
}

document.querySelector('.add-to-cart').addEventListener('click', showPopuo);

function showPopup(){

}


