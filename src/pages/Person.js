import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonComponent from '../components/PersonComp';
import ApiInstance from '../utils/ApiInstance';

const Person = () => {
  const [person, setPerson] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  React.useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await ApiInstance.get(`people/${id}`);
        setPerson(response?.data);
      } catch (error) {
        setError('Resource Error');
      }
    };
    getPerson();
  }, [id]);

  return error ? <div>{error}</div> : <PersonComponent person={person} />;
};

export default Person;
