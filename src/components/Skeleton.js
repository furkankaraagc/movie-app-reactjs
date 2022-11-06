const Skeleton = ({ type }) => {
  const counter = 3;
  const counter2 = 20;

  const SideTv = () => (
    <div key={Math.random() * 3} className="skeleton-card">
      <div className="image"></div>
      <div className="detail">
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
  const CarouselSk = () => <div className="carousel-image"></div>;
  const MovieListSk = () => (
    <div key={Math.random()} className="card">
      <div className="image"></div>
      <div className="details"></div>
    </div>
  );
  if (type === "side-tv") return Array(counter).fill(<SideTv />);
  if (type === "carousel") return <CarouselSk />;
  if (type === "movie-list") return Array(counter2).fill(<MovieListSk />);
};

export default Skeleton;
