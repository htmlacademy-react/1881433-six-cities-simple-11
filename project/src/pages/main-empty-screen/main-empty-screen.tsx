
import HeaderComponent from '../../components/header-component/header-component';
import LocationsContainerComponent from '../../components/locations-container-component/locations-container-component';

function MainEmptyScreen(): JSX.Element {
  return (
    <>
      <HeaderComponent/>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsContainerComponent/>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainEmptyScreen;
