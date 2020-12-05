var arr =[{
	name: "Trung",
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
  age: 20
  }, 
  {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
    },
  {
	name: 'Phong',
  class: 'Nodemy01',
  dateJoin: '06-01-2020',
  age: 19
  },
  {
    name: "Unknown",
    dateJoin: '14-03-2019'
  } ,
  {
    name: "Unknown1",
    dateJoin: '14-03-2020'
  } 
];
  function getYear(ele){
    return Number(ele.dateJoin.slice(8,10));
  }
  function getDate(ele){
    return Number(ele.dateJoin.slice(0,2));
  }
  function getMonth(ele){
    return Number(ele.dateJoin.slice(3,5));
  }
  arr.sort((a,b)=>
  {
    if (getMonth(b)-getMonth(a)>0){
      return -1;
    }
  } 
  );
  arr.sort((a,b)=>{
    return (getYear(a)-getYear(b));
  })
  arr.sort((a,b)=>
  {
    if(getDate(b)-getDate(a)>0 && getMonth(b)-getMonth(a)==0){
      return -1;
    }
  })
console.log(arr);
var b33 = arr.filter((ele)=>{
  return (getMonth(ele)<2)
});
console.log(b33);
var b34 = arr.map((ele)=>{
  return ele.name.toUpperCase();
})
console.log(b34);
var doan = {
  name: 'Doan',
   age: 22,
   salary: 1000
}
var trung = {}
Object.assign(trung,doan);
trung.name = "Trung";
trung.clone = true;
console.log(trung);
var greeting = "Welcome to Nodemy, Nodemy is stand for Nodejs Academy";
var skt = greeting.length;
console.log(`Greeting có ${skt} ký tự`);
console.log((greeting.indexOf("nodemy")>=0) ? `nodemy nằm ở vị trí ${greeting.indexOf('nodemy')}`: "nodemy không tồn tại trong Greeting");
console.log((greeting.indexOf("Nodemy")>=0) ? `Nodemy nằm ở vị trí ${greeting.indexOf('Nodemy')}`: "Nodemy không tồn tại trong Greeting");
console.log((greeting.startsWith("Welcome"))? "Greeting có bắt đầu với Welcome" : "Greeting không bắt đầu với Welcome");
console.log(greeting.substring(greeting.indexOf("Academy"),greeting.indexOf("Academy") + "Academy".length));
console.log(greeting.split(" "));
console.log(greeting.trim());
console.log((greeting.includes("Nodemy"))? "Nodemy có trong Greeting" : "Nodemy không có trong Greeting");
