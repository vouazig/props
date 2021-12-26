import react from 'react';
const Profile=(props)=>{

    Profile.defaultProps = {
        fullName: 'Salem Bouaziz',
        bio: 'Master',
        profession: 'Project Manager',
       
      }
    return <div>
        <p>{props.fullName}</p>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
        {props.children}
    </div>
} 

export default Profile

//The profile component gets data (fullName, bio, profession) as props, 
//and gets image as children props, 
//and the function handleName functions as a prop that sends an alert message with the name of the profile user.
//Define the default props for Profile component. 
//Use PropsType to check props.  
//Use inline style.