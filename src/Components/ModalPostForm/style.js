import styled from 'styled-components';

export const Form = styled.form`
  textarea {
    width: 100%;
    resize: none;
    font-size: 20px;
    background: transparent;
    border: none;
    color: var(--card-color);
  }
`;

export const CustomButton = {
  display: 'flex',
  width: '100%',
  cursor: 'pointer',
  border: 'none',
  color: 'var(--card-color)',
  fontWeight: '500',
  _focus: {
    boxShadow: 'none',
  },
};

export const CustomModal = {
  border: 'solid 1px var(--border-color)',
  backgroundColor: 'var(--text-color)',
  color: 'var(--primary-color)',
  borderRadius: '5px',
  width: {
    xs: '90vw',
    md: '70vw',
    lg: '50vw',
    xl: '32vw',
  },
};

export const CustomHeader = {
  textAlign: 'center',
  borderBottom: '1px solid var(--border-color)',
  margin: '0px 24px',
};

export const CustomCloseButton = {
  cursor: 'pointer',
  border: 'none',
  background: 'var(--text-color)',
  borderRadius: '100px',
  color: 'var(--card-color)',
  _focus: {
    boxShadow: 'none',
  },
  _hover: {
    background: 'var(--background-hover)',
  },
};

export const CustomWrapFlex = {
  alignItems: 'center',
  margin: '10px 0px 15px -5px',
};
