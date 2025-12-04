// === 1. KAMUS BAHASA (TRANSLATIONS) ===
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_feature: "Feature",
        nav_testimonials: "Testimonials",
        nav_faq: "FAQ", // Tambahan baru
        nav_contact: "Contact",
        hero_subtitle: "RESIDENTIAL PROPERTY MANAGEMENT",
        about_desc: "A company specializing in residential property management with over 20 years of experience in property maintenance, facility management, marketing, and residential administration.",
        about_quote: "\"Your trusted bleisure partner\"",
        about_subdesc: "That way, everything is made easier for the tenants, landowners, and everyone else involved in the property.",
        feature_title: "Our Features & Services",
        feature_subtitle: "Why choose Trihana Management for your property?",
        f1_title: "A Close Look Of Residential Property Management",
        f1_desc: "Residential property management is crucial to ensure that rental properties remain profitable and that tenants are paying their dues on time and keeping the property in the best condition possible.",
        f1_li1: "Marketing the property to attract new tenants",
        f1_li2: "Screening tenants and overseeing the leasing process",
        f1_li3: "Collecting rent and dues from tenants",
        f1_li4: "Maintaining the property and fixing any issues",
        f1_li5: "Conducting rental inspections to ensure that tenants are caring for the units in which they live",
        f1_li6: "Financial reporting to keep track of expenses, payments, and taxes",
        f2_title: "Our Residential Property Manager Standard Qualification",
        f2_desc: "Since residential property management is a very demanding and hands-on job, Our Residential Property Managers must have a wide set of skills. Some of the key skills include:",
        f2_li1: "Strong communication",
        f2_li2: "Patience and flexibility when dealing with tenants",
        f2_li3: "Knowledge of local rules and regulations",
        f2_li4: "Financial management",
        f2_li5: "Organization skills",
        f2_li6: "Customer service knowledge",
        f2_li7: "Marketing skills",
        f2_li8: "Assertiveness",
        why_title: "Why Us?",
        why_1_title: "Professional and Creative Team",
        why_1_desc: "Our team are highly experienced on property marketing and management, especially on residence & resort management.",
        why_2_title: "Complimentary Touch-Up Design",
        why_2_desc: "Trihana Management committed to deliver a tailored and market updated property design concept, especially on space saving and recycled materials.",
        why_3_title: "Experienced Assistance Service",
        why_3_desc: "For more than 20 years in Hospitality, we handled almost everything to fixing any issues and keep track of expenses, payments, and taxes.",
        why_4_title: "Efficiency Expense & Profit Oriented",
        why_4_desc: "We streamline operations to reduce costs, maintain facilities to preserve property value, and implement strategic marketing to ensure high occupancy rates and optimal rental income.",
        flow_title: "Our Workflow",
        flow_1_title: "Inspections & Inventory",
        flow_1_desc: "Conducting inspections using smart checklists for rental inspections and building maintenance, furniture interiors inventory.",
        flow_2_title: "Data & Analytics",
        flow_2_desc: "Gather useful data and analytics for financial reports, repair and maintenance jobs, and tenant safety.",
        flow_3_title: "Reporting",
        flow_3_desc: "Generating smart and comprehensive reports from property inspections and routine checks to comply with residential building quality, and house hold.",
        flow_4_title: "Workflow Building",
        flow_4_desc: "Building workflows to make it easier to cover all bases of property management tasks from screening and leasing to repairs and maintenance jobs.",
        flow_5_title: "Investor Meeting & Dealing Process",
        flow_6_title: "Proposal & Planning",
        flow_6_desc: "Create a complete Residential Management proposal with new interior plan, budget plan, and financial projection.",
        flow_7_title: "Agreement",
        flow_7_desc: "Cooperation agreement and all legal document to be discuss.",
        flow_8_title: "Execution",
        flow_8_desc: "Begin the touch-up process on the property as planned and according to the agreed timeline.",
        flow_note: "*This is the general workflow of TRIHANA MANAGEMENT, it depends on property, field situation, and other external factors that will affect this workflow.",
        rev_title: "Revenue Scheme",
        rev_desc1: "TRIHANA Management will take <strong>30% of the monthly revenue</strong> from residential management properties as a management fee.",
        rev_badge1: "20% Trihana Management",
        rev_badge2: "10% Investor",
        rev_desc2: "<strong>The Property Owner will receive 100% of the profit</strong> after deducting the management fee and operational costs.",
        rev_profit: "Profit",
        rev_calc: "Revenue - (Mgmt Fee + Op. Costs)",
        partner_title: "Our Partner",
        testi_title: "What Our Clients Say",
        testi_subtitle: "Real feedback from our satisfied partners.",
        testi_1_msg: "\"Trihana Management revolutionized our property. Their team handled everything from marketing to maintenance flawlessly. Our occupancy rates have never been higher.\"",
        testi_1_name: "Client A",
        testi_1_role: "Property Owner, Residence XYZ",
        testi_2_msg: "\"The complimentary touch-up design was a game-changer. They gave our space a modern look that attracted new tenants immediately. Highly recommended!\"",
        testi_2_name: "Client B",
        testi_2_role: "Investor, Asyana Resort",
        testi_3_msg: "\"Their 20 years of experience truly shows. They handle financial reporting and tenant issues with absolute professionalism. It's a worry-free service.\"",
        testi_3_name: "Client C",
        testi_3_role: "Landowner",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Your questions, answered.",
        faq_q1: "What is Trihana Management?",
        faq_a1: "Trihana Management is a company specializing in residential property management. We have over 20 years of experience in property maintenance, facility management, marketing, and residential administration.",
        faq_q2: "What services does Trihana Management offer?",
        faq_a2: "We offer a complete range of services, including: <br> • Marketing the property <br> • Screening tenants <br> • Collecting rent <br> • Maintaining the property <br> • Conducting inspections <br> • Financial reporting",
        faq_q3: "How much experience does Trihana Management have?",
        faq_a3: "Trihana Management has over 20 years of experience in hospitality and property management.",
        faq_q4: "What makes Trihana Management different?",
        faq_a4: "Our advantages lie in four main pillars: <br> 1. A Professional & Creative Team <br> 2. Complimentary Touch-Up Design <br> 3. Experienced Assistance Service <br> 4. Efficiency & Profit Orientation",
        faq_q5: "How does the Revenue Scheme work?",
        faq_a5: "Trihana Management takes 30% of the monthly revenue (20% for management, 10% for the Investor). The Property Owner receives 100% of the net profit after deducting fees and operational costs.",
        faq_q6: "What are the qualifications for your property managers?",
        faq_a6: "Our managers must have a wide set of skills, including strong communication, patience, knowledge of local rules, financial management, organization, customer service, marketing, and assertiveness.",
        faq_q7: "What is the general workflow?",
        faq_a7: "Our process starts with inspections and data collection, followed by investor meetings, a full proposal, legal agreements, and finally, the execution of the property touch-up.",
        faq_q8: "Is that workflow the same for all properties?",
        faq_a8: "No. The workflow shown is a general one. It may change depending on the property, field situation, and other external factors.",
        faq_q9: "Why is property management important?",
        faq_a9: "Property management is crucial to ensure rental properties remain profitable, tenants pay on time, and the property is kept in the best possible condition.",
        faq_q10: "How can I contact Trihana Management?",
        faq_a10: "You can contact us via: <br> Phone: +6281 237 518 817 (Riri) <br> Email: trihanamanagement@gmail.com <br> Website: [www.trihanamanagement.com](https://www.trihanamanagement.com)",
        contact_title: "Contact Us",
        contact_subtitle: "Get in touch & download our profile",
        contact_thank: "Thank You",
        form_title: "Get Our Company Profile",
        form_name: "Name",
        form_email: "Email",
        form_phone: "WhatsApp Number",
        form_msg: "Message (Optional)",
        form_btn: "Send & Download PDF",
        form_note: "*Your data is safe with us. By clicking send, you will be redirected to WhatsApp."
    },
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_feature: "Fitur",
        nav_testimonials: "Testimoni",
        nav_faq: "FAQ", // Tambahan baru
        nav_contact: "Kontak",
        hero_subtitle: "MANAJEMEN PROPERTI RESIDENSIAL",
        about_desc: "Perusahaan yang berspesialisasi dalam manajemen properti residensial dengan pengalaman lebih dari 20 tahun dalam pemeliharaan properti, manajemen fasilitas, pemasaran, dan administrasi perumahan.",
        about_quote: "\"Mitra bleisure terpercaya Anda\"",
        about_subdesc: "Dengan begitu, segalanya menjadi lebih mudah bagi penyewa, pemilik tanah, dan semua orang yang terlibat dalam properti.",
        feature_title: "Fitur & Layanan Kami",
        feature_subtitle: "Mengapa memilih Trihana Management untuk properti Anda?",
        f1_title: "Tinjauan Dekat Manajemen Properti Residensial",
        f1_desc: "Manajemen properti residensial sangat penting untuk memastikan properti sewaan tetap menguntungkan dan penyewa membayar iuran tepat waktu serta menjaga properti dalam kondisi terbaik.",
        f1_li1: "Memasarkan properti untuk menarik penyewa baru",
        f1_li2: "Menyeleksi penyewa dan mengawasi proses sewa",
        f1_li3: "Mengumpulkan uang sewa dan iuran dari penyewa",
        f1_li4: "Memelihara properti dan memperbaiki masalah apa pun",
        f1_li5: "Melakukan inspeksi sewa untuk memastikan penyewa merawat unit tempat tinggal mereka",
        f1_li6: "Pelaporan keuangan untuk melacak pengeluaran, pembayaran, dan pajak",
        f2_title: "Kualifikasi Standar Manajer Properti Residensial Kami",
        f2_desc: "Karena manajemen properti residensial adalah pekerjaan yang sangat menuntut dan praktis, Manajer Properti Residensial kami harus memiliki berbagai keterampilan. Beberapa keterampilan utama meliputi:",
        f2_li1: "Komunikasi yang kuat",
        f2_li2: "Kesabaran dan fleksibilitas saat berurusan dengan penyewa",
        f2_li3: "Pengetahuan tentang aturan dan peraturan lokal",
        f2_li4: "Manajemen keuangan",
        f2_li5: "Keterampilan organisasi",
        f2_li6: "Pengetahuan layanan pelanggan",
        f2_li7: "Keterampilan pemasaran",
        f2_li8: "Ketegasan",
        why_title: "Mengapa Kami?",
        why_1_title: "Tim Profesional dan Kreatif",
        why_1_desc: "Tim kami sangat berpengalaman dalam pemasaran dan manajemen properti, terutama dalam manajemen residence & resort.",
        why_2_title: "Desain Touch-Up Gratis",
        why_2_desc: "Trihana Management berkomitmen untuk memberikan konsep desain properti yang disesuaikan dan diperbarui pasar, terutama pada penghematan ruang dan bahan daur ulang.",
        why_3_title: "Layanan Bantuan Berpengalaman",
        why_3_desc: "Selama lebih dari 20 tahun di Perhotelan, kami menangani hampir semuanya mulai dari memperbaiki masalah hingga melacak pengeluaran, pembayaran, dan pajak.",
        why_4_title: "Efisiensi Biaya & Berorientasi Keuntungan",
        why_4_desc: "Kami merampingkan operasi untuk mengurangi biaya, memelihara fasilitas untuk menjaga nilai properti, dan menerapkan pemasaran strategis untuk memastikan tingkat hunian tinggi dan pendapatan sewa optimal.",
        flow_title: "Alur Kerja Kami",
        flow_1_title: "Inspeksi & Inventaris",
        flow_1_desc: "Melakukan inspeksi menggunakan daftar periksa cerdas untuk inspeksi sewa dan pemeliharaan gedung, inventaris furnitur interior.",
        flow_2_title: "Data & Analitik",
        flow_2_desc: "Mengumpulkan data dan analitik yang berguna untuk laporan keuangan, pekerjaan perbaikan dan pemeliharaan, serta keselamatan penyewa.",
        flow_3_title: "Pelaporan",
        flow_3_desc: "Menghasilkan laporan cerdas dan komprehensif dari inspeksi properti dan pemeriksaan rutin untuk mematuhi kualitas bangunan residensial dan rumah tangga.",
        flow_4_title: "Membangun Alur Kerja",
        flow_4_desc: "Membangun alur kerja untuk mempermudah mencakup semua dasar tugas manajemen properti dari penyaringan dan penyewaan hingga pekerjaan perbaikan dan pemeliharaan.",
        flow_5_title: "Pertemuan Investor & Proses Kesepakatan",
        flow_6_title: "Proposal & Perencanaan",
        flow_6_desc: "Membuat proposal Manajemen Residensial lengkap dengan rencana interior baru, rencana anggaran, dan proyeksi keuangan.",
        flow_7_title: "Perjanjian",
        flow_7_desc: "Perjanjian kerja sama dan semua dokumen hukum untuk didiskusikan.",
        flow_8_title: "Eksekusi",
        flow_8_desc: "Memulai proses touch-up pada properti sesuai rencana dan jadwal yang disepakati.",
        flow_note: "*Ini adalah alur kerja umum TRIHANA MANAGEMENT, tergantung pada properti, situasi lapangan, dan faktor eksternal lainnya yang akan mempengaruhi alur kerja ini.",
        rev_title: "Skema Pendapatan",
        rev_desc1: "TRIHANA Management akan mengambil <strong>30% dari pendapatan bulanan</strong> dari properti manajemen residensial sebagai biaya manajemen.",
        rev_badge1: "20% Trihana Management",
        rev_badge2: "10% Investor",
        rev_desc2: "<strong>Pemilik Properti akan menerima 100% dari keuntungan</strong> setelah dikurangi biaya manajemen dan biaya operasional.",
        rev_profit: "Keuntungan",
        rev_calc: "Pendapatan - (Biaya Mgmt + Biaya Ops)",
        partner_title: "Mitra Kami",
        testi_title: "Apa Kata Klien Kami",
        testi_subtitle: "Umpan balik nyata dari mitra kami yang puas.",
        testi_1_msg: "\"Trihana Management merevolusi properti kami. Tim mereka menangani semuanya mulai dari pemasaran hingga pemeliharaan dengan sempurna. Tingkat hunian kami tidak pernah setinggi ini.\"",
        testi_1_name: "Klien A",
        testi_1_role: "Pemilik Properti, Residence XYZ",
        testi_2_msg: "\"Desain touch-up gratis benar-benar mengubah segalanya. Mereka memberikan tampilan modern pada ruang kami yang langsung menarik penyewa baru. Sangat direkomendasikan!\"",
        testi_2_name: "Klien B",
        testi_2_role: "Investor, Asyana Resort",
        testi_3_msg: "\"Pengalaman 20 tahun mereka benar-benar terlihat. Mereka menangani pelaporan keuangan dan masalah penyewa dengan sangat profesional. Layanan tanpa khawatir.\"",
        testi_3_name: "Klien C",
        testi_3_role: "Pemilik Tanah",
        faq_title: "Pertanyaan yang Sering Diajukan",
        faq_subtitle: "Pertanyaan Anda, terjawab.",
        faq_q1: "Apa itu Trihana Management?",
        faq_a1: "Trihana Management adalah perusahaan yang berspesialisasi dalam manajemen properti residensial. Kami memiliki pengalaman lebih dari 20 tahun dalam pemeliharaan properti, manajemen fasilitas, pemasaran, dan administrasi perumahan.",
        faq_q2: "Layanan apa saja yang ditawarkan Trihana Management?",
        faq_a2: "Kami menawarkan layanan lengkap, termasuk: <br> • Memasarkan properti <br> • Menyeleksi penyewa <br> • Mengumpulkan sewa <br> • Memelihara properti <br> • Melakukan inspeksi <br> • Pelaporan keuangan",
        faq_q3: "Berapa lama pengalaman Trihana Management?",
        faq_a3: "Trihana Management memiliki pengalaman lebih dari 20 tahun di bidang perhotelan dan manajemen properti.",
        faq_q4: "Apa yang membuat Trihana Management berbeda?",
        faq_a4: "Keunggulan kami terletak pada empat pilar utama: <br> 1. Tim Profesional & Kreatif <br> 2. Desain Touch-Up Gratis <br> 3. Layanan Bantuan Berpengalaman <br> 4. Efisiensi & Orientasi Keuntungan",
        faq_q5: "Bagaimana skema pendapatan bekerja?",
        faq_a5: "Trihana Management mengambil 30% dari pendapatan bulanan (20% untuk manajemen, 10% untuk Investor). Pemilik Properti menerima 100% dari keuntungan bersih setelah dikurangi biaya dan biaya operasional.",
        faq_q6: "Apa kualifikasi manajer properti Anda?",
        faq_a6: "Manajer kami harus memiliki berbagai keterampilan, termasuk komunikasi yang kuat, kesabaran, pengetahuan aturan lokal, manajemen keuangan, organisasi, layanan pelanggan, pemasaran, dan ketegasan.",
        faq_q7: "Bagaimana alur kerja umumnya?",
        faq_a7: "Proses kami dimulai dengan inspeksi dan pengumpulan data, diikuti oleh pertemuan investor, proposal lengkap, perjanjian hukum, dan akhirnya, eksekusi touch-up properti.",
        faq_q8: "Apakah alur kerja itu sama untuk semua properti?",
        faq_a8: "Tidak. Alur kerja yang ditampilkan adalah umum. Ini dapat berubah tergantung pada properti, situasi lapangan, dan faktor eksternal lainnya.",
        faq_q9: "Mengapa manajemen properti penting?",
        faq_a9: "Manajemen properti sangat penting untuk memastikan properti sewaan tetap menguntungkan, penyewa membayar tepat waktu, dan properti tetap dalam kondisi terbaik.",
        faq_q10: "Bagaimana cara menghubungi Trihana Management?",
        faq_a10: "Anda dapat menghubungi kami melalui: <br> Telepon: +6281 237 518 817 (Riri) <br> Email: trihanamanagement@gmail.com <br> Website: [www.trihanamanagement.com](https://www.trihanamanagement.com)",
        contact_title: "Hubungi Kami",
        contact_subtitle: "Hubungi kami & unduh profil perusahaan",
        contact_thank: "Terima Kasih",
        form_title: "Dapatkan Profil Perusahaan",
        form_name: "Nama",
        form_email: "Email",
        form_phone: "Nomor WhatsApp",
        form_msg: "Pesan (Opsional)",
        form_btn: "Kirim & Unduh PDF",
        form_note: "*Data Anda aman bersama kami. Dengan mengklik kirim, Anda akan diarahkan ke WhatsApp."
    }
};

