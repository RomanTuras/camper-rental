import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import {
  selectCamper,
  selectCampersError,
  selectCampersIsLoading,
} from '../../redux/campers/selectors';
import { fetchCamper } from '../../redux/campers/operations';
import Container from '../../components/Container/Container';
import css from '../CamperPage/CamperPage.module.css';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import ReviewsForm from '../../components/forms/ReviewsForm/ReviewsForm';
import { MyContext } from '../../components/MyContext/MyContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import CamperMicroInfo from '../../components/CamperMicroInfo/CamperMicroInfo';
import CamperPrice from '../../components/CamperPrice/CamperPrice';
import SizedBox from '../../components/SizedBox/SizedBox';
import Loader from '../../components/Loader/Loader';
import SimpleMessage from '../../components/SimpleMessage/SimpleMessage';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  const handleSubmitReview = () => {
    toast.success('Camper is booking now!', {
      position: 'top-right',
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <Container>
      {error ? (
        <SimpleMessage error={true}>
          Ooops, seems like an error happends...
        </SimpleMessage>
      ) : isLoading ? (
        <Loader />
      ) : camper ? (
        <>
          <h2 className={css.title}>{camper.name}</h2>
          <CamperMicroInfo camper={camper} />
          <SizedBox height={'16px'} />
          <CamperPrice>{camper.price}</CamperPrice>
          <ul className={css.imageGallery}>
            {camper?.gallery &&
              camper.gallery.map(item => (
                <li key={item.thumb}>
                  <Zoom>

                  <img
                    src={item.thumb}
                    alt="camper image"
                    className={css.image}
                  />
                  </Zoom>
                </li>
              ))}
          </ul>
          <p className={css.description}>{camper?.description}</p>
          <InnerNavigation />
          <div className={css.aboutSection}>
            <MyContext.Provider value={camper}>
              <Outlet />
            </MyContext.Provider>
            <div className={css.formContainer}>
              <h3>Book your campervan now</h3>
              <p className={css.formSubtitle}>
                Stay connected! We are always ready to help you.
              </p>
              <ReviewsForm submitReview={handleSubmitReview} />
            </div>
          </div>
          <ToastContainer />
          <SizedBox height={'80px'} />
        </>
      ) : null}
    </Container>
  );
};

export default CamperPage;
