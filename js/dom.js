const blance = document.getElementById('main-amount').innerText;
const donate = document.getElementById('donate-click')
const historyBtn = document.getElementById('btn-his');
const readyMoney = document.getElementById('ready-money').innerText;
// const inputBlance = document.getElementById('input-amount').value;
const blogBtn = document.getElementById('blog-btn');


donate.addEventListener('click',function(event){
    event.preventDefault();
    const inputBlance = document.getElementById('input-amount').value;
    const mainBlance = parseFloat(blance);
    const inputAmount = parseFloat(inputBlance);
    const updateReadyMoney = parseFloat(readyMoney);
    if(mainBlance < inputAmount || inputAmount <= 0){
        alert('type correct amount');
        return;
    }
    const newBlance = mainBlance - inputAmount;
    document.getElementById('main-amount').innerText = newBlance;
    const newReadyMoney = updateReadyMoney + inputAmount;
    document.getElementById('ready-money').innerText = newReadyMoney;
})