import { Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function EventPage() {
  return (
    <Typography variant="h1">
      <Header />
      <>
        <section className="about__section"></section>
      </>
      <Footer />
    </Typography>
  );
}
