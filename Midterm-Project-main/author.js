document.addEventListener('DOMContentLoaded', function () {

    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#FFF";
    document.body.style.fontFamily = "'Arial', sans-serif";


    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.padding = "10px 0";
        navbar.style.overflow = "hidden";
        navbar.style.backgroundColor = "#333";
        navbar.style.textAlign = "center";
    }


    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.style.color = "#f2f2f2";
        link.style.padding = "14px 20px";
        link.style.textDecoration = "none";
        link.style.fontSize = "17px";


        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ddd";
            link.style.color = "#000";
        });
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "";
            link.style.color = "#f2f2f2";
        });
    });

    //fetch logo
    fetch('logo.json')
    .then(response => response.json())
    .then(data => {
        const logo = data.img.find(image => image.title === "logo");
        if (logo) {
            const logoImg = document.createElement('img');
            logoImg.src = logo.url;
            logoImg.alt = logo.title;
            logoImg.style.position = "absolute";
            logoImg.style.top = "300px";
            logoImg.style.right = "580px";
            logoImg.style.width = "300px";
            logoImg.style.height = "auto";
            document.body.appendChild(logoImg);
        }
    })
    .catch(error => console.error('Error fetching logo:', error));

    // fetch blue saber
    fetch('logo.json')
        .then(response => response.json())
        .then(data => {
            const blueLightsaber = data.img.find(image => image.title === "blue");
            if (blueLightsaber) {
                const blueImg = document.createElement('img');
                blueImg.src = blueLightsaber.url;
                blueImg.alt = blueLightsaber.title;
                blueImg.style.position = "absolute";
                blueImg.style.top = "460px";
                blueImg.style.right = "660px";
                blueImg.style.width = "150px"; 
                blueImg.style.height = "auto";
                document.body.appendChild(blueImg);
            }
        })
        .catch(error => console.error('Error fetching blue lightsaber image:', error));
    
        //fetch red saber
        fetch('logo.json')
        .then(response => response.json())
        .then(data => {
            const redLightsaber = data.img.find(image => image.title === "red");
            if (redLightsaber) {
                const redImg = document.createElement('img');
                redImg.src = redLightsaber.url;
                redImg.alt = redLightsaber.title;
                redImg.style.position = "absolute";
                redImg.style.top = "460px";
                redImg.style.right = "650px";
                redImg.style.width = "125px";
                redImg.style.height = "auto";
                document.body.appendChild(redImg);
            }
        })
        .catch(error => console.error('Error fetching red lightsaber image:', error));


    if (document.title === "About the Author") {
        const content = document.querySelector('.content');
        if (content) {
            content.style.maxWidth = "800px";
            content.style.margin = "auto";
            content.style.padding = "20px";
        }

        const authorInfo = document.querySelector('.author-info');
        if (authorInfo) {
            authorInfo.style.backgroundColor = "#222";
            authorInfo.style.padding = "20px";
            authorInfo.style.borderRadius = "5px";
            authorInfo.style.color = "#FFF";
        }
    }
});
