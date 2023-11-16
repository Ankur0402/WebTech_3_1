var inpstr='TheSadBatAteIce'
var newstr='';
for(key in inpstr){
    c=inpstr[key]
    if(c===c.toUpperCase()){
        c=c.toLowerCase();
    }
    else{
        c=c.toUpperCase();
    }
    newstr=newstr+c;
}
console.log(newstr)
