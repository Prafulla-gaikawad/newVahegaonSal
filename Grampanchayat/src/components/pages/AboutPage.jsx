import PageHero from '../PageHero';
import About from '../About';
import Leadership from '../Leadership';
import backImage from '../../images/back.jpg';

const AboutPage = () => {
  return (
    <div>
      <PageHero 
        title="आमच्याबद्दल" 
        subtitle="माहिती"
        image={backImage}
      />
      <About />
      <Leadership />
    </div>
  );
};

export default AboutPage;

