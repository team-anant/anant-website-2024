const AchievementItem = ({ stage, details, isEven }) => {
    return (
      <div
        className={`roadmap-item ${
          isEven ? 'roadmap-item--even' : 'roadmap-item--odd'
        }`}
      >
        <div className="roadmap-item__marker"></div>
        <div className="roadmap-item__content">
          <h3 className="roadmap-item__stage">{stage}</h3>
          <ul className="roadmap-item__details">
            {details.map((detail, index) => (
              <li key={index} className="roadmap-item__detail">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default AchievementItem;
  