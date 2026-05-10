// ── Projects ──

const projects = {
    proj1: {
        title:    'Personal Portfolio Website',
        subtitle: 'A responsive personal portfolio website built with HTML, CSS, and JavaScript, showcasing my skills and projects.',
        thumbnail: 'images/proj1.png',
        techs: ['HTML', 'CSS', 'JavaScript'],
        links: [
            { label: 'View GitHub Repo', icon: 'fab fa-github',            href: 'https://github.com/johnmichaelmujar/Portfolio' },
            { label: 'Live Demo',        icon: 'fas fa-external-link-alt', href: 'https://johnmichaelmujar.github.io/Portfolio/', primary: true },
        ],
        overview: `This personal portfolio website was built to showcase my skills, educational background, and projects in a clean and professional format. The site is fully responsive and works across desktop and mobile devices.`,
        features: [
            '<strong>Responsive Layout:</strong> Adapts to all screen sizes using CSS Grid and Flexbox.',
            '<strong>Typed Animation:</strong> Dynamic subtitle using Typed.js for animated role display.',
            '<strong>Smooth Navigation:</strong> Scroll-based active link highlighting and smooth section transitions.',
            '<strong>Project Showcase:</strong> Interactive project cards with detail overlay pages.',
            '<strong>Contact Section:</strong> Direct email link for quick outreach.',
        ],
        role: 'I designed and developed this portfolio from scratch, handling both the layout design and all JavaScript interactivity.',
        acknowledgement: null,
    },

    projSZ: {
        title:    'STIzen',
        subtitle: 'An Integrated Web-Based Academic Scheduling Management System for STI College Naga.',
        thumbnail: 'images/projSZ.png',
        techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        links: [
            { label: 'View GitHub Repo',      icon: 'fab fa-github',    href: 'https://github.com/johnmichaelmujar/STIzen' },
            { label: 'Download Manuscript',   icon: 'fas fa-file-pdf',  href: 'pdfs/STIzenSystemFinal_Manuscript_Version1.5.pdf', download: 'STIzenSystemFinal_Manuscript_Version1.5.pdf', primary: true },
        ],
        overview: `STIzen is an integrated web-based academic scheduling management system developed for STI College Naga. The system streamlines the scheduling process for both Senior High School and Tertiary levels — covering class scheduling, exam and proctoring assignments, room management, faculty management, and academic event coordination. It replaces manual, paper-based scheduling with a centralized digital platform that improves accuracy and efficiency across the institution.`,
        features: [
            '<strong>Class Scheduling (SHS & Tertiary):</strong> Automated class schedule creation and publishing for both Senior High School and Tertiary programs.',
            '<strong>Exam & Proctoring Management:</strong> Assign proctors and schedule examinations with conflict-free room and faculty allocation.',
            '<strong>Room Management:</strong> Monitor room utilization and occupancy status with visual analytics.',
            '<strong>Faculty Management:</strong> Track faculty assignments, teaching history, and workload distribution.',
            '<strong>Course & Section Management:</strong> Organize courses and sections with full scheduling integration.',
            '<strong>Event Board:</strong> School-wide event posting and management visible to all users.',
            '<strong>Dashboard Analytics:</strong> Real-time overview of published classes, occupied rooms, active faculty, and room utilization by section.',
            '<strong>User Management & Audit Logs:</strong> Role-based access control with full activity logging for accountability.',
            '<strong>Schedule Versioning:</strong> Maintain and manage multiple schedule versions across academic periods.',
            '<strong>Responsive Interface:</strong> Clean and professional UI accessible on desktop and tablet devices.',
        ],
        role: 'I was part of the development team responsible for system design, database architecture, and frontend development of the scheduling and dashboard modules.',
        acknowledgement: 'This project was one of the prototypes we developed as part of our capstone title proposal in the STI College Naga — BS in Information Technology program. It was created to explore the feasibility, functionality, and overall potential of our proposed system before full project implementation. This prototype reflects our team’s effort in applying software development principles, user-centered design, and technical problem-solving skills gained throughout our academic journey.',
    },

    projSS: {
        title:    'SmartStock: Inventory, Sales & Finance MIS',
        subtitle: 'A web-based Inventory, Sales, and Finance Management Information System developed for Salak Sari-Sari Store.',
        thumbnail: 'images/projSS.png',
        techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        links: [
            { label: 'View GitHub Repo',    icon: 'fab fa-github',   href: 'https://github.com/johnmichaelmujar/SmartStock-MIS', target: '_blank' },
            { label: 'Download Manuscript', icon: 'fas fa-file-pdf', href: 'pdfs/SmartStock_Manuscript.pdf', download: 'SmartStock_Manuscript.pdf', primary: true },
        ],
        overview: `SmartStock is a web-based Management Information System proposed and designed for Salak Sari-Sari Store — a local retail store that previously relied on manual, paper-based methods for managing inventory, sales, and financial records. The system centralizes all store operations into a single digital platform, reducing manual errors and providing real-time business insights.`,
        features: [
            '<strong>Secure Login System:</strong> Username and password authentication to restrict access to authorized users only.',
            '<strong>Inventory Management:</strong> Add, edit, delete, and search product records including name, category, price, stock quantity, and expiration date.',
            '<strong>Sales Recording & Auto-Calculation:</strong> Record daily sales transactions with automatic stock deduction and total price computation.',
            '<strong>Expense Management:</strong> Log and categorize store expenses such as utilities and restocking for financial tracking.',
            '<strong>Dashboard Overview:</strong> Real-time display of total sales revenue, total expenses, net profit, and low-stock alerts.',
            '<strong>Sales & Financial Reports:</strong> Generate daily and monthly sales summaries and financial reports showing revenue, expenses, and profit.',
            '<strong>Product Performance Monitoring:</strong> Identify top-selling and slow-moving products based on sales data.',
            '<strong>Stock & Expiry Alerts:</strong> Automatic detection and dashboard alerts for low-stock and nearly expired products.',
            '<strong>Charts & Analytics:</strong> Visual charts displaying monthly sales trends and product performance for data-driven decision-making.',
            '<strong>Mobile Responsive Interface:</strong> Fully responsive layout that adapts to desktops, tablets, and smartphones.',
            '<strong>Appearance Customization:</strong> Users can change the system color theme to their preference.',
        ],
        role: 'I am one of the lead proponents of this project. My responsibilities included system planning, feature specification, and frontend development of the login interface.',
        acknowledgement: 'This project was developed as part of our academic requirements in the Web Systems and Technologies course at STI College Naga. It allowed our team to apply our knowledge in web design, front-end development, and system planning while gaining practical experience in collaborative project development. Submitted to Everild Gerd A. Pablo as a Web Application Proposal. Developed by John Michael V. Mujar, Mary Ann S. Lumbria, and Akisha Mekel San Miguel — March 2026.',
    },

    projOC: {
        title:    'OneCaroyroyan',
        subtitle: 'A Web-Based Barangay E-Service and Management Information System for Barangay Caroyroyan.',
        thumbnail: 'images/projOC.png',
        techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        links: [
            { label: 'View GitHub Repo',    icon: 'fab fa-github',   href: 'https://github.com/johnmichaelmujar/OneCaroyroyan' },
            { label: 'Download Manuscript', icon: 'fas fa-file-pdf', href: 'pdfs/OneCaroyroyan_Manuscript.pdf', download: 'OneCaroyroyan_Manuscript.pdf', primary: true },
        ],
        overview: `OneCaroyroyan is a web-based internal management system designed to digitalize and streamline the operations of Barangay Caroyroyan. The system supports walk-in service transactions by providing a centralized platform for certificate generation, resident records, financial documentation, blotter management, and official correspondence tracking — all aligned with DILG procedural mandates.`,
        features: [
            '<strong>Role-Based Authentication:</strong> Secure login for five roles — Barangay Captain, Secretary, Administrator, Accounting Clerk, and Treasurer — each with tailored access and dashboards.',
            '<strong>Resident Information Management:</strong> Centralized database for resident records with semi-automated generation of Barangay Clearance, Certificate of Residency, Certificate of Indigency, Cedula, and Business Clearance.',
            '<strong>Payment Recording System:</strong> Cash transaction recording with official receipt generation, managed by the Accounting Clerk and validated by the Treasurer.',
            '<strong>Official Correspondence & Document Tracking:</strong> Hybrid module for logging physical letters from walk-in sectors and receiving digital uploads from LGU/National Agencies, with auto-generated electronic tracking numbers.',
            '<strong>Blotter & Complaint Management:</strong> Encode, track, and monitor complaints and blotter cases with status updates (Pending, Ongoing, Settled, Dismissed) and filterable reports.',
            '<strong>Automated Reports & Dashboards:</strong> Real-time dashboards and exportable PDF reports for certificate issuance, financial collections, and complaint summaries to support data-driven governance.',
        ],
        role: 'As part of a three-person team, I contributed to the system design, data flow diagrams, and documentation of the proposed web-based system, covering its functional modules, role-based features, and operational workflow aligned with DILG standards.',
        acknowledgement: 'This project was one of the prototypes developed as part of our capstone title proposal at STI College Naga. It was created to evaluate the feasibility, functionality, and potential of our proposed system before full-scale development and implementation.',
    },

    projDS: {
        title:    'DriftService Pro',
        subtitle: 'A Web-Based Operations Management and Financial Monitoring System for Custoworks Car Wash & Detailing.',
        thumbnail: 'images/projDS.png',
        techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        links: [
            { label: 'View GitHub Repo',    icon: 'fab fa-github',   href: 'https://github.com/johnmichaelmujar/DriftServicePro' },
            { label: 'Download Manuscript', icon: 'fas fa-file-pdf', href: 'pdfs/DriftService_Manuscript.pdf', download: 'DriftService_Manuscript.pdf', primary: true },
        ],
        overview: `DriftService Pro is a Senior/Capstone project proposed for Custoworks Car Wash & Detailing — a local car wash business that relied on manual, paper-based processes for bookings, transactions, and financial records. The system centralizes all operations into a single web-based platform, improving efficiency, accuracy, and service quality.`,
        features: [
            '<strong>Online Booking & Scheduling:</strong> Customers can book services online, reducing scheduling conflicts and improving time management.',
            '<strong>Smart Point-of-Sale (POS):</strong> Automates service selection, pricing, and payment processing for faster and more accurate transactions.',
            '<strong>Job Order & Workflow Tracking:</strong> Monitors each service job from start to completion with real-time status updates.',
            '<strong>QR Code-Based Monitoring:</strong> Customers can scan a QR code to track their vehicle\'s service progress in real time.',
            '<strong>Automated Inventory Management:</strong> Tracks supplies and automatically deducts stock upon service completion.',
            '<strong>Staff Performance Monitoring:</strong> Records staff tasks and productivity for better workforce management.',
            '<strong>Financial Monitoring & Reporting:</strong> Records sales and expenses, and generates daily and monthly financial reports.',
            '<strong>Real-Time Notification System:</strong> Notifies users and customers of updates, booking confirmations, and service completions.',
            '<strong>Dashboard Analytics:</strong> Visual business data overview including revenue, expenses, and service trends.',
            '<strong>Role-Based Access Control (RBAC):</strong> Separate access levels for Administrator, Cashier, Staff, and Customer.',
        ],
        role: 'I am one of the lead proponents of this Capstone project. My responsibilities include system design, documentation, and development — covering frontend UI, database schema, and core backend logic.',
        acknowledgement: 'This project was one of the prototypes developed as part of our capstone title proposal at STI College Naga. It was created to evaluate the feasibility, functionality, and potential of our proposed system before full-scale development and implementation.',
    },
};

