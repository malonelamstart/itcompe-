/* =========================================================================
   I18N DICTIONARY
========================================================================= */
const I18N = {
  ru: {
    "nav.about": "Обо мне",
    "nav.services": "Услуги",
    "nav.work": "Портфолио",
    "nav.reviews": "Отзывы",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",

    "hero.eyebrow": "// веб-разработка под ключ",
    "hero.t1": "Создаю сайты,",
    "hero.t2": "которые",
    "hero.t3": "продают",
    "hero.t4": "и выделяют бизнес",
    "hero.sub": "Дизайн, фронтенд и логика в одних руках. От первого экрана до продакшена — без агентского телефона и потерянных смыслов.",
    "hero.btn1": "Обсудить проект",
    "hero.btn2": "Смотреть работы",
    "hero.meta1": "проектов сдано",
    "hero.meta2": "лет в разработке",
    "hero.meta3": "% — Google PageSpeed",
    "hero.scroll": "скролл",

    "about.eyebrow": "// обо мне",
    "about.title": "Один специалист. Полный цикл.",
    "about.available": "Открыт для проектов",
    "about.lead": "Я беру проект от макета до релиза — без передачи задачи между дизайнером, верстальщиком и бэкендером. Один человек, одна логика, один результат.",
    "about.text": "Работаю с бизнесом, которому важна скорость загрузки, конверсия и аккуратный код, а не просто «красивая картинка». Каждый сайт собирается под конкретную задачу клиента, а не из шаблона.",
    "about.stackLabel": "Стек:",
    "about.p1Title": "Скорость",
    "about.p1Text": "Чистый код без лишних библиотек — сайт грузится быстро на любом устройстве.",
    "about.p2Title": "Точность",
    "about.p2Text": "Дизайн строится вокруг цели бизнеса, а не вокруг тренда.",
    "about.p3Title": "Поддержка",
    "about.p3Text": "После запуска сайт не остаётся без присмотра — правки и доработки на связи.",

    "services.eyebrow": "// услуги",
    "services.title": "Что я делаю",
    "services.sub": "Выбираю формат под задачу — от посадочной страницы до полноценного веб-приложения.",
    "services.s1Title": "Лендинги",
    "services.s1Text": "Одна страница с одной целью — заявка, продажа, запись. Заточена на конверсию с первого экрана.",
    "services.s1L1": "Структура под продажу",
    "services.s1L2": "Адаптация под мобильные",
    "services.s1L3": "Интеграция с CRM/формами",
    "services.s2Title": "Сайты-визитки",
    "services.s2Text": "Имиджевый сайт компании или специалиста: услуги, портфолио, контакты — аккуратно и по делу.",
    "services.s2L1": "Фирменный стиль на сайте",
    "services.s2L2": "SEO-структура",
    "services.s2L3": "Лёгкое редактирование текста",
    "services.s3Title": "Интернет-магазины",
    "services.s3Text": "Каталог, корзина, оплата и личный кабинет — рабочий магазин, а не витрина для красоты.",
    "services.s3L1": "Каталог и фильтры",
    "services.s3L2": "Приём онлайн-оплаты",
    "services.s3L3": "Админ-панель товаров",
    "services.s4Title": "Веб-приложения",
    "services.s4Text": "Личные кабинеты, дашборды, внутренние сервисы — сложная логика, упакованная в простой интерфейс.",
    "services.s4L1": "Авторизация и роли",
    "services.s4L2": "Работа с API и базами данных",
    "services.s4L3": "Масштабируемая архитектура",

    "work.eyebrow": "// портфолио",
    "work.title": "Избранные проекты",
    "work.sub": "Каждый проект — отдельная задача бизнеса, решённая дизайном и кодом.",
    "work.view": "Смотреть проект",
    "work.empty": "В этой категории пока нет проектов — загляните позже.",
    "work.filterAll": "Все проекты",
    "work.filterLanding": "Landing",
    "work.filterEcom": "E-commerce",
    "work.filterApp": "Web App",
    "work.p1Title": "Nordvik Capital",
    "work.p1Cat": "01 / Web App",
    "work.p1Text": "Платформа для инвесткомпании: живые графики, личный кабинет клиента, отчётность в реальном времени.",
    "work.p1Tag1": "Веб-приложение", "work.p1Tag2": "Дашборд",
    "work.p2Title": "Marble & Co.",
    "work.p2Cat": "02 / E-commerce",
    "work.p2Text": "Интернет-магазин дизайнерской мебели с 3D-просмотром товара и быстрым оформлением заказа.",
    "work.p2Tag1": "E-commerce", "work.p2Tag2": "3D-витрина",
    "work.p3Title": "Loopflow",
    "work.p3Cat": "03 / Landing",
    "work.p3Text": "Лендинг и онбординг для SaaS-сервиса автоматизации задач — рост конверсии в триал на 34%.",
    "work.p3Tag1": "Лендинг", "work.p3Tag2": "Онбординг",
    "work.p4Title": "Atelier Noir",
    "work.p4Cat": "04 / Landing",
    "work.p4Text": "Сайт-визитка ресторана: онлайн-бронирование стола и цифровое меню с фотосъёмкой блюд.",
    "work.p4Tag1": "Визитка", "work.p4Tag2": "Бронирование",
    "work.p5Title": "Clarity Clinic",
    "work.p5Cat": "05 / Web App",
    "work.p5Text": "Запись к врачу онлайн, личный кабинет пациента с историей визитов и результатами анализов.",
    "work.p5Tag1": "Веб-приложение", "work.p5Tag2": "Личный кабинет",
    "work.p6Title": "Mentora",
    "work.p6Cat": "06 / E-commerce",
    "work.p6Text": "Образовательная платформа с курсами, прогрессом обучения и встроенной системой тестов.",
    "work.p6Tag1": "Веб-приложение", "work.p6Tag2": "EdTech",

    "reviews.eyebrow": "// отзывы",
    "reviews.title": "Что говорят клиенты",
    "reviews.r1Text": "Сделали лендинг за две недели, и он реально начал приносить заявки с первого дня. Дотошность в деталях — отдельный респект.",
    "reviews.r1Name": "Игорь Савченко",
    "reviews.r1Role": "Основатель, Nordvik Capital",
    "reviews.r2Text": "Магазин собрали именно так, как мы представляли — без компромиссов на скорость загрузки. Клиенты сами отметили, что сайт стал удобнее.",
    "reviews.r2Name": "Алина Марчук",
    "reviews.r2Role": "Co-founder, Marble & Co.",
    "reviews.r3Text": "Редкий случай, когда разработчик сам предлагает, как улучшить продукт, а не просто выполняет техзадание. Конверсия в триал выросла заметно.",
    "reviews.r3Name": "Дмитрий Костенко",
    "reviews.r3Role": "CEO, Loopflow",
    "reviews.r4Text": "Бронирование столиков теперь занимает 30 секунд вместо звонков администратору. Гости часто хвалят сайт отдельно от кухни.",
    "reviews.r4Name": "Марта Лисовська",
    "reviews.r4Role": "Управляющая, Atelier Noir",
    "reviews.r5Text": "Личный кабинет пациента собрали с учётом всех медицинских нюансов и сроков — никаких задержек по проекту не было вообще.",
    "reviews.r5Name": "Олег Гнатюк",
    "reviews.r5Role": "Директор, Clarity Clinic",

    "contact.eyebrow": "// контакты",
    "contact.title": "Готовы обсудить проект?",
    "contact.text": "Опишите задачу в Telegram или оставьте сообщение здесь — отвечаю в течение дня.",
    "contact.tgBtn": "Написать в Telegram",
    "contact.handleLabel": "Telegram:",
    "contact.nameLabel": "Имя",
    "contact.namePh": "Как вас зовут",
    "contact.contactLabel": "Telegram или телефон",
    "contact.contactPh": "@username / номер телефона",
    "contact.msgLabel": "Сообщение",
    "contact.msgPh": "Расскажите о задаче — пару строк достаточно",
    "contact.send": "Отправить",
    "contact.note": "Данные отправляются только вам — никаких спамеров.",
    "contact.success": "✓ Сообщение отправлено! Свяжусь с вами в течение дня.",

    "footer.rights": "© 2026 ItCompe. Все права защищены.",
    "footer.built": "Собрано вручную, без шаблонов."
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.eyebrow": "// full-cycle web development",
    "hero.t1": "I build websites",
    "hero.t2": "that",
    "hero.t3": "convert",
    "hero.t4": "and stand out",
    "hero.sub": "Design, frontend and logic, handled by one person. From the first screen to production — no agency telephone game, no lost meaning.",
    "hero.btn1": "Discuss a project",
    "hero.btn2": "See the work",
    "hero.meta1": "projects shipped",
    "hero.meta2": "years building",
    "hero.meta3": "% Google PageSpeed",
    "hero.scroll": "scroll",

    "about.eyebrow": "// about",
    "about.title": "One specialist. Full cycle.",
    "about.available": "Open for projects",
    "about.lead": "I take a project from mockup to release — no handoffs between a designer, a markup specialist and a backend dev. One person, one logic, one result.",
    "about.text": "I work with businesses that care about load speed, conversion and clean code — not just a pretty picture. Every site is built for a specific task, not pulled from a template.",
    "about.stackLabel": "Stack:",
    "about.p1Title": "Speed",
    "about.p1Text": "Clean code, no bloated libraries — the site loads fast on any device.",
    "about.p2Title": "Precision",
    "about.p2Text": "Design is built around the business goal, not the trend.",
    "about.p3Title": "Support",
    "about.p3Text": "After launch the site isn't left unattended — fixes and updates stay on call.",

    "services.eyebrow": "// services",
    "services.title": "What I do",
    "services.sub": "I pick the format for the task — from a single landing page to a full web app.",
    "services.s1Title": "Landing pages",
    "services.s1Text": "One page, one goal — a lead, a sale, a booking. Built to convert from the first screen.",
    "services.s1L1": "Structure built to sell",
    "services.s1L2": "Mobile-first layout",
    "services.s1L3": "CRM / form integrations",
    "services.s2Title": "Business sites",
    "services.s2Text": "An image site for a company or specialist: services, portfolio, contacts — clean and to the point.",
    "services.s2L1": "Brand identity carried through",
    "services.s2L2": "SEO-ready structure",
    "services.s2L3": "Easy text editing",
    "services.s3Title": "Online stores",
    "services.s3Text": "Catalog, cart, payments and an account page — a working store, not just a showcase.",
    "services.s3L1": "Catalog and filters",
    "services.s3L2": "Online payments",
    "services.s3L3": "Product admin panel",
    "services.s4Title": "Web apps",
    "services.s4Text": "Dashboards, account portals, internal tools — complex logic wrapped in a simple interface.",
    "services.s4L1": "Auth and user roles",
    "services.s4L2": "API and database integration",
    "services.s4L3": "Scalable architecture",

    "work.eyebrow": "// portfolio",
    "work.title": "Selected projects",
    "work.sub": "Each project is a distinct business problem, solved with design and code.",
    "work.view": "View project",
    "work.empty": "No projects in this category yet — check back soon.",
    "work.filterAll": "All projects",
    "work.filterLanding": "Landing",
    "work.filterEcom": "E-commerce",
    "work.filterApp": "Web App",
    "work.p1Title": "Nordvik Capital",
    "work.p1Cat": "01 / Web App",
    "work.p1Text": "A platform for an investment firm: live charts, a client account area, real-time reporting.",
    "work.p1Tag1": "Web app", "work.p1Tag2": "Dashboard",
    "work.p2Title": "Marble & Co.",
    "work.p2Cat": "02 / E-commerce",
    "work.p2Text": "An online store for designer furniture with 3D product preview and fast checkout.",
    "work.p2Tag1": "E-commerce", "work.p2Tag2": "3D showcase",
    "work.p3Title": "Loopflow",
    "work.p3Cat": "03 / Landing",
    "work.p3Text": "A landing page and onboarding flow for a task-automation SaaS — trial conversion up 34%.",
    "work.p3Tag1": "Landing page", "work.p3Tag2": "Onboarding",
    "work.p4Title": "Atelier Noir",
    "work.p4Cat": "04 / Landing",
    "work.p4Text": "A restaurant site: online table booking and a digital menu with food photography.",
    "work.p4Tag1": "Business site", "work.p4Tag2": "Booking",
    "work.p5Title": "Clarity Clinic",
    "work.p5Cat": "05 / Web App",
    "work.p5Text": "Online doctor booking and a patient account with visit history and test results.",
    "work.p5Tag1": "Web app", "work.p5Tag2": "Account area",
    "work.p6Title": "Mentora",
    "work.p6Cat": "06 / E-commerce",
    "work.p6Text": "A learning platform with courses, progress tracking and a built-in testing system.",
    "work.p6Tag1": "Web app", "work.p6Tag2": "EdTech",

    "reviews.eyebrow": "// reviews",
    "reviews.title": "What clients say",
    "reviews.r1Text": "The landing page was done in two weeks and started bringing in leads from day one. The attention to detail deserves real respect.",
    "reviews.r1Name": "Igor Savchenko",
    "reviews.r1Role": "Founder, Nordvik Capital",
    "reviews.r2Text": "The store turned out exactly as we imagined, with no compromise on load speed. Customers noticed the site got easier to use.",
    "reviews.r2Name": "Alina Marchuk",
    "reviews.r2Role": "Co-founder, Marble & Co.",
    "reviews.r3Text": "A rare case where the developer suggests product improvements instead of just following the brief. Trial conversion grew noticeably.",
    "reviews.r3Name": "Dmytro Kostenko",
    "reviews.r3Role": "CEO, Loopflow",
    "reviews.r4Text": "Table booking now takes 30 seconds instead of a phone call to the host. Guests often compliment the site on its own.",
    "reviews.r4Name": "Marta Lisovska",
    "reviews.r4Role": "Manager, Atelier Noir",
    "reviews.r5Text": "The patient account area was built with every medical detail and deadline in mind — the project never slipped once.",
    "reviews.r5Name": "Oleg Hnatiuk",
    "reviews.r5Role": "Director, Clarity Clinic",

    "contact.eyebrow": "// contact",
    "contact.title": "Ready to talk about a project?",
    "contact.text": "Describe the task on Telegram or leave a message here — I reply within a day.",
    "contact.tgBtn": "Message on Telegram",
    "contact.handleLabel": "Telegram:",
    "contact.nameLabel": "Name",
    "contact.namePh": "What should I call you",
    "contact.contactLabel": "Telegram or phone",
    "contact.contactPh": "@username / phone number",
    "contact.msgLabel": "Message",
    "contact.msgPh": "Tell me about the task — a couple of lines is enough",
    "contact.send": "Send message",
    "contact.note": "Your data is sent only to me — no spam.",
    "contact.success": "✓ Message sent! I'll get back to you within a day.",

    "footer.rights": "© 2026 ItCompe. All rights reserved.",
    "footer.built": "Hand-built, no templates."
  }
};

