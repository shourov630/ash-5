const blance = document.getElementById('main-amount').innerText;
const donate = document.getElementById('donate-click')
const historyBtn = document.getElementById('btn-his');
const readyMoney = document.getElementById('ready-money').innerText;
// const inputBlance = document.getElementById('input-amount').value;
// const blogBtn = document.getElementById('blog-btn');

donate.addEventListener('click',function(event){
    event.preventDefault();
    const inputBlance = document.getElementById('input-amount').value;
    const mainBlance = parseFloat(blance);
    const inputAmount = parseFloat(inputBlance);
    const updateReadyMoney = parseFloat(readyMoney);
    if(mainBlance < inputAmount || inputAmount <= 0 || isNaN(inputAmount)){
        alert('Invalid Donation Amount');
        return;
    }
    const newBlance = mainBlance - inputAmount;
    document.getElementById('main-amount').innerText = newBlance;
    const newReadyMoney = updateReadyMoney + inputAmount;
    document.getElementById('ready-money').innerText = newReadyMoney;
})


const historySec = document.getElementById('history');
const cardSec = document.getElementById('card');
const donation = document.getElementById('btn-don');

historyBtn.addEventListener('click',function(){
    cardSec.classList.add('hidden');
    historySec.classList.remove('hidden');
    blogSec.classList.add('hidden');

})
donation.addEventListener('click',function(){
    historySec.classList.add('hidden');
    cardSec.classList.remove('hidden');
})


const inputBlance = document.getElementById('input-amount').value;
const inputAmount = parseFloat(inputBlance);
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
historyItem.innerHTML = `
    <p class=" text-5xl font-bold">Donate : ${inputAmount.toFixed}</p>
    <p class=" text-4xl font-bold">Thank You For Donate</p>
`;
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem , historyContainer.firstChild);


// blog option
const blogBtn = document.getElementById('blog-btn');
const blogSec = document.getElementById('blog');
blogBtn.addEventListener('click',function(){
    cardSec.classList.add('hidden');
    blogSec.classList.remove('hidden');
})
const home = document.getElementById('home-btn');
home.addEventListener('click',function(){
    blogSec.classList.add('hidden');
    cardSec.classList.remove('hidden');
})