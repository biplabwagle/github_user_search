import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Wuhoooooo!!!! This wasn't supposed to happen....</h3>
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
  button {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    border: none;
    border-radius: 0.5rem;
    outline: 1px double #000;
    background: var(--clr-primary-1);
    color: #fff;
    box-shadow: 2px 2px 3px 2px #000;
  }
`;
export default Error;
