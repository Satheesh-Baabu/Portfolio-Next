/* eslint-disable @typescript-eslint/no-require-imports */
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outputPath = path.join(__dirname, '../public/Satheesh-Baabu-Resume.pdf');

doc.pipe(fs.createWriteStream(outputPath));

// Colors
const primaryColor = '#0F1F35';
const accentColor = '#2563EB';
const textColor = '#334155';
const lightText = '#64748B';

// Header
doc.fillColor(primaryColor).fontSize(22).font('Helvetica-Bold').text('SATHEESH BAABU M', { align: 'center' });
doc.moveDown(0.2);
doc.fillColor(accentColor).fontSize(13).font('Helvetica-Bold').text('Full Stack Developer', { align: 'center' });
doc.moveDown(0.3);

doc.fillColor(textColor).fontSize(9.5).font('Helvetica')
   .text('Sivakasi, Tamil Nadu, India  |  satheeshbaabum@gmail.com  |  +91 9360301475', { align: 'center' })
   .text('LinkedIn: linkedin.com/in/satheeshbaabum  |  Portfolio: satheeshbaabum-portfolio.netlify.app', { align: 'center' });

doc.moveDown(0.8);
doc.strokeColor('#CBD5E1').lineWidth(0.8).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.6);

// Summary Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
doc.moveDown(0.3);
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text(
  'Full Stack Developer with 1+ year of industry experience building scalable web applications using Next.js, TypeScript, React, Node.js, and MongoDB. Experienced in developing CMS-driven websites, REST APIs, e-commerce applications, and production-ready web solutions.'
);
doc.moveDown(0.8);

// Professional Experience Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.3);

doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('AIIMTECH Software System', { continued: true });
doc.fillColor(lightText).fontSize(9.5).font('Helvetica').text('  — Sivakasi, Tamil Nadu', { continued: true });
doc.fillColor(accentColor).fontSize(9.5).font('Helvetica-Bold').text(' (Jun 2025 – Present)', { align: 'right' });

doc.fillColor(textColor).fontSize(9.5).font('Helvetica-Oblique').text('Full Stack Developer');
doc.moveDown(0.3);

const bullets = [
  'Designed and developed production-ready web applications using Next.js, TypeScript, Node.js, Express.js, Laravel, and MongoDB.',
  'Built responsive and reusable UI components using Next.js and Tailwind CSS.',
  'Developed and integrated RESTful APIs and worked with MongoDB and MySQL databases.',
  'Built CMS-driven websites using Headless WordPress with Next.js.',
  'Developed e-commerce functionality including product management, shopping cart, order management, and Razorpay payment integration.',
  'Managed production deployments using AWS EC2 and Vercel.',
  'Collaborated with teams using Git and Agile methodologies.'
];

bullets.forEach(b => {
  doc.fillColor(textColor).fontSize(9).font('Helvetica').text(`•  ${b}`, { indent: 10 });
  doc.moveDown(0.15);
});

doc.moveDown(0.6);

// Projects Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('KEY PROJECTS');
doc.moveDown(0.3);

// Personal Project
doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('NestStay — Property Rental Platform ', { continued: true });
doc.fillColor(accentColor).fontSize(8.5).font('Helvetica').text('[Featured Personal Project]');
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Tech: Next.js, TypeScript, MongoDB, Mongoose, Tailwind CSS, Zod, React Hook Form, Recharts, JWT');
doc.fillColor(textColor).fontSize(8.8).font('Helvetica').text('Full-stack property rental management platform including property search & filtering, authentication, role-based authorization, booking workflows, favorites, and admin analytics dashboard.', { indent: 10 });
doc.moveDown(0.4);

// Professional Projects
doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Sigma Transport — Logistics & Driver Recruitment Platform ', { continued: true });
doc.fillColor(lightText).fontSize(8.5).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Tech: Next.js, TypeScript, Headless WordPress, MongoDB, Tailwind CSS, AWS EC2  |  Live: sigmatransport.com');
doc.fillColor(textColor).fontSize(8.8).font('Helvetica').text('Production logistics platform featuring dynamic CMS-driven content, 7-step driver application workflow, and AWS EC2 deployment.', { indent: 10 });
doc.moveDown(0.4);

doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Amirthan Oil Mills — E-commerce Platform ', { continued: true });
doc.fillColor(lightText).fontSize(8.5).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Tech: Next.js, TypeScript, Tailwind CSS, Express.js, MongoDB, Razorpay  |  Live: amirthanoilmills.com');
doc.fillColor(textColor).fontSize(8.8).font('Helvetica').text('E-commerce platform with product catalog, shopping cart, secure checkout, Razorpay payment integration, and admin order dashboard.', { indent: 10 });
doc.moveDown(0.4);

doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Cinqcare — Healthcare Web Portals ', { continued: true });
doc.fillColor(lightText).fontSize(8.5).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Tech: Next.js, Tailwind CSS, Headless WordPress, Vercel  |  Role: Frontend Developer  |  Live: cinq.care');
doc.fillColor(textColor).fontSize(8.8).font('Helvetica').text('CMS-driven healthcare web portals developed using Next.js and Headless WordPress with responsive Tailwind components.', { indent: 10 });

doc.moveDown(0.6);

// Technical Skills
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('TECHNICAL SKILLS');
doc.moveDown(0.3);
doc.fillColor(textColor).fontSize(9).font('Helvetica')
   .text('Frontend: ', { font: 'Helvetica-Bold', continued: true })
   .text('Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3')
   .text('Backend & DB: ', { font: 'Helvetica-Bold', continued: true })
   .text('Node.js, Express.js, Next.js API Routes, Laravel, MongoDB, MySQL')
   .text('Tools & Cloud: ', { font: 'Helvetica-Bold', continued: true })
   .text('Git, GitHub, Bitbucket, Postman, Vercel, AWS EC2, cPanel')
   .text('Architecture & APIs: ', { font: 'Helvetica-Bold', continued: true })
   .text('REST APIs, JWT Authentication, Razorpay, Redux, Headless WordPress');

doc.moveDown(0.6);

// Education
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.3);
doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Bachelor of Science in Computer Science', { continued: true });
doc.fillColor(accentColor).fontSize(9).font('Helvetica-Bold').text(' (2022 – 2025)  |  CGPA: 8/10', { align: 'right' });
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Ayya Nadar Janaki Ammal College, Sivakasi, Tamil Nadu');
doc.fillColor(textColor).fontSize(9).font('Helvetica').text('Class 12 Computer Science: 100/100');

doc.end();
console.log('PDF generated successfully!');
