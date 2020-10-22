export const CustomBox = {
  width: {
    xs: '90vw',
    md: '70vw',
    lg: '50vw',
    xl: '32vw',
  },
  display: 'flex',
  background: 'var(--card-color)',
  padding: '10px',
  alignItems: 'center',
  border: 'solid 1px var(--border-color)',
  borderRadius: '5px',
  marginBottom: '30px',
};

export const CustomButton = {
  width: '100%',
  borderRadius: '20px',
  border: 'none',
  background: 'var(--background-hover)',
  cursor: 'pointer',
  _focus: {
    boxShadow: 'none',
  },
};

export const CustomFlex = {
  justifyContent: 'center',
  alignItems: 'center',
};
