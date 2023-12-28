$(document).ready(function () {

    // toggles small navbar & overlay
    $(".fa-solid.fa-bars").on("click", () => {
        $(".links").slideToggle("slow");
        $(".overlay").fadeToggle("slow");
    });

    // closes small navbar from overlay
    $(".overlay").on("click", () => {
        $(".links").slideToggle("slow");
        $(".overlay").fadeToggle("slow");
    });
});