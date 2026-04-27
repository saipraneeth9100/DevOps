/* =========================================================
   DEVOPS BY PRANEETH — Final Interaction Engine
   Loader · Scroll Animations · Form (Formspree AJAX)
========================================================= */

(() => {
  const loader    = document.getElementById("loader");
  const loaderNum  = document.getElementById("loader-num");
  const loaderFill = document.getElementById("loader-fill");
  const loaderMsg  = document.getElementById("loader-msg");
  const navbar     = document.getElementById("navbar");

  let progress = 0;

  const messages = [
    "Booting AWS environment...",
    "Loading Kubernetes clusters...",
    "Initializing CI/CD pipelines...",
    "Connecting to DevOps lab...",
    "Preparing cloud infrastructure...",
    "Optimizing deployment engine...",
    "Almost ready..."
  ];

  function updateLoader() {
    progress += Math.random() * 5 + 2;
    if (progress > 100) progress = 100;

    loaderNum.textContent = Math.floor(progress);
    loaderFill.style.width = progress + "%";
    loaderMsg.textContent = messages[Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1)];

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(completeLoader, 500);
    }
  }

  function completeLoader() {
    loader.style.opacity = "0";
    loader.style.transform = "scale(1.05)";
    loader.style.transition = "all 0.8s ease";
    setTimeout(() => {
      loader.style.display = "none";
      document.body.style.overflow = "auto";
      initUI();
    }, 800);
  }

  function initUI() {
    // Navbar scroll
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    // Salary bar animation
    const bars = document.querySelectorAll(".sal-fill");
    bars.forEach(bar => {
      const target = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => { bar.style.transition = "width 1.5s ease"; bar.style.width = target; }, 600);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Formspree AJAX
    const form       = document.getElementById("demo-form");
    const btn        = document.getElementById("form-btn");
    const btnText    = document.getElementById("btn-text");
    const successMsg = document.getElementById("form-success");
    const errorMsg   = document.getElementById("form-error");
    const hiddenEmail = document.getElementById("hidden-email");

    if (form) {
      // Mirror email into _replyto hidden field
      const emailInput = document.getElementById("f-email");
      if (emailInput) {
        emailInput.addEventListener("input", () => {
          hiddenEmail.value = emailInput.value;
        });
      }

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Basic validation
        const name  = document.getElementById("f-name").value.trim();
        const email = emailInput ? emailInput.value.trim() : "";
        const phone = document.getElementById("f-phone").value.trim();
        const batch = document.getElementById("f-batch").value;
        const status = document.getElementById("f-status").value;

        if (!name || !email || !phone || !batch || !status) {
          alert("Please fill in all fields before submitting.");
          return;
        }

        // Disable button + loading state
        btn.disabled = true;
        btnText.textContent = "Submitting...";
        btn.querySelector("svg").style.display = "none";
        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        try {
          const data = new FormData(form);
          const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
          });

          if (response.ok) {
            // Success
            btn.classList.add("success");
            btnText.textContent = "✅ Demo Seat Requested!";
            successMsg.style.display = "block";
            form.reset();
          } else {
            throw new Error("Server error");
          }
        } catch (err) {
          // Error fallback
          btnText.textContent = "Claim Free Demo Seat";
          btn.querySelector("svg").style.display = "";
          btn.disabled = false;
          errorMsg.style.display = "block";
        }

        // Reset button after 5s on success
        if (btn.classList.contains("success")) {
          setTimeout(() => {
            btn.classList.remove("success");
            btnText.textContent = "Claim Free Demo Seat";
            btn.querySelector("svg").style.display = "";
            btn.disabled = false;
          }, 5000);
        }
      });
    }
  }

  // Start
  document.body.style.overflow = "hidden";
  requestAnimationFrame(updateLoader);
})();