var arr=[1,2,3,4,5,6,7,8,9]
function binSearch(arr,ele,low,high){
    while(low<=high){
        var mid=Math.floor((low+high)/2)
        if(arr[mid]==ele){
            return mid
        }
        else if(arr[mid]<ele){
            low=mid+1
        }
        else if(arr[mid]>ele){
            high=mid-1
        }
    }
    return -1
}
console.log(binSearch(arr,6,0,arr.length-1));