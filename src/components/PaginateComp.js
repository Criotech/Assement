import React from 'react';

const Paginate = ({ total, current, setPage }) => {
  const nextPage = () => setPage(current + 1);
  const prevPage = () => (current > 1 ? setPage(current - 1) : setPage(1));
  return (
    <div>
      <p>
        Page {current} of {Math.ceil(+total / 10)}
      </p>
      <div>
        {
          current > 1 && <button onClick={prevPage}>previous</button>
        }
        {
          current < Math.ceil(+total / 10) && <button onClick={nextPage}>next</button>
        }
        
      </div>
    </div>
  );
};

export default Paginate;
