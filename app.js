// AuraSchedule - Interactive Glassmorphism UI
// Built for Mohammed Al-Rashidi (Future University)

const scheduleData = {
  student: {
    name_ar: "محمد بن منديل الرشيدي",
    name_en: "Mohammed Al-Rashidi",
    college_ar: "الهندسة وعلوم الحاسب",
    college_en: "College of CS & Engineering",
    major_ar: "علوم حاسب - هندسة البرمجيات",
    major_en: "Computer Science • Software Engineering",
    term_ar: "الفصل الأول 1448 هـ",
    term_en: "1st Semester 1448H",
    campus_ar: "مقر الطلاب",
    campus_en: "Men's Campus",
    advisor_ar: "د. محمد عابد جميل",
    advisor_en: "Dr. Mohammed Abed Jameel",
    credit_hours: 16
  },
  days: {
    "1": {
      id: "1",
      day_index: 0, // JS Sunday = 0
      name_en: "Sunday",
      name_ar: "الأحد",
      short_en: "Sun",
      short_ar: "أحد",
      type: "campus", // campus, online, hybrid, off
      verdict_en: "Campus Visit Required",
      verdict_ar: "يلزم الذهاب إلى الجامعة (حضوري)",
      sub_en: "You have 5 in-person sessions scheduled in Hall MIIC1.",
      sub_ar: "لديك 5 محاضرات حضورية اليوم في القاعة MIIC1.",
      icon: "🏫",
      sessions: [
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "08:00 ص - 08:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "09:00 ص - 09:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "10:10 ص - 11:00 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .ريض",
          name_en: "Calculus 1",
          name_ar: "تفاضل و تكامل 1",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "12:10 م - 01:00 م",
          room: "MIIC1",
          instructor_en: "Dr. Mohamed Mohamed Khalaf",
          instructor_ar: "محمد محمد خلف حسين",
          is_online: false
        },
        {
          code: "101 .ريض",
          name_en: "Calculus 1",
          name_ar: "تفاضل و تكامل 1",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "01:10 م - 02:00 م",
          room: "MIIC1",
          instructor_en: "Dr. Mohamed Mohamed Khalaf",
          instructor_ar: "محمد محمد خلف حسين",
          is_online: false
        }
      ]
    },
    "2": {
      id: "2",
      day_index: 1, // JS Monday = 1
      name_en: "Monday",
      name_ar: "الاثنين",
      short_en: "Mon",
      short_ar: "اثنين",
      type: "campus",
      verdict_en: "Campus Visit Required",
      verdict_ar: "يلزم الذهاب إلى الجامعة (حضوري)",
      sub_en: "Morning lectures in Hall MIIC1 + Evening Islamic Culture session.",
      sub_ar: "محاضرات الصباح في قاعة MIIC1 ومحاضرة مسائية للثقافة الإسلامية.",
      icon: "🏫",
      sessions: [
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "08:00 ص - 08:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "09:00 ص - 09:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "10:10 ص - 11:00 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .ريض",
          name_en: "Calculus 1",
          name_ar: "تفاضل و تكامل 1",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "11:10 ص - 12:00 م",
          room: "MIIC1",
          instructor_en: "Dr. Mohamed Mohamed Khalaf",
          instructor_ar: "محمد محمد خلف حسين",
          is_online: false
        },
        {
          code: "101 .ريض",
          name_en: "Calculus 1",
          name_ar: "تفاضل و تكامل 1",
          activity_en: "Tutorial",
          activity_ar: "تمارين",
          time: "12:10 م - 01:00 م",
          room: "MIIC1",
          instructor_en: "Dr. Mohamed Mohamed Khalaf",
          instructor_ar: "محمد محمد خلف حسين",
          is_online: false
        },
        {
          code: "101 سلم",
          name_en: "Intro to Islamic Culture",
          name_ar: "المدخل إلى الثقافة الإسلامية",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "05:00 م - 05:50 م",
          room: "TBA / Campus",
          instructor_en: "Dr. Ali Ahmed Omran",
          instructor_ar: "على أحمد عمران محسن",
          is_online: false
        },
        {
          code: "101 سلم",
          name_en: "Intro to Islamic Culture",
          name_ar: "المدخل إلى الثقافة الإسلامية",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "06:00 م - 06:50 م",
          room: "TBA / Campus",
          instructor_en: "Dr. Ali Ahmed Omran",
          instructor_ar: "على أحمد عمران محسن",
          is_online: false
        }
      ]
    },
    "3": {
      id: "3",
      day_index: 2, // JS Tuesday = 2
      name_en: "Tuesday",
      name_ar: "الثلاثاء",
      short_en: "Tue",
      short_ar: "ثلاثاء",
      type: "hybrid",
      verdict_en: "Hybrid Day (Campus Morning + Online)",
      verdict_ar: "يوم مدمج (صباح حضوري + ظهراً عن بُعد)",
      sub_en: "Attend English in MIIC1 (8:00 - 9:50 AM), then Learning Skills is On-Line!",
      sub_ar: "احضر الإنجليزي في قاعة MIIC1، ثم مهارات التعلم أونلاين عن بُعد!",
      icon: "🔀",
      sessions: [
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "08:00 ص - 08:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "09:00 ص - 09:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 تصال.",
          name_en: "Learning Skills",
          name_ar: "مهارات التعلم",
          activity_en: "Lecture (Online)",
          activity_ar: "محاضرة (عن بُعد)",
          time: "10:10 ص - 11:00 ص",
          room: "On-Line",
          instructor_en: "Dr. Nasr Eldin Hassan",
          instructor_ar: "نصر الدين حسن محمد احمد",
          is_online: true
        },
        {
          code: "101 تصال.",
          name_en: "Learning Skills",
          name_ar: "مهارات التعلم",
          activity_en: "Lecture (Online)",
          activity_ar: "محاضرة (عن بُعد)",
          time: "11:10 ص - 12:00 م",
          room: "On-Line",
          instructor_en: "Dr. Nasr Eldin Hassan",
          instructor_ar: "نصر الدين حسن محمد احمد",
          is_online: true
        }
      ]
    },
    "4": {
      id: "4",
      day_index: 3, // JS Wednesday = 3
      name_en: "Wednesday",
      name_ar: "الأربعاء",
      short_en: "Wed",
      short_ar: "أربعاء",
      type: "campus",
      verdict_en: "Campus Visit Required",
      verdict_ar: "يلزم الذهاب إلى الجامعة (حضوري)",
      sub_en: "English in MIIC1 + Arabic Language Skills in MIIC2.",
      sub_ar: "لغة إنجليزية في MIIC1 ومهارات لغوية في MIIC2.",
      icon: "🏫",
      sessions: [
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "08:00 ص - 08:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .نجم",
          name_en: "English Language 1",
          name_ar: "لغة إنجليزية 1",
          activity_en: "Practical (Lab)",
          activity_ar: "عملي",
          time: "09:00 ص - 09:50 ص",
          room: "MIIC1",
          instructor_en: "Mohammad Simab Khan",
          instructor_ar: "محمد سيماب خان محمد عنايت",
          is_online: false
        },
        {
          code: "101 .عرب",
          name_en: "Arabic Language Skills",
          name_ar: "المهارات اللغوية",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "10:10 ص - 11:00 ص",
          room: "MIIC2",
          instructor_en: "Al-Safi Mohamed Abdo",
          instructor_ar: "الصافي محمد عبده الاشقر",
          is_online: false
        },
        {
          code: "101 .عرب",
          name_en: "Arabic Language Skills",
          name_ar: "المهارات اللغوية",
          activity_en: "Lecture",
          activity_ar: "محاضرة",
          time: "11:10 ص - 12:00 م",
          room: "MIIC2",
          instructor_en: "Al-Safi Mohamed Abdo",
          instructor_ar: "الصافي محمد عبده الاشقر",
          is_online: false
        }
      ]
    },
    "5": {
      id: "5",
      day_index: 4, // JS Thursday = 4
      name_en: "Thursday",
      name_ar: "الخميس",
      short_en: "Thu",
      short_ar: "خميس",
      type: "online",
      verdict_en: "100% ONLINE — Stay Home! 🛋️✨",
      verdict_ar: "عن بُعد 100% — لا داعي للذهاب للجامعة! 🛋️✨",
      sub_en: "No campus visit needed today. All lectures are conducted On-Line.",
      sub_ar: "يومك عن بُعد بالكامل، يمكنك الحضور من المنزل براحة تامة.",
      icon: "💻",
      sessions: [
        {
          code: "101 -دار",
          name_en: "Entrepreneurship",
          name_ar: "ريادة الأعمال",
          activity_en: "Lecture (Online)",
          activity_ar: "محاضرة (عن بُعد)",
          time: "12:10 م - 01:00 م",
          room: "On-Line",
          instructor_en: "Dr. Ahmed El-Sayed Eissa",
          instructor_ar: "أحمد السيد أحمد عيسى",
          is_online: true
        },
        {
          code: "101 -دار",
          name_en: "Entrepreneurship",
          name_ar: "ريادة الأعمال",
          activity_en: "Tutorial (Online)",
          activity_ar: "تمارين (عن بُعد)",
          time: "01:10 م - 02:00 م",
          room: "On-Line",
          instructor_en: "Dr. Ahmed El-Sayed Eissa",
          instructor_ar: "أحمد السيد أحمد عيسى",
          is_online: true
        }
      ]
    },
    "6": {
      id: "6",
      day_index: 5, // JS Friday = 5
      name_en: "Friday",
      name_ar: "الجمعة",
      short_en: "Fri",
      short_ar: "جمعة",
      type: "off",
      verdict_en: "Weekend / Day Off 🌴",
      verdict_ar: "عطلة نهاية الأسبوع 🌴",
      sub_en: "No classes today. Enjoy your weekend and recharge!",
      sub_ar: "لا توجد محاضرات اليوم. استمتع بعطلتك واستعد للأسبوع القادم!",
      icon: "🏖️",
      sessions: []
    },
    "7": {
      id: "7",
      day_index: 6, // JS Saturday = 6
      name_en: "Saturday",
      name_ar: "السبت",
      short_en: "Sat",
      short_ar: "سبت",
      type: "off",
      verdict_en: "Weekend / Day Off 🌴",
      verdict_ar: "عطلة نهاية الأسبوع 🌴",
      sub_en: "No classes today. Enjoy your day off!",
      sub_ar: "لا توجد محاضرات اليوم. عطلة سعيدة!",
      icon: "☕",
      sessions: []
    }
  }
};

