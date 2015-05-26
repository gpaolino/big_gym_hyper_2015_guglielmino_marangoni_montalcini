$("#toTop").hide();
$(window).scroll(function() {
    //Hide or Show back to top link.
    if ($(this).scrollTop()) {
        $("#toTop").show();
    } else {
        $("#toTop").hide();
    }
});