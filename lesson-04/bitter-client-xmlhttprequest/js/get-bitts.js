(function () {  // just a wrapper to avoid global scope

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {

            if(this.status === 200) {
                let container = document.getElementById("bittsContainer");
                let bitts = JSON.parse(xhttp.responseText);

                for (let bitt of bitts) {
                    let bittElement = document.createElement("p");
                    bittElement.innerHTML = bitt.text;

                    container.appendChild(bittElement);
                }

            } else {
                console.log("Ooops, there was an error...");
            }

        }
    };

    xhttp.open("GET", "<enter-bitter-api-url>/get-all-bitts", true);
    xhttp.send();

}())
