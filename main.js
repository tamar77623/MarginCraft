let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4');
let btn2 = document.getElementById('btn2');
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1800);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = `please enter ${inp1.placeholder}`;
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = `please enter ${inp2.placeholder}`;
        h3text();
        return;
    }
    account();
    inp1.value = '';
    inp2.value = '';
}
function account(){
    let message = false;
    let cost = Number(inp1.value);
    let price = Number(inp2.value)
    let Netprofit = price - cost;
    console.log(Netprofit);
    let Profitmargin = (Netprofit / price) * 100;
    console.log(Profitmargin);
    let Percentageincrease = Netprofit / cost * 100;
    console.log(Percentageincrease);
    if(price < cost){
        message ="Financial loss - selling price lower than cost";
        span4.style.color = 'green';
    }else if(Profitmargin < 15){
        message ="Low profit margin - make sure you cover your operating expenses";
        span4.style.color = 'red'
    }else{
        message ="Excellent and very good profit margin";
        span4.style.color = 'yellow'
    }
    span1.innerText = `Netprofit ${Math.round(Netprofit)}`;
    span2.innerText = `Profit margin ${Math.round(Profitmargin)}`;
    span3.innerText = `percentage increase ${Math.round(Percentageincrease)}`;
    span4.innerText = message;
    btn2.style.display = 'block';
}
btn2.onclick = function(){
    location.reload();
}