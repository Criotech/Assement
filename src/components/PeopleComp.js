import React from 'react';
import Paginate from './PaginateComp';
import PeopleList from './PeopleListComp'
import Search from './SearchComp'

const People = ({ handleSearch, people, page, setPage }) => {
  const data = people?.results;
  return (
    <div>
        <Search handleSearch={handleSearch} />
      <PeopleList people={data} />
      <Paginate total={people?.count} current={page} setPage={setPage} />
    </div>
  );
};

export default People
