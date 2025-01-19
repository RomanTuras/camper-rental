import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCampers } from '../../redux/campers/operations.js';
import {
  selectCampers,
  selectCampersError,
  selectCampersIsLoading,
  selectCampersIsLoadingMore,
} from '../../redux/campers/selectors.js';
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
import { Button } from '../../components/Button/Button.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import SimpleMessage from '../../components/SimpleMessage/SimpleMessage.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const filter = useSelector(selectFilter);
  const campers = useSelector(selectCampers);
  const error = useSelector(selectCampersError);
  const isLoading = useSelector(selectCampersIsLoading);
  const isLoadingMore = useSelector(selectCampersIsLoadingMore);

  const hanldeApplyFilter = values => {
    dispatch(clearCampers());
    setPage(1);
    dispatch(changeFilter(values));
    setScrollPosition(0);
  };

  useEffect(() => {
    if (location.pathname.endsWith('catalog')) {
      const params = convertFilterToParams(filter);
      dispatch(
        fetchFilteredCampers(`${params}&page=${page}&limit=${pageLimit}`)
      );
    }
  }, [dispatch, filter, page, location.pathname]);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [campers, scrollPosition]);

  const nextPage = () => {
    setScrollPosition(window.scrollY);
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
        {error ? (
          <SimpleMessage>No campers found, try to change out selected filters.</SimpleMessage>
        ) : isLoading ? (
          <Loader />
        ) : campers ? (
          <>
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
            <div className={css.loadMoreContainer}>
              {campers?.total != 0 && campers?.total > pageLimit * page && (
                <>
                  {isLoadingMore ? <Loader /> : <Button action={nextPage}>Load more</Button>}
                </>
              )}
            </div>
          </>
        ) : null}
      </main>
    </AsideContainer>
  );
};

export default CatalogPage;
