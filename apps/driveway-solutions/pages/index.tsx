import ContactUs from '../components/contact-us/contact-us';
import Faq from '../components/faq/faq';
import Navbar from '../components/navbar/navbar';
import Testimonial from '../components/testimonial/testimonial';

export function Index() {
  return (
    <>
      <Navbar />
      <Faq />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default Index;
