export const CustomBox = {
  textAlign: 'center',
  border: 'solid 1px var(--border-color)',
  borderRadius: '5px',
  width: {
    xs: '90vw',
    md: '70vw',
    lg: '50vw',
    xl: '32vw',
  },
  margin: '0px 0px 30px',
  background: 'var(--card-color)',
  md: {},
};

export const CustomCommentButton = {
  _hover: {
    color: 'var(--comment-color)',
    background: 'var(--background-hover)',
  },
  color: 'var(--icons-color)',
};

export const CustomImage = {
  textAlign: 'center',
  objectFit: 'contain',
  width: '100%',
  background: 'black',
  maxHeight: '60vh',
};

export const CustomFlexIcons = {
  marginRight: '15px',
  padding: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .5s',
  _hover: {
    transition: 'all .5s',
    background: 'var(--background-hover)',
  },
};

export const CustomTextTittle = {
  textAlign: 'left',
  fontWeight: '600',
  fontSize: '18px',
  marginTop: '-4px',
  padding: '15px',
};

export const CustomTextIcons = {
  marginLeft: '5px',
};
