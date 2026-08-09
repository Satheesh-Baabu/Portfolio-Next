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

doc.fillColor(textColor).fontSize(9).font('Helvetica')
   .text('Sivakasi, Tamil Nadu, India  |  satheeshbaabum@gmail.com  |  +91 9360301475', { align: 'center' })
   .text('LinkedIn: linkedin.com/in/satheeshbaabum  |  GitHub: github.com/Satheesh-Baabu', { align: 'center' });

doc.moveDown(0.6);
doc.strokeColor('#CBD5E1').lineWidth(0.8).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.5);

// Summary Section
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
doc.moveDown(0.2);
doc.fillColor(textColor).fontSize(9).font('Helvetica').text(
  'Full Stack Developer with 1+ year of industry experience building scalable web applications using Next.js, TypeScript, React, Node.js, and MongoDB. Experienced in developing CMS-driven websites, REST APIs, e-commerce applications, and production-ready web solutions.'
);
doc.moveDown(0.6);

// Professional Experience Section
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.2);

doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('AIIMTECH Software System', { continued: true });
doc.fillColor(lightText).fontSize(9).font('Helvetica').text('  — Sivakasi, Tamil Nadu', { continued: true });
doc.fillColor(accentColor).fontSize(9).font('Helvetica-Bold').text(' (Jun 2025 – Present)', { align: 'right' });

doc.fillColor(textColor).fontSize(9).font('Helvetica-Oblique').text('Full Stack Developer');
doc.moveDown(0.2);

const bullets = [
  'Designed and developed production-ready web applications using Next.js, TypeScript, Node.js, Express.js, Laravel, and MongoDB.',
  'Built responsive and reusable UI components using Next.js and Tailwind CSS.',
  'Developed and integrated RESTful APIs and worked with MongoDB and MySQL databases.',
  'Built CMS-driven websites using Headless WordPress with Next.js.',
  'Developed e-commerce functionality including product management, shopping cart, order management, and Razorpay payment integration.',
  'Managed production deployments using AWS EC2 and Vercel.'
];

bullets.forEach(b => {
  doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text(`•  ${b}`, { indent: 10 });
  doc.moveDown(0.1);
});

doc.moveDown(0.5);

// Projects Section
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('KEY PROJECTS & APPLICATIONS');
doc.moveDown(0.2);

// Personal Project
doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('NestStay — Property Rental Platform ', { continued: true });
doc.fillColor(accentColor).fontSize(8).font('Helvetica').text('[Featured Personal Project]');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Tech: Next.js, TypeScript, MongoDB, Tailwind CSS, Zod, React Hook Form, Recharts, JWT');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Full-stack property rental management platform including property search & filtering, authentication, booking workflows, and admin analytics dashboard.', { indent: 8 });
doc.moveDown(0.3);

// Professional Projects
doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('Sigma Transport — Logistics & Driver Recruitment Platform ', { continued: true });
doc.fillColor(lightText).fontSize(8).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Tech: Next.js, TypeScript, Headless WordPress, MongoDB, Tailwind CSS, AWS EC2  |  sigmatransport.com');
doc.moveDown(0.3);

doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('Amirthan Oil Mills — E-commerce Platform ', { continued: true });
doc.fillColor(lightText).fontSize(8).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Tech: Next.js, TypeScript, Tailwind CSS, Express.js, MongoDB, Razorpay  |  amirthanoilmills.com');
doc.moveDown(0.3);

doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('Cinqcare — Healthcare Web Portals ', { continued: true });
doc.fillColor(lightText).fontSize(8).font('Helvetica').text('[Professional Project]');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Tech: Next.js, Tailwind CSS, Headless WordPress, Vercel  |  Role: Frontend Developer  |  cinq.care');
doc.moveDown(0.3);

doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('V Print Tech & Smart Restaurant Ordering Systems ', { continued: true });
doc.fillColor(lightText).fontSize(8).font('Helvetica').text('[MERN Web Apps]');
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Tech: React.js, Node.js, Express.js, MongoDB, Socket.io, Razorpay  |  vprinttech.netlify.app & msvrestaurant.vercel.app');

doc.moveDown(0.5);

// Technical Skills
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('TECHNICAL SKILLS');
doc.moveDown(0.2);
doc.fillColor(textColor).fontSize(8.5).font('Helvetica')
   .text('Frontend: ', { font: 'Helvetica-Bold', continued: true })
   .text('Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3')
   .text('Backend & DB: ', { font: 'Helvetica-Bold', continued: true })
   .text('Node.js, Express.js, Next.js API Routes, Laravel, MongoDB, MySQL')
   .text('Tools & Cloud: ', { font: 'Helvetica-Bold', continued: true })
   .text('Git, GitHub, Bitbucket, Postman, Vercel, AWS EC2, cPanel');

doc.moveDown(0.5);

// Education
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.2);
doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('Bachelor of Science in Computer Science', { continued: true });
doc.fillColor(accentColor).fontSize(8.5).font('Helvetica-Bold').text(' (2022 – 2025)  |  CGPA: 8/10', { align: 'right' });
doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text('Ayya Nadar Janaki Ammal College, Sivakasi, Tamil Nadu  |  Class 12 CS: 100/100');

doc.end();
console.log('PDF generated successfully!');