// === LOGIKA DROPDOWN BAHASA ===
const langBtn = document.getElementById('lang-dropdown-btn');
const langMenu = document.getElementById('lang-dropdown-menu');
const currentLangLabel = document.getElementById('current-lang-label');

if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('hidden');
    });

    // Tutup menu jika klik di luar
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.add('hidden');
        }
    });
}

// === 2. FUNGSI UTAMA SETELAH LOAD ===
document.addEventListener('DOMContentLoaded', function () {
    
    // Inisialisasi AOS (Dari CDN)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
        });
    }

    // Mobile Menu Logic
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuLinks = document.querySelectorAll('#mobile-menu-content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.checked = false;
        });
    });

    // FAQ Accordion Logic
    const faqToggles = document.querySelectorAll('input[type="checkbox"][id^="faq-toggle-"]');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) otherToggle.checked = false;
                });
            }
        });
    });
    
    // Testimonial Slider Logic
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach((slide) => {
                slide.classList.add('hidden');
                slide.classList.remove('opacity-100');
            });
            
            slides[index].classList.remove('hidden');
            setTimeout(() => {
                slides[index].classList.add('opacity-100');
            }, 50);
        }

        nextButton.addEventListener('click', () => {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0; // Loop kembali ke slide pertama
            }
            showSlide(currentSlide);
        });

        prevButton.addEventListener('click', () => {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1; // Loop ke slide terakhir
            }
            showSlide(currentSlide);
        });

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(0);
    }

    // Form Logic
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const text = `Halo Trihana Management,%0a%0aSaya tertarik dengan layanan Anda. Berikut data diri saya:%0a%0a*Nama:* ${name}%0a*Email:* ${email}%0a*No. HP:* ${phone}%0a*Pesan:* ${message}%0a%0aSaya ingin mengunduh Company Profile Anda. Terima kasih.`;
            const whatsappUrl = `https://wa.me/6281237518817?text=${text}`;

            // Trigger Download
            const link = document.createElement('a');
            link.href = 'file/company-profile.pdf'; // Path PDF untuk GitHub Pages
            link.download = 'Trihana_Company_Profile.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Redirect WA
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1000);
        });
    }

    // Set Bahasa Default ke Inggris
    setLanguage('en');
});

// === 3. FUNGSI SET BAHASA (Global) ===
function setLanguage(lang) {
    // Update Teks
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update Tombol Label (EN/ID)
    if (currentLangLabel) {
        currentLangLabel.innerText = lang.toUpperCase();
    }
    
    // Update class active pada tombol mobile
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (lang === 'id') {
        document.getElementById('btn-id-m')?.classList.add('active');
    } else {
        document.getElementById('btn-en-m')?.classList.add('active');
    }

    // Tutup dropdown setelah memilih
    if (langMenu) {
        langMenu.classList.add('hidden');
    }
}


