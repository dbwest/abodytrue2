//CUSTOM JS EFFECTS FOR TESTIMONIALS
    function showTestimonialBody(inId){
        //alert("TEST");
        $(".testimonial-body").fadeOut("slow");
        $("#"+inId+">.testimonial-body").slideDown("slow");
        //$("div#testimonial-body").slideDown("slow");
    }