/* =========================================================================
   WORK FILTERS (portfolio category filtering)
========================================================================= */
function initWorkFilters(){
  const filterWrap = document.getElementById("workFilters");
  const grid = document.getElementById("workGrid");
  const emptyMsg = document.getElementById("workEmpty");
  if(!filterWrap || !grid) return;

  const buttons = Array.from(filterWrap.querySelectorAll(".filter-btn"));
  const cards = Array.from(grid.querySelectorAll(".work-card"));

  function applyFilter(filter){
    let visibleCount = 0;

    cards.forEach(card => {
      const matches = filter === "all" || card.getAttribute("data-category") === filter;
      if(matches){
        card.classList.remove("is-hidden");
        visibleCount++;
        if(!card.classList.contains("is-visible")){
          requestAnimationFrame(() => card.classList.add("is-visible"));
        }
      } else {
        card.classList.add("is-hidden");
      }
    });

    if(emptyMsg) emptyMsg.classList.toggle("is-visible", visibleCount === 0);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      applyFilter(btn.getAttribute("data-filter"));
    });
  });
}

/* =========================================================================
   I18N ENGINE
========================================================================= */
const I18nEngine = (() => {
  let current = "ru";

  function apply(lang){
    current = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = I18N[lang]?.[key];
      if(val !== undefined) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = I18N[lang]?.[key];
      if(val !== undefined) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-opt").forEach(el => {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });

    try{ localStorage.setItem("itcompe_lang", lang); }catch(e){}
  }

  function init(){
    let saved = "ru";
    try{ saved = localStorage.getItem("itcompe_lang") || "ru"; }catch(e){}
    apply(saved);
  }

  function toggle(){
    apply(current === "ru" ? "en" : "ru");
  }

  function get(){ return current; }

  return { init, toggle, apply, get };
})();

