$(document).ready(function(){

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 20,
    });
    
    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    })
    
});