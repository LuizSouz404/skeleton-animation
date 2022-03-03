import './style.css';

type SkeletonRepeater = {
  Qtd: number;
}

export const Skeleton = ({Qtd=1}: SkeletonRepeater) => {
    return (
      <>
        {[...Array(Qtd)].map((e, i) => 
          <>
            <div key={i} className="card">
              <div className="header-content-sk">
                <div className="header-image skeleton" />
                <div className="header-title">
                  <div className="skeleton-text skeleton"></div>
                  <div className="skeleton-text skeleton"></div>
                </div>
              </div>
              
              <div className="skeleton-text skeleton"></div>
              <div className="skeleton-text skeleton"></div>
              <div className="skeleton-text skeleton"></div>
              <div className="skeleton-text skeleton"></div>
            </div>
          </>
        )}
      </>
    )
}