/* =========================================================================
   SCROLL REVEAL
========================================================================= */
function initScrollReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => observer.observe(el));
}

/* =========================================================================
   ANIMATED COUNTERS (hero meta numbers)
========================================================================= */
function initCounters(){
  const nums = document.querySelectorAll(".meta-num");
  if(!nums.length) return;

  function animateCount(el){
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(el => observer.observe(el));
}

/* =========================================================================
   HEADER: scroll state + mobile nav
========================================================================= */
function initHeader(){
  const header = document.querySelector(".site-header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("mainNav");

  function onScroll(){
    if(window.scrollY > 12){
      header.style.borderColor = "var(--border)";
    } else {
      header.style.borderColor = "var(--border-soft)";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if(burger && nav){
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.classList.toggle("is-active", isOpen);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.classList.remove("is-active");
      });
    });
  }
}

/* =========================================================================
   REVIEWS SLIDER (dots sync to scroll position)
========================================================================= */
function initReviewsSlider(){
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  if(!track || !dotsWrap) return;

  const cards = Array.from(track.children);
  const dotCount = cards.length;

  for(let i = 0; i < dotCount; i++){
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Review ${i+1}`);
    if(i === 0) dot.classList.add("is-active");
    dot.addEventListener("click", () => {
      const card = cards[i];
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    });
    dotsWrap.appendChild(dot);
  }

  const dots = Array.from(dotsWrap.children);

  let scrollTimeout = null;
  track.addEventListener("scroll", () => {
    if(scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      let closestIdx = 0;
      let closestDist = Infinity;
      cards.forEach((card, idx) => {
        const dist = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
        if(dist < closestDist){ closestDist = dist; closestIdx = idx; }
      });
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === closestIdx));
    }, 80);
  }, { passive: true });
}

/* =========================================================================
   CONTACT FORM → TELEGRAM BOT
   Замените TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID своими значениями.
   Инструкция: см. README ниже в комментарии.
========================================================================= */
function initContactForm(){
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const error   = document.getElementById("formError");
  const submitBtn = document.getElementById("formSubmitBtn");
  if(!form) return;

  // ─── ВСТАВЬТЕ СВОИ ДАННЫЕ СЮДА ───────────────────────────────────────────
  const TELEGRAM_BOT_TOKEN = "8761860276:AAHDpbhMLg9AQzmvg2blyf2pOxksk0FExUo";   // напр. "7123456789:AAF..."
  const TELEGRAM_CHAT_ID   = "8379618183";     // напр. "-1001234567890" (группа) или "123456789" (лично)
  // ─────────────────────────────────────────────────────────────────────────

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name    = form.querySelector("#cf-name").value.trim();
    const contact = form.querySelector("#cf-contact").value.trim();
    const message = form.querySelector("#cf-msg").value.trim();

    // Скрыть предыдущие статусы
    success.classList.remove("is-visible");
    error.classList.remove("is-visible");
    submitBtn.classList.add("is-loading");
    submitBtn.querySelector("span").textContent = "Отправка...";

    const text =
      `📩 *Новая заявка с сайта ItCompe*\n\n` +
      `👤 *Имя:* ${escapeMarkdown(name)}\n` +
      `📱 *Контакт:* ${escapeMarkdown(contact)}\n` +
      `💬 *Сообщение:*\n${escapeMarkdown(message)}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: "Markdown"
          })
        }
      );

      const data = await res.json();

      if(data.ok){
        success.classList.add("is-visible");
        form.reset();
      } else {
        console.error("Telegram error:", data);
        error.classList.add("is-visible");
      }
    } catch(err){
      console.error("Fetch error:", err);
      error.classList.add("is-visible");
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.querySelector("span").textContent = "Отправить";
      setTimeout(() => {
        success.classList.remove("is-visible");
        error.classList.remove("is-visible");
      }, 6000);
    }
  });
}

function escapeMarkdown(text){
  return String(text).replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}

/* =========================================================================
   LANG SWITCH BINDING
========================================================================= */
function initLangSwitch(){
  const btn = document.getElementById("langSwitch");
  if(!btn) return;
  btn.addEventListener("click", () => I18nEngine.toggle());
}

/* =========================================================================
   BOOT
========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  I18nEngine.init();
  initLangSwitch();
  initScrollReveal();
  initCounters();
  initHeader();
  initWorkFilters();
  initReviewsSlider();
  initContactForm();
});
