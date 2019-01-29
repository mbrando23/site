var calcus;
var itens;
var item1 = "";
var item2 = "";
var item3 = "";
var item4 = "";
var item5 = "";
var cal = 0;
var cal1 = 0;
var cal2 = 0;
var cal3 = 0;
var cal4 = 0; 

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function generateText(sentenceCount){
   for (var i=0; i<sentenceCount; i++)
	   document.write(bodyText[Math.floor(Math.random()*7)]+" ")
}

function turnOpacity(theClass){ 
   document.getElementsByClassName("content-0")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName(theClass)[0].style.visibility = 'visible';   
}

function turnOpacityy(){ 
   document.getElementsByClassName("content-0")[0].style.visibility = 'visible'; 
   document.getElementsByClassName("content-1")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-2")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-3")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-4")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-5")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-6")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("content-7")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-")[0].style.visibility = 'hidden';     
}
 
function shoppingCart(){ 
   document.getElementsByClassName("content-7")[0].style.visibility = 'visible'; 
   document.getElementsByClassName("content-1")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-2")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-3")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-4")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-5")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-6")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("content-0")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-")[0].style.visibility = 'hidden';        
}

function prod(){ 
   document.getElementsByClassName("content-3")[0].style.visibility = 'visible'; 
   document.getElementsByClassName("content-1")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-2")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-7")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-4")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-5")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-6")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("content-0")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("content-")[0].style.visibility = 'hidden';     
}


function firstPage(){ 
   document.getElementsByClassName("content-")[0].style.visibility = 'visible'; 
   document.getElementsByClassName("content-1")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-2")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-7")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-4")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("content-5")[0].style.visibility = 'hidden';
   document.getElementsByClassName("content-6")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("content-0")[0].style.visibility = 'hidden';
   document.getElementsByClassName("cards")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("date")[0].style.visibility = 'hidden';
   document.getElementsByClassName("name")[0].style.visibility = 'hidden';
   document.getElementsByClassName("name")[1].style.visibility = 'hidden'; 
   document.getElementsByClassName("name")[2].style.visibility = 'hidden';  
   document.getElementsByClassName("num")[0].style.visibility = 'hidden';  
   document.getElementsByClassName("state")[0].style.visibility = 'hidden'; 
   document.getElementsByClassName("tel")[0].style.visibility = 'hidden';      
}

