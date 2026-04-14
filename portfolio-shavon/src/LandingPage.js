export default function LandingPage() {
    return `
    <!-- Navigation -->
    <nav id="navbar">
        <div class="container">
            <a href="#" class="logo">Portfolio<span>.</span></a>
            <a href="#pricing" class="nav-cta">Get Started</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    For Indian Freelance Developers
                </div>

                <h1>Get Higher-Paying Clients.<br>Not Just Another Website.</h1>

                <p class="hero-subtitle">
                    A done-for-you portfolio system that transforms your projects into client-winning case studies. Stop losing deals to developers with better portfolios.
                </p>

                <div class="hero-cta-group">
                    <a href="#pricing" class="btn-primary">Get Your Portfolio</a>
                    <p class="trust-line">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Live portfolio in 3-5 days. No technical skills needed.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section class="problem-section">
        <div class="container">
            <div class="section-label">The Problem</div>
            <h2 class="section-title">Sound Familiar?</h2>

            <div class="problem-grid">
                <div class="problem-card">
                    <div class="problem-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3>Ghosted by Prospects</h3>
                    <p>You send proposals, follow up twice, and then... nothing. No replies. No explanations. Just silence.</p>
                </div>

                <div class="problem-card">
                    <div class="problem-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3>Stuck with Low-Paying Work</h3>
                    <p>You know your skills are worth more, but clients keep negotiating you down. Budget-conscious clients attract budget-conscious work.</p>
                </div>

                <div class="problem-card">
                    <div class="problem-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3>Weak Portfolio Syndrome</h3>
                    <p>Your GitHub is messy. Your portfolio is just screenshots. No story, no case studies, no proof of capability.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solution Section -->
    <section class="solution-section">
        <div class="container">
            <div class="solution-grid">
                <div class="solution-content">
                    <div class="section-label">The Solution</div>
                    <h2 class="section-title">Your Portfolio Is a Sales Tool, Not a Resume</h2>
                    <p class="solution-description">
                        Most developers build portfolios like resumes. We build client-winning systems that tell your story, showcase your process, and make prospects believe you can solve their problems.
                    </p>
                    <ul class="solution-features">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Case studies that demonstrate thinking, not just output</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Professional design that commands premium positioning</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copy that speaks to client pain points and goals</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Fully hosted, optimized, and ready to share</span>
                        </li>
                    </ul>
                </div>

                <div class="solution-visual">
                    <div class="portfolio-preview">
                        <div class="preview-header">
                            <div class="preview-dot"></div>
                            <div class="preview-dot"></div>
                            <div class="preview-dot"></div>
                        </div>
                        <div class="preview-content">
                            <div class="preview-line short" style="background: var(--accent); opacity: 0.3;"></div>
                            <div class="preview-line medium"></div>
                            <div class="preview-line long"></div>
                            <div class="preview-line full"></div>
                            <div class="preview-cards">
                                <div class="preview-card">
                                    <div class="preview-line short"></div>
                                    <div class="preview-line medium" style="margin-top: 8px;"></div>
                                </div>
                                <div class="preview-card">
                                    <div class="preview-line short"></div>
                                    <div class="preview-line medium" style="margin-top: 8px;"></div>
                                </div>
                            </div>
                            <div class="preview-line full" style="margin-top: 16px;"></div>
                            <div class="preview-line medium"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
        <div class="container">
            <div class="benefits-header">
                <div class="section-label">The Outcome</div>
                <h2 class="section-title">What Changes When You Have a Winning Portfolio</h2>
            </div>

            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3>Attract Better Clients</h3>
                    <p>Quality clients research before hiring. A professional portfolio puts you in their consideration set.</p>
                </div>

                <div class="benefit-card">
                    <div class="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h3>Look Premium</h3>
                    <p>Stand out instantly with a portfolio that looks like it cost ₹50,000+ to build.</p>
                </div>

                <div class="benefit-card">
                    <div class="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3>Close Higher Deals</h3>
                    <p>When you look premium, clients assume you are premium. Pricing becomes easier.</p>
                </div>

                <div class="benefit-card">
                    <div class="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3>Stand Out Instantly</h3>
                    <p>Most Indian developers have placeholder portfolios. Yours tells a story.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
        <div class="container">
            <div class="how-header">
                <div class="section-label">How It Works</div>
                <h2 class="section-title">Three Simple Steps to Your New Portfolio</h2>
            </div>

            <div class="steps-grid">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    <h3>Share Your Projects</h3>
                    <p>Upload your best work. We'll figure out which projects tell the best story.</p>
                </div>

                <div class="step-card">
                    <div class="step-number">2</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </div>
                    <h3>We Create Case Studies</h3>
                    <p>We transform raw projects into compelling case studies with design, copy, and strategy.</p>
                </div>

                <div class="step-card">
                    <div class="step-number">3</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <h3>Get Live Portfolio</h3>
                    <p>In 3-5 days, you get a live, fully-hosted portfolio ready to share with clients.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Examples -->
    <section class="portfolio-examples">
        <div class="container">
            <div class="examples-header">
                <div class="section-label">Sample Work</div>
                <h2 class="section-title">Portfolios That Win Clients</h2>
                <p style="color: var(--text-secondary); margin-top: 16px;">
                    Every portfolio is custom-designed based on your projects, niche, and target clients.
                </p>
            </div>

            <div class="examples-grid">
                <div class="example-card">
                    <div class="example-image">
                        <div class="example-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>Portfolio Preview</p>
                        </div>
                    </div>
                    <div class="example-info">
                        <span class="example-tag">E-commerce Specialist</span>
                        <h3>React & Shopify Portfolio</h3>
                        <p>Custom theme development showcase with conversion metrics</p>
                    </div>
                </div>

                <div class="example-card">
                    <div class="example-image">
                        <div class="example-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>Portfolio Preview</p>
                        </div>
                    </div>
                    <div class="example-info">
                        <span class="example-tag">SaaS Developer</span>
                        <h3>Full-Stack Portfolio</h3>
                        <p>Case studies highlighting problem-solving and technical depth</p>
                    </div>
                </div>

                <div class="example-card">
                    <div class="example-image">
                        <div class="example-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>Portfolio Preview</p>
                        </div>
                    </div>
                    <div class="example-info">
                        <span class="example-tag">Freelancer</span>
                        <h3>Agency-Style Portfolio</h3>
                        <p>Premium positioning for landing international clients</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section" id="pricing">
        <div class="container">
            <div class="pricing-header">
                <div class="section-label">Pricing</div>
                <h2 class="section-title">Simple, Transparent Pricing</h2>
                <p style="color: var(--text-secondary); margin-top: 16px;">
                    Choose the package that fits your goals. All plans include a custom-designed portfolio.
                </p>
            </div>

            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-tier">Starter</div>
                    <div class="pricing-price">₹7,999</div>
                    <p class="pricing-description">Perfect for developers just starting to build their presence.</p>
                    <ul class="pricing-features">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Single-page portfolio
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Up to 3 project showcases
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Mobile responsive
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Free hosting for 1 year
                        </li>
                    </ul>
                    <a href="#" class="pricing-cta">Get Started</a>
                </div>

                <div class="pricing-card featured">
                    <div class="pricing-tier">Pro</div>
                    <div class="pricing-price">₹11,999</div>
                    <p class="pricing-description">For developers ready to attract better clients and raise rates.</p>
                    <ul class="pricing-features">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Multi-page portfolio
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Up to 6 project case studies
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Custom copy & messaging
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            SEO optimization
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Free hosting for 1 year
                        </li>
                    </ul>
                    <a href="#" class="pricing-cta">Get Started</a>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier">Premium</div>
                    <div class="pricing-price">₹14,999</div>
                    <p class="pricing-description">Complete package with everything you need to land premium clients.</p>
                    <ul class="pricing-features">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Everything in Pro
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Unlimited project showcases
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Client testimonials section
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Contact form integration
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Free hosting for 2 years
                        </li>
                    </ul>
                    <a href="#" class="pricing-cta">Get Started</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Bonuses Section -->
    <section class="bonuses-section">
        <div class="container">
            <div class="bonuses-header">
                <div class="section-label">Free Bonuses</div>
                <h2 class="section-title">Everything You Need to Start Winning</h2>
                <p style="color: var(--text-secondary); margin-top: 16px;">
                    When you get your portfolio, you also get these resources at no extra cost.
                </p>
            </div>

            <div class="bonuses-grid">
                <div class="bonus-card">
                    <div class="bonus-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3>Client Outreach Scripts</h3>
                    <p>Proven message templates that get responses on LinkedIn, Upwork, and cold email.</p>
                    <span class="bonus-value">Worth ₹2,999</span>
                </div>

                <div class="bonus-card">
                    <div class="bonus-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3>Portfolio Copy Templates</h3>
                    <p>Fill-in-the-blank templates for writing compelling case studies and descriptions.</p>
                    <span class="bonus-value">Worth ₹1,999</span>
                </div>

                <div class="bonus-card">
                    <div class="bonus-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3>Guide to Premium Clients</h3>
                    <p>Our best strategies for finding and landing clients who pay ₹1L+ per project.</p>
                    <span class="bonus-value">Worth ₹3,999</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <div class="faq-header">
                <div class="section-label">FAQ</div>
                <h2 class="section-title">Questions? We've Got Answers.</h2>
            </div>

            <div class="faq-grid">
                <div class="faq-item active">
                    <button class="faq-question">
                        <span>Why can't I just build this myself?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            You absolutely can. But here's the thing - most developers spend weeks learning design, writing copy, and figuring out what to include. We do it in 3-5 days. Plus, it's hard to see your own work objectively. We know what clients want to see because we help developers win deals every day.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>How is this different from AI tools like Wix or Squarespace?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            AI builders give you a website. We give you a client-winning system. Big difference. We write custom copy that speaks to client pain points, create case studies that demonstrate your thinking, and design something that actually converts visitors into leads. Templates and AI can't do that.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>How long does it take?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            3-5 business days from when you share your project details. We'll send you drafts for review, and you can request revisions until you're happy. Most portfolios are live within a week.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Do you write the content for my portfolio?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Yes. We write all the copy - your about section, project descriptions, case studies, and everything else. You just share your projects and tell us about your goals. We handle the rest.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
        <div class="container">
            <div class="final-cta-content">
                <h2>Your Portfolio Is the First Impression.<br>Make It Count.</h2>
                <p>
                    Stop losing clients to developers with better-looking portfolios. Get a portfolio that actually converts visitors into clients - starting at just ₹7,999.
                </p>
                <a href="#pricing" class="btn-primary">Get Your Portfolio Today</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>Portfolio System. Built for Indian developers who want more.</p>
        </div>
    </footer>
    `;
}