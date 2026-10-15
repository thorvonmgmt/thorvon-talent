/**
 * ==========================================================================
 * THORVON TALENT — OFFICIAL SCRIPTPACK (FINAL BRIEF)
 * A Creator Management & Talent Partnerships Division of Thorvon Media
 *
 * Core Features:
 * - Interactive 3-Stage Creator Journey Switcher
 * - Interactive Creator Showcase Filter
 * - Streamlined Creator Application Flow ("Let's Get to Know You.")
 * - Apple-Grade Micro-Interactions & Electric Lime Ambient Glow
 * - Secondary Brand Partnerships & Verified Recruitment Portals
 * - Resilient Form Dispatch Engine with Direct Fallback
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Core Configuration & Channels
// --------------------------------------------------------------------------
const AppConfig = {
  // Web3Forms API Key for automated submission delivery
  // Replace with your free key from web3forms.com, or leave for instant mailto fallback
  WEB3FORMS_ACCESS_KEY: 'YOUR_WEB3FORMS_ACCESS_KEY',

  CONTACT: {
    PHONE: '+916000156191',
    PHONE_DISPLAY: '+91 60001 56191',
    PHONE_LINK: 'tel:+916000156191',
    WHATSAPP: '+917002889463',
    WHATSAPP_DISPLAY: '+91 70028 89463',
    WHATSAPP_LINK: 'https://wa.me/917002889463',
    EMAIL_PRIMARY: 'thorvonmedia@gmail.com',
    EMAIL_RECRUITMENT: 'thorvonmgmt@gmail.com',
    INSTAGRAM_LINK: 'https://instagram.com/thorvonmedia'
  }
};

// --------------------------------------------------------------------------
// 2. Interactive Creator Journey Stages Data
// --------------------------------------------------------------------------
const JourneyStages = [
  {
    badge: 'STAGE 01 • REPUTATION ARCHITECTURE',
    heading: 'Build Your Presence',
    desc: 'Social media management, content strategy, and stronger personal branding that position you as an unmistakable voice in your niche.',
    cta: 'Start Stage 01',
    metrics: [
      { label: 'Content Strategy', val: 'Retention Pacing' },
      { label: 'Feed Optimization', val: 'Omnichannel' },
      { label: 'Brand Positioning', val: 'Authority First' },
      { label: 'Operational Support', val: 'Thorvon Media' }
    ]
  },
  {
    badge: 'STAGE 02 • COMMERCIAL ALIGNMENT',
    heading: 'Find Your Opportunities',
    desc: 'Relevant brand collaborations, commercial partnerships, and campaign opportunities that fit your creative identity without compromise.',
    cta: 'Start Stage 02',
    metrics: [
      { label: 'Brand Matching', val: 'Vetted Sponsors' },
      { label: 'Deal Structuring', val: 'Multi-Month Retainers' },
      { label: 'Rate Protection', val: 'Ethical Floor' },
      { label: 'Legal Defense', val: 'Contract Security' }
    ]
  },
  {
    badge: 'STAGE 03 • CREATIVE FREEDOM',
    heading: 'Focus on Your Craft',
    desc: 'Let creators focus entirely on creating while our dedicated team supports your social media publishing, clip editing, and commercial pipelines.',
    cta: 'Start Stage 03',
    metrics: [
      { label: 'Workflow Burden', val: 'Zero Admin Friction' },
      { label: 'Video Post-Production', val: 'Clipper Network' },
      { label: 'Native Scheduling', val: 'Managed Publishing' },
      { label: 'Career Horizon', val: 'Long-Term Equity' }
    ]
  }
];

// --------------------------------------------------------------------------
// 3. Verified Thorvon Media Vacancies Catalog
// --------------------------------------------------------------------------
const CareerPositions = {
  'clipper': {
    title: 'Clipper (Short-Form Video Editor)',
    department: 'VIDEO EDITING & POST-PRODUCTION',
    tagline: 'High-retention video cutting, pacing, kinetic typography, and viral clip extraction.',
    desc: 'We are seeking a fast, creative Clipper who lives and breathes modern short-form video algorithms. You will extract high-impact viral moments from podcasts, long-form interviews, and raw founder footage, formatting them into retention-optimized reels, YouTube Shorts, and viral video clips.',
    responsibilities: [
      'Extract high-retention 30–60s clips from long-form podcasts, streams, and founder recordings.',
      'Craft captivating first 3-second hooks with dynamic pacing, motion graphics, and sound design.',
      'Add clean kinetic captions, B-roll overlays, visual zooms, and seamless jump cuts.',
      'Format and export tailored aspect ratios optimized natively for YouTube Shorts and Instagram Reels.',
      'Collaborate with our creative director to maintain premier visual standards across all client deliverables.'
    ],
    requirements: [
      'Proven portfolio or links to viral short-form clips you have edited (Instagram Reels, YouTube Shorts, or TikTok).',
      'Proficiency in Adobe Premiere Pro, After Effects, DaVinci Resolve, or CapCut Pro.',
      'Sharp understanding of viral retention curves, pacing, sound effects, and hook psychology.',
      'Ability to turn around fast, reliable iterations in a high-growth remote agency workflow.'
    ]
  },
  'social-media-manager': {
    title: 'Social Media Manager',
    department: 'SOCIAL MEDIA & AUDIENCE GROWTH',
    tagline: 'Omnichannel feed ownership, native distribution, and high-converting audience growth.',
    desc: 'We are looking for an analytical and culturally plugged-in Social Media Manager to take full ownership of publishing, feed optimization, and audience engagement across Reddit, LinkedIn, YouTube, and Instagram for our founder and brand clients.',
    responsibilities: [
      'Manage and deploy native publishing schedules across Reddit, LinkedIn, YouTube, and Instagram.',
      'Write platform-native captions, carousels, and post descriptions tailored to each platform’s unique tone.',
      'Engage in comment sections, founder communities, subreddits, and target industry discussions to drive authority.',
      'Monitor audience retention, impression analytics, and generate actionable weekly performance reports.',
      'Partner with writers and editors to continuously optimize hooks and content formats based on live data.'
    ],
    requirements: [
      'Minimum 1.5+ years of experience managing active social feeds for founders, creators, or B2B/consumer brands.',
      'Deep fluency in native mechanics and etiquette across Reddit, LinkedIn, YouTube, and Instagram.',
      'Excellent written English with a sharp voice suited for executive and founder communication.',
      'Organized, proactive, and proficient with scheduling suites and native analytics tools.'
    ]
  },
  'content-creator': {
    title: 'Content Creator',
    department: 'CREATIVE PRODUCTION & ON-CAMERA',
    tagline: 'Charismatic on-camera storytelling, creative scripting, and viral concept development.',
    desc: 'We are looking for an engaging, on-camera Content Creator who knows how to captivate an audience. You will script, shoot, and direct original short-form and long-form video concepts that translate complex founder insights, tech innovations, and brand stories into magnetic media.',
    responsibilities: [
      'Ideate, script, and record high-retention video content for social feeds and brand campaigns.',
      'Transform complex founder ideas, case studies, and PR storylines into captivating, digestible videos.',
      'Test emerging viral formats, audio trends, visual framing, and hooks to drive exponential reach.',
      'Collaborate with our video clippers and creative directors to produce flawless final exports.',
      'Maintain an authentic, confident, and persuasive on-camera persona.'
    ],
    requirements: [
      'Demonstrated portfolio or links showcasing strong on-camera performance (YouTube, Instagram Reels, or TikTok).',
      'Natural charisma, articulate delivery, and strong scriptwriting / storytelling capability.',
      'Clean recording setup (clean audio mic, high-resolution camera/phone, good lighting).',
      'Passionate about internet culture, creator trends, and media psychology.'
    ]
  },
  'brand-acquisition-head': {
    title: 'Creator & Brand Acquisition Head',
    department: 'BUSINESS DEVELOPMENT & PARTNERSHIPS',
    tagline: 'Leading creator talent scouting, strategic brand partnerships, and agency client acquisition.',
    desc: 'We are seeking a driven, commercially minded Creator & Brand Acquisition Head to accelerate Thorvon’s market presence. You will spearhead outbound relationships with high-caliber creators, tech founders, and top brands, structuring high-impact content production and talent representation agreements.',
    responsibilities: [
      'Identify, scout, and sign top-tier digital creators and prominent founders for our talent and distribution roster.',
      'Initiate and manage outbound BD pipelines targeting venture-backed startups, brands, and executive teams.',
      'Lead introductory strategy calls, pitch Thorvon’s full-suite creative infrastructure, and close partnership deals.',
      'Structure win-win brand sponsorships, content syndication agreements, and PR partnerships.',
      'Work directly with agency leadership to develop high-converting commercial packages and onboarding pipelines.'
    ],
    requirements: [
      '2+ years of proven track record in talent acquisition, brand partnerships, creator management, or agency sales.',
      'Existing network of connections across digital creators, agency leaders, or founder communities.',
      'Exceptional consultative sales, negotiation, and high-stakes relationship-building skills.',
      'Autonomous, goal-driven mindset with a hunger to lead a high-growth business development arm.'
    ]
  },
  'content-writers': {
    title: 'Content Writers',
    department: 'EDITORIAL & PR',
    tagline: 'Clear, engaging writing for modern founders and fast-growing brands.',
    desc: 'We are looking for strong writers who can turn complex ideas into simple, compelling stories. You will write founder thought pieces, articles, press pitches, and newsletters that build real credibility.',
    responsibilities: [
      'Write clear, well-researched articles, LinkedIn posts, and newsletters.',
      'Draft press releases and media pitches that catch editors’ attention.',
      'Turn messy notes and rough ideas from founders into polished, readable stories.',
      'Work directly with our design and PR team to deliver work on time.'
    ],
    requirements: [
      'Minimum 1.5 years of relevant writing or editorial experience.',
      'Share your best work / portfolio (published articles, essays, or client copy).',
      'Clear communication and strong attention to detail.'
    ]
  },
  'graphic-designers': {
    title: 'Graphic Designers',
    department: 'BRAND & VISUAL DESIGN',
    tagline: 'Clean typography and modern visual design that stops the scroll.',
    desc: 'We need a creative designer who cares about details and has a strong sense of modern aesthetics. You will create eye-catching social graphics, carousels, brand kits, and slide decks for our clients.',
    responsibilities: [
      'Design clean social media graphics, carousels, and visual posts.',
      'Build modern slide decks, media kits, and brand assets for clients.',
      'Keep visual branding consistent across all client deliverables.',
      'Work with writers and video editors to bring creative concepts to life.'
    ],
    requirements: [
      'Minimum 1.5 years of professional design experience.',
      'Share your portfolio / best visual work (Figma, Behance, or web link).',
      'Strong eye for typography, layouts, and color.'
    ]
  },
  'project-manager': {
    title: 'Project Manager',
    department: 'OPERATIONS & ACCOUNT MANAGEMENT',
    tagline: 'Keeping creative projects organized, on time, and stress-free.',
    desc: 'We are looking for an organized, proactive person who loves making order out of chaos. You will keep our writers, designers, and video editors aligned so client work is delivered smoothly and on schedule.',
    responsibilities: [
      'Plan project timelines and ensure daily tasks are completed on time.',
      'Coordinate communication between clients, writers, designers, and editors.',
      'Review deliverables before client handover to ensure top quality.',
      'Spot bottlenecks early and help the team solve problems quickly.'
    ],
    requirements: [
      'Minimum 1.5 years of project management or coordination experience.',
      'Proven ability to manage deadlines and keep teams organized.',
      'Clear, friendly communication and strong problem-solving skills.'
    ]
  }
};

// --------------------------------------------------------------------------
// 3b. Audience & Distribution Metrics Controller
// --------------------------------------------------------------------------
const AudienceMetricsController = {
  // Format numeric value or return em dash ('—') for missing/unverified state
  formatValue(value, format, suffix = '') {
    if (value === null || value === undefined || isNaN(value)) {
      return '—';
    }

    let formatted = '';
    if (format === 'abbreviated') {
      if (value >= 1000000) {
        const millions = value / 1000000;
        formatted = (millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)) + 'M';
      } else if (value >= 1000) {
        const thousands = value / 1000;
        formatted = (thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(0)) + 'K';
      } else {
        formatted = value.toString();
      }
    } else if (format === 'percentage') {
      formatted = (typeof value === 'number' ? value.toFixed(2) : value) + '%';
      return formatted;
    } else if (format === 'integer') {
      formatted = Math.round(value).toLocaleString();
    } else {
      formatted = value.toString();
    }

    return formatted + suffix;
  },

  init() {
    const config = window.ThorvonMetricsConfig || (typeof ThorvonMetricsConfig !== 'undefined' ? ThorvonMetricsConfig : null);
    if (!config) return;

    // A. Apply Meta Values
    const reportingPeriodEl = document.getElementById('metricsReportingPeriod');
    const lastUpdatedEl = document.getElementById('metricsLastUpdated');
    const badgeTextEl = document.getElementById('metricsBadgeText');

    if (reportingPeriodEl && config.meta && config.meta.reportingPeriod) {
      reportingPeriodEl.textContent = config.meta.reportingPeriod;
    }
    if (lastUpdatedEl && config.meta && config.meta.lastUpdated) {
      lastUpdatedEl.textContent = config.meta.lastUpdated;
    }
    if (badgeTextEl && config.meta && config.meta.badgeLabel) {
      badgeTextEl.textContent = config.meta.badgeLabel;
    }

    // B. Apply Primary 4 Cards from Config
    if (Array.isArray(config.cards)) {
      config.cards.forEach((card) => {
        const cardEl = document.querySelector(`.metric-card[data-metric-id="${card.id}"]`);
        if (!cardEl) return;

        const numEl = cardEl.querySelector('.metric-number');
        const eyebrowEl = cardEl.querySelector('.metric-eyebrow');
        const descEl = cardEl.querySelector('.metric-desc');

        if (eyebrowEl && card.label) eyebrowEl.textContent = card.label;
        if (descEl && card.description) descEl.textContent = card.description;

        if (numEl) {
          numEl.setAttribute('data-target', card.value !== null && card.value !== undefined ? card.value : 'null');
          numEl.setAttribute('data-format', card.format || 'abbreviated');
          numEl.setAttribute('data-suffix', card.suffix || '');
          numEl.textContent = this.formatValue(card.value, card.format, card.suffix);
        }
      });
    }

    // C. Apply Engagement Summary from Config
    const interactionsEl = document.getElementById('metricsInteractions');
    const engagementRateEl = document.getElementById('metricsEngagementRate');
    const scopeEl = document.getElementById('metricsAccountScope');
    const disclaimerEl = document.getElementById('metricsDisclaimer');

    if (config.engagementSummary) {
      const summary = config.engagementSummary;
      if (interactionsEl && summary.totalInteractions) {
        const item = summary.totalInteractions;
        interactionsEl.setAttribute('data-target', item.value !== null && item.value !== undefined ? item.value : 'null');
        interactionsEl.setAttribute('data-format', item.format || 'abbreviated');
        interactionsEl.setAttribute('data-suffix', item.suffix || '');
        interactionsEl.textContent = this.formatValue(item.value, item.format, item.suffix);
      }

      if (engagementRateEl && summary.engagementRate) {
        const item = summary.engagementRate;
        engagementRateEl.setAttribute('data-target', item.value !== null && item.value !== undefined ? item.value : 'null');
        engagementRateEl.setAttribute('data-format', item.format || 'percentage');
        engagementRateEl.setAttribute('data-suffix', item.suffix || '%');
        engagementRateEl.textContent = this.formatValue(item.value, item.format, item.suffix);
      }

      if (scopeEl && summary.includedAccounts) {
        scopeEl.innerHTML = `<strong>Roster Scope:</strong> ${summary.includedAccounts}`;
      }
      if (disclaimerEl && summary.disclaimer) {
        disclaimerEl.textContent = summary.disclaimer;
      }
    }

    // D. Restrained Count-Up Animation
    this.setupCountUp();
  },

  setupCountUp() {
    const widgetSection = document.getElementById('audienceMetrics');
    if (!widgetSection) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatableElements = widgetSection.querySelectorAll('[data-target]');

    // If user prefers reduced motion, values are already rendered, return early
    if (prefersReducedMotion) return;

    let animated = false;

    const runCountUp = () => {
      if (animated) return;
      animated = true;

      const duration = 1200; // ms
      const startTime = performance.now();

      animatableElements.forEach((el) => {
        const targetAttr = el.getAttribute('data-target');
        if (targetAttr === 'null' || targetAttr === '' || targetAttr === null) {
          el.textContent = '—';
          return;
        }

        const targetVal = parseFloat(targetAttr);
        if (isNaN(targetVal)) return;

        const format = el.getAttribute('data-format') || 'abbreviated';
        const suffix = el.getAttribute('data-suffix') || '';

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic: 1 - (1 - progress)^3
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = targetVal * easeProgress;

          el.textContent = AudienceMetricsController.formatValue(currentVal, format, suffix);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = AudienceMetricsController.formatValue(targetVal, format, suffix);
          }
        };

        requestAnimationFrame(animate);
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp();
            observer.disconnect();
          }
        });
      }, { threshold: 0.15 });

      observer.observe(widgetSection);
    } else {
      runCountUp();
    }
  }
};

// --------------------------------------------------------------------------
// 4. Modal System Controller
// --------------------------------------------------------------------------
const ModalController = {
  activeModal: null,

  open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (this.activeModal && this.activeModal !== modal) {
      this.activeModal.classList.remove('is-open');
      this.activeModal.setAttribute('aria-hidden', 'true');
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    this.activeModal = modal;

    const focusable = modal.querySelector('button, [href], input, select, textarea');
    if (focusable) focusable.focus();
  },

  close(modal) {
    const target = modal || this.activeModal;
    if (!target) return;

    target.classList.remove('is-open');
    target.setAttribute('aria-hidden', 'true');
    this.activeModal = null;

    const anyOpen = document.querySelector('.thorvon-modal-backdrop.is-open');
    if (!anyOpen) {
      document.body.classList.remove('modal-open');
    }
  },

  closeAll() {
    const modals = document.querySelectorAll('.thorvon-modal-backdrop');
    modals.forEach((m) => {
      m.classList.remove('is-open');
      m.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('modal-open');
    this.activeModal = null;
  }
};

// --------------------------------------------------------------------------
// 5. Job Details Modal Handler
// --------------------------------------------------------------------------
function showJobDetails(roleId) {
  const position = CareerPositions[roleId];
  const jobDetailModal = document.getElementById('jobDetailModal');
  if (!position || !jobDetailModal) return;

  const deptEl = document.getElementById('jobDetailDept');
  const titleEl = document.getElementById('jobDetailModalTitle');
  const taglineEl = document.getElementById('jobDetailTagline');
  const descEl = document.getElementById('jobDetailDesc');
  const respEl = document.getElementById('jobDetailResponsibilities');
  const reqEl = document.getElementById('jobDetailRequirements');
  const hiddenRole = document.getElementById('jobRoleHidden');

  if (deptEl) deptEl.textContent = position.department;
  if (titleEl) titleEl.textContent = position.title;
  if (taglineEl) taglineEl.textContent = position.tagline;
  if (descEl) descEl.textContent = position.desc;
  if (hiddenRole) hiddenRole.value = position.title;

  if (respEl) {
    respEl.innerHTML = '';
    position.responsibilities.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<span style="color: var(--color-lime); margin-right: 0.5rem; font-weight: 700;">+</span>${item}`;
      respEl.appendChild(li);
    });
  }

  if (reqEl) {
    reqEl.innerHTML = '';
    position.requirements.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<span style="color: var(--color-lime); margin-right: 0.5rem; font-weight: 700;">+</span>${item}`;
      reqEl.appendChild(li);
    });
  }

  const viewPane = document.getElementById('jobViewPane');
  const formPane = document.getElementById('jobFormPane');
  if (viewPane) viewPane.style.display = 'block';
  if (formPane) formPane.style.display = 'none';

  ModalController.open('jobDetailModal');
}

// --------------------------------------------------------------------------
// 6. Toast Notification Utility
// --------------------------------------------------------------------------
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : '•';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));

  const removeToast = () => {
    toast.classList.remove('is-visible');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', removeToast);
  setTimeout(removeToast, 6000);
}

// --------------------------------------------------------------------------
// 7. Form Submission Pipeline
// --------------------------------------------------------------------------
async function handleFormSubmit(form, formType) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalHtml = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting... <span class="arrow">⌛</span>';
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
  let subjectPrefix = 'Thorvon Talent';
  let formattedSummary = '';

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'medium'
  }) + ' UTC';

  if (formType === 'creator') {
    targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
    subjectPrefix = `Creator Application: ${data.name || 'Creator'}`;
    formattedSummary = [
      'THORVON TALENT — CREATOR APPLICATION',
      '==================================================',
      `Full Name: ${data.name || 'N/A'}`,
      `Contact: ${data.contact || 'N/A'}`,
      `Main Platform: ${data.platform || 'N/A'}`,
      `Profile Link / Handle: ${data.profile_url || 'N/A'}`,
      `Content Niche: ${data.niche || 'N/A'}`,
      `Introduction: ${data.introduction || 'None provided'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  } else if (formType === 'brand') {
    targetEmail = AppConfig.CONTACT.EMAIL_PRIMARY;
    subjectPrefix = `Brand Partnership: ${data.brand_name || 'Brand'}`;
    formattedSummary = [
      'THORVON TALENT — BRAND PARTNERSHIP INQUIRY',
      '==================================================',
      `Brand Name: ${data.brand_name || 'N/A'}`,
      `Contact Person: ${data.contact_name || 'N/A'}`,
      `Work Email: ${data.work_email || 'N/A'}`,
      `Website: ${data.website || 'N/A'}`,
      `Campaign Brief: ${data.campaign_brief || 'N/A'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  } else if (formType === 'career') {
    targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
    subjectPrefix = `Job Application: ${data.role_name || 'Role'} — ${data.name || 'Candidate'}`;
    formattedSummary = [
      'THORVON MEDIA — JOB APPLICATION',
      '==================================================',
      `Position: ${data.role_name || 'General Application'}`,
      `Applicant Name: ${data.name || 'N/A'}`,
      `Email Address: ${data.email || 'N/A'}`,
      `Portfolio Link: ${data.portfolio || 'N/A'}`,
      `Introduction: ${data.introduction || 'N/A'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  }

  const mailtoSubject = encodeURIComponent(subjectPrefix);
  const mailtoBody = encodeURIComponent(formattedSummary);
  const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  let deliverySuccess = false;
  const hasKey = AppConfig.WEB3FORMS_ACCESS_KEY && AppConfig.WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY';

  if (hasKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: AppConfig.WEB3FORMS_ACCESS_KEY,
          from_name: 'Thorvon Talent',
          subject: subjectPrefix,
          email: data.contact || data.work_email || data.email || targetEmail,
          name: data.name || data.contact_name || 'Visitor',
          message: formattedSummary
        })
      });

      const res = await response.json();
      if (res.success) deliverySuccess = true;
    } catch (err) {
      console.warn('[Web3Forms Delivery Fallback]:', err);
    }
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHtml;
  }

  ModalController.closeAll();
  form.reset();

  const dispatchModal = document.getElementById('dispatchModal');
  const dispatchTitle = document.getElementById('dispatchModalTitle');
  const dispatchMsg = document.getElementById('dispatchModalMessage');
  const failsafeBox = document.getElementById('dispatchFailsafeBox');
  const preEl = document.getElementById('dispatchSummaryPre');
  const mailtoBtn = document.getElementById('dispatchMailtoBtn');

  if (deliverySuccess) {
    showToast('Application Transmitted', 'Your details have been received by Thorvon Talent.', 'success');
    if (dispatchTitle) dispatchTitle.textContent = 'Application Received';
    if (dispatchMsg) {
      dispatchMsg.textContent = `Thank you. Our talent management team will review your application and respond if there is a suitable opportunity.`;
    }
    if (failsafeBox) failsafeBox.style.display = 'none';
    if (mailtoBtn) mailtoBtn.style.display = 'none';
  } else {
    showToast('Inquiry Formatted', 'Ready for direct transmission to our inbox.', 'info');
    if (dispatchTitle) dispatchTitle.textContent = 'Application Ready to Send';
    if (dispatchMsg) {
      dispatchMsg.textContent = `Your application has been formatted for our executive inbox at ${targetEmail}. Click below to transmit via your email client or copy the summary.`;
    }
    if (failsafeBox) failsafeBox.style.display = 'block';
    if (preEl) preEl.textContent = formattedSummary;
    if (mailtoBtn) {
      mailtoBtn.href = mailtoUrl;
      mailtoBtn.style.display = 'inline-flex';
    }

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 450);
  }

  ModalController.open('dispatchModal');
}

// --------------------------------------------------------------------------
// 8. Interactive Initialization & Micro-Interactions
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize Audience & Distribution Metrics Widget
  AudienceMetricsController.init();

  // A. Scroll Progress Line & Header Blur
  const scrollProgress = document.getElementById('scrollProgress');
  const siteHeader = document.querySelector('.site-header');

  const onScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;

    if (siteHeader) {
      if (window.scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // B. Ambient Glow Cursor Spotlight
  const ambientGlow = document.getElementById('ambientGlow');
  if (ambientGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight * 0.2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    const animateGlow = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      ambientGlow.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgba(204, 255, 0, 0.038), transparent 60%)`;
      requestAnimationFrame(animateGlow);
    };
    animateGlow();
  }

  // C. Kinetic Heading Intersection Observer
  const kineticHeadings = document.querySelectorAll('.kinetic-heading');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    kineticHeadings.forEach((h) => observer.observe(h));
  } else {
    kineticHeadings.forEach((h) => h.classList.add('is-visible'));
  }

  // D. Interactive Creator Journey Switcher
  const stageTabs = document.querySelectorAll('.journey-tab-btn');
  const stageBadge = document.getElementById('journeyStageBadge');
  const stageHeading = document.getElementById('journeyStageHeading');
  const stageDesc = document.getElementById('journeyStageDesc');
  const metric1 = document.getElementById('journeyMetric1');
  const metric2 = document.getElementById('journeyMetric2');
  const metric3 = document.getElementById('journeyMetric3');
  const metric4 = document.getElementById('journeyMetric4');

  function setJourneyStage(stageIndex) {
    const stage = JourneyStages[stageIndex];
    if (!stage) return;

    stageTabs.forEach((tab, idx) => {
      const isActive = idx === stageIndex;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (stageBadge) stageBadge.textContent = stage.badge;
    if (stageHeading) stageHeading.textContent = stage.heading;
    if (stageDesc) stageDesc.textContent = stage.desc;

    if (metric1 && stage.metrics[0]) metric1.textContent = stage.metrics[0].val;
    if (metric2 && stage.metrics[1]) metric2.textContent = stage.metrics[1].val;
    if (metric3 && stage.metrics[2]) metric3.textContent = stage.metrics[2].val;
    if (metric4 && stage.metrics[3]) metric4.textContent = stage.metrics[3].val;
  }

  stageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-stage'), 10);
      setJourneyStage(idx);
    });
  });

  // E. Showcase Filter Pills
  const showcasePills = document.querySelectorAll('.showcase-filter-pill');
  const showcaseCards = document.querySelectorAll('.showcase-card');

  showcasePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      showcasePills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      showcaseCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // F. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobile = () => {
    const isOpen = mobileDrawer.classList.contains('is-open');
    if (isOpen) {
      mobileDrawer.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('drawer-open');
    } else {
      mobileDrawer.classList.add('is-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('drawer-open');
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobile);
  mobileLinks.forEach((l) => {
    l.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('is-open')) toggleMobile();
    });
  });

  // G. Global Click Delegations
  document.addEventListener('click', (e) => {
    // Close modal
    const closeBtn = e.target.closest('[data-action="close-modal"]');
    if (closeBtn) {
      e.preventDefault();
      const parentModal = closeBtn.closest('.thorvon-modal-backdrop');
      ModalController.close(parentModal);
      return;
    }

    // Select Niche and Apply (Clickable Cards from Image 3)
    const nicheCard = e.target.closest('[data-action="select-niche-and-apply"]');
    if (nicheCard) {
      e.preventDefault();
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) toggleMobile();
      const niche = nicheCard.getAttribute('data-niche');
      const nicheSelect = document.getElementById('creatorNiche');
      if (nicheSelect && niche) {
        nicheSelect.value = niche;
      }
      ModalController.open('creatorModal');
      const nameInput = document.getElementById('creatorName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 150);
      }
      if (niche) {
        showToast('Niche Selected', `${niche} pre-selected. Tell us about your channel below.`, 'info');
      }
      return;
    }

    // Open Creator Modal
    const creatorBtn = e.target.closest('[data-action="open-creator-modal"]');
    if (creatorBtn) {
      e.preventDefault();
      if (mobileDrawer.classList.contains('is-open')) toggleMobile();
      ModalController.open('creatorModal');
      return;
    }

    // Open Brand Modal
    const brandBtn = e.target.closest('[data-action="open-brand-modal"]');
    if (brandBtn) {
      e.preventDefault();
      if (mobileDrawer.classList.contains('is-open')) toggleMobile();
      ModalController.open('brandModal');
      return;
    }

    // Open Careers Modal
    const careersBtn = e.target.closest('[data-action="open-careers-modal"]');
    if (careersBtn) {
      e.preventDefault();
      if (mobileDrawer.classList.contains('is-open')) toggleMobile();
      ModalController.open('careersModal');
      return;
    }

    // Open Privacy Modal
    const privacyBtn = e.target.closest('[data-action="open-privacy-modal"]');
    if (privacyBtn) {
      e.preventDefault();
      ModalController.open('privacyModal');
      return;
    }

    // View Job Details
    const jobDetailBtn = e.target.closest('[data-action="view-job-details"]');
    if (jobDetailBtn) {
      e.preventDefault();
      const roleId = jobDetailBtn.getAttribute('data-role');
      if (roleId) showJobDetails(roleId);
      return;
    }

    // Back to Careers List
    const backToCareersBtn = e.target.closest('[data-action="back-to-careers-list"]');
    if (backToCareersBtn) {
      e.preventDefault();
      ModalController.open('careersModal');
      return;
    }

    // Backdrop click
    if (e.target.classList.contains('thorvon-modal-backdrop')) {
      ModalController.close(e.target);
    }
  });

  // H. Job Modal Details <-> Form switch
  const proceedApplyBtn = document.getElementById('jobProceedApplyBtn');
  const backToPaneBtn = document.getElementById('jobBackToPaneBtn');
  const viewPane = document.getElementById('jobViewPane');
  const formPane = document.getElementById('jobFormPane');

  if (proceedApplyBtn) {
    proceedApplyBtn.addEventListener('click', () => {
      if (viewPane) viewPane.style.display = 'none';
      if (formPane) formPane.style.display = 'block';
    });
  }

  if (backToPaneBtn) {
    backToPaneBtn.addEventListener('click', () => {
      if (viewPane) viewPane.style.display = 'block';
      if (formPane) formPane.style.display = 'none';
    });
  }

  // I. Keyboard Accessibility (Escape + Enter/Space on cards)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) toggleMobile();
      ModalController.closeAll();
    } else if (e.key === 'Enter' || e.key === ' ') {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.getAttribute && activeEl.getAttribute('data-action') === 'select-niche-and-apply') {
        e.preventDefault();
        activeEl.click();
      }
    }
  });

  // J. Form Submission Binding
  const formsToBind = [
    { id: 'creatorAppForm', type: 'creator' },
    { id: 'brandModalForm', type: 'brand' },
    { id: 'jobAppForm', type: 'career' }
  ];

  formsToBind.forEach(({ id, type }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(el, type);
      });
    }
  });

  // K. Copy Dispatch Summary Helper
  const copyBtn = document.getElementById('copyDispatchBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const summaryPre = document.getElementById('dispatchSummaryPre');
      if (summaryPre && summaryPre.textContent) {
        navigator.clipboard.writeText(summaryPre.textContent).then(() => {
          copyBtn.textContent = 'Copied ✓';
          showToast('Copied to Clipboard', 'Summary copied for direct sending.', 'success');
          setTimeout(() => { copyBtn.textContent = 'Copy Summary'; }, 3000);
        });
      }
    });
  }
});
