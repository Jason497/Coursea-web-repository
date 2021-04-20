/*// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        function sayHello(event) {
            this.textContent = "Said it!";
            var name =
                document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";

            document
                .getElementById("content")
                .innerHTML = message;

            if (name === "student") {
                var title =
                    document
                        .querySelector("#title")
                        .textContent;
                title += " & Lovin' it!";
                document
                    .querySelector("h1")
                    .textContent = title;
            }
        }

        // Unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", sayHello);

        document.querySelector("body")
            .addEventListener("mousemove",
                function (event) {
                    if (event.shiftKey === true) {
                        console.log("x: " + event.clientX);
                        console.log("y: " + event.clientY);
                    }
                }
            );
    }
);
*/


// document.querySelector("button")
//   .onclick = sayHello;



// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("../data/name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);










