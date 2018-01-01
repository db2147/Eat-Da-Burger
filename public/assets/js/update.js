// inside our devouredDiv using jQuery we create an onclick function so when the button is clicked, the burger is devoured
$(".devouredDiv").on("click", ".devourButton", function () {

        var clickedId = $(this).attr("data-value");
        var eaten = $(this).attr("data-eaten");
        //ajax PUT method
        $.ajax({
            method: "PUT",
            data: {
                state: eaten
            },
            url: "/burgers/" + clickedId,
        }).done(function () {
            location.reload();
        });

});
