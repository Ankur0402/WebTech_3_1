var o={
    name:'Ankur',
    stream:'CSM',
    age:19
}
function listProps(obj){
    var props=Object.keys(o);
    console.log("Properties are: ")
    for(i of props){
        console.log(i)
    }
}

listProps(o)