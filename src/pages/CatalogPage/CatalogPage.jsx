import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCampers } from '../../redux/campers/operations.js';
import { selectCampers } from '../../redux/campers/selectors.js';
import { changeFilter } from '../../redux/filters/slice.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { pageLimit } from '../../core/constants/filterConstants.js';
import { convertFilterToParams } from '../../core/utils/convertFilterToParams.js';
import { AsideContainer } from '../../components/Container/Container.jsx';
import css from './CatalogPage.module.css';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import FilterForm from '../../components/forms/FilterForm/FilterForm.jsx';
import { selectFilter } from '../../redux/filters/selectors.js';
import { clearCampers } from '../../redux/campers/slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const campers = useSelector(selectCampers);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const hanldeApplyFilter = values => {
    dispatch(clearCampers());
    setPage(1)
    dispatch(changeFilter(values));
  };

  useEffect(() => {
    if(location.pathname.endsWith('catalog')) {
      const params = convertFilterToParams(filter);
      dispatch(fetchFilteredCampers(`${params}&page=${page}&limit=${pageLimit}`));
    }
  }, [dispatch, filter, page, location.pathname]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const showCamperDetails = id => {
    navigate(`${id}/features`);
  };

  return (
    <AsideContainer>
      <aside className={css.filtersContainer}>
        <FilterForm
          initialFilter={filter}
          actionApplyFilter={hanldeApplyFilter}
        />
      </aside>
      <main>
        <ul className={css.cardsHolder}>
          {campers &&
            campers.items &&
            campers.items.map(camper => (
              <CamperCard
                key={camper.id}
                camper={camper}
                actionCamperDetails={showCamperDetails}
              />
            ))}
        </ul>
        {campers?.total > pageLimit * page && (
          <button onClick={nextPage}>More</button>
        )}
      </main>
    </AsideContainer>
  );
};

export default CatalogPage;
