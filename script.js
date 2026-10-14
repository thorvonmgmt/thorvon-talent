/**
 * ==========================================================================
 * THORVON TALENT — OFFICIAL SCRIPTPACK
 * A Creator Management Division of Thorvon Media
 *
 * Core Features:
 * - Streamlined Creator Application Flow
 * - High-Contrast Electric Lime Ambient Cursor Glow
 * - Secondary Brand Partnerships & Careers Portals
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
// 2. Verified Thorvon Media Vacancies Catalog
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
// 3. UI State & Modal Controller
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
// 4. Job Details Modal Handler
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

  // Switch to view pane
  const viewPane = document.getElementById('jobViewPane');
  const formPane = document.getElementById('jobFormPane');
  if (viewPane) viewPane.style.display = 'block';
  if (formPane) formPane.style.display = 'none';

  ModalController.open('jobDetailModal');
}

// --------------------------------------------------------------------------
// 5. Toast Feedback Utility
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
// 6. Resilient Lead & Application Submission Handler
// --------------------------------------------------------------------------
async function handleFormSubmit(form, formType) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalHtml = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Transmitting... <span class="arrow">⌛</span>';
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
    subjectPrefix = `Creator Representation: ${data.name || 'Creator'}`;
    formattedSummary = [
      'THORVON TALENT — CREATOR REPRESENTATION INQUIRY',
      '==================================================',
      `Creator Name: ${data.name || 'N/A'}`,
      `Email / Contact: ${data.contact || 'N/A'}`,
      `Primary Platform: ${data.platform || 'N/A'}`,
      `Profile Link / Handle: ${data.profile_url || 'N/A'}`,
      `Content Niche: ${data.niche || 'N/A'}`,
      `Introduction & Goals: ${data.introduction || 'None provided'}`,
      `Submitted At: ${timestamp}`
    ].join('\n');
  } else if (formType === 'brand') {
    targetEmail = AppConfig.CONTACT.EMAIL_PRIMARY;
    subjectPrefix = `Brand Partnership Inquiry: ${data.brand_name || 'Brand'}`;
    formattedSummary = [
      'THORVON TALENT — BRAND PARTNERSHIP INQUIRY',
      '==================================================',
      `Brand Name: ${data.brand_name || 'N/A'}`,
      `Contact Person: ${data.contact_name || 'N/A'}`,
      `Work Email: ${data.work_email || 'N/A'}`,
      `Website: ${data.website || 'N/A'}`,
      `Campaign Brief: ${data.campaign_brief || 'N/A'}`,
      `Submitted At: ${timestamp}`
    ].join('\n');
  } else if (formType === 'career') {
    targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
    subjectPrefix = `Job Application: ${data.role_name || 'Role'} — ${data.name || 'Candidate'}`;
    formattedSummary = [
      'THORVON MEDIA — RECRUITMENT APPLICATION',
      '==================================================',
      `Role: ${data.role_name || 'General Application'}`,
      `Applicant Name: ${data.name || 'N/A'}`,
      `Email Address: ${data.email || 'N/A'}`,
      `Portfolio / Work URL: ${data.portfolio || 'N/A'}`,
      `Cover Note / Intro: ${data.introduction || 'N/A'}`,
      `Submitted At: ${timestamp}`
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
      dispatchMsg.textContent = `Thank you. Your details have been submitted to our talent management team at ${targetEmail}. We will review your profile and follow up within 24–48 hours.`;
    }
    if (failsafeBox) failsafeBox.style.display = 'none';
    if (mailtoBtn) mailtoBtn.style.display = 'none';
  } else {
    showToast('Inquiry Formatted', 'Ready for direct transmission to our inbox.', 'info');
    if (dispatchTitle) dispatchTitle.textContent = 'Application Ready to Send';
    if (dispatchMsg) {
      dispatchMsg.textContent = `Your application has been securely formatted for our executive inbox at ${targetEmail}. Click below to dispatch via your preferred email app or copy the summary.`;
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
// 7. Interactive Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // A. Scroll Progress Line & Sticky Header
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

  // B. Ambient Glow Cursor Spotlight (Electric Lime glow)
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
      ambientGlow.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgba(204, 255, 0, 0.04), transparent 60%)`;
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

  // D. Mobile Menu Toggle
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

  // E. Global Click Delegations
  document.addEventListener('click', (e) => {
    // Close modal
    const closeBtn = e.target.closest('[data-action="close-modal"]');
    if (closeBtn) {
      e.preventDefault();
      const parentModal = closeBtn.closest('.thorvon-modal-backdrop');
      ModalController.close(parentModal);
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

    // View Job Details from list
    const jobDetailBtn = e.target.closest('[data-action="view-job-details"]');
    if (jobDetailBtn) {
      e.preventDefault();
      const roleId = jobDetailBtn.getAttribute('data-role');
      if (roleId) showJobDetails(roleId);
      return;
    }

    // Back to Careers List from Details
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

  // F. Switch Between Role Details & Application Form in Job Modal
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

  // G. Escape Key Modal Closing
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer.classList.contains('is-open')) toggleMobile();
      ModalController.closeAll();
    }
  });

  // H. Form Submissions
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

  // I. Copy Dispatch Summary Helper
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
