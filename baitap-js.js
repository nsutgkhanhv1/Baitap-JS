//b1
function is_array(data) {
    console.log("**Bai 1**");
    return Array.isArray(data);
}
var b1 = is_array([1, 2, 3]);
console.log(b1);
//b2
function array_clone(data) {
    console.log("**Bai 2**");
    var arr = data.slice(0);
    return arr;
}
var b2 = array_clone([1, 2, 3]);
console.log(b2);
//b3
function first(data, n = 1) {
    console.log("**Bai 3**");
    return (data.splice(0, n));
}
var b3 = first([7, 9, 0, -2], 6);
console.log(b3);
//b4
function last(data, n = data.length - 1) {
    console.log("**Bai 4**");
    return data.splice(data.length - n, data.length)
}
var b4 = last([7, 9, 0, -2], 3);
console.log(b4);
//b5
function b5(data, sth = "") {
    console.log("**Bai 5**")
    return data.join(`${sth}`);
}
console.log(b5(["Red", "Green", "White", "Black"]));
//b6
function b6(data) {
    console.log("**Bai 6**");
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] % 2 == 0 && data[i + 1] % 2 == 0) {
            var arr = [];
            arr.push(data.substr(0, i + 1));
            arr.push(data.slice(i + 1));
            data = arr.join("-");
        }
    }
    return data;
}
console.log(b6("025462342462479871"));
//b7
function arsort(data) {
    console.log("**Bai 7**");
    return data.sort((a, b) => a - b);
}
b7 = arsort([3, 8, -7, 6, 5, -4, -3, 2, 1]);
console.log(b7);
//b8
function mostFrequentItem(data) {
    console.log("**Bai 8**");
    var obj = {};
    data.forEach((ele) => {
        obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
    })
    console.log(Math.max.apply(null, (Object.values(obj))));
}
mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
//b9
function swapCase(data) {
    console.log("**Bai 9**");
    var str = "";
    for (var i = 0; i < data.length; i++) {
        var numOfChar = data.charCodeAt(i);
        str += (numOfChar > 65 && numOfChar < 97) ? String.fromCharCode(numOfChar + 32) : String.fromCharCode(numOfChar - 32);
    }
    return str;
}
var b9 = swapCase("The Brown Lazy Fox");
console.log(b9);
//b10
function printEle(data) {
    console.log("**Bai 10**");
    for (let i = 0; i < data.length; i++) {
        console.log("row " + i);
        data[i].forEach((ele) =>
            console.log(ele))
    }
}
printEle([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
]);
//b11
function sumB11(data) {
    console.log("**Bai 11**");
    var sum = data.reduce((a, b) => a + Math.pow(b, 2), 0);
    console.log(sum);
}
sumB11([0, 1, 2, 3, 4]);
//b12
function sumNPro(data) {
    console.log("**Bai 12**");
    var sum = data.reduce((a, b) => a + b, 0);
    var pro = data.reduce((a, b) => a * b, 1);
    console.log(sum);
    console.log(pro);
}
sumNPro([1, 2, 3, 4, ]);
//b14
function removeDup(data) {
    console.log("**Bai 14**");
    var strArr = data.map((ele) => {
        var strEle = ele.toString();
        return strEle.toLowerCase();
    });
    var ans = new Set(strArr);
    console.log(ans);
}
removeDup([1, "afSa", 1, 2, 3, "afsa"])
//b15
function followingArr(arr1, arr2) {
        console.log("**Bai 15**");
    for (let i = 0; i < arr1.length; i++) {
        (i < 2) ? console.log(`${i+1}${arr2[i+1]} choice is ${arr1[i]}`): console.log(`${i+1}${arr2[0]} choice is ${arr1[i]}`);
    }
}
followingArr(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "], ["th", "st", "nd", "rd"]);
//b16
function checkLeapYear(start, end) {
    console.log("**Bai 16**");
    var numOfYear = end - start;
    var arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 4 == 0 && i % 100 != 0) {
            console.log(`${i} is leap year`);
        } else if (i % 100 == 0 && i % 400 == 0) {
            console.log(`${i} is leap year`);
        }
    }
}
checkLeapYear(2000, 2022);
//b17
function shuffle(data) {
    console.log("**Bai 17**");
    var ans = [];
    var leap = data.length;
    for (let i = 0; i < leap; i++) {
        var randomNumb = Math.floor(Math.random() * data.length);
        ans.push(data[randomNumb]);
        data.splice(randomNumb, 1);
    }
    console.log(ans);
}
shuffle([0, 3, 4, 5, 64, "Ádas", "aofsd", "42"]);
//b18
function binarySearch(data, number) {
    console.log("**Bai 18**");
    var temp = Math.floor(data.length / 2);
    if (data[temp] == number) {
        return temp;
    }
    var func1 = () => {
        for (let i = temp; i < data.length; i++) {
            if (data[i] == number) {
                return i;
            }
        }
    };
    var func2 = () => {
        for (let i = 0; i <= temp; i++) {
            if (data[i] == number) {
                return i;
            }
        }
    };
    var ans = (data[temp] < number) ? func1() : func2();
    return ans;
}
var b18 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
console.log(b18);
//b19
function b19(arr1, arr2) {
    console.log("**Bai 19**");
    var ans = [];
    var index = (arr1.length > arr2.length) ? arr1.length : arr2.length;
    function turnzero(x) {
        if (x == undefined) {
            return 0;
        } else {
            return x;
        }
    }
    for (var i = 0; i < index; i++) {
        ans.push(turnzero(arr1[i]) + turnzero(arr2[i]));
    }
    console.log(ans);
}
b19([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);
//b20
function findDup(data) {
    console.log("**Bai 20**");
    var obj = {};
    data.forEach((ele) => {
        obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
    })
    for (var i in obj) {
        if (obj[i] > 1) {
            console.log(i);
        }
    }
}
findDup([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
//b21
function flatten(data){
    console.log("**Bai 21**");
    function check(ele){
        return Array.isArray(ele);
    }
    while(data.some(check)==true){
        data = data.flat();
        }
    console.log(data);
}
flatten([1, [2], [3, [[4]]],[5,6]]);
//b22
function compute(arr1,arr2){
    console.log("**Bai 22**");
    arr1.push.apply(arr1,arr2);
    console.log(arr1);
}
compute([1,2,3],[3,4,5]);
//b23
function findDiff(arr1,arr2){
    console.log("**Bai 23**");
    var ans = [];
    function check(ele){
        return Array.isArray(ele);
    }
    function flatArr(arr){
        while(arr.some(check)==true){
            arr = arr.flat();
            }
            return arr;
    }
    arr1 = flatArr(arr1);
    arr2 = flatArr(arr2);
    var temp = [];
    if(arr2.length>arr1.length){
        temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }
    for(let i=0;i<arr1.length;i++){
        if (arr1[i]!==arr2[i]){
            ans.push(arr1[i]);
        }
    }
    console.log(ans);
}
findDiff([1, 2, 3, 4, 5],[1, [2], [3, [[4]]],[5,6]]);
//b24
function filterArr(data){
    console.log("**Bai 24**");
    var ans = [];
    data.forEach((ele)=>{
        if(ele){
            ans.push(ele);
        }
    })
    console.log(ans);
}
filterArr([NaN, 0, 15, false, -22, '',undefined, 47, null]);
//b25
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
function sortByTitle(data){
    console.log("**Bai 25**");
    data.sort((obja,objb)=>{
        return (obja.title > objb.title) ? 1:-1;
    });
    console.log(data);
}
sortByTitle(library);
//b26
function findPair(data,target){
    console.log("** Bai 26 **");    
    var temp = data.slice();
    var s = 0;
    var e = data.length -1 ;
    while(s<e){
        if(temp[s]+temp[e]==target){
            var a = [];
            var b = [];
            data.forEach((ele,index)=>{
                if(ele==temp[s]){
                   a.push(index);
                }
                if(ele==temp[e]){
                    b.push(index);
                }
            })
            console.log(`${a.join("-")},${b.join("-")}`)
            s++;
            e--;
        }
        else if(temp[s]+temp[e]<target){
            s++;
        }
        else{
            e--;
        }
    }
}
findPair([10,20,10,30,40,50,60,70],50);
//b28
function findLongest(data){
    console.log("** Bai 28 **");
    var arr = data.slice().sort();
    var i = 0,j=0,k=1;;
    var temp = [];
    while(k<arr.length){
        if(arr[j].charAt(i)==arr[k].charAt(i)){
            i++;
        }
        if(arr[j].charAt(i)!=arr[k].charAt(i)){
            temp.push(arr[j].substring(0,i));
            j++;
            k++;
        }
    }
    var count ={};
    for(var i=0;i<temp.length;i++){
        count[temp[i]] = count[temp[i]] ? count[temp[i]]+1 : 1; 
    }
    var idx = Math.max.apply(null,Object.values(count));
    var ans = Object.keys(count).find((ele)=>
        count[ele] == idx
    )
    console.log(ans);
}
findLongest(["something","art","stesla","artist","arting","someone","socool","article","somebody","some"]);
//b29
function num_string_range(numeric,character,bound){
    console.log("** Bai 29 **");
    var s = numeric.charCodeAt();
    var e = character.charCodeAt();
    var ans = [];
    for(var i=s;i<=e;i=i+bound){
        ans.push(String.fromCharCode(i));
    }
    console.log(ans);
}
num_string_range("a","z",2);
//b30
function Merge_arr_remove_dup(arr1,arr2){
    console.log("** Bai 30 **");
    var arr = arr1.concat(arr2);
    var ans = [];
    var set = new Set(arr);
    set.forEach((ele)=>{
        ans.push(ele);
    })
    console.log(ans);
}
Merge_arr_remove_dup([1, 2, 3],[2, 30, 1]);
//b31
function remove_specific_ele(arr,spec){
    console.log("** Bai 31 **");
    var ans = arr.filter((ele)=>ele!=spec);
    console.log(ans);
}
remove_specific_ele([2, 5, 9, 6], 5);
//b32
function find_arr_contain_specific(arr,spec){
    console.log("** Bai 32 **");
    var ans = arr.some((ele)=>ele==spec);
    console.log(ans);
}
find_arr_contain_specific([2, 5, 9, 6], 5);
//b33
function empty_arr(data){
    console.log("** Bai 33 **");
    data.length =0;
    console.log(data);
}
empty_arr([1, 3, 6, 3, -5]);
//b35
function get_ramdom_item(arr){
    console.log("** Bai 35 **");
    var indx = Math.floor(Math.random()*(arr.length-1));
    return arr[indx];
}
get_ramdom_item([1,2,3,4,5,6,7]);
//b36
function create_arr_of_spec(idx,spec){
    console.log("** Bai 36 **");
    var arr = [];
    for(var i=0;i<idx;i++){
        arr.push(spec);
    }
    console.log(arr);
}
create_arr_of_spec(6,0);
//b37
function create_arr_of_specstr(idx,spec){
    console.log("** Bai 37 **");
    var arr = [];
    for(var i=0;i<idx;i++){
        arr.push(spec);
    }
    console.log(arr);
}
create_arr_of_specstr(6,"haha");
//b38
function move_arr_ele(data,s,e){
    console.log("** Bai 38 **");
    while(s<0){
        s+=data.length;
    }
    while(e<0){
        e+=data.length;
    }
    var temp =  data.splice(s,1)[0];
    data.splice(e,0,temp);
    console.log(data);
}
move_arr_ele([10, 20, 30, 40, 50], -1, -2);
//b39
function filter_arr_val(data){
    console.log("** Bai 39 **");
    var ans = [];
    data.forEach((ele)=>{
        if(ele){
            ans.push(ele);
        }
    })
    console.log(ans);
}
filter_arr_val([58, '', 'abcd', true, null, false, 0]);
//b40
function generate_arr_of_spec(s,idx){
    console.log("** Bai 40 **");
    var arr = [];
    arr[0] = s;
    for(var i=1;i<idx;i++){
        arr[i] = s+1;
        s++;
    }
    console.log(arr);
}
generate_arr_of_spec(-6,3);
//b41
function generate_arr_beetween_spec(spec1,spec2){
    console.log("** Bai 41 **");
    var arr = [];
    for(var i=spec1;i<=spec2;i++){
        arr.push(i);
    }
    console.log(arr);
}
generate_arr_beetween_spec(-4, 7);