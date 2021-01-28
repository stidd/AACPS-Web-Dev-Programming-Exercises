var selectedFilter;

$(".applyFilter").click(function() {
    var filter = $("input").val();
    
  // Write if-statements around the following lines.
    // What is the condition? what should execute if the condition is met?
    // Let's do the first example together. Below is the code block we want to execute if the user types Harlem in the input. Make sure to uncomment the jQuery code.

        //  $("img").css("filter", "contrast(115%) brightness(120%)");

    // Below is the code block we want to execute if the user types Bushwick in the input. 
    
        // $("img").css("filter", "contrast(50%) brightness(180%)");
    
    // Below is the code block we want to execute if the user types SOMA in the input. 
    
        // $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
        
    // Below is the code block we want to execute if the user types Sunset in the input. 
    
        // $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    
    
});

$(".reset").click(function() {
    $("img").css("filter", "");
});
