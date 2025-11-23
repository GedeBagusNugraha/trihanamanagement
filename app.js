document.addEventListener('DOMContentLoaded', function () {
    
    // --- Inisialisasi AOS (Animate On Scroll) ---
    // Pastikan script AOS sudah dimuat di HTML sebelum file ini
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
        });
    }

    // --- Script Menu Mobile ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuLinks = document.querySelectorAll('#mobile-menu-content a');
    
    // Menutup menu saat link diklik
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });

    // --- Script FAQ Accordion ---
    // Memastikan hanya satu FAQ yang terbuka dalam satu waktu
    const faqToggles = document.querySelectorAll('input[type="checkbox"][id^="faq-toggle-"]');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        otherToggle.checked = false;
                    }
                });
            }
        });
    });
    
    // --- Script Testimonial Slider ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            // Sembunyikan semua slide
            slides.forEach((slide) => {
                slide.classList.add('hidden');
                slide.classList.remove('opacity-100');
            });
            
            // Tampilkan slide yang aktif
            slides[index].classList.remove('hidden');
            
            // Tambahkan delay sedikit untuk efek fade-in
            setTimeout(() => {
                slides[index].classList.add('opacity-100');
            }, 50); 
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentSlide++;
                if (currentSlide >= slides.length) {
                    currentSlide = 0; // Loop kembali ke awal
                }
                showSlide(currentSlide);
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = slides.length - 1; // Loop ke akhir
                }
                showSlide(currentSlide);
            });
        }

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(0);
    }
});