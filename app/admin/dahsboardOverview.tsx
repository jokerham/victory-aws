import { BiSitemap } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

export function DashboardOverview() {
  return (
    <div className="main-overview">
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--document">
          <FaUser />
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">승인 대기 <strong>회원수</strong></h3>
          <p className="overviewCard-subtitle">{ 0 } 명</p>
        </div>
      </div>
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--calendar">
          <BiSitemap />
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">대전 설정 대기 <strong>대회수</strong></h3>
          <p className="overviewCard-subtitle">{ 0 } 개</p>
        </div>
      </div>
    </div> 
  );
}