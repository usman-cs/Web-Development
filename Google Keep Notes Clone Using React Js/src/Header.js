import * as React from 'react';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
const Header = () => {
  return (
    <div className='header-div'>
      <SpeakerNotesIcon sx={{marginLeft:2,marginTop:2,color:'white',fontSize:40}}/>
      <h1>Keep Your Notes</h1>
    </div>
  );
};
export default Header;
