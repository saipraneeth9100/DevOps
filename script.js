:root {
    --primary: #0f172a; /* Deep Space Blue */
    --accent: #ff9900;  /* AWS Orange */
    --text: #f8fafc;
    --card-bg: rgba(255, 255, 255, 0.05);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--primary);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

/* HERO SECTION */
.hero {
    height: 80vh;
    background: radial-gradient(circle at top right, #2563eb33, transparent),
                linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)),
                url('https://unsplash.com');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

h1 { font-family: 'Poppins', sans-serif; font-size: 4rem; margin-bottom: 1rem; }
.aws-color { color: var(--accent); text-shadow: 0 0 20px rgba(255, 153, 0, 0.4); }

.cta-button {
    background: var(--accent);
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
    display: inline-block;
    box-shadow: 0 10px 20px rgba(255, 153, 0, 0.3);
}

.cta-button:hover { transform: scale(1.05); filter: brightness(1.1); }

/* GRID & CARDS */
.container { max-width: 1100px; margin: 0 auto; padding: 80px 20px; }

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: 0.4s;
}

.card:hover {
    border-color: var(--accent);
    background: rgba(255, 153, 0, 0.05);
    transform: translateY(-10px);
}

/* FORM */
.contact-box {
    background: var(--card-bg);
    padding: 50px;
    border-radius: 30px;
    max-width: 600px;
    margin: 0 auto;
}

input, textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 10px;
}

/* ANIMATIONS */
.reveal { opacity: 0; transform: translateY(30px); transition: 1s; }
.reveal.active { opacity: 1; transform: translateY(0); }

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in { animation: fadeIn 1.5s ease-out; }