import { useDispatch, useSelector } from 'react-redux';
import css from './CamperCard.module.css';
import { selectFavourites } from '../../redux/favourites/selectors';
import { toggleFavourite } from '../../redux/favourites/slice';

const CamperCard = ({ camper, actionCamperDetails }) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const handleAddToFavourites = (e) => {
    e.stopPropagation();
    dispatch(toggleFavourite(camper.id))
  };

  const handleCamperDetails = () => {
    actionCamperDetails?.(camper.id);
  }

  return (
    <li
      className={css.camperCard}
      onClick={handleCamperDetails}
    >
      <div>
        {camper.id}) {camper.name} -{' '}
        {favourites.includes(Number(camper.id)) ? 'yes' : 'no'} -{' '}
        <button onClick={(e)=>handleAddToFavourites(e)}>fav</button>
      </div>
    </li>
  );
};

export default CamperCard;
