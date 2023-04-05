import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`    
    @import url(''https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap'');

    @import url('https://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css');

    
      font-family: 'Open Sans', 'Nanum Barun Gothic';
    

    `}
  />
);

export default Fonts;
