$(document).ready(function () {

    // toggles small navbar & overlay - using burger icon
    $(".fa-solid.fa-bars").on("click", () => {
        $(".links").slideToggle("slow");
        $(".overlay").fadeToggle("slow");
        $(".fa-solid.fa-bars").toggleClass("hide-icon");
        $(".fa-solid.fa-xmark").toggleClass("hide-icon");
    });

    // toggles small navbar & overlay - using cross icon
    $(".fa-solid.fa-xmark").on("click", () => {
        $(".links").slideToggle("slow");
        $(".overlay").fadeToggle("slow");
        $(".fa-solid.fa-xmark").toggleClass("hide-icon");
        $(".fa-solid.fa-bars").toggleClass("hide-icon");
    });

    // closes small navbar from overlay
    $(".overlay").on("click", () => {
        $(".links").slideToggle("slow");
        $(".overlay").fadeToggle("slow");
    });
});