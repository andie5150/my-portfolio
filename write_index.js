const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Premium Portfolio | Digital Alchemist</title>
    <meta name="description" content="Explore the creative works and technical expertise of a modern digital developer.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
</head>
<body class="dark-mode">
    <div class="cursor-glow" id="cursor-glow"></div>
    <div class="blob-bg"></div>

    <header id="header">
        <nav class="container">
            <div class="logo">
                <span class="gradient-text">ALCHEMIST</span>
            </div>
            <ul class="nav-links">
                <li><a href="#hero" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Works</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero-section">
            <div class="container hero-container">
                <div class="hero-content" data-reveal="left">
                    <h2 class="sub-headline">Creative Developer & Designer</h2>
                    <h1 class="main-headline">\u30c7\u30b8\u30bf\u30eb\u4f53\u9a13\u306e<span class="gradient-text">\u5275\u9020</span></h1>
                    <p class="hero-description">
                        \u79c1\u306f\u6700\u65b0\u306e\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3068\u82b8\u8853\u7684\u306a\u7f8e\u5b66\u3092\u878d\u5408\u3055\u305b\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u6df1\u3044\u5370\u8c61\u3092\u6b8b\u3059\u30c7\u30b8\u30bf\u30eb\u4f53\u9a13\u3092\u5275\u9020\u3057\u307e\u3059\u3002
                    </p>
                    <div class="hero-buttons">
                        <a href="#projects" class="btn btn-primary">View my works</a>
                        <a href="#contact" class="btn btn-secondary">Let's talk</a>
                    </div>
                </div>
                <div class="hero-visual" data-reveal="right">
                    <div class="jellyfish-wrapper">
                        <img src="assets/portfolio_hero_bg.png" alt="Hero Visualization" class="hero-img">
                        <div class="glow-sphere"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
            <div class="container">
                <div class="section-header" data-reveal="up">
                    <span class="tag">About Me</span>
                    <h2>Innovation Through <span class="gradient-text">Design</span></h2>
                </div>
                <div class="about-grid">
                    <div class="about-text" data-reveal="left">
                        <p>
                            \u30c7\u30b8\u30bf\u30eb\u4e16\u754c\u306e\u53ef\u80fd\u6027\u3092\u8ffd\u6c42\u3057\u7d9a\u3051\u308b\u958b\u767a\u8005\u3068\u3057\u3066\u3001\u79c1\u306f\u6a5f\u80fd\u6027\u3060\u3051\u3067\u306a\u304f\u300c\u7f8e\u3057\u3055\u300d\u3068\u300c\u4f7f\u3044\u3084\u3059\u3055\u300d\u306e\u5b8c\u74a7\u306a\u30d0\u30e9\u30f3\u30b9\u3092\u6c42\u3081\u3066\u3044\u307e\u3059\u3002
                        </p>
                        <p>
                            \u6df1\u6d77\u751f\u7269\u306e\u3088\u3046\u306a\u6d41\u52d5\u6027\u3068\u3001\u7dfb\u5bc6\u306a\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u878d\u5408\u3092\u30c6\u30fc\u30de\u306b\u3001\u5e38\u306b\u4e00\u6b69\u5148\u306e\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <div class="container">
                <div class="section-header" data-reveal="up">
                    <span class="tag">Featured Works</span>
                    <h2>Selected <span class="gradient-text">Creations</span></h2>
                </div>
                <div class="projects-grid">
                    <div class="project-card glass-card" data-reveal="up" data-delay="100">
                        <div class="project-img-wrapper">
                            <img src="assets/project_1_ui.png" alt="Project 1">
                        </div>
                        <div class="project-info">
                            <span class="project-category">UI/UX Design</span>
                            <h3>Aethel Navigator</h3>
                            <p>\u6b21\u4e16\u4ee3\u306e\u5b87\u5b99\u8239\u822a\u6cd5\u30b7\u30b9\u30c6\u30e0\u306e\u305f\u3081\u306e\u30db\u30ed\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <script src="index.js"></script>
</body>
</html>`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote index.html with pure ASCII scripts ensuring UTF-8 encoding.');
