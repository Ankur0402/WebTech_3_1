var s="banana"
var nodup=""
for(i of s){
    if(!nodup.includes(i)){
        nodup=nodup+i
    }
}
console.log(nodup)