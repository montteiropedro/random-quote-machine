import styled from "styled-components";

export const Span = styled.span`
  transition: 0.15s ease-in-out;

  color: ${props => props.color};
`;

export const Quote = styled.i`
  transition: 0.15s ease-in-out;

  color: ${props => props.color};
`;

export const TwitterButton = styled.a`
  padding: 0.375rem 0.75rem;
  
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;

  background-color: ${props => props.color};
  
  border: none;
  border-radius: 0.25rem;
  
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  
  cursor: pointer;
  
  transition: 1s ease-in-out;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }

  #tweet-quote {
    width: 3rem;
  }
`;

export const NewQuoteButton = styled.button`
  padding: 0.375rem 0.75rem;
  
  height: 40px;

  display: flex;
  align-items: center;

  background-color: ${props => props.color};
  
  border: none;
  border-radius: 0.25rem;
  
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  
  transition: 1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;