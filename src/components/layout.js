import styled from 'styled-components';

const Layout = styled.div`
  padding: 2.5rem 3.75rem;
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    padding: 1.25rem 
  }

  @media (max-width: 320px) {
    padding: 0.625rem 
  }
`;

export default Layout;