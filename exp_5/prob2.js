var freq=new Map();
var s='abbbbbcdaba';
for(key of s){
    if(freq.has(key)){
        var g=freq.get(key);
        g=g+1;
        freq.set(key,g);
    }
    else{
        freq.set(key,1);
    }
}

function getMax(amap){
    var max=-1;
    var freq=-1;
    for(i of amap.keys()){
        console.log('count: '+amap.get(i)+", max: "+max)
        if(amap.get(i)>freq){
            max=i;
            freq=amap.get(key)
        }
    }
    return [max,freq]
}

console.log(getMax(freq))