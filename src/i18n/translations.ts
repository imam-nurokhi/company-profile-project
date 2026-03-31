export type Language = "id" | "en";

// Recursively widens literal string types to `string` so both language
// objects are assignable to the same `Translations` type despite having
// different string literal values.
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : T extends object
  ? { [K in keyof T]: Widen<T[K]> }
  : T;

export const translations = {
  id: {
    navbar: {
      solutions: "Solusi",
      company: "Perusahaan",
      resources: "Sumber Daya",
      cta: "Konsultasi Gratis",
      solutionsItems: [
        {
          label: "Pengembangan Web App",
          description: "Aplikasi web scalable dan berperforma tinggi",
          icon: "⚡",
        },
        {
          label: "Solusi ERP",
          description: "Perencanaan sumber daya perusahaan end-to-end",
          icon: "🏗️",
        },
        {
          label: "Arsitektur Sistem",
          description: "Desain infrastruktur yang tahan uji waktu",
          icon: "🔧",
        },
        {
          label: "Desain UI/UX",
          description: "Pengalaman digital yang berpusat pada manusia",
          icon: "🎨",
        },
      ],
      companyItems: ["Tentang Kami", "Karier", "Blog"],
    },
    hero: {
      badge: "Solusi Teknologi Kelas Enterprise",
      headline1: "Membangun Ekosistem",
      headline2: "Digital yang Skalabel",
      subheadline:
        "Kami mengembangkan aplikasi web enterprise, solusi ERP, dan platform digital yang mendorong pertumbuhan bisnis Anda",
      ctaPrimary: "Mulai Proyek",
      ctaSecondary: "Lihat Karya Kami",
      trustItems: [
        { value: "50+", label: "Proyek" },
        { value: "99.9%", label: "Uptime" },
        { value: "5★", label: "Ulasan" },
      ],
      scrollLabel: "Gulir",
    },
    services: {
      sectionLabel: "Layanan Kami",
      heading1: "Apa yang",
      heading2: "Kami Bangun",
      subheading:
        "Dari konsep hingga deployment, kami menghadirkan perangkat lunak enterprise yang bekerja pada skala besar dan beradaptasi dengan kebutuhan bisnis Anda yang terus berkembang.",
      learnMore: "Pelajari Lebih",
      workflowTitle1: "Cara Kami",
      workflowTitle2: "Bekerja",
      items: [
        {
          icon: "⚡",
          title: "Pengembangan Aplikasi Web Kustom",
          description:
            "Kami membangun aplikasi web berperforma tinggi dan skalabel yang disesuaikan dengan proses bisnis Anda. Dari SPA hingga platform multi-tenant yang kompleks, kami merancang solusi yang berkembang bersama Anda.",
          tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
          accent: "#00D4FF",
        },
        {
          icon: "🏗️",
          title: "Solusi ERP Enterprise",
          description:
            "Sederhanakan operasi dengan sistem ERP kustom yang menyatukan keuangan, SDM, inventaris, dan CRM ke dalam satu platform cerdas yang dirancang untuk industri Anda.",
          tags: [
            "Integrasi SAP",
            "REST API",
            "Microservices",
            "Docker",
            "Redis",
          ],
          accent: "#10B981",
        },
        {
          icon: "🔧",
          title: "Arsitektur Sistem & Audit",
          description:
            "Kami mengevaluasi infrastruktur Anda dan merancang solusi cloud-native yang tangguh. Audit kami mengidentifikasi hambatan dan memberikan peta jalan yang dapat ditindaklanjuti.",
          tags: ["AWS", "GCP", "Kubernetes", "CI/CD", "Audit Keamanan"],
          accent: "#8B5CF6",
        },
        {
          icon: "🎨",
          title: "Desain UI/UX & Produk Digital",
          description:
            "Desain yang berpusat pada manusia dan mengkonversi. Kami menghadirkan sistem desain lengkap, prototipe interaktif, dan antarmuka pixel-perfect yang menyenangkan pengguna.",
          tags: ["Figma", "Design Systems", "Prototyping", "A/B Testing", "WCAG"],
          accent: "#F59E0B",
        },
      ],
      workflowSteps: [
        {
          num: "01",
          icon: "🔍",
          title: "Penemuan",
          description:
            "Mendalami tujuan, kendala, dan kebutuhan pengguna Anda.",
        },
        {
          num: "02",
          icon: "📐",
          title: "Arsitektur",
          description: "Merancang sistem yang skalabel dan blueprint teknis.",
        },
        {
          num: "03",
          icon: "💻",
          title: "Pengembangan",
          description:
            "Sprint agile dengan demo mingguan dan pengiriman berkelanjutan.",
        },
        {
          num: "04",
          icon: "🚀",
          title: "Deployment",
          description:
            "Peluncuran tanpa downtime dengan pemantauan penuh.",
        },
        {
          num: "05",
          icon: "🛡️",
          title: "Pemeliharaan",
          description:
            "Pemantauan 24/7, pembaruan, dan optimisasi berkelanjutan.",
        },
      ],
    },
    metrics: {
      sectionLabel: "Dengan Angka",
      heading1: "Hasil yang",
      heading2: "Bicara Sendiri",
      items: [
        {
          label: "Proyek Terselesaikan",
          description: "Solusi enterprise di 10+ industri",
        },
        {
          label: "SLA Uptime",
          description: "Keandalan kritis, terjamin",
        },
        {
          label: "Klien Puas",
          description: "Kemitraan jangka panjang berdasarkan kepercayaan",
        },
        {
          label: "Pengalaman",
          description: "Keahlian mendalam di teknologi enterprise",
        },
        {
          label: "Dukungan",
          description: "Pemantauan selalu aktif dan respons cepat",
        },
      ],
    },
    projects: {
      sectionLabel: "Studi Kasus & Kepercayaan",
      heading1: "Terbukti",
      heading2: "Berkualitas",
      viewCaseStudy: "Lihat Detail",
      clientLogos: [
        "FinTechPro",
        "AquaLogic",
        "NovaMed",
        "SkyBuild",
        "DataSphere",
        "ClearOps",
        "UrbanFlow",
        "GridCore",
        "PeakSync",
        "HorizonAI",
      ],
      testimonialsTitle1: "Apa Kata",
      testimonialsTitle2: "Klien Kami",
      testimonials: [
        {
          quote:
            "bisadibicarakan.com mengubah infrastruktur legacy kami menjadi platform cloud-native modern. Pengiriman tepat waktu, sesuai anggaran, dan kualitasnya melampaui setiap tolok ukur yang kami tetapkan.",
          name: "Sarah Chen",
          role: "CTO",
          company: "FinTechPro",
          stars: 5,
        },
        {
          quote:
            "Sistem ERP yang mereka bangun untuk kami mengurangi overhead operasional sebesar 40% di kuartal pertama. Pengetahuan tim dalam alur kerja healthcare sangat luar biasa.",
          name: "Dr. James Okafor",
          role: "Direktur Operasional",
          company: "NovaMed Group",
          stars: 5,
        },
        {
          quote:
            "Bekerja dengan bisadibicarakan.com terasa seperti memiliki tim engineering senior yang tertanam di dalam perusahaan kami. Audit arsitektur mereka mengidentifikasi risiko yang bahkan tidak kami ketahui.",
          name: "Mark Lewinski",
          role: "VP Engineering",
          company: "DataSphere Inc.",
          stars: 5,
        },
        {
          quote:
            "Dari panggilan pertama hingga go-live hanya 12 minggu. Pekerjaan UI/UX saja menghasilkan peningkatan 28% dalam retensi pengguna. Output kelas dunia.",
          name: "Priya Mehta",
          role: "Product Lead",
          company: "ClearOps",
          stars: 5,
        },
      ],
      items: [
        {
          id: 1,
          name: "Bengkel Sistem",
          description:
            "Sistem manajemen bengkel terintegrasi untuk Admin, Mekanik, dan Customer. Fitur booking service, tracking pekerjaan, dan laporan real-time.",
          tags: ["React", "Node.js", "MySQL", "REST API", "PWA"],
          accent: "#00D4FF",
          gradient: "from-[#0A0F1E] via-[#00D4FF]/20 to-[#10B981]/20",
          size: "large",
        },
        {
          id: 2,
          name: "Laundry Sistem",
          description:
            "Sistem manajemen laundry lengkap dengan point of sale, tracking cucian, dan notifikasi WhatsApp otomatis.",
          tags: ["Next.js", "PostgreSQL", "WhatsApp API", "Prisma"],
          accent: "#10B981",
          gradient: "from-[#0A0F1E] via-[#10B981]/20 to-[#06B6D4]/20",
          size: "small",
        },
        {
          id: 3,
          name: "Wedding Invitation",
          description:
            "Undangan pernikahan digital yang elegan dan interaktif. Dilengkapi RSVP online, galeri foto, dan musik latar.",
          tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
          accent: "#F43F5E",
          gradient: "from-[#0A0F1E] via-[#F43F5E]/20 to-[#F59E0B]/15",
          size: "small",
        },
        {
          id: 4,
          name: "Personal Sales Branding",
          description:
            "Platform branding personal untuk tenaga penjualan dengan landing page, katalog produk digital, dan analitik kunjungan.",
          tags: ["React", "Gatsby", "Headless CMS", "Analytics"],
          accent: "#F59E0B",
          gradient: "from-[#0A0F1E] via-[#F59E0B]/20 to-[#10B981]/15",
          size: "small",
        },
        {
          id: 5,
          name: "Education Digital Platform",
          description:
            "Platform e-learning interaktif dengan manajemen kelas, video streaming, kuis online, dan sertifikasi digital.",
          tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "FFmpeg"],
          accent: "#8B5CF6",
          gradient: "from-[#0A0F1E] via-[#8B5CF6]/20 to-[#00D4FF]/15",
          size: "large",
        },
        {
          id: 6,
          name: "Sistem Manajemen Rumah Sakit",
          description:
            "Sistem manajemen rumah sakit komprehensif mencakup pendaftaran pasien, rekam medis elektronik, farmasi, dan billing.",
          tags: ["React", "Spring Boot", "MySQL", "Docker", "HL7"],
          accent: "#EF4444",
          gradient: "from-[#0A0F1E] via-[#EF4444]/20 to-[#8B5CF6]/15",
          size: "small",
        },
        {
          id: 7,
          name: "Logbook Digital",
          description:
            "Aplikasi logbook digital untuk pencatatan aktivitas harian, laporan kerja, dan monitoring progress tim secara real-time.",
          tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
          accent: "#06B6D4",
          gradient: "from-[#0A0F1E] via-[#06B6D4]/20 to-[#8B5CF6]/15",
          size: "small",
        },
        {
          id: 8,
          name: "Dan Banyak Lagi...",
          description:
            "Kami terus berkembang dengan solusi inovatif di berbagai industri. Dari sistem retail, manajemen properti, hingga aplikasi logistik.",
          tags: ["Custom Solution", "API Integration", "Cloud Native", "AI Ready"],
          accent: "#00D4FF",
          gradient:
            "from-[#0A0F1E] via-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#10B981]/10",
          size: "wide",
        },
      ],
    },
    contact: {
      sectionLabel: "Hubungi Kami",
      heading1: "Ajukan",
      heading2: "Proposal",
      subheading:
        "Ceritakan proyek Anda dan kami akan menyiapkan proposal kustom dalam 24 jam.",
      whyTitle: "Mengapa bermitra dengan bisadibicarakan.com?",
      whyDescription:
        "Kami tidak hanya menulis kode — kami menjadi perpanjangan strategis tim Anda. Setiap keterlibatan dimulai dengan discovery mendalam untuk memastikan kami memecahkan masalah yang tepat.",
      fields: {
        fullName: "Nama Lengkap",
        email: "Alamat Email",
        company: "Nama Perusahaan",
        projectInterest: "Minat Proyek",
        estimatedBudget: "Estimasi Anggaran",
        description: "Deskripsi Proyek (opsional)",
      },
      projectOptions: [
        { value: "Web Application", label: "Aplikasi Web" },
        { value: "ERP Implementation", label: "Implementasi ERP" },
        { value: "System Architecture", label: "Arsitektur Sistem" },
        { value: "UI/UX Design", label: "Desain UI/UX" },
        { value: "IT Audit", label: "Audit IT" },
        { value: "Other", label: "Lainnya" },
      ],
      budgetOptions: [
        { value: "Under $10k", label: "Di bawah $10k" },
        { value: "$10k-$50k", label: "$10k-$50k" },
        { value: "$50k-$100k", label: "$50k-$100k" },
        { value: "$100k+", label: "$100k+" },
      ],
      submitButton: "Kirim Permintaan Proposal →",
      submitting: "Mengirim...",
      successTitle: "Permintaan Terkirim!",
      successMessage:
        "Terima kasih telah menghubungi kami. Anggota tim kami akan meninjau kebutuhan Anda dan menghubungi dalam 1 hari kerja.",
      valueProps: [
        {
          icon: "⚡",
          title: "Pengerjaan Cepat",
          description: "MVP dalam 6–12 minggu dengan pengiriman agile",
        },
        {
          icon: "🔒",
          title: "Dilindungi NDA",
          description: "IP Anda tetap milik Anda, selalu",
        },
        {
          icon: "🏆",
          title: "Tim Dedicated",
          description: "Engineer senior ditugaskan untuk proyek Anda",
        },
        {
          icon: "📊",
          title: "Harga Transparan",
          description: "Tanpa kejutan — kontrak fixed atau T&M",
        },
      ],
      validation: {
        fullNameMin: "Nama lengkap minimal 2 karakter",
        emailInvalid: "Masukkan alamat email yang valid",
        companyMin: "Nama perusahaan minimal 2 karakter",
        projectRequired: "Pilih jenis proyek",
        budgetRequired: "Pilih kisaran anggaran",
      },
    },
    footer: {
      tagline:
        "Membangun ekosistem digital yang skalabel untuk perusahaan masa depan sejak 2019.",
      copyright: "Semua hak dilindungi.",
      madeWith: "Dibuat dengan",
      byTeam: "oleh tim bisadibicarakan.com",
      sections: {
        Solutions: {
          title: "Solusi",
          links: [
            "Pengembangan Web App",
            "Implementasi ERP",
            "Arsitektur Sistem",
            "Desain UI/UX",
            "Audit IT",
          ],
        },
        Company: {
          title: "Perusahaan",
          links: ["Tentang Kami", "Karier", "Tim", "Blog", "Pers"],
        },
        Resources: {
          title: "Sumber Daya",
          links: ["Blog", "Whitepaper", "Studi Kasus", "Dokumentasi", "API"],
        },
        Legal: {
          title: "Legal",
          links: [
            "Kebijakan Privasi",
            "Syarat Layanan",
            "Kebijakan Cookie",
            "GDPR",
          ],
        },
      },
    },
  },
  en: {
    navbar: {
      solutions: "Solutions",
      company: "Company",
      resources: "Resources",
      cta: "Get a Consultation",
      solutionsItems: [
        {
          label: "Web App Development",
          description: "Scalable, performant web applications",
          icon: "⚡",
        },
        {
          label: "ERP Solutions",
          description: "End-to-end enterprise resource planning",
          icon: "🏗️",
        },
        {
          label: "System Architecture",
          description: "Future-proof infrastructure design",
          icon: "🔧",
        },
        {
          label: "UI/UX Design",
          description: "Human-centered digital experiences",
          icon: "🎨",
        },
      ],
      companyItems: ["About Us", "Careers", "Blog"],
    },
    hero: {
      badge: "Enterprise-Grade Technology Solutions",
      headline1: "Architecting Scalable",
      headline2: "Digital Ecosystems",
      subheadline:
        "We partner with forward-thinking enterprises to build robust, high-performance digital platforms — from custom web applications and ERP systems to end-to-end architecture audits.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Our Work",
      trustItems: [
        { value: "50+", label: "Projects" },
        { value: "99.9%", label: "Uptime" },
        { value: "5★", label: "Reviews" },
      ],
      scrollLabel: "Scroll",
    },
    services: {
      sectionLabel: "Solutions & Services",
      heading1: "What We",
      heading2: "Build",
      subheading:
        "From concept to deployment, we deliver enterprise software that performs at scale and adapts to your evolving business needs.",
      learnMore: "Learn More",
      workflowTitle1: "How We",
      workflowTitle2: "Work",
      items: [
        {
          icon: "⚡",
          title: "Custom Web Application Development",
          description:
            "We craft high-performance, scalable web applications tailored to your business processes. From SPAs to complex multi-tenant platforms, we engineer solutions that grow with you.",
          tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
          accent: "#00D4FF",
        },
        {
          icon: "🏗️",
          title: "Enterprise ERP Solutions",
          description:
            "Streamline operations with custom ERP systems that unify finance, HR, inventory, and CRM into a single, intelligent platform designed for your industry.",
          tags: [
            "SAP Integration",
            "REST APIs",
            "Microservices",
            "Docker",
            "Redis",
          ],
          accent: "#10B981",
        },
        {
          icon: "🔧",
          title: "System Architecture & Audit",
          description:
            "We assess your existing infrastructure and architect resilient, cloud-native solutions. Our audits identify bottlenecks and deliver actionable roadmaps.",
          tags: ["AWS", "GCP", "Kubernetes", "CI/CD", "Security Audit"],
          accent: "#8B5CF6",
        },
        {
          icon: "🎨",
          title: "UI/UX & Digital Product Design",
          description:
            "Human-centered design that converts. We deliver complete design systems, interactive prototypes, and pixel-perfect interfaces that delight users.",
          tags: [
            "Figma",
            "Design Systems",
            "Prototyping",
            "A/B Testing",
            "WCAG",
          ],
          accent: "#F59E0B",
        },
      ],
      workflowSteps: [
        {
          num: "01",
          icon: "🔍",
          title: "Discovery",
          description: "Deep-dive into your goals, constraints, and user needs.",
        },
        {
          num: "02",
          icon: "📐",
          title: "Architecture",
          description: "Design scalable systems and technical blueprints.",
        },
        {
          num: "03",
          icon: "💻",
          title: "Development",
          description:
            "Agile sprints with weekly demos and continuous delivery.",
        },
        {
          num: "04",
          icon: "🚀",
          title: "Deployment",
          description: "Zero-downtime launches with full monitoring setup.",
        },
        {
          num: "05",
          icon: "🛡️",
          title: "Maintenance",
          description: "24/7 monitoring, updates, and ongoing optimisation.",
        },
      ],
    },
    metrics: {
      sectionLabel: "By the Numbers",
      heading1: "Results That",
      heading2: "Speak",
      items: [
        {
          label: "Projects Delivered",
          description: "Enterprise solutions shipped across 10+ industries",
        },
        {
          label: "Uptime SLA",
          description: "Mission-critical reliability, guaranteed",
        },
        {
          label: "Happy Clients",
          description: "Long-term partnerships built on trust",
        },
        {
          label: "Experience",
          description: "Deep domain expertise across enterprise tech",
        },
        {
          label: "Support",
          description: "Always-on monitoring and rapid response",
        },
      ],
    },
    projects: {
      sectionLabel: "Trust & Case Studies",
      heading1: "Proven at",
      heading2: "Scale",
      viewCaseStudy: "View Case Study",
      clientLogos: [
        "FinTechPro",
        "AquaLogic",
        "NovaMed",
        "SkyBuild",
        "DataSphere",
        "ClearOps",
        "UrbanFlow",
        "GridCore",
        "PeakSync",
        "HorizonAI",
      ],
      testimonialsTitle1: "What Our",
      testimonialsTitle2: "Clients Say",
      testimonials: [
        {
          quote:
            "bisadibicarakan.com transformed our legacy infrastructure into a modern, cloud-native platform. Delivery was on time, on budget, and the quality exceeded every benchmark we set.",
          name: "Sarah Chen",
          role: "CTO",
          company: "FinTechPro",
          stars: 5,
        },
        {
          quote:
            "The ERP system they built for us reduced operational overhead by 40% in the first quarter. The team's domain knowledge in healthcare workflows is unmatched.",
          name: "Dr. James Okafor",
          role: "Director of Operations",
          company: "NovaMed Group",
          stars: 5,
        },
        {
          quote:
            "Working with bisadibicarakan.com felt like having a senior engineering team embedded inside our company. Their architecture audit identified risks we didn't even know existed.",
          name: "Mark Lewinski",
          role: "VP Engineering",
          company: "DataSphere Inc.",
          stars: 5,
        },
        {
          quote:
            "From first call to go-live was 12 weeks. The UI/UX work alone generated a 28% improvement in user retention. Absolutely world-class output.",
          name: "Priya Mehta",
          role: "Product Lead",
          company: "ClearOps",
          stars: 5,
        },
      ],
      items: [
        {
          id: 1,
          name: "Workshop Management System",
          description:
            "Integrated workshop management system for Admin, Mechanic, and Customer. Features service booking, work tracking, and real-time reporting.",
          tags: ["React", "Node.js", "MySQL", "REST API", "PWA"],
          accent: "#00D4FF",
          gradient: "from-[#0A0F1E] via-[#00D4FF]/20 to-[#10B981]/20",
          size: "large",
        },
        {
          id: 2,
          name: "Laundry Management System",
          description:
            "Complete laundry management system with point of sale, laundry tracking, and automatic WhatsApp notifications.",
          tags: ["Next.js", "PostgreSQL", "WhatsApp API", "Prisma"],
          accent: "#10B981",
          gradient: "from-[#0A0F1E] via-[#10B981]/20 to-[#06B6D4]/20",
          size: "small",
        },
        {
          id: 3,
          name: "Digital Wedding Invitation",
          description:
            "Elegant and interactive digital wedding invitation. Complete with online RSVP, photo gallery, and background music.",
          tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
          accent: "#F43F5E",
          gradient: "from-[#0A0F1E] via-[#F43F5E]/20 to-[#F59E0B]/15",
          size: "small",
        },
        {
          id: 4,
          name: "Personal Sales Branding",
          description:
            "Personal branding platform for sales professionals with landing pages, digital product catalogs, and visitor analytics.",
          tags: ["React", "Gatsby", "Headless CMS", "Analytics"],
          accent: "#F59E0B",
          gradient: "from-[#0A0F1E] via-[#F59E0B]/20 to-[#10B981]/15",
          size: "small",
        },
        {
          id: 5,
          name: "Education Digital Platform",
          description:
            "Interactive e-learning platform with classroom management, video streaming, online quizzes, and digital certification.",
          tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "FFmpeg"],
          accent: "#8B5CF6",
          gradient: "from-[#0A0F1E] via-[#8B5CF6]/20 to-[#00D4FF]/15",
          size: "large",
        },
        {
          id: 6,
          name: "Hospital Management System",
          description:
            "Comprehensive hospital management system covering patient registration, electronic medical records, pharmacy, and billing.",
          tags: ["React", "Spring Boot", "MySQL", "Docker", "HL7"],
          accent: "#EF4444",
          gradient: "from-[#0A0F1E] via-[#EF4444]/20 to-[#8B5CF6]/15",
          size: "small",
        },
        {
          id: 7,
          name: "Digital Logbook",
          description:
            "Digital logbook application for daily activity recording, work reports, and real-time team progress monitoring.",
          tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
          accent: "#06B6D4",
          gradient: "from-[#0A0F1E] via-[#06B6D4]/20 to-[#8B5CF6]/15",
          size: "small",
        },
        {
          id: 8,
          name: "And Many More...",
          description:
            "We continue to grow with innovative solutions across industries. From retail systems, property management, to logistics applications.",
          tags: [
            "Custom Solution",
            "API Integration",
            "Cloud Native",
            "AI Ready",
          ],
          accent: "#00D4FF",
          gradient:
            "from-[#0A0F1E] via-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#10B981]/10",
          size: "wide",
        },
      ],
    },
    contact: {
      sectionLabel: "Get In Touch",
      heading1: "Request a",
      heading2: "Proposal",
      subheading:
        "Tell us about your project and we'll put together a custom proposal within 24 hours.",
      whyTitle: "Why partner with bisadibicarakan.com?",
      whyDescription:
        "We don't just write code — we become a strategic extension of your team. Every engagement starts with deep discovery to ensure we're solving the right problems.",
      fields: {
        fullName: "Full Name",
        email: "Email Address",
        company: "Company Name",
        projectInterest: "Project Interest",
        estimatedBudget: "Estimated Budget",
        description: "Project Description (optional)",
      },
      projectOptions: [
        { value: "Web Application", label: "Web Application" },
        { value: "ERP Implementation", label: "ERP Implementation" },
        { value: "System Architecture", label: "System Architecture" },
        { value: "UI/UX Design", label: "UI/UX Design" },
        { value: "IT Audit", label: "IT Audit" },
        { value: "Other", label: "Other" },
      ],
      budgetOptions: [
        { value: "Under $10k", label: "Under $10k" },
        { value: "$10k-$50k", label: "$10k-$50k" },
        { value: "$50k-$100k", label: "$50k-$100k" },
        { value: "$100k+", label: "$100k+" },
      ],
      submitButton: "Submit Proposal Request →",
      submitting: "Sending...",
      successTitle: "Proposal Request Sent!",
      successMessage:
        "Thank you for reaching out. A member of our team will review your requirements and get back to you within 1 business day.",
      valueProps: [
        {
          icon: "⚡",
          title: "Fast Turnaround",
          description: "MVP in 6–12 weeks with agile delivery",
        },
        {
          icon: "🔒",
          title: "NDA Protected",
          description: "Your IP stays yours, always",
        },
        {
          icon: "🏆",
          title: "Dedicated Team",
          description: "Senior engineers assigned to your project",
        },
        {
          icon: "📊",
          title: "Transparent Pricing",
          description: "No surprises — fixed or T&M contracts",
        },
      ],
      validation: {
        fullNameMin: "Full name must be at least 2 characters",
        emailInvalid: "Please enter a valid email address",
        companyMin: "Company name must be at least 2 characters",
        projectRequired: "Please select a project type",
        budgetRequired: "Please select a budget range",
      },
    },
    footer: {
      tagline:
        "Architecting scalable digital ecosystems for forward-thinking enterprises since 2019.",
      copyright: "All rights reserved.",
      madeWith: "Made with",
      byTeam: "by the bisadibicarakan.com team",
      sections: {
        Solutions: {
          title: "Solutions",
          links: [
            "Web Application Dev",
            "ERP Implementation",
            "System Architecture",
            "UI/UX Design",
            "IT Audit",
          ],
        },
        Company: {
          title: "Company",
          links: ["About Us", "Careers", "Team", "Blog", "Press"],
        },
        Resources: {
          title: "Resources",
          links: [
            "Blog",
            "Whitepapers",
            "Case Studies",
            "Documentation",
            "API",
          ],
        },
        Legal: {
          title: "Legal",
          links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "GDPR",
          ],
        },
      },
    },
  },
} as const;

export type Translations = Widen<(typeof translations)["id"]>;
