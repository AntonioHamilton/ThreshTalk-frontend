import styled from 'styled-components';

export const Icon = styled.button`
  display: flex;
  border: none;
  background: none;

  svg {
    transform: translateX(0);
    transition: all 0.5s;
    :hover {
      transform: translateX(4px);
    }
  }
`;

export const AutoSize = styled.div`
  padding: 10px 10px 8px 10px;
  width: 100%;
  display: flex;

  textarea {
    height: 32px !important;
    width: 100%;
    background: transparent;
    border: none;
    padding: 0px 0px 0px 20px;
    font-size: 16px;
    resize: none;
  }
`;

export const CustomForm = {
  borderRadius: '20px',
  background: 'var(--background-hover)',
  display: 'flex',
  margin: '0px 15px',
  marginBottom: '10px',
  alignItems: 'center',
};

export const CustomIcon = {
  style: {
    marginRight: '20px',
    fontSize: '20px',
    marginLeft: '20px',
    cursor: 'pointer',
  },
};
