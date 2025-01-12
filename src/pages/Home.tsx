import { GamingHero } from '@/components/GamingHero/GamingHero';
import { GamingServices } from '@/components/GamingServices/GamingServices';
import { BookingForm } from '@/components/BookingForm/BookingForm';
import { ContactInfo } from '@/components/ContactInfo/ContactInfo';

const Home = () => {
  return (
    <main className="min-h-screen bg-gamer-dark">
      <GamingHero />
      <GamingServices />
      <BookingForm />
      <ContactInfo />
    </main>
  );
};

export default Home;