// Application State
let currentLang = 'en'; // 'en' or 'ar'
let selectedDayId = '1';

// Translations Dictionary
const translations = {
  en: {
    university: "Future University • جامعة المستقبل",
    jumpToday: "Jump to Today",
    semesterBadge: "1st Semester 1448H • College of CS & Engineering",
    heroSubtitle: "Explore your weekly university lectures, room locations, and attendance status.",
    studentMajor: "Computer Science • Software Engineering",
    creditHours: "Credit Hours",
    activeDays: "Active Days",
    footerText: "Designed with clean glassmorphism & fluid interactions • Made for Mohammed Al-Rashidi",
    sessionsCount: (n) => `${n} Session${n === 1 ? '' : 's'}`,
    noClassesTitle: "No Lectures Scheduled Today",
    noClassesDesc: "Enjoy your rest day, catch up on projects, or take time to relax!",
    roomTag: (room) => room === 'On-Line' ? 'Online Room' : `Hall ${room}`,
    statusTags: {
      campus: "Campus Visit Required",
      online: "100% Online",
      hybrid: "Hybrid Attendance",
      off: "Weekend Off"
    }
  },
  ar: {
    university: "جامعة المستقبل • Future University",
    jumpToday: "الانتقال لليوم الحالي",
    semesterBadge: "الفصل الأول 1448هـ • كلية الهندسة وعلوم الحاسب",
    heroSubtitle: "استعرض جدولك الأكاديمي الأسبوعي ومواقع القاعات وحالة الحضور بدقة وسلاسة.",
    studentMajor: "علوم حاسب • هندسة البرمجيات",
    creditHours: "ساعة معتمدة",
    activeDays: "أيام دراسية",
    footerText: "تم التصميم بواجهة زجاجية تفاعلية فائقة السلاسة • مخصص لمحمد بن منديل الرشيدي",
    sessionsCount: (n) => `${n} ${n === 1 ? 'محاضرة' : n === 2 ? 'محاضرتان' : 'محاضرات'}`,
    noClassesTitle: "لا توجد محاضرات اليوم",
    noClassesDesc: "استمتع بعطلتك، أو راجع مشاريعك ودروسك بكل راحة ويسر!",
    roomTag: (room) => room === 'On-Line' ? 'عن بُعد (أونلاين)' : `قاعة ${room}`,
    statusTags: {
      campus: "يلزم الذهاب للجامعة",
      online: "عن بُعد 100%",
      hybrid: "حضور مدمج",
      off: "عطلة نهاية الأسبوع"
    }
  }
};

