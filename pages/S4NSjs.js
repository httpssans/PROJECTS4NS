let slides = document.getElementsByName('slider');
            let totalSlides = slides.length;
            let slideIndex = 0;
            
            document.querySelector('.nextBtn').addEventListener('click', function () {
                slides[slideIndex].checked = false;
                slideIndex = (slideIndex + 1) % totalSlides; 
                slides[slideIndex].checked = true;
            });
            
            document.querySelector('.prevBtn').addEventListener('click', function () {
                slides[slideIndex].checked = false;
                slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
                slides[slideIndex].checked = true;
            });
        
            document.addEventListener('keydown', function(event) {
                // Check if the left arrow key (key code 37) was pressed
                if (event.keyCode == 37) {
                    slides[slideIndex].checked = false;
                    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
                    slides[slideIndex].checked = true;
                }
                // Check if the right arrow key (key code 39) was pressed
                else if (event.keyCode == 39) {
                    slides[slideIndex].checked = false;
                    slideIndex = (slideIndex + 1) % totalSlides; 
                    slides[slideIndex].checked = true;
                }
            });
            function readMore() {
                let dots = document.getElementById("dots");
                let moreText = document.getElementById("more");
                let btnText = document.getElementById("myBtn");
              
                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "Read more";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "Read less";
                  moreText.style.display = "inline";
                }
            }
            function readMore1() {
                let dots1 = document.getElementById("dots1");
                let moreText1 = document.getElementById("more1");
                let btnText1 = document.getElementById("myBtn1");
              
                if (dots1.style.display === 'none') {
                  dots1.style.display = 'inline';
                  btnText1.innerHTML = "Read more";
                  moreText1.style.display = 'none';
                } else {
                  dots1.style.display = 'none';
                  btnText1.innerHTML = "Read less";
                  moreText1.style.display = "inline";
                }
            }
            function readMore2() {
              let dots = document.getElementById("dots2");
              let moreText = document.getElementById("more2");
              let btnText = document.getElementById("myBtn2");
            
              if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
              } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
              }
          }
          function readMore3() {
            let dots = document.getElementById("dots3");
            let moreText = document.getElementById("more3");
            let btnText = document.getElementById("myBtn3");
          
            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
        }
        function readMore4() {
          let dots = document.getElementById("dots4");
          let moreText = document.getElementById("more4");
          let btnText = document.getElementById("myBtn4");
        
          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
          }
      }