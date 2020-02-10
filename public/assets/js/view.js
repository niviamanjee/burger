//on click function that gets value of input when user adds a new burger
$("#newBurger").on("click", function (event) {
    event.preventDefault()
    console.log($("#burgerInput").val())

    var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");

            // Reload the page to get the updated list
            location.reload();
        }
    );
});





//on click function to change devoured value of a burger
$(".devour").on("click", function (event) {
    event.preventDefault();

    console.log($(this))
    var id = $(this).attr("data-id")
    console.log("id clicked:", id)
    $.ajax({
        url: "/api/burgers/" + id,
        method: "PUT"
    }).then(function (db) {
        location.reload()

    })
})


$(".delete").on("click", function (event) {
    event.preventDefault();

    console.log($(this))
    var id = $(this).attr("data-id")
    console.log("id clicked:", id)
    $.ajax({
        url: "/api/burgers/" + id,
        method: "DELETE"
    }).then(function (db) {
        location.reload()

    })
})
