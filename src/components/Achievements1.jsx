import AchievementItem from './AchievementItem';
import { AchievementData } from './AchievementaData';

const Achievements1 = () => {
  return (
    <div className="container">
      <section className="roadmap">
        <h1>ACHIEVEMENTS</h1>

        <div className="roadmap__timeline">
          <div className="roadmap__line"></div>

          {AchievementData.map((item, index) => (
            <AchievementItem
              key={item.id}
              stage={item.stage}
              details={item.details}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements1;
