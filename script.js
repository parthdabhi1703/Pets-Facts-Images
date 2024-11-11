let btn1 = document.querySelector("#btn1");
      let url1 = "https://catfact.ninja/fact";

      btn1.addEventListener("click", async () => {
        let p = document.querySelector("#cat-result");
        let loadingText = document.querySelector("#loading-cat");
        loadingText.style.display = "block"; // Show loading text
        p.innerText = ""; // Clear previous result
        let fact = await getFacts();
        loadingText.style.display = "none"; // Hide loading text
        p.innerText = fact;
      });

      async function getFacts() {
        try {
          let res = await axios.get(url1);
          return res.data.fact;
        } catch (e) {
          console.log("error : ", e);
          return "No Fact Found 😿";
        }
      }

      let btn2 = document.querySelector("#btn2");
      let url2 = "https://dog.ceo/api/breeds/image/random";

      btn2.addEventListener("click", async () => {
        let img = document.querySelector("#dog-result");
        let loadingText = document.querySelector("#loading-dog");
        loadingText.style.display = "block"; // Show loading text
        img.setAttribute("src", ""); // Clear previous image
        let link = await getImage();
        loadingText.style.display = "none"; // Hide loading text
        img.setAttribute("src", link);
      });

      async function getImage() {
        try {
          let res = await axios.get(url2);
          return res.data.message; // seen by console.log(res); - getImage();
        } catch (e) {
          console.log("error : ", e);
          return "No Image Found 🐶";
        }
      }