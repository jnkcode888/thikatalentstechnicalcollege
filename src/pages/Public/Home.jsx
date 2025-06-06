import React from 'react';
import Button from '../../components/ui/Button';

const heroImg = 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=600&q=80';
const wiringImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80';
const studentsImg = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=600&q=80';
const draftingImg = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&q=80';
const labImg = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80';
const robotImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80';

const departments = [
  {
    title: 'SCHOOL OF BUSINESS AND ACCOUNTING',
    courses: [
      'Diploma in Human Resource Management',
      'Certificate in Human Resource Management',
      'Diploma in Business Management',
      'Diploma in Business Administration',
      'Diploma in Accountancy',
      'Certificate in Accountancy',
      'Diploma in Sales and Marketing',
      'Certificate in Sales and Marketing',
      'Diploma in Supply Chain Management',
      'Certificate in Public Relations',
      'Certificate in Salesmanship',
      'Diploma in Banking and Finance',
      'Certificate in Banking and Finance',
      'CPA & ATD',
      'Artisan in Store Keeping',
      'Event Planning and Management'
    ]
  },
  {
    title: 'SCHOOL OF HOSPITALITY AND CATERING',
    courses: [
      'Diploma in Hotel and Catering Management',
      'Certificate in Hotel and Catering Management',
      'Certificate in Pastry and Bakery',
      'Diploma in Tourism and Travel',
      'Certificate in Tourism and Travel',
      'Diploma in Catering and Accommodation',
      'Certificate in Catering and Accommodation'
    ]
  },
  {
    title: 'SCHOOL OF BEAUTY AND FASHION',
    courses: [
      'Diploma in Cosmetology',
      'Diploma in Hairdressing and Beauty Therapy',
      'Certificate in Hairdressing and Beauty Therapy',
      'Diploma in Fashion Design',
      'Craft Certificate in Tailoring and Dressmaking',
      'Certificate in Fashion Design'
    ]
  },
  {
    title: 'SCHOOL OF INFORMATION TECHNOLOGY',
    courses: [
      'Diploma in ICT',
      'Certificate in ICT',
      'Computer Engineering (Level IV-VI)',
      'Computer Packages',
      'ICDL',
      'Graphic Design',
      'Web Design'
    ]
  },
  {
    title: 'SCHOOL OF SECRETARIAL STUDIES',
    courses: [
      'Diploma in Secretarial Studies',
      'Certificate in Secretarial Studies'
    ]
  },
  {
    title: 'SCHOOL OF ENGINEERING',
    courses: [
      'Diploma in Electrical Engineering',
      'Certificate in Electrical Engineering',
      'Diploma in Plumbing',
      'Certificate in Plumbing',
      'Masonry'
    ]
  },
  {
    title: 'SCHOOL OF SOCIAL SCIENCES',
    courses: [
      'Diploma in Counseling Psychology',
      'Certificate in Counseling Psychology',
      'Diploma in Community Development & Social Work',
      'Certificate in Community Development & Social Work'
    ]
  },
  {
    title: 'SCHOOL OF EDUCATION',
    courses: [
      'Diploma in ECDE (school-based)',
      'Diploma in ECDE (regular)',
      'Certificate in ECDE (regular)',
      'Certificate in ECDE (school-based)'
    ]
  },
  {
    title: 'OTHER COURSES',
    courses: [
      'Music',
      'Instrumentals',
      'Master of Dancing and Choreography'
    ]
  }
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 8v8m8-8a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
    ),
    title: 'Vision',
    desc: 'To be a leading technical institution in nurturing learners holistically and making them self-reliant, efficient, and effective to their families, community, and the entire world.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: 'Mission',
    desc: 'Transforming positively every learner in our institution irrespective of their backgrounds either through their talents or interests at a very individualized level.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
    ),
    title: 'Core Values',
    desc: 'Holistic Growth, Confidence, Professionalism, Integrity, Excellence, Courtesy, Love, Value Creation, Non-Discrimination'
  }
];

