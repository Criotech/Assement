import React from 'react';
import { Link } from 'react-router-dom';

const getPersonUrlPath = (url) => {
  // console.log(url, url.split('/')[10])
  let urlArr = url.split('/');
  let id = urlArr[urlArr.length - 2]
    return `people/${id}`
}

const PeopleList = ({ people }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{padding: 20}}>Full Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {people?.map((person) => (
            <tr key={person.url}>
              <td style={{padding: 20}}>
                <Link to={getPersonUrlPath(person.url)}>
                  {person.name}
                </Link>
              </td>
              <td>{person.birth_year}</td>
              <td>{person.gender}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleList;