function openProject(id) {
    const p = projects[id];
    if (!p) return;

    const techTagsHTML = p.techs.map(t => `<span class="detail-tech-tag">${t}</span>`).join('');

    const linksHTML = p.links.map(l =>
        `<a href="${l.href}" ${l.download ? `download="${l.download}"` : `target="${l.target || '_blank'}"`} class="detail-link-btn${l.primary ? ' primary' : ''}">
            <i class="${l.icon}"></i> ${l.label}
        </a>`
    ).join('');

    const featuresHTML = p.features.map(f => `<li>${f}</li>`).join('');

    const imgHTML = p.thumbnail
        ? `<img src="${p.thumbnail}" alt="${p.title}" class="detail-screenshot">`
        : `<div class="project-thumbnail-placeholder" style="height:300px;border-radius:0.5rem;">${p.thumbnailEmoji}</div>`;

    const ackHTML = p.acknowledgement
        ? `<div class="detail-acknowledgement">
               <h2>Acknowledgement</h2>
               <p>${p.acknowledgement}</p>
           </div>`
        : '';

    document.getElementById('detail-content-inner').innerHTML = `
        <div class="detail-header-box">
            <h1>${p.title}</h1>
            <p class="detail-subtitle">${p.subtitle}</p>
        </div>
        <hr class="detail-divider">
        <div class="detail-body">
            <div class="detail-main">
                ${imgHTML}
                <h2 style="margin-top:2rem;">Project Overview & Features</h2>
                <p>${p.overview}</p>
                <h3>Key Features Implemented:</h3>
                <ul>${featuresHTML}</ul>
                <h3>My Role & Contributions:</h3>
                <p>${p.role}</p>
                ${ackHTML}
            </div>
            <div class="detail-sidebar">
                <h3>Technologies Used</h3>
                <div class="detail-tech-tags">${techTagsHTML}</div>
                <h3>Links</h3>
                <div class="detail-links">${linksHTML}</div>
            </div>
        </div>
    `;

    const detailPage = document.getElementById('project-detail-page');
    detailPage.classList.add('active');
    detailPage.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('project-detail-page').classList.remove('active');
    document.body.style.overflow = '';
}