const whyChoose = [
  {
    img: wiringImg,
    label: 'TVET Accredited',
    desc: 'Recognized Technical and Vocational Education',
  },
  {
    img: studentsImg,
    label: 'Student-Centered Learning',
    desc: 'Qualified & Passionate Trainers',
  },
  {
    img: labImg,
    label: 'Industry-Relevant Courses',
    desc: 'Affordable & Flexible Learning',
  }
];

export default function Home() {
  return (
    <div className="bg-[#FCFCFA]">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 md:px-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Thika Talents<br />Technical College<br />Nurturing Talents<br />to Career
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            An affiliate of St. Alicia & Talents Group of Schools, we deliver student-centered, transformative learning that empowers individuals and uplifts communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary" to="/apply">Join Our Community</Button>
            <Button size="lg" variant="outline" to="/courses">Explore Courses <span aria-hidden className="ml-2">→</span></Button>
          </div>
        </div>
        <div className="flex-1 relative flex flex-col items-center">
          {/* Floating badges and images */}
          <div className="absolute -top-8 -left-8 hidden md:block">
            <img src={heroImg} alt="Instructor" className="w-20 h-20 rounded-full border-4 border-white shadow-lg" />
          </div>
          <div className="absolute -top-8 right-0 hidden md:block">
            <img src={wiringImg} alt="Wiring" className="w-32 h-20 object-cover rounded-xl border-4 border-white shadow-lg" />
            <span className="absolute -top-4 -right-4 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow">TVET</span>
          </div>
          <div className="relative z-10">
            <img src={studentsImg} alt="Students" className="w-80 h-48 object-cover rounded-3xl border-4 border-white shadow-xl" />
          </div>
          <div className="absolute bottom-0 left-0 hidden md:block">
            <img src={draftingImg} alt="Drafting" className="w-24 h-20 object-cover rounded-xl border-4 border-white shadow-lg" />
            <span className="absolute bottom-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow">Nurturing Talents</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
          <span className="relative z-10">About <span className="underline decoration-yellow-400 decoration-4">Thika Talents Technical College</span></span>
          <span className="absolute left-0 -bottom-2 w-24 h-2 bg-yellow-400 rounded-full opacity-30" />
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {features.map((f, i) => (
            <div key={i} className="flex-1 bg-white rounded-3xl shadow p-8 flex flex-col gap-4 border border-gray-100 relative">
              <div className="mb-2">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{f.title}</h3>
              <p className="text-gray-600 text-base">{f.desc}</p>
              <span className="absolute bottom-4 right-4 text-2xl text-primary/20">{i === 0 ? '🎯' : i === 1 ? '💫' : '💎'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
          <span className="relative z-10">Why Choose <span className="text-yellow-500">Thika</span><span className="ml-2">✨</span><br />Talents Technical College?</span>
          <span className="absolute left-0 -bottom-2 w-24 h-2 bg-yellow-400 rounded-full opacity-30" />
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {whyChoose.map((item, i) => (
            <div key={i} className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
              <img src={item.img} alt={item.label} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-primary/80 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.label}</h3>
                <p className="text-white text-base mb-2 opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS AND COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Departments and Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">{dept.title}</h3>
              <ul className="space-y-2">
                {dept.courses.map((course, j) => (
                  <li key={j} className="text-gray-600 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOMMODATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Full accommodation with meals is available at <span className="font-bold">Ksh 3,500 per month</span>.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Required Personal Items:</span><br />
                  • Mattress<br />
                  • Blankets<br />
                  • Buckets<br />
                  • Spoons<br />
                  • Plates<br />
                  • Cups
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-64">
              {/* Placeholder for accommodation image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Accommodation Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Imara Plaza, 4th Floor, opposite Kanini Haraka near the Main Stage<br />
                P.O. BOX 224-01000, THIKA
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span><br />
                  0724 710 759<br />
                  0731 773 564
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span><br />
                  admin-thikatalents@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-64">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map will be displayed here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Start Your Journey with Thika Talents Technical College</h2>
          <p className="text-lg text-white/80 mb-8">
            Join our community of learners and discover a wide range of courses designed to nurture your talents and prepare you for a successful career.
          </p>
          <Button size="lg" variant="secondary" to="/apply">Apply Today</Button>
        </div>
      </section>
    </div>
  );
} 