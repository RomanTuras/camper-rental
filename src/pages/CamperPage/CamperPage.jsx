import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { selectCamper } from '../../redux/campers/selectors';
import { fetchCamper } from '../../redux/campers/operations';
import Container from '../../components/Container/Container';
import css from '../CamperPage/CamperPage.module.css';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import ReviewsForm from '../../components/forms/ReviewsForm/ReviewsForm';
import { MyContext } from '../../components/MyContext/MyContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import star_yellow from '../../assets/images/star_yellow.svg';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(selectCamper);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  const handleSubmitReview = () => {
    toast.success('Camper is booking now!', {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  return (
    <Container>
      <h2 className={css.title}>{camper.name}</h2>
      <div className={css.subtitle}>
        <img
          src={star_yellow}
          width={16}
          className={css.ratingIcon}
        />{' '}
        {camper?.rating} ({camper?.reviews?.length} Reviews) {camper?.location}
      </div>
      <h2 className={css.price}>€{camper.price},00</h2>
      <ul className={css.imageGallery}>
        {camper?.gallery &&
          camper.gallery.map(item => (
            <li key={item.thumb}>
              <img src={item.thumb} alt="camper image" />
            </li>
          ))}
      </ul>
      <p>{camper?.description}</p>
      <InnerNavigation />
      <div className={css.aboutSection}>
        <MyContext.Provider value={camper}>
          <Outlet />
        </MyContext.Provider>
        <div className={css.formContainer}>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          <ReviewsForm submitReview={handleSubmitReview} />
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default CamperPage;
