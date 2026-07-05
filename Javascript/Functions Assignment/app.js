//Q1
let arr1=[10,20,30,40,50]
let num=25
function checkNumber(arr,n){
    arr2=[]
    for(let i=0;i<arr.length;i++){
        if(num<arr[i]){
            arr2.push(arr[i])
        }
    }
    return arr2
}

//Q2
let str1="abcdabcdefgggh";
let ans=""
function uniqueChars(str){
    for(let i=0;i<str.length;i++){
        if(ans.indexOf(str[i])==-1){
            ans+=str[i]
        }
    }
    return ans
}

//Q3
let country = ["Australia", "Germany", "United States of America"]
function longestCountry(arr){
    let len=0
    let longest=""
    for(let a of arr){
        if(a.length>len){
            len=a.length
            longest=a
        }
    }
    return longest
} 

//Q4
let name="abdullahhussain";
function countVowels(str){
    let vowels="aeiou"
    let count=0
    for(let n of name){
        if(vowels.includes(n)){
            count+=1
        }
    }
    return count
}

//Q5
function randomNumber(start,end){
    let num=Math.floor(Math.random()*(end-start+1))+start;
    return num
}