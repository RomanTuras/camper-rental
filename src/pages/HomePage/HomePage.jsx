import css from './HomePage.module.css';
import Container from '../../components/Container/Container';
import { AccentButton } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/catalog');
  };

  return (
    <section className={css.homeSection}>
      <Container>
        <div className={css.homeContainer}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.subTitle}>
            You can find everything you want in our catalog
          </h2>
          <AccentButton action={handleClickButton}>View Now</AccentButton>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
