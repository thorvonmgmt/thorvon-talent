/**
 * ==========================================================================
 * THORVON TALENT — OFFICIAL SCRIPTPACK
 * A Talent, Creator Management, and Recruitment Division of Thorvon Media
 * Architecture: Modular State Machine, Resilient Form Dispatch,
 * Modal System & Kinetic Editorial Interactions
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Core Configuration & Channels
// --------------------------------------------------------------------------
const AppConfig = {
  // Web3Forms API Key for static direct email delivery to Thorvon inboxes
  // Leave as placeholder or paste key from web3forms.com (100% free, 0 server setup)
  WEB3FORMS_ACCESS_KEY: 'YOUR_WEB3FORMS_ACCESS_KEY',

  // Official Communication Channels
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
// 2. Verified Career Positions Catalog (Exact Thorvon Media Roles)
// --------------------------------------------------------------------------
const CareerPositions = {
  'clipper': {
    title: 'Clipper (Short-Form Video Editor)',
    department: 'VIDEO EDITING & POST-PRODUCTION',
    category: 'video',
    badge: 'URGENT HIRING',
    type: 'REMOTE · FULL-TIME / PART-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
  },
  'social-media-manager': {
    title: 'Social Media Manager',
    department: 'SOCIAL MEDIA & AUDIENCE GROWTH',
    category: 'social',
    badge: 'URGENT HIRING',
    type: 'REMOTE · FULL-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
  },
  'content-creator': {
    title: 'Content Creator',
    department: 'CREATIVE PRODUCTION & ON-CAMERA',
    category: 'creative',
    badge: 'URGENT HIRING',
    type: 'REMOTE · FULL-TIME / PART-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
  },
  'brand-acquisition-head': {
    title: 'Creator & Brand Acquisition Head',
    department: 'BUSINESS DEVELOPMENT & PARTNERSHIPS',
    category: 'management',
    badge: 'LEADERSHIP ROLE',
    type: 'REMOTE · FULL-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_PRIMARY
  },
  'content-writers': {
    title: 'Content Writers',
    department: 'EDITORIAL & PR',
    category: 'creative',
    badge: 'OPEN POSITION',
    type: 'REMOTE · FULL-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
  },
  'graphic-designers': {
    title: 'Graphic Designers',
    department: 'BRAND & VISUAL DESIGN',
    category: 'creative',
    badge: 'OPEN POSITION',
    type: 'REMOTE · FULL-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
  },
  'project-manager': {
    title: 'Project Manager',
    department: 'OPERATIONS & ACCOUNT MANAGEMENT',
    category: 'management',
    badge: 'OPEN POSITION',
    type: 'REMOTE · FULL-TIME',
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
    ],
    targetEmail: AppConfig.CONTACT.EMAIL_RECRUITMENT
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

    // Close any currently active modal
    if (this.activeModal && this.activeModal !== modal) {
      this.activeModal.classList.remove('is-open');
      this.activeModal.setAttribute('aria-hidden', 'true');
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    this.activeModal = modal;

    // Trap focus onto the first focusable element
    const focusable = modal.querySelector('button, [href], input, select, textarea');
    if (focusable) focusable.focus();
  },

  close(modal) {
    const target = modal || this.activeModal;
    if (!target) return;

    target.classList.remove('is-open');
    target.setAttribute('aria-hidden', 'true');
    this.activeModal = null;

    // Check if any other modal is open
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
// 4. Careers Modal & Tab Controller
// --------------------------------------------------------------------------
function openJobModal(roleId) {
  const position = CareerPositions[roleId];
  const jobModal = document.getElementById('jobModal');
  if (!position || !jobModal) return;

  const deptEl = document.getElementById('jobModalDept');
  const titleEl = document.getElementById('jobModalTitle');
  const badgeEl = document.getElementById('jobModalBadge');
  const typeEl = document.getElementById('jobModalType');
  const taglineEl = document.getElementById('jobModalTagline');
  const descEl = document.getElementById('jobModalDesc');
  const respEl = document.getElementById('jobModalResponsibilities');
  const reqEl = document.getElementById('jobModalRequirements');

  if (deptEl) deptEl.textContent = position.department;
  if (titleEl) titleEl.textContent = position.title;
  if (badgeEl) badgeEl.textContent = position.badge;
  if (typeEl) typeEl.textContent = position.type;
  if (taglineEl) taglineEl.textContent = position.tagline;
  if (descEl) descEl.textContent = position.desc;

  if (respEl) {
    respEl.innerHTML = '';
    position.responsibilities.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="bullet">+</span><span>${item}</span>`;
      respEl.appendChild(li);
    });
  }

  if (reqEl) {
    reqEl.innerHTML = '';
    position.requirements.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="bullet">+</span><span>${item}</span>`;
      reqEl.appendChild(li);
    });
  }

  // Pre-fill hidden role in form
  const roleHidden = document.getElementById('jobApplyRoleHidden');
  if (roleHidden) roleHidden.value = position.title;

  const roleSelect = document.getElementById('jobRoleSelect');
  if (roleSelect) {
    // Attempt to match select option
    for (let opt of roleSelect.options) {
      if (opt.value.toLowerCase().includes(roleId.split('-')[0])) {
        roleSelect.value = opt.value;
        break;
      }
    }
  }

  // Reset to view details state
  const viewDetailsWrap = document.getElementById('jobViewDetails');
  const applyFormWrap = document.getElementById('jobApplyFormWrap');
  if (viewDetailsWrap) viewDetailsWrap.style.display = 'block';
  if (applyFormWrap) applyFormWrap.style.display = 'none';

  ModalController.open('jobModal');
}

function openJobApplyDirect(prefillTitle) {
  const jobModal = document.getElementById('jobModal');
  if (!jobModal) return;

  const deptEl = document.getElementById('jobModalDept');
  const titleEl = document.getElementById('jobModalTitle');
  if (deptEl) deptEl.textContent = 'CAREERS AT THORVON MEDIA';
  if (titleEl) titleEl.textContent = prefillTitle || 'Application Submission';

  const viewDetailsWrap = document.getElementById('jobViewDetails');
  const applyFormWrap = document.getElementById('jobApplyFormWrap');
  if (viewDetailsWrap) viewDetailsWrap.style.display = 'none';
  if (applyFormWrap) applyFormWrap.style.display = 'block';

  const roleHidden = document.getElementById('jobApplyRoleHidden');
  if (roleHidden) roleHidden.value = prefillTitle || 'Speculative / Open Application';

  const roleSelect = document.getElementById('jobRoleSelect');
  if (roleSelect && prefillTitle) {
    for (let opt of roleSelect.options) {
      if (opt.value === prefillTitle) {
        roleSelect.value = opt.value;
        break;
      }
    }
  }

  ModalController.open('jobModal');
}

// --------------------------------------------------------------------------
// 5. Toast Feedback Utility
// --------------------------------------------------------------------------
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSymbol = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

  toast.innerHTML = `
    <span class="toast-icon">${iconSymbol}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

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
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Processing... <span class="arrow">⌛</span>';
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let targetEmail = AppConfig.CONTACT.EMAIL_PRIMARY;
  let subjectPrefix = 'Thorvon Talent';
  let formattedSummary = '';

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'medium'
  }) + ' UTC';

  if (formType === 'creator') {
    targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
    subjectPrefix = `New Creator Application: ${data.full_name || 'Creator'}`;
    formattedSummary = [
      'THORVON TALENT — CREATOR MANAGEMENT APPLICATION',
      '==================================================',
      `Full Name: ${data.full_name || 'N/A'}`,
      `Email: ${data.email || 'N/A'}`,
      `Instagram: ${data.instagram || 'N/A'}`,
      `Other Profiles: ${data.other_profiles || 'None provided'}`,
      `Primary Content Niche: ${data.niche || 'N/A'}`,
      `Combined Audience Size: ${data.audience_size || 'N/A'}`,
      `Location: ${data.location || 'N/A'}`,
      `Introduction & Goals: ${data.intro_goals || 'N/A'}`,
      `Media Kit / Portfolio: ${data.media_kit_link || 'None provided'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  } else if (formType === 'brand') {
    targetEmail = AppConfig.CONTACT.EMAIL_PRIMARY;
    subjectPrefix = `Brand Collaboration Inquiry: ${data.brand_name || 'Brand'}`;
    formattedSummary = [
      'THORVON TALENT — BRAND COLLABORATION INQUIRY',
      '==================================================',
      `Brand Name: ${data.brand_name || 'N/A'}`,
      `Contact Person: ${data.contact_name || 'N/A'}`,
      `Work Email: ${data.work_email || 'N/A'}`,
      `Website: ${data.brand_website || 'N/A'}`,
      `Industry: ${data.industry || 'N/A'}`,
      `Campaign Objectives: ${data.objectives || 'N/A'}`,
      `Target Audience & Region: ${data.target_audience || 'N/A'}`,
      `Approximate Budget: ${data.budget || 'Not specified'}`,
      `Campaign Details: ${data.campaign_details || 'N/A'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  } else if (formType === 'career') {
    targetEmail = AppConfig.CONTACT.EMAIL_RECRUITMENT;
    subjectPrefix = `Job Application: ${data.role_display || data.role_applied || 'Role'} — ${data.applicant_name || 'Candidate'}`;
    formattedSummary = [
      'THORVON MEDIA — CAREER APPLICATION',
      '==================================================',
      `Role Applied For: ${data.role_display || data.role_applied || 'General Speculative'}`,
      `Applicant Name: ${data.applicant_name || 'N/A'}`,
      `Email Address: ${data.applicant_email || 'N/A'}`,
      `Phone Number: ${data.applicant_phone || 'None provided'}`,
      `Portfolio / Work URL: ${data.portfolio_url || 'N/A'}`,
      `Resume Link: ${data.resume_url || 'N/A'}`,
      `Relevant Experience: ${data.experience_years || 'N/A'}`,
      `Earliest Start Availability: ${data.availability || 'Immediately'}`,
      `Cover Note / Intro: ${data.cover_intro || 'N/A'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  } else {
    // General Contact Form
    targetEmail = (data.department === 'Careers & Recruitment' || data.department === 'Creator Management')
      ? AppConfig.CONTACT.EMAIL_RECRUITMENT
      : AppConfig.CONTACT.EMAIL_PRIMARY;

    subjectPrefix = `Thorvon Inquiry (${data.department || 'General'}): ${data.name || 'Visitor'}`;
    formattedSummary = [
      'THORVON TALENT — GENERAL CONTACT MESSAGE',
      '==================================================',
      `Name: ${data.name || 'N/A'}`,
      `Email: ${data.email || 'N/A'}`,
      `Department: ${data.department || 'General'}`,
      `Subject: ${data.subject || 'Direct Inquiry'}`,
      `Message: ${data.message || 'N/A'}`,
      `Submitted: ${timestamp}`
    ].join('\n');
  }

  // Construct mailto link for seamless direct dispatch fallback
  const mailtoSubject = encodeURIComponent(subjectPrefix);
  const mailtoBody = encodeURIComponent(formattedSummary);
  const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  let deliverySuccess = false;

  // 1. Try Web3Forms if an active key is present
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
          from_name: 'Thorvon Talent Portal',
          subject: subjectPrefix,
          email: data.email || data.work_email || data.applicant_email || targetEmail,
          name: data.full_name || data.contact_name || data.applicant_name || data.name || 'Portal Visitor',
          message: formattedSummary
        })
      });

      const result = await response.json();
      if (result.success) {
        deliverySuccess = true;
      }
    } catch (err) {
      console.warn('[Web3Forms Delivery Note]: Network offline or CORS restriction. Using direct mailto fallback.', err);
    }
  }

  // Restore button state
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }

  // Close parent modal if inside one
  ModalController.closeAll();
  form.reset();

  // Present user-facing confirmation dialog
  const dispatchModal = document.getElementById('dispatchModal');
  const dispatchTitle = document.getElementById('dispatchModalTitle');
  const dispatchMsg = document.getElementById('dispatchModalMessage');
  const failsafeBox = document.getElementById('dispatchFailsafeBox');
  const preEl = document.getElementById('dispatchSummaryPre');
  const mailtoBtn = document.getElementById('dispatchMailtoBtn');

  if (deliverySuccess) {
    showToast('Inquiry Transmitted', 'Your details were sent to Thorvon leadership.', 'success');
    if (dispatchTitle) dispatchTitle.textContent = 'Submission Received';
    if (dispatchMsg) {
      dispatchMsg.textContent = `Thank you. Your inquiry has been routed to our team (${targetEmail}). We will review your materials and contact you within 24–48 hours.`;
    }
    if (failsafeBox) failsafeBox.style.display = 'none';
    if (mailtoBtn) mailtoBtn.style.display = 'none';
  } else {
    // Elegant fallback: opens pre-filled mailto and gives 1-click clipboard copy
    showToast('Inquiry Formatted', 'Ready for direct transmission to our inbox.', 'info');
    if (dispatchTitle) dispatchTitle.textContent = 'Inquiry Ready to Dispatch';
    if (dispatchMsg) {
      dispatchMsg.textContent = `Your submission has been securely formatted for our executive inbox at ${targetEmail}. Click below to transmit via your default email client or copy the formatted text.`;
    }
    if (failsafeBox) failsafeBox.style.display = 'block';
    if (preEl) preEl.textContent = formattedSummary;
    if (mailtoBtn) {
      mailtoBtn.href = mailtoUrl;
      mailtoBtn.style.display = 'inline-flex';
    }

    // Auto-open mailto client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 450);
  }

  ModalController.open('dispatchModal');
}

// --------------------------------------------------------------------------
// 7. Event Listeners & Interactive Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // --- A. Scroll Progress Line & Sticky Header ---
  const scrollProgress = document.getElementById('scrollProgress');
  const siteHeader = document.querySelector('.site-header');

  const onScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
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

  // --- B. Ambient Glow Cursor Tracking ---
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
      ambientGlow.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgba(59, 130, 246, 0.045), transparent 60%)`;
      requestAnimationFrame(animateGlow);
    };
    animateGlow();
  }

  // --- C. Kinetic Heading Masked Revealer ---
  const kineticHeadings = document.querySelectorAll('.kinetic-heading');
  if ('IntersectionObserver' in window) {
    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    kineticHeadings.forEach((h) => headingObserver.observe(h));
  } else {
    kineticHeadings.forEach((h) => h.classList.add('is-visible'));
  }

  // --- D. Mobile Menu Toggle & Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
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

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu();
      }
    });
  });

  // --- E. Careers Filter Bar ---
  const filterPills = document.querySelectorAll('.filter-pill');
  const jobCards = document.querySelectorAll('.job-card');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');

      jobCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- F. Global Click Delegator (Modals, Triggers & CTAs) ---
  document.addEventListener('click', (e) => {
    // 1. Close Modal Trigger
    const closeBtn = e.target.closest('[data-action="close-modal"]');
    if (closeBtn) {
      e.preventDefault();
      const parentModal = closeBtn.closest('.thorvon-modal-backdrop');
      ModalController.close(parentModal);
      return;
    }

    // 2. Open Creator Modal
    const creatorBtn = e.target.closest('[data-action="open-creator-modal"]');
    if (creatorBtn) {
      e.preventDefault();
      ModalController.open('creatorModal');
      return;
    }

    // 3. Open Brand Modal
    const brandBtn = e.target.closest('[data-action="open-brand-modal"]');
    if (brandBtn) {
      e.preventDefault();
      ModalController.open('brandModal');
      return;
    }

    // 4. Open Action Picker ("Get Started")
    const actionPickerBtn = e.target.closest('[data-action="open-action-picker"]');
    if (actionPickerBtn) {
      e.preventDefault();
      if (mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu();
      }
      ModalController.open('actionPickerModal');
      return;
    }

    // 5. Open Privacy Modal
    const privacyBtn = e.target.closest('[data-action="open-privacy-modal"]');
    if (privacyBtn) {
      e.preventDefault();
      ModalController.open('privacyModal');
      return;
    }

    // 6. Open Job Modal with Role ID
    const jobBtn = e.target.closest('[data-action="open-job-modal"]');
    if (jobBtn) {
      e.preventDefault();
      const roleId = jobBtn.getAttribute('data-role');
      if (roleId) openJobModal(roleId);
      return;
    }

    // 7. Click directly on job card (unless clicking a sub-link)
    const jobCard = e.target.closest('.job-card');
    if (jobCard && !e.target.closest('button') && !e.target.closest('a')) {
      const roleId = jobCard.getAttribute('data-role-id');
      if (roleId) openJobModal(roleId);
      return;
    }

    // 8. Open Job Application directly
    const directApplyBtn = e.target.closest('[data-action="open-job-apply-modal"]');
    if (directApplyBtn) {
      e.preventDefault();
      const prefill = directApplyBtn.getAttribute('data-prefill') || 'Open Career Application';
      openJobApplyDirect(prefill);
      return;
    }

    // 9. Close Modal and Scroll to section
    const scrollCloseBtn = e.target.closest('[data-action="close-modal-and-scroll"]');
    if (scrollCloseBtn) {
      ModalController.closeAll();
      return;
    }

    // 10. Modal backdrop click to close
    if (e.target.classList.contains('thorvon-modal-backdrop')) {
      ModalController.close(e.target);
    }
  });

  // --- G. Job Modal Switch Between Overview & Application Form ---
  const proceedToApplyBtn = document.getElementById('jobProceedToApplyBtn');
  const backToDetailsBtn = document.getElementById('jobBackToDetailsBtn');
  const viewDetailsWrap = document.getElementById('jobViewDetails');
  const applyFormWrap = document.getElementById('jobApplyFormWrap');

  if (proceedToApplyBtn) {
    proceedToApplyBtn.addEventListener('click', () => {
      if (viewDetailsWrap) viewDetailsWrap.style.display = 'none';
      if (applyFormWrap) applyFormWrap.style.display = 'block';
    });
  }

  if (backToDetailsBtn) {
    backToDetailsBtn.addEventListener('click', () => {
      if (viewDetailsWrap) viewDetailsWrap.style.display = 'block';
      if (applyFormWrap) applyFormWrap.style.display = 'none';
    });
  }

  // --- H. Global Keyboard Listener (ESC to close modals) ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu();
      }
      ModalController.closeAll();
    }
  });

  // --- I. Form Submission Bindings ---
  const formsToHandle = [
    { id: 'creatorAppForm', type: 'creator' },
    { id: 'brandInlineForm', type: 'brand' },
    { id: 'brandModalForm', type: 'brand' },
    { id: 'jobApplicationForm', type: 'career' },
    { id: 'generalContactForm', type: 'general' }
  ];

  formsToHandle.forEach(({ id, type }) => {
    const formEl = document.getElementById(id);
    if (formEl) {
      formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(formEl, type);
      });
    }
  });

  // --- J. Copy Dispatch Summary Helper ---
  const copyBtn = document.getElementById('copyDispatchBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const summaryPre = document.getElementById('dispatchSummaryPre');
      if (summaryPre && summaryPre.textContent) {
        navigator.clipboard.writeText(summaryPre.textContent).then(() => {
          copyBtn.textContent = 'Copied ✓';
          showToast('Copied to Clipboard', 'Summary copied for direct sending.', 'success');
          setTimeout(() => {
            copyBtn.textContent = 'Copy Summary';
          }, 3000);
        }).catch(() => {
          showToast('Copy Failed', 'Please highlight the text and copy manually.', 'error');
        });
      }
    });
  }
});
