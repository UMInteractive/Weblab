    $(document).ready(function () {
            $("#click").click(function () {
                $("#clickBox").hide();
                //$("#clickBox").toggle(1000);
            });

            $("#hover")
                .mouseenter(function () {
                    $("#hoverBox").show();
                })
                .mouseleave(function () {
                    $("#hoverBox").hide();
                });

            $(".box").css("background-color", "blue");


            var r = 255;
            var g = 0;
            var b = 0;

            var rgb = "rgb(" + r + "," + g + "," + b + ")";
            console.log(rgb);

            $("body").css("background-color", rgb);

            $("#button1").click(function () {
                $("#replace").html("<p>More information 1</p>");
            });

            $("#button2").click(function () {
                $("#replace").html("<p>More information 2</p>");
            });
            //  When writing a compound string use a combination, you can use single and double quotes
            $("#button3").click(function () {
                $("#replace").html("<img src='penguin.jpg'>");
            });

        });
