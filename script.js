$("button").click(function(){
    let variable1=$(".a").val();
    let variable2=$(".b").val();
    let variable3=$(".c").val();
    
    
let variable4= variable2 *  10220; 
    $(".fortune-display").append(variable1+ " you will take "+variable4+" photos.");
    
    
console.log(variable1,variable2,variable3); 
});