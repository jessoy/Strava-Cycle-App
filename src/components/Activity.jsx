const Activity = (props) => {
    const { activity } = props
  return (
    <>
      <h3>{activity.name}</h3>
      <p>date: {Date(activity.start_date)}</p>
      <p>name: {activity.athlete.id}</p>

      <p>climb: {activity.total_elevation_gain}m</p>

      <p>time taken: {activity.elapsed_time} seconds</p>

      <p>distance: {activity.distance}m</p>

      <p>average speed: {activity.average_speed}</p>

      <p>cumulative distance</p>
      <p>cumulative time</p>
    </>
  );
};

export default Activity;
