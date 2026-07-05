//Q1
// arr=[1,2,3,4,5,6,2,3]
// num=2
// for (let i=0;i<arr.length;i++){
//     idx=arr[i]
//     if(idx==2){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

//Q2
// let number=287152
// let copy=number
// let count=0
// while(copy>0){
//     copy=Math.floor(copy/10)
//     count++
// }
// console.log(count)

//Q3
// let number=287152
// let sum=0
// let copy=number
// while(copy>0){
//     sum+=copy%10
//     copy=Math.floor(copy/10)
// }
// console.log(sum)

//Q4
// let n=7
// let factorial=1
// for(let i=1;i<=n;i++){
//     factorial*=i
// }
// console.log(factorial)

//Q5
let arr=[1,24,3,4,95,6]
let idx=0
for(let i=0;i<arr.length;i++){
    n=arr[i]
    if(idx<n){
        idx=n
    }
}
console.log(idx)













