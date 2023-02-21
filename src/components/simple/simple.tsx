import useForm from '../../hooks/use-form';
import { useEffect, useState } from 'react';

export default function Simple(): JSX.Element {
  const { handleChange, formState } = useForm({
    firstName: 'Bill',
    lastName: 'Bob',
  });

  const fullName = `${formState.firstName} ${formState.lastName}`;

  return (
    <>
      <p>Your Name Is: {fullName}</p>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
