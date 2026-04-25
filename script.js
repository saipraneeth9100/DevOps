/* =========================================================
   DEVOPS BY PRANEETH — PREMIUM INTERACTION ENGINE
   FIXED LOADER + SMOOTH UI + ANIMATIONS + UX FLOW
========================================================= */

(() => {
    const loader = document.getElementById("loader");
    const loaderNum = document.getElementById("loader-num");
    const loaderFill = document.getElementById("loader-fill");
    const loaderMsg = document.getElementById("loader-msg");
    const navbar = document.getElementById("navbar");
  
    let progress = 0;
  
    const messages = [
      "Booting AWS environment...",
      "Loading Kubernetes clusters...",
      "Initializing CI/CD pipelines...",
      "Connecting to DevOps lab...",
      "Preparing cloud infrastructure...",
      "Optimizing deployment engine...",
      "Finalizing system..."
    ];
  
    function updateLoader() {
      progress += Math.random() * 6 + 2; // smooth + realistic
  
      if (progress > 100) progress = 100;
  
      loaderNum.textContent = Math.floor(progress);
      loaderFill.style.width = progress + "%";
  
      const msgIndex = Math.floor((progress / 100) * (messages.length - 1));
      loaderMsg.textContent = messages[msgIndex];
  
      if (progress < 100) {
        requestAnimationFrame(updateLoader);
      } else {
        completeLoader();
      }
    }
  
    function completeLoader() {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transform = "scale(1.05)";
        loader.style.transition = "all 0.8s ease";
  
        setTimeout(() => {
          loader.style.display = "none";
          document.body.style.overflow = "auto";
          initUI();
        }, 800);
      }, 600);
    }
  
    function initUI() {
      // Navbar scroll effect
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
  
      // Reveal animations (scroll)
      const revealEls = document.querySelectorAll(".reveal");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
            }
          });
        },
        { threshold: 0.15 }
      );
  
      revealEls.forEach((el) => observer.observe(el));
  
      // Animate salary bars
      const bars = document.querySelectorAll(".sal-fill");
      bars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
  
        setTimeout(() => {
          bar.style.transition = "width 1.5s ease";
          bar.style.width = width;
        }, 500);
      });
  
      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(a.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }
  
    // Form handler
    window.handleFormSubmit = function () {
      const btn = document.getElementById("form-btn");
      const name = document.getElementById("f-name").value;
      const email = document.getElementById("f-email").value;
      const phone = document.getElementById("f-phone").value;
  
      if (!name || !email || !phone) {
        alert("Please fill all fields");
        return;
      }
  
      btn.innerHTML = "Submitting...";
      btn.disabled = true;
  
      setTimeout(() => {
        btn.innerHTML = "✅ Demo Requested";
        btn.classList.add("success");
  
        setTimeout(() => {
          btn.innerHTML = "Claim Free Demo Seat";
          btn.disabled = false;
          btn.classList.remove("success");
        }, 3000);
      }, 1500);
    };
  
    // START LOADER
    document.body.style.overflow = "hidden";
    requestAnimationFrame(updateLoader);
  })();