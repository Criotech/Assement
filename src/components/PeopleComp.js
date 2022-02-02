import React from 'react';
import Paginate from './PaginateComp';
import PeopleList from './PeopleListComp'

const People = ({ people, page, setPage }) => {
  const data = people?.results;
  return (
    <div>
      <PeopleList people={data} />
      <Paginate total={people?.count} current={page} setPage={setPage} />
    </div>
  );
};

export default People