// 1. Fluid Typewriter Implementation
function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const sequence = [
    { text: "Hi User", pause: 1400 },
    { text: "Hi Mohammed 👋", pause: 2000 },
    { text: "Your Smart Schedule ✨", pause: 3000 }
  ];

  let seqIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeStep() {
    const current = sequence[seqIndex];
    const fullText = current.text;

    if (!isDeleting) {
      el.textContent = fullText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === fullText.length) {
        // Finished typing word, wait before deleting
        if (seqIndex === sequence.length - 1) {
          // Keep final title permanently or loop smoothly
          setTimeout(() => {
            isDeleting = true;
            typeStep();
          }, current.pause);
          return;
        }
        setTimeout(() => {
          isDeleting = true;
          typeStep();
        }, current.pause);
        return;
      }
      setTimeout(typeStep, 60 + Math.random() * 40);
    } else {
      el.textContent = fullText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        seqIndex = (seqIndex + 1) % sequence.length;
        setTimeout(typeStep, 350);
        return;
      }
      setTimeout(typeStep, 35);
    }
  }

  // Start with a brief intro delay
  setTimeout(typeStep, 300);
}

// 2. Render Days Navigation
function renderDaysNav() {
  const nav = document.getElementById('daysNav');
  nav.innerHTML = '';

  const dayKeys = ["1", "2", "3", "4", "5", "6", "7"];
  dayKeys.forEach(k => {
    const d = scheduleData.days[k];
    const btn = document.createElement('button');
    btn.className = `day-tab ${k === selectedDayId ? 'active' : ''}`;
    btn.dataset.dayId = k;
    btn.setAttribute('aria-label', currentLang === 'ar' ? d.name_ar : d.name_en);

    const badgeClass = `badge-${d.type}`;
    let badgeText = '';
    if (currentLang === 'ar') {
      badgeText = d.type === 'online' ? 'عن بعد' : d.type === 'campus' ? 'حضوري' : d.type === 'hybrid' ? 'مدمج' : 'إجازة';
    } else {
      badgeText = d.type === 'online' ? 'Online' : d.type === 'campus' ? 'Campus' : d.type === 'hybrid' ? 'Hybrid' : 'Off';
    }

    btn.innerHTML = `
      <span class="day-tab-name">${currentLang === 'ar' ? d.short_ar : d.short_en}</span>
      <span class="day-tab-badge ${badgeClass}">${badgeText}</span>
    `;

    btn.addEventListener('click', () => {
      selectDay(k);
    });

    nav.appendChild(btn);
  });
}

