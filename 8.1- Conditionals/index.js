let jQuery = require('jQuery');




// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
        
    // display this text if the answer is correct
    $(".englishMessage").text("Correct!");
    
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
    
});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();

    
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = $(".math").val();
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
    mathInput = parseInt(mathInput);


});


// 4. Science section



