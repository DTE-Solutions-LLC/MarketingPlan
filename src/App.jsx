import { useEffect } from 'react';
import './App.css';
import NovaAssistant from './components/NovaAssistant';
import InheritanceCalculator from './components/InheritanceCalculator';

function App() {
  useEffect(() => {
    // Fade-in on scroll observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    window.location.href = 'mailto:drew@pulseapp.com?subject=Discovery%20Call%20Request&body=Andrew,%0D%0A%0D%0AI%27d%20like%20to%20schedule%20a%2030-minute%20discovery%20call%20to%20discuss%20the%20Client%20Acquisition%20System.%0D%0A%0D%0AMy%20availability%3A%0D%0A-%20%0D%0A-%20%0D%0A-%20%0D%0A%0D%0AThanks!';
  };

  return (
    <div className="app-root">
      <div className="grain"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="label">AI-Powered Client Acquisition</div>
            <h1>The AI → CFP<br />Conversion System</h1>
            <p className="subtitle">
              Stop Competing for Leads.<br />Start Converting Them Automatically.
            </p>
            <p className="hero-tagline">
              "Start the conversation with AI. Grow your wealth with a trusted
              CFP."
            </p>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Landing Page Preview */}
      <section style={{ background: "rgba(10, 22, 40, 0.3)" }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">01 — THE APPROACH</div>
            <h2>A New Way to Talk About Money</h2>
            <p className="section-description">
              Your prospects don't want a sales pitch. They want clarity. Here's
              how we give it to them.
            </p>
          </div>

          <div style={{ maxWidth: "900px", margin: "60px auto" }}>
            <div
              className="problem-card fade-in"
              style={{
                background: "linear-gradient(135deg, rgba(44, 95, 77, 0.2) 0%, rgba(27, 47, 74, 0.4) 100%)",
                borderColor: "var(--emerald)",
              }}>
              <h3
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "2.2rem",
                  color: "var(--light-gold)",
                  marginBottom: "24px",
                  lineHeight: "1.3",
                }}>
                "Start the conversation with AI.<br />
                Grow your wealth with a trusted CFP."
              </h3>
              <p
                style={{
                  color: "var(--steel)",
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}>
                This is the headline on your landing page. It removes the
                intimidation factor. No pressure. No judgment. Just an AI
                assistant that helps them understand their situation before they
                ever have to talk to anyone.
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                  paddingTop: "20px",
                  marginTop: "20px",
                }}>
                <p
                  style={{
                    color: "var(--steel)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                  }}>
                  Then, when they're ready:
                  <strong style={{ color: "var(--gold)" }}>
                    "Want help creating a long-term plan? Talk to a CFP about
                    your situation."
                  </strong>
                </p>
              </div>
            </div>

            <div className="problem-card fade-in" style={{ marginTop: "32px" }}>
              <h3 style={{ color: "var(--gold)", marginBottom: "16px" }}>
                The Psychological Hook
              </h3>
              <p style={{ color: "var(--steel)", lineHeight: "1.8" }}>
                People who inherit money feel overwhelmed, guilty, and anxious.
                They don't know who to trust. By offering an
                <strong>AI-first experience</strong>, you remove the fear of being
                "sold to" and position yourself as a helpful resource—not a
                salesperson.
              </p>
              <p style={{ color: "var(--steel)", lineHeight: "1.8", marginTop: "16px" }}>
                By the time they book a call with you, they've already:
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "12px" }}>
                <li
                  style={{
                    padding: "8px 0",
                    paddingLeft: "28px",
                    position: "relative",
                    color: "var(--cream)",
                  }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>✓</span>
                  Done the math on their situation
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    paddingLeft: "28px",
                    position: "relative",
                    color: "var(--cream)",
                  }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>✓</span>
                  Identified their biggest concerns
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    paddingLeft: "28px",
                    position: "relative",
                    color: "var(--cream)",
                  }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>✓</span>
                  Received educational content from you
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    paddingLeft: "28px",
                    position: "relative",
                    color: "var(--cream)",
                  }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>✓</span>
                  Developed trust in your expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">02 — THE CHALLENGE</div>
            <h2>What's Really Stopping You</h2>
            <p className="section-description">
              You don't need a website. You need qualified meetings with people
              who need inheritance guidance. Here's what's in the way:
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Wrong Tool, Wrong Goal</h3>
              <p>
                Traditional websites are built for information, not conversion.
                You need a system designed specifically to book meetings with
                inheritance prospects.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3>Invisible to AI Search</h3>
              <p>
                When prospects ask ChatGPT "Who can help me with my inheritance?",
                you're not showing up. The future of discovery is AI-first, not
                Google-first.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>Missing Authority Signal</h3>
              <p>
                Your book idea ("Guide to Inheritance") is brilliant—but without a
                distribution strategy, it's just another PDF sitting on your hard
                drive.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>No Lead Capture System</h3>
              <p>
                Even if prospects find you, there's no clear path from
                "interested" to "scheduled meeting." You're losing warm leads
                every single day.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Content Overwhelm</h3>
              <p>
                Creating landing pages, lead magnets, email sequences, and nurture
                campaigns feels like building a circus tent alone. It's
                paralyzing.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Generic Messaging</h3>
              <p>
                Most CFP sites look identical. Nothing positions you as THE
                inheritance expert. No emotional connection. No trust signal. No
                differentiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section style={{ background: "rgba(10, 22, 40, 0.5)" }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">03 — THE SOLUTION</div>
            <h2>The Complete System</h2>
            <p className="section-description">
              A 4-phase approach that turns your expertise into a predictable
              meeting pipeline
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-phase">Phase 1</div>
                <h3>AI Inheritance Assistant</h3>
                <p>
                  A judgment-free AI chatbot that pre-qualifies prospects before
                  they ever talk to you. It calculates inheritance longevity,
                  identifies tax traps, assesses spending patterns, then
                  seamlessly hands off to you when they're ready. Built into your
                  landing page.
                </p>
                <InheritanceCalculator />
                <div className="deliverables">
                  <h4>The AI Does:</h4>
                  <ul>
                    <li>Inheritance calculator (age, amount, spending, investments)</li>
                    <li>"How long will this last?" projections with visualization</li>
                    <li>Budget analysis based on inheritance amount</li>
                    <li>Identifies red flags: "Based on what you shared, speaking with a CFP could help"</li>
                    <li>Email capture before showing results</li>
                    <li>Calendar integration for instant 20-min consultation booking</li>
                  </ul>
                  <h4 style={{ marginTop: "20px" }}>You Get:</h4>
                  <ul>
                    <li>Qualified leads who've already done the math</li>
                    <li>Their inheritance amount, timeline, and goals upfront</li>
                    <li>Automated follow-up sequence ("5 Mistakes People Make with Inheritance")</li>
                  </ul>
                </div>
              </div>
              <div style={{ flex: 1 }}></div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div style={{ flex: 1 }}></div>
              <div className="timeline-content">
                <div className="timeline-phase">Phase 2</div>
                <h3>AI-Optimized Authority Content</h3>
                <p>
                  Your "Guide to Inheritance" becomes the cornerstone of an AI
                  discovery strategy. When people ask ChatGPT, Perplexity, or
                  Google "inheritance planning help," your content dominates the
                  results.
                </p>
                <div className="deliverables">
                  <h4>Deliverables:</h4>
                  <ul>
                    <li>Professional book editing & formatting</li>
                    <li>Self-publishing setup (Amazon KDP, etc.)</li>
                    <li>AI-optimized landing page for the book</li>
                    <li>Schema markup for enhanced search visibility</li>
                    <li>Chapter excerpts as lead magnets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-phase">Phase 3</div>
                <h3>Social Media Content Engine</h3>
                <p>
                  Short-form video content (TikTok, Instagram Reels, YouTube
                  Shorts) that drives traffic to your AI assistant. Each video
                  ends with "Want help building a plan? Schedule a call." Every
                  piece of content is a lead magnet.
                </p>
                <div className="deliverables">
                  <h4>Content Library (20+ Videos):</h4>
                  <ul>
                    <li>"3 Mistakes People Make After Inheriting Money"</li>
                    <li>"I Inherited $200K—Do This First"</li>
                    <li>"Tax Traps After Inheriting Money (Avoid These!)"</li>
                    <li>"How Long Will Your Inheritance Actually Last?"</li>
                    <li>"What Financial Advisors Won't Tell You About Inheritance"</li>
                  </ul>
                  <h4 style={{ marginTop: "20px" }}>Platform Strategy:</h4>
                  <ul>
                    <li>TikTok: 60-second educational hooks</li>
                    <li>Instagram Reels: Behind-the-scenes + tips</li>
                    <li>YouTube Shorts: Longer-form explainers</li>
                    <li>Twitter/X: Thread-style breakdowns</li>
                    <li>Every video CTAs to your AI assistant</li>
                  </ul>
                </div>
              </div>
              <div style={{ flex: 1 }}></div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div style={{ flex: 1 }}></div>
              <div className="timeline-content">
                <div className="timeline-phase">Phase 4</div>
                <h3>Email Nurture + Lead Magnets</h3>
                <p>
                  After someone uses the AI calculator and enters their email,
                  they immediately receive "5 Mistakes People Make With
                  Inheritance" + a 7-day nurture sequence that builds trust and
                  drives consultation bookings.
                </p>
                <div className="deliverables">
                  <h4>Immediate Delivery:</h4>
                  <ul>
                    <li>PDF: "5 Mistakes People Make With Inheritance"</li>
                    <li>PDF: "Tax Traps After Inheriting Money"</li>
                    <li>Checklist: "What to Do in the First 30 Days"</li>
                  </ul>
                  <h4 style={{ marginTop: "20px" }}>7-Day Email Sequence:</h4>
                  <ul>
                    <li>Day 1: Results from AI calculator + next steps</li>
                    <li>Day 2: Case study—"How Sarah turned $150K into retirement"</li>
                    <li>Day 3: Tax trap warning (builds urgency)</li>
                    <li>Day 4: Meet Andrew (your story, credentials, approach)</li>
                    <li>Day 5: Client testimonial + social proof</li>
                    <li>Day 6: "What's holding you back?" (address objections)</li>
                    <li>Day 7: Clear CTA—"Let's build your plan together"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">04 — EXPECTED OUTCOMES</div>
            <h2>What Success Looks Like</h2>
            <p className="section-description">
              Conservative projections based on industry conversion benchmarks for
              financial advisors
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-card fade-in">
              <div className="metric-number">5-10</div>
              <div className="metric-label">
                Qualified Meetings<br />Per Month (Year 1)
              </div>
            </div>

            <div className="metric-card fade-in">
              <div className="metric-number">18%</div>
              <div className="metric-label">Landing Page<br />Conversion Rate</div>
            </div>

            <div className="metric-card fade-in">
              <div className="metric-number">40%</div>
              <div className="metric-label">Email Nurture<br />Open Rate</div>
            </div>

            <div className="metric-card fade-in">
              <div className="metric-number">3x</div>
              <div className="metric-label">ROI Within<br />6 Months</div>
            </div>
          </div>

          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <p
              style={{
                color: "var(--steel)",
                fontSize: "1.1rem",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.9",
              }}>
              <strong style={{ color: "var(--gold)" }}>The compounding effect:</strong>
              As your book gains reviews, your landing page climbs in AI search
              results, and your lead magnets spread organically, the system
              becomes self-sustaining. Month 6 looks very different from Month 1.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">05 — WHY THIS WORKS</div>
            <h2>Strategic Positioning</h2>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="problem-card fade-in" style={{ marginBottom: "32px" }}>
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>You're Not Competing on Price</h3>
              <p>
                By positioning as THE inheritance expert (backed by your book),
                you attract clients who value expertise over cost. These are the
                best clients—they close faster, refer more, and stay longer.
              </p>
            </div>

            <div className="problem-card fade-in" style={{ marginBottom: "32px" }}>
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="14" x2="23" y2="14" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="14" x2="4" y2="14" />
                </svg>
              </div>
              <h3>AI-First Discovery Strategy</h3>
              <p>
                Most CFPs are still optimizing for Google. You'll dominate
                ChatGPT, Perplexity, and Claude search results—where the next
                generation of high-net-worth clients are looking. First-mover
                advantage.
              </p>
            </div>

            <div className="problem-card fade-in" style={{ marginBottom: "32px" }}>
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>The Book as Authority Multiplier</h3>
              <p>
                "Published author" instantly elevates you above 99% of CFPs. It's
                social proof, credibility, and a conversation starter. Plus, it
                becomes a lead magnet that keeps working 24/7.
              </p>
            </div>

            <div className="problem-card fade-in">
              <div className="problem-icon">
                <svg viewBox="0 0 24 24">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Systems Over Hustle</h3>
              <p>
                This isn't about working harder—it's about building a machine that
                works while you sleep. Once deployed, the system generates leads,
                nurtures them, and books meetings automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "rgba(10, 22, 40, 0.5)" }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-number">06 — TIMELINE</div>
            <h2>6-Week Build Schedule</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="problem-card fade-in" style={{ marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", marginBottom: "12px" }}>
                Week 1-2: Foundation & Strategy
              </h3>
              <p>
                Positioning workshop, content audit, competitor analysis, book
                review & editing, lead magnet concept development
              </p>
            </div>

            <div className="problem-card fade-in" style={{ marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", marginBottom: "12px" }}>
                Week 3-4: Creation & Development
              </h3>
              <p>
                Landing page design & build, lead magnet creation, email sequence
                copywriting, book formatting & AI optimization
              </p>
            </div>

            <div className="problem-card fade-in" style={{ marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", marginBottom: "12px" }}>
                Week 5: Integration & Testing
              </h3>
              <p>
                Email automation setup, calendar integration, CRM configuration,
                analytics dashboard, quality assurance testing
              </p>
            </div>

            <div className="problem-card fade-in">
              <h3 style={{ color: "var(--gold)", marginBottom: "12px" }}>
                Week 6: Launch & Optimization
              </h3>
              <p>
                System launch, training session, initial traffic setup, A/B test
                implementation, 30-day optimization period begins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-header fade-in">
            <div className="section-number">07 — NEXT STEPS</div>
            <h2>Ready to Build?</h2>
            <p className="section-description">Here's how we start</p>
          </div>

          <div style={{ maxWidth: "600px", margin: "60px auto" }}>
            <div
              className="problem-card fade-in"
              style={{ textAlign: "left", marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", fontSize: "1.3rem" }}>
                Step 1: Discovery Call (30 min)
              </h3>
              <p>
                We review your current positioning, discuss your book concept,
                identify your ideal inheritance client, and map out customization
                needs.
              </p>
            </div>

            <div
              className="problem-card fade-in"
              style={{ textAlign: "left", marginBottom: "24px" }}>
              <h3 style={{ color: "var(--gold)", fontSize: "1.3rem" }}>
                Step 2: Proposal Refinement
              </h3>
              <p>
                I'll adjust this plan based on our conversation, provide specific
                examples for your niche, and finalize scope & timeline.
              </p>
            </div>

            <button
              className="cta-button"
              onClick={handleCTAClick}>
              Schedule Discovery Call →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-note">
            This isn't a template. This isn't a generic website build. This is a
            custom marketing engine designed specifically for financial advisors
            who want to dominate the inheritance planning niche using AI-first
            strategies and authority positioning.
            <br /><br />
            I'm not interested in building you "just another website." I'm
            interested in building you a system that generates qualified meetings
            on autopilot—because that's what you actually need.
          </p>
          <p className="author">
            — Drew T. Ernst<br />Founder, Pulse AI<br />drew@pulseapp.com
          </p>

          <div
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            }}>
            <p
              style={{ color: "var(--steel)", fontSize: "0.85rem", textAlign: "center" }}>
              © 2026 Drew T. Ernst | DTE Solutions. All rights reserved.<br />
              This proposal and all included strategies, designs, and concepts are
              proprietary and confidential.
            </p>
          </div>
        </div>
      </footer>
      <NovaAssistant />
    </div>
  );
}

export default App;