// 3. Day Selection Handler
function selectDay(dayId) {
  selectedDayId = dayId;

  // Update tabs active state
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.dayId === dayId);
  });

  const d = scheduleData.days[dayId];
  renderVerdictBanner(d);
  renderScheduleCards(d);
}

// 4. Render Verdict Banner
function renderVerdictBanner(day) {
  const banner = document.getElementById('verdictBanner');
  banner.className = `verdict-banner glass-card verdict-${day.type}`;

  const verdictTitle = currentLang === 'ar' ? day.verdict_ar : day.verdict_en;
  const verdictSub = currentLang === 'ar' ? day.sub_ar : day.sub_en;
  const tagText = translations[currentLang].statusTags[day.type];
  const tagClass = `badge-${day.type}`;

  banner.innerHTML = `
    <div class="verdict-content">
      <div class="verdict-icon">${day.icon}</div>
      <div class="verdict-text-group">
        <h3>${verdictTitle}</h3>
        <p>${verdictSub}</p>
      </div>
    </div>
    <div class="verdict-extra">
      <span class="verdict-tag ${tagClass}">${tagText}</span>
    </div>
  `;
}

// 5. Render Schedule Cards
function renderScheduleCards(day) {
  const titleEl = document.getElementById('currentDayTitle');
  const countEl = document.getElementById('currentDaySessionsCount');
  const timeline = document.getElementById('scheduleTimeline');

  titleEl.textContent = currentLang === 'ar' ? day.name_ar : day.name_en;
  countEl.textContent = translations[currentLang].sessionsCount(day.sessions.length);

  timeline.innerHTML = '';

  if (day.sessions.length === 0) {
    // Empty / Weekend State
    timeline.innerHTML = `
      <div class="empty-day-card glass-card">
        <div class="empty-icon">${day.icon}</div>
        <h3 class="empty-title">${translations[currentLang].noClassesTitle}</h3>
        <p class="empty-desc">${translations[currentLang].noClassesDesc}</p>
      </div>
    `;
    return;
  }

  day.sessions.forEach((s, idx) => {
    const card = document.createElement('article');
    card.className = `schedule-card glass-card ${s.is_online ? 'is-online' : 'is-campus'}`;
    card.style.animationDelay = `${idx * 0.08}s`;

    const courseName = currentLang === 'ar' ? s.name_ar : s.name_en;
    const activityName = currentLang === 'ar' ? s.activity_ar : s.activity_en;
    const instructorName = currentLang === 'ar' ? s.instructor_ar : s.instructor_en;
    const roomBadgeClass = s.is_online ? 'room-online' : 'room-campus';
    const roomLabel = translations[currentLang].roomTag(s.room);

    card.innerHTML = `
      <div class="card-time-col">
        <span class="time-slot">
          <svg class="time-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${s.time}
        </span>
        <span class="activity-badge">${activityName}</span>
      </div>

      <div class="card-info-col">
        <div class="card-title-row">
          <h4 class="course-name">${courseName}</h4>
          <span class="course-code-tag">${s.code}</span>
        </div>
        <div class="instructor-row">
          <svg class="instructor-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>${instructorName}</span>
        </div>
      </div>

      <div class="card-meta-col">
        <span class="room-badge ${roomBadgeClass}">
          ${s.is_online ? '💻 ' : '📍 '}${roomLabel}
        </span>
      </div>
    `;

    timeline.appendChild(card);
  });
}

