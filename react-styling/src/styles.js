import styled from 'styled-components';

const spacing = '10px 20px';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  padding: ${spacing};
  text-align: center;
  color: white;

  @media (max-width: 700px) {
    color: red;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  padding: ${spacing};
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
