import React, { useState } from 'react';
import PeopleComponent from '../components/PeopleComp'
import ApiInstance from '../utils/ApiInstance';

const People = () => {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState();

  React.useEffect(() => {
    const getPeople = async () => {
      try {
        const response = await ApiInstance.get(`people/?page=${page}`);
        setPeople(response.data);
      } catch (error) {
        setError('Resource Error');
      }
    };
    getPeople();
  }, [page]);

  const handleSearch = async (val) => {
      console.log(val)
    const response = await ApiInstance.get(`people/?search=${val}`);
    setPeople(response.data);
  }

  return error ? (
    <div>{error}</div>
  ) : (
    <PeopleComponent handleSearch={handleSearch} people={people} page={page} setPage={setPage} />
  );
};

export default People;
