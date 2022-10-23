import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonLoading = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((item) => (
      <div className="card-skeleton">
        <div className="image-skeleton">
          <SkeletonTheme baseColor="#393e46" highlightColor="#444">
            <p>
              <Skeleton height={380} />
            </p>
          </SkeletonTheme>
        </div>
        <div className="text-skeleton">
          <SkeletonTheme baseColor="#393e46" highlightColor="#444">
            <p>
              <Skeleton height={450} />
            </p>
          </SkeletonTheme>
        </div>
      </div>
    ));
};

export default SkeletonLoading;
