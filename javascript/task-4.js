const date=document.querySelector('#date');
        const time=document.querySelector('#time');
        date.addEventListener("click",function(){
            const out=document.querySelector('.date-res');
            const now = new Date();
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const dateString = now.getDate() + '/ ' + months[now.getMonth()] + '/ ' + now.getFullYear();
            out.textContent=dateString;
        });
        time.addEventListener("click",function(){
            const out=document.querySelector('.time-res');
            var date = new Date();
            out.innerHTML = date;
        });