function validateCard(cardId, theClass, x){
    var card = document.getElementById(cardId).value;
    var pos = card.search(/^ *\d{4} ?\d{4} ?\d{4} ?\d{4} *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}


function validateDate(dateId, theClass, x){
    var date = document.getElementById(dateId).value;
    var pos = date.search(/^ *([1-9]|[1][0-2])\/20[1-3][0-9] *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}
function calc(dataId, dataId2){
    var item;    
    var data1 = document.getElementById(dataId).value;
    var data2 = document.getElementById(dataId2).value;
    var calcu = data1 * data2;
    console.log(calcu);
    if (data1 > 0) {
    	cal += calcu;
    }        
    if (data2 == 34 && data1 > 0) {
    	item = data1 + " Custom T-Shirt(s) [$34,00/each] /";
    }
    else if (data2 == 21 && data1 > 0) {
      item = data1 + " Kid's T-Shirt(s) [$21,00/each] /";
    }
    else if (data2 == 15 && data1 > 0) {
      item = data1 + " Women's T-Shirt(s) [$15,00/each] /";
    }
    else if (data2 == 18 && data1 > 0) {
      item = data1 + " Long Sleeve T-Shirt(s) [$18,00/each] /";
    }    
    else if (data2 == 54 && data1 > 0) {
      item = data1 + " Official T-Shirt(s) [$54,00/each] /";
    }
    else if (data1 < 1) {
      item = "";
    }         
    item1 += item;
    document.getElementById("demo23").innerHTML = "You added " + item;   
}

function calc1(dataId, dataId2){
    var item;  	
    var data1 = document.getElementById(dataId).value;
    var data2 = document.getElementById(dataId2).value;
    var calcu1 = data1 * data2;
    console.log(calcu1);
    if (data1 > 0) {
    	 cal1 += calcu1;
    }    
    if (data2 == 23 && data1 > 0) {
    	item = data1 + " Pillow(s) [$23,00/each] /";
    }
    else if (data2 == 10 && data1 > 0) {
      item = data1 + " Cup(s) [$10,00/each] /";
    }
    else if (data2 == 18 && data1 > 0) {
      item = data1 + " Key Chain(s) [$18,00/each] /";
    }
    else if (data2 == 13 && data1 > 0) {
      item = data1 + " Banner(s) [$13,00/each] /";
    }    
    else if (data2 == 8 && data1 > 0) {
      item = data1 + " Pen(s) [$8,00/each] /";
    }
    else if (data1 < 1) {
      item = "";
    }         
    item2 += item;
    document.getElementById("demo23").innerHTML = "You added " + item;                              
}

function calc2(dataId, dataId2){
    var item;  	
    var data1 = document.getElementById(dataId).value;
    var data2 = document.getElementById(dataId2).value;
    var calcu2 = data1 * data2;
    console.log(calcu2);
    if (data1 > 0) {
       cal2 += calcu2;
    }    
    if (data2 == 32 && data1 > 0) {
    	item = data1 + " Initial Ball(s) [$32,00/each] /";
    }
    else if (data2 == 25 && data1 > 0) {
      item = data1 + " Kids Ball(s) [$25,00/each] /";
    }
    else if (data2 == 45 && data1 > 0) {
      item = data1 + " Volleyball(s) [$45,00/each] /";
    }
    else if (data2 == 66 && data1 > 0) {
      item = data1 + " Basketball(s) [$66,00/each] /";
    }    
    else if (data2 == 77 && data1 > 0) {
      item = data1 + " Professional Ball(s) [$77,00/each] /";
    }
    else if (data1 < 1) {
      item = "";
    }                                         
    item3 += item;
    document.getElementById("demo23").innerHTML = "You added " + item;             
}

function calc3(dataId, dataId2){
    var item;  	
    var data1 = document.getElementById(dataId).value;
    var data2 = document.getElementById(dataId2).value;
    var calcu3 = data1 * data2;
    console.log(calcu3);
    if (data1 > 0) {
       cal3 += calcu3;
    }
    if (data2 == 18 && data1 > 0) {
    	item = data1 + " Doll(s) [$18,00/each] /";
    }
    else if (data2 == 15 && data1 > 0) {
      item = data1 + " Little Ball(s) [$15,00/each] /";
    }
    else if (data2 == 54 && data1 > 0) {
      item = data1 + " Player(s) [$54,00/each] /";
    }
    else if (data2 == 45 && data1 > 0) {
      item = data1 + " Greater Doll(s) [$45,00/each] /";
    }    
    else if (data2 == 88 && data1 > 0) {
      item = data1 + " Stadium(s) [$88,00/each] /";
    }
    else if (data1 < 1) {
      item = "";
    }         
    item4 += item;
    document.getElementById("demo23").innerHTML = "You added " + item;    
}

function calc4(dataId, dataId2){
    var item;  	
    var data1 = document.getElementById(dataId).value;
    var data2 = document.getElementById(dataId2).value;
    var calcu4 = data1 * data2;
    console.log(calcu4);
    if (data1 > 0) {
       cal4 += calcu4;
    }    
    if (data2 == 21 && data1 > 0) {
    	item = data1 + " Antique Game(s) [$21,00/each] /";
    }
    else if (data2 == 19 && data1 > 0) {
      item = data1 + " Buttons Package(s) [$19,00/each] /";
    }
    else if (data2 == 13 && data1 > 0) {
      item = data1 + " Card Package(s) [$13,00/each] /";
    }
    else if (data2 == 17 && data1 > 0) {
      item = data1 + " Ping Pong Package(s) [$17,00/each] /";
    }    
    else if (data2 == 18 && data1 > 0) {
      item = data1 + " Pinball(s) [$18,00/each] /";
    }
    else if (data1 < 1) {
      item = "";
    }                              
    item5 += item;
    document.getElementById("demo23").innerHTML = "You added " + item;    
}


function myFunction() {
   calcus = cal + cal1 + cal2+ cal3 + cal4;
   itens = item1 + " " + item2 + " " + item3 + " " + item4 + " " + item5;  	
   document.getElementById("demo").innerHTML = "$" + calcus.toFixed(2);
   document.getElementById("demo2").value = itens;
}

function myReset() {
   cal = 0;
   cal1 = 0;
   cal2 = 0;
   cal3 = 0;
   cal4 = 0;    
   calcus = 0; 
   document.getElementById("demo").innerHTML = "$" + calcus.toFixed(2);
   document.getElementById("demo23").innerHTML = "";  	
}

function validateName(nameId, theClass, x){
    var name = document.getElementById(nameId).value;
    var pos = name.search(/^ *(([A-Z][a-z]* [A-Z][a-z]*)||([A-Z][a-z]*)) *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}

function validateNumber(numberId, theClass, x){
    var num = document.getElementById(numberId).value;
    var pos = num.search(/^ *\d+ *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}

function validateState(stateId, theClass, x){
    var state = document.getElementById(stateId).value;
    var pos = state.search(/^ *(A(L|K|R|Z)|C(A|O|T)|DE|FL|GA|HI|I(A|D|L|N)|K(S|Y)|LA|M(A|D|E|I|N|S|O|T)|N(E|V|H|J|M|Y|C|D)|O(H|K|R)|PA|RI|S(C|D)|T(N|X)|UT|V(T|A)|W(A|V|I|Y)) *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}

function validateTel(telId, theClass, x){
    var ssn = document.getElementById(telId).value;
    var pos = ssn.search(/^ *\d{3}-\d{3}-\d{4} *$/);
    if (pos == 0){
       document.getElementsByClassName(theClass)[x].style.visibility = 'hidden';
    }
    else {
       document.getElementsByClassName(theClass)[x].style.visibility = 'visible';    
    }
}

function myFunction2() {
	 itens = item1 + " " + item2 + " " + item3 + " " + item4 + " " + item5;
	 calcus = cal + cal1 + cal2+ cal3 + cal4; 
    document.getElementById("demo2").value = itens;	
    document.getElementById("demo3").value = "$" + calcus.toFixed(2);
    document.getElementById("myForm").submit();
 }

	
	
	
	
