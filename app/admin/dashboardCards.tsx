
export default function DashboardCards() {
  return (
    <div className="main__cards">
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">
            Your <strong>Events</strong>&nbsp;
            <span className="card__header-link text-bold hyperlink">View All</span>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div className="card__main">
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-gift"></i></div>
            <div className="card__time">
              <div>today</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Jonathan G</div>
              <div className="card__description">Going away party at 8:30pm. Bring a friend!</div>
              <div className="card__note">1404 Gibson St</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-plane"></i></div>
            <div className="card__time">
              <div>Tuesday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Matthew H</div>
              <div className="card__description">Flying to Bora Bora at 4:30pm</div>
              <div className="card__note">Delta, Gate 27B</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-book"></i></div>
            <div className="card__time">
              <div>Thursday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">National Institute of Science</div>
              <div className="card__description">Join the institute for an in-depth look at Stephen Hawking</div>
              <div className="card__note">7:30pm, Carnegie Center for Science</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-heart"></i></div>
            <div className="card__time">
              <div>Friday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">24th Annual Heart Ball</div>
              <div className="card__description">Join us and contribute to your favorite local charity.</div>
              <div className="card__note">6:45pm, Austin Convention Ctr</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-heart"></i></div>
            <div className="card__time">
              <div>Saturday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Little Rock Air Show</div>
              <div className="card__description">See the Blue Angels fly with roaring thunder</div>
              <div className="card__note">11:00pm, Jacksonville Airforce Base</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">
            Recent <strong>Documents</strong>&nbsp;
            <span className="card__header-link text-bold hyperlink">View All</span>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div className="card">
          <div className="documents">
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">tesla-patents</div>
              <div className="document__date">07/16/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">yearly-budget</div>
              <div className="document__date">09/04/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">top-movies</div>
              <div className="document__date">10/10/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">trip-itinerary</div>
              <div className="document__date">11/01/2018</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card--finance">
        <div className="card__header">
          <div className="card__header-title text-light">
            Monthly <strong>Spending</strong>&nbsp;
            <span className="card__header-link text-bold hyperlink">View All</span>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div id="chartdiv"></div>
      </div>
    </div>
  );
}