let cel = document.getElementById('cel');
cel.value=0;
let fah = document.getElementById('fah');
fah.value=32;
cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    if(!Number.isInteger(f)){
       f = f.toFixed(4);
    }
    fah.value=f;    
})

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cel.value=c;
})