// 6. Language Switching
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  const labelEl = document.getElementById('langLabel');
  labelEl.textContent = currentLang === 'en' ? 'العربية' : 'English';

  // Update static localized texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Student name
  document.getElementById('studentName').textContent =
    currentLang === 'ar' ? scheduleData.student.name_ar : scheduleData.student.name_en;

  // Re-render components
  renderDaysNav();
  selectDay(selectedDayId);
}

// 7. Auto-detect today
function jumpToToday() {
  const jsDay = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  // Map to our IDs: 0->1, 1->2, 2->3, 3->4, 4->5, 5->6, 6->7
  const dayIdMap = {
    0: "1", // Sunday
    1: "2", // Monday
    2: "3", // Tuesday
    3: "4", // Wednesday
    4: "5", // Thursday
    5: "6", // Friday
    6: "7"  // Saturday
  };

  const targetDay = dayIdMap[jsDay] || "1";
  selectDay(targetDay);
}

// 8. Liquid Cursor Follower
function initLiquidCursor() {
  const cursor = document.getElementById('liquidCursor');
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }
  animate();
}

// 9. Fluid Ripple Micro-interaction
function initLiquidRipple() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.glass-btn, .day-tab, .schedule-card');
    if (!target) return;

    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const rect = target.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.className = 'liquid-ripple';

    const existingRipple = target.querySelector('.liquid-ripple');
    if (existingRipple) existingRipple.remove();

    target.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  });
}

// 10. Interactive Liquid Fluid Canvas
function initLiquidCanvas() {
  const canvas = document.getElementById('liquidCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const fluids = [
    { x: width * 0.2, y: height * 0.2, r: 320, vx: 0.9, vy: 0.7, color: 'rgba(0, 240, 255, 0.45)' },
    { x: width * 0.8, y: height * 0.3, r: 380, vx: -0.7, vy: 0.8, color: 'rgba(168, 85, 247, 0.42)' },
    { x: width * 0.5, y: height * 0.75, r: 420, vx: 0.6, vy: -0.7, color: 'rgba(0, 255, 178, 0.35)' },
    { x: width * 0.3, y: height * 0.65, r: 350, vx: -0.8, vy: -0.5, color: 'rgba(236, 72, 153, 0.32)' }
  ];

  let mouseX = width / 2;
  let mouseY = height / 2;
  let mouseInfluence = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseInfluence = 1;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    mouseInfluence *= 0.95;

    fluids.forEach((f) => {
      f.x += f.vx;
      f.y += f.vy;

      if (f.x < -f.r / 3 || f.x > width + f.r / 3) f.vx *= -1;
      if (f.y < -f.r / 3 || f.y > height + f.r / 3) f.vy *= -1;

      if (mouseInfluence > 0.05) {
        const dx = mouseX - f.x;
        const dy = mouseY - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 450 && dist > 1) {
          f.x += (dx / dist) * 2 * mouseInfluence;
          f.y += (dy / dist) * 2 * mouseInfluence;
        }
      }

      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
      grad.addColorStop(0, f.color);
      grad.addColorStop(0.55, f.color.replace(/[\d\.]+\)$/, '0.12)'));
      grad.addColorStop(1, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// 11. Interactive 3D Card Tilt & Light Refraction
function initCard3DTilt() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.schedule-card, .verdict-banner, .student-strip');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -40 && x <= rect.width + 40 && y >= -40 && y <= rect.height + 40) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.5;
        const rotateY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px) scale(1.008)`;
      } else {
        card.style.transform = '';
      }
    });
  });
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderDaysNav();
  jumpToToday();
  initLiquidCursor();
  initLiquidRipple();
  initLiquidCanvas();
  initCard3DTilt();

  document.getElementById('langToggle').addEventListener('click', toggleLanguage);
  document.getElementById('todayBtn').addEventListener('click', jumpToToday);
});
