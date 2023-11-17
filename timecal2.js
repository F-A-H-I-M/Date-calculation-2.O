let m=0
let value=0
let value2=0
let date1=0
let a =0
let b =20
let c =0
let date2=0
let d =0
let e =0
let f =0
let day =0
let thour1=28*24
let thour2=29*24
let thour3=30*24
let thour4=31*24
let month=0
let y=0
let year=0




function calculate(){
 m = 0
value = document.getElementById("day2").value
 date1 = new Date(value)
 a = date1.getFullYear()
  b = date1.getMonth()
c = date1.getDate()


console.log(c)
value2=document.getElementById("day1").value
 date2 = new Date(value2)
 d = date2.getFullYear()
e = date2.getMonth()
f = date2.getDate()

day1()
day2()
month1()
year1()
resultshow()
console.log(year)
console.log(month)
console.log(day)




}







day1=()=>{

if(a%4==0 && b==1){
//have some work    
   
 if(c<f){
  day = f-c   
  m=0  
 }
 
 else if(c==f){
  day=0   
  m=-1   
 }
 
 else{
  day = (f-c)+29
 m=1
 }                                        
 console.log(129)       
}
    
else if(a%4!=0 && b==1){
//have some work    


 if(c<f){
  day = f-c     
  m=0
 }
  else if(c==f){
  day=0   
  m=-1   
 }
 else{
  day = (f-c)+28 
 m=1
 }                       
 console.log(128)       
}    






   
    
}






//other month without February

day2=()=>{
   
 if(b==0 || b==2 || b==4 || b==6 || b==7 || b==9 || b==11){
 if(c<f){
   day = f-c  
   m=0
 }
  else if(c==f){
  day=0   
  m=-1   
 }
 else{
  day = (f-c)+31 
 m=1
 }  
 console.log(131)                         
}   




if(b==3 || b==5 || b==8 || b==10 ){
 if(c<f){
   day = f-c    
   m=0 
 }
  else if(c==f){
  day=0   
  m=-1   
 }
 else{
  day = (f-c)+30
 m=1
 }  
console.log(130)                       
}   
        



    
}






month1=()=>{
 
 if(e>b){
 
 month=(e-b)-m    
 
 if(month==12){
     month=0
     y=-1
 }
 
 else{
     y=0
 }
 
     

    
 }  
 
 else if(e<b){
     
 month=(e-b)+12-m
  
  if(month==12){
      month=0
      y=0
  }
  
  else{
     y=1 
  }
     
 }
    
    
    
}





year1=()=>{
    
year=(d-a)-y  
    
    
    
}


resultshow=()=>{
    
 if(year==0 && month==0 ){
 document.getElementById("result").innerHTML=day+"days"
         
 }
 
 else if(year==0 && day==0){
 document.getElementById("result").innerHTML=month+"months"
 
 }
 
 else if(month==0 && day==0){
 document.getElementById("result").innerHTML=year+"years"
 }
 
 else if(month==1 && year==1 && day==1){
 document.getElementById("result").innerHTML=year +"year"+month+"month and"+day+"day" 
 }
 else if(year==1 && month==1 ){
   document.getElementById("result").innerHTML=year +"year"+month+"month and"+day+"days"  
 }
 
 else if(year==1 && day==1){
  document.getElementById("result").innerHTML=year +"year"+month+"months and"+day+"day"
 }
 
 else if(month==1 && day==1){
     document.getElementById("result").innerHTML=year +"years"+month+"month and"+day+"day"
 }

 else{
     
  document.getElementById("result").innerHTML=year +"years"+month+"months and"+day+"days"
     
 }



    
}



