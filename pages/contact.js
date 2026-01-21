import { useState } from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  font-size: 0.9rem;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button, .email {
    background: none;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: color 200ms;
    text-decoration: none;
    display: inline-block;

    &:hover {
      color: #f85e49;
    }
  }
`;

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <ContactStyles>
      {showEmail ? (
        <a href="mailto:johnorthisthehobbyist@gmail.com" className="email">
          johnorthisthehobbyist@gmail.com
        </a>
      ) : (
        <button onClick={() => setShowEmail(true)}>Click Here for Email Address</button>
      )}
    </ContactStyles>
  );
}
