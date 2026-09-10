/**
 * Maktab Veb-sayti - Asosiy JavaScript moduli
 * Modern Academic Interactive Controller & 8 Mobile Menu Styles
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. SIDE MENU (DRAWER)
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const mobileTabMenuBtn = document.getElementById('mobile-tab-menu-btn');
  if (mobileTabMenuBtn && mobileMenu) {
    mobileTabMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeDrawer = () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', closeDrawer);
  }

  // Mobil menyudagi ichki linklar bosilganda menyuni silliq yopish
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // Mobil Dropdownlar (Accordion)
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.toggle-icon');
      if (content) {
        content.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     2. BOTTOM TAB BAR (Spotlight Sliding Animation - Navigation Tabs V2)
     -------------------------------------------------------------------------- */
  const mobileTabBar = document.getElementById('mobile-tab-bar');
  const tabSpotlight = document.querySelector('.tab-spotlight');
  const tabItems = document.querySelectorAll('.mobile-tab-item');

  function updateSpotlight(index) {
    if (tabSpotlight) {
      requestAnimationFrame(() => {
        tabSpotlight.style.transform = `translateX(${index * 100}%) translateZ(0)`;
      });
    }
  }

  // Sahifa yuklanganda active elementni topib unga nurni qaratish
  tabItems.forEach((tab, index) => {
    if (tab.classList.contains('active')) {
      updateSpotlight(index);
    }

    tab.addEventListener('click', function(e) {
      if (!this.getAttribute('data-action')) {
        tabItems.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        updateSpotlight(index);
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. FAB (FLOATING ACTION BUTTON)
     -------------------------------------------------------------------------- */
  const fabContainer = document.getElementById('fab-container');
  const fabMainBtn = document.getElementById('fab-main-btn');

  if (fabContainer && fabMainBtn) {
    fabMainBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fabContainer.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!fabContainer.contains(e.target)) {
        fabContainer.classList.remove('active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. BOTTOM SHEET
     -------------------------------------------------------------------------- */
  const bottomSheetBackdrop = document.getElementById('bottom-sheet-backdrop');
  const bottomSheetModal = document.getElementById('bottom-sheet-modal');
  const openSheetTriggers = document.querySelectorAll('.open-sheet-trigger');
  const closeSheetBtn = document.getElementById('close-sheet-btn');

  const openBottomSheet = () => {
    if (bottomSheetBackdrop && bottomSheetModal) {
      bottomSheetBackdrop.classList.add('active');
      bottomSheetModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeBottomSheet = () => {
    if (bottomSheetBackdrop && bottomSheetModal) {
      bottomSheetBackdrop.classList.remove('active');
      bottomSheetModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  openSheetTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openBottomSheet();
    });
  });

  if (bottomSheetBackdrop) bottomSheetBackdrop.addEventListener('click', closeBottomSheet);
  if (closeSheetBtn) closeSheetBtn.addEventListener('click', closeBottomSheet);

  /* --------------------------------------------------------------------------
     5. THREE DOTS (⋮ OVERFLOW MENU)
     -------------------------------------------------------------------------- */
  const threeDotsBtn = document.getElementById('three-dots-btn');
  const threeDotsMenu = document.getElementById('three-dots-menu');

  if (threeDotsBtn && threeDotsMenu) {
    threeDotsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      threeDotsMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!threeDotsMenu.contains(e.target) && e.target !== threeDotsBtn) {
        threeDotsMenu.classList.remove('active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. GRID MENU (LAUNCHPAD)
     -------------------------------------------------------------------------- */
  const gridModal = document.getElementById('grid-menu-modal');
  const openGridTriggers = document.querySelectorAll('.open-grid-trigger');
  const closeGridBtn = document.getElementById('close-grid-btn');

  const openGridMenu = () => {
    if (gridModal) {
      gridModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGridMenu = () => {
    if (gridModal) {
      gridModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  openGridTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openGridMenu();
    });
  });

  if (closeGridBtn) closeGridBtn.addEventListener('click', closeGridMenu);
  if (gridModal) {
    gridModal.addEventListener('click', (e) => {
      if (e.target === gridModal) closeGridMenu();
    });
  }

  /* --------------------------------------------------------------------------
     7. RECTANGULAR MENU (TILES)
     -------------------------------------------------------------------------- */
  const rectangularModal = document.getElementById('rectangular-menu-modal');
  const openRectangularTriggers = document.querySelectorAll('.open-rectangular-trigger');
  const closeRectangularBtn = document.getElementById('close-rectangular-btn');

  openRectangularTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (rectangularModal) rectangularModal.classList.toggle('active');
    });
  });

  if (closeRectangularBtn && rectangularModal) {
    closeRectangularBtn.addEventListener('click', () => {
      rectangularModal.classList.remove('active');
    });
  }

  /* --------------------------------------------------------------------------
     8. RUDDER NAVIGATION (RADIAL / WHEEL MENU)
     -------------------------------------------------------------------------- */
  const rudderWrapper = document.getElementById('rudder-menu-wrapper');
  const rudderCenterBtn = document.getElementById('rudder-center-btn');
  const rudderOverlay = document.getElementById('rudder-overlay');

  if (rudderCenterBtn && rudderWrapper) {
    rudderCenterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = rudderWrapper.classList.toggle('active');
      if (rudderOverlay) {
        if (isActive) rudderOverlay.classList.add('active');
        else rudderOverlay.classList.remove('active');
      }
    });

    if (rudderOverlay) {
      rudderOverlay.addEventListener('click', () => {
        rudderWrapper.classList.remove('active');
        rudderOverlay.classList.remove('active');
      });
    }
  }

  /* --------------------------------------------------------------------------
     MENU STYLE SWITCHER (HAMMA USLUBLARNI TEKSHIRISH UCHUN)
     -------------------------------------------------------------------------- */
  const menuSwitcher = document.getElementById('menu-style-select');
  if (menuSwitcher) {
    menuSwitcher.addEventListener('change', (e) => {
      const val = e.target.value;
      const tabNav = document.getElementById('mobile-tab-bar');
      const fabEl = document.getElementById('fab-container');
      const rudderEl = document.getElementById('rudder-menu-wrapper');

      // Default holat: barchasini ko'rsatish
      if (tabNav) tabNav.style.display = (val === 'all' || val === 'tab-bar') ? 'flex' : 'none';
      if (fabEl) fabEl.style.display = (val === 'all' || val === 'fab') ? 'flex' : 'none';
      if (rudderEl) rudderEl.style.display = (val === 'all' || val === 'rudder') ? 'flex' : 'none';

      if (val === 'grid') openGridMenu();
      if (val === 'sheet') openBottomSheet();
      if (val === 'side-menu' && mobileMenu) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      if (val === 'three-dots' && threeDotsMenu) {
        threeDotsMenu.classList.add('active');
      }
      if (val === 'rectangular' && rectangularModal) {
        rectangularModal.classList.add('active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     STAT COUNTER ANIMATSIYASI
     -------------------------------------------------------------------------- */
  const counters = document.querySelectorAll('.counter-value');
  let counterStarted = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 40;
      let count = 0;
      const step = Math.ceil(target / speed);

      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.innerText = count;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  if (counters.length > 0) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !counterStarted) {
            counterStarted = true;
            runCounters();
            obs.disconnect();
          }
        });
      }, { threshold: 0.2 });

      counters.forEach(c => observer.observe(c));
    } else {
      runCounters();
    }
  }

  /* --------------------------------------------------------------------------
     GALEREYA FILTRLASH & LIGHTBOX
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-[#0D2240]', 'text-white', 'border-[#C59B27]');
          b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        });
        btn.classList.add('bg-[#0D2240]', 'text-white', 'border-[#C59B27]');
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

        const category = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = trigger.getAttribute('data-image') || trigger.querySelector('img')?.src;
        const caption = trigger.getAttribute('data-caption') || 'Maktab hayotidan lahzalar';
        
        if (imgSrc) {
          lightboxImg.src = imgSrc;
          if (lightboxCaption) lightboxCaption.innerText = caption;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  /* --------------------------------------------------------------------------
     TELEGRAM BOT INTEGRATSIYASI (SHIKOYAT VA TAKLIFLAR)
     Bot: https://t.me/maktab_1bot
     Token: 8803420380:AAHGUDTOeQZA1UAXCV0TLM4pb5iYTsjBC48
     -------------------------------------------------------------------------- */
  window.TELEGRAM_CONFIG = {
    botToken: '8803420380:AAHGUDTOeQZA1UAXCV0TLM4pb5iYTsjBC48',
    chatId: '7579857040'
  };

  function escapeTelegramHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  const contactForms = document.querySelectorAll('#contact-form');

  contactForms.forEach(contactForm => {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Form maydonlarini olish
      const nameInput = contactForm.querySelector('input[name="name"]') || contactForm.querySelectorAll('input[type="text"]')[0];
      const phoneInput = contactForm.querySelector('input[name="phone"]') || contactForm.querySelector('input[type="tel"]');
      const subjectSelect = contactForm.querySelector('select[name="subject"]') || contactForm.querySelector('select');
      const messageInput = contactForm.querySelector('textarea[name="message"]') || contactForm.querySelector('textarea');

      const name = nameInput ? nameInput.value.trim() : 'Noma‘lum';
      const phone = phoneInput ? phoneInput.value.trim() : 'Ko‘rsatilmagan';
      const subject = subjectSelect ? subjectSelect.value : 'Shikoyat / Taklif';
      const message = messageInput ? messageInput.value.trim() : '';

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Telegramga yuborilmoqda...`;

      // Telegram xabari matnini HTML formatida xavfsiz shakllantirish
      const text = `🔔 <b>YANGI MUROJAAT (1-maktab sayti)</b>\n\n` +
                   `📌 <b>Mavzu / Turi:</b> ${escapeTelegramHTML(subject)}\n` +
                   `👤 <b>Yuboruvchi:</b> ${escapeTelegramHTML(name)}\n` +
                   `📞 <b>Telefon:</b> <code>${escapeTelegramHTML(phone)}</code>\n\n` +
                   `📝 <b>Xabar mazmuni:</b>\n${escapeTelegramHTML(message)}\n\n` +
                   `📅 <b>Yuborilgan vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`;

      // Telegram Bot API orqali yuborish
      const targetChatId = window.TELEGRAM_CONFIG.chatId || localStorage.getItem('school_admin_chat_id');

      if (targetChatId) {
        try {
          const res = await fetch(`https://api.telegram.org/bot${window.TELEGRAM_CONFIG.botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: targetChatId,
              text: text,
              parse_mode: 'HTML'
            })
          });
          const data = await res.json();
          if (!data.ok) {
            console.error('Telegram API xatoligi:', data);
          }
        } catch (err) {
          console.error('Telegramga yuborishda tarmoq xatoligi:', err);
        }
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      const formSuccess = contactForm.parentElement.querySelector('#form-success-alert') || document.getElementById('form-success-alert');
      if (formSuccess) {
        formSuccess.innerHTML = `<i class="fa-solid fa-circle-check mr-2 text-emerald-600"></i>
          Rahmat! Sizning <b>${subject}</b> murojaatingiz Telegram bot orqali maktab ma'muriyatiga yetkazildi.`;
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 7000);
      } else {
        alert("Rahmat! Sizning xabaringiz qabul qilindi.");
        contactForm.reset();
      }
    });
  });

  /* --------------------------------------------------------------------------
     SILKY SMOOTH NAVIGATION & INTERNAL ANCHOR SCROLLING
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const hashIndex = href.indexOf('#');
      const hash = href.substring(hashIndex);
      if (!hash || hash === '#') return;
      
      const targetElement = document.querySelector(hash);

      // Agar ayni sahifadagi bo'limga yo'naltirilgan bo'lsa
      if (targetElement && (href.startsWith('#') || href.startsWith(window.location.pathname))) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        if (history.pushState) {
          history.pushState(null, null, hash);
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     JONLI MAKTAB HOLATI VA SANA (HUMAN-TOUCH LIVE STATUS)
     -------------------------------------------------------------------------- */
  const liveDateEl = document.getElementById('live-date-display');
  const liveShiftEl = document.getElementById('live-shift-display');

  if (liveDateEl || liveShiftEl) {
    const now = new Date();
    const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
    
    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    if (liveDateEl) {
      liveDateEl.innerText = `${dayName}, ${dateNum}-${monthName}, ${year}`;
    }

    if (liveShiftEl) {
      const hour = now.getHours();
      const minute = now.getMinutes();
      const totalMinutes = hour * 60 + minute;
      const isSunday = now.getDay() === 0;

      // Maktab jadvali: Darslar 08:00 - 13:10 (790 daqiqa), o'qituvchilar 15:00 gacha (900 daqiqa)
      if (isSunday) {
        liveShiftEl.innerHTML = `<span class="pulse-dot bg-amber-400"></span> Dam olish kuni`;
      } else if (totalMinutes >= 480 && totalMinutes < 790) {
        liveShiftEl.innerHTML = `<span class="pulse-dot"></span> Dars jarayoni (13:10 gacha)`;
      } else if (totalMinutes >= 790 && totalMinutes < 900) {
        liveShiftEl.innerHTML = `<span class="pulse-dot bg-amber-400"></span> O‘qituvchilar uslubiy soati (15:00 gacha)`;
      } else if (totalMinutes >= 900) {
        liveShiftEl.innerHTML = `<span class="pulse-dot bg-slate-400"></span> Darslar yakunlangan (Ertaga 08:00)`;
      } else {
        liveShiftEl.innerHTML = `<span class="pulse-dot bg-slate-400"></span> Darslar 08:00 da boshlanadi`;
      }
    }
  }

  /* --------------------------------------------------------------------------
     SUZUVCHI «TEPAGA QAYTISH» (SCROLL TO TOP) TUGMASI
     -------------------------------------------------------------------------- */
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
