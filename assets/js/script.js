let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


      document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const fullMessage = `Hey!\n\nMy name is ${name}.\n Email: ${email}\n Phone: ${phone}\n Subject: ${subject}\n\n Message:\n${message}`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const phoneNumber = "526692959801";
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
      });



      const titles = [
        "Web Developer",
        "Full-Stack Dev ",
        "Problem Solver"
      ];
      const span = document.querySelector(".home-content h3 span");
      let index = 0;

      function playAnimation(name, duration, steps, timing, fillMode) {
        span.style.animation = `${name} ${duration} ${timing}( ${steps} ) ${fillMode}, blink 0.4s infinite step-end`;
      }

      function loop() {
        const text = titles[index];
        span.textContent = text;
        playAnimation("typing", "2s", text.length, "steps", "forwards");

        setTimeout(() => {
          
          playAnimation("erasing", "0.5s", text.length, "steps", "forwards");

          setTimeout(() => {
            index = (index + 1) % titles.length;
            loop();
          }, 500); 

        }, 3000); 
      }

      window.addEventListener("DOMContentLoaded", loop);