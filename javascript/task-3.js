const mul=document.querySelector('#mul');
        const div=document.querySelector('#div');
        const out=document.querySelector('.output');
        mul.addEventListener("click",function(){
            const num1=document.querySelector('#num-1').value;
            const num2=document.querySelector('#num-2').value;
            let ans=num1*num2;
            out.innerHTML="The result is:<br>"+ans;
        });
        div.addEventListener("click",function(){
            const num1=document.querySelector('#num-1').value;
            const num2=document.querySelector('#num-2').value;
            let ans=num1/num2;
            out.innerHTML="The result is:<br>"+ans;
        });