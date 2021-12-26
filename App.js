import React from 'react'
import PropTypes from 'prop-types';
import Profile from "./Profile/Profile";


function App() {

    return (
    <div>
     <Profile
     fullName="Salem Bouaziz" 
     bio="Master"
     profession="Project Manager"
     children={<img src="props/src/Profile/Foto.jpg" alt="" width="400" height="400"/>}
     />
     </div>
  );
    }
  
export default App;

Profile.propTypes = {
  FullName: PropTypes.string.isRequired
