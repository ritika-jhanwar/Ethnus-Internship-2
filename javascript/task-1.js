const subBut=document.querySelector('#sub');
        const res=document.querySelector('.output');
        subBut.addEventListener("click",function(){
            let numToRev=document.querySelector('#num').value;
            let reversedString=numToRev.toString().split("").reverse().join("");
            res.innerText=reversedString;
            res.style.paddingBottom="40px";
        });   