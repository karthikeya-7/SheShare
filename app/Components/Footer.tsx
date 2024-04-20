"use client"
import Link from 'next/link';
import Contact from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-500 flex px-5 h-[30rem]  text-white ">
      <div className="container mx-auto my-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">SheShare</h2>
            <ul>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/contact">Careers</Link></li>
              <li><Link href="/">Contact Us</Link></li>
              <li><Link href="/contact">Follow Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <p>FAQs</p>
            <p>Cancellation Policy</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Become a Host</h2>
            <p>Hosting Resources</p>
            <p>Hosting Responsibility</p>
            <p>Share a Room</p>
            <p>Pets</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Terms & Privacy</h2>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
      <Contact/>
    </footer>
  );
}

export default Footer;
