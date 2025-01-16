import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCampers } from '../../redux/campers/operations.js';
import { selectCampers } from '../../redux/campers/selectors.js';
import { changeFilter } from '../../redux/filters/slice.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { pageLimit } from '../../core/constants/filterConstants.js';
import { convertFilterToParams } from '../../core/utils/convertFilterToParams.js';
import { AsideContainer } from '../../components/Container/Container.jsx';
import css from './CatalogPage.module.css';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';
import { selectFilter } from '../../redux/filters/selectors.js';
import { clearCampers } from '../../redux/campers/slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const campers = useSelector(selectCampers);
  const [page, setPage] = useState(1);

  const hanldeApplyFilter = values => {
    dispatch(clearCampers());
    setPage(1)
    dispatch(changeFilter(values));
  };

  useEffect(() => {
    const params = convertFilterToParams(filter);
    dispatch(fetchFilteredCampers(`${params}&page=${page}&limit=${pageLimit}`));
  }, [dispatch, filter, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const showCamperDetails = id => {
    console.log('show camper ' + id);
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
