import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contact - 2GRW Support',
  description: 'Get in touch with our team for support, questions, or feedback about 2GRW.',
  keywords: 'contact 2grw, support, help, feedback',
};

export default function ContactPage() {
  return <ContactSection />;
}






