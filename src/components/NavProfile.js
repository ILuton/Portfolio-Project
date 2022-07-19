import React from 'react'
import profilepic from '../images/profilepic.jpg';

const NavProfile = () => {

    const styles = {
        imgStyle: {
            width: "120px",
            height: "213px",
            marginTop: "10px",
            borderRadius: "10px"
            
        },
        containerStyle: {
            display: "flex",
            justifyContent: "space-around",
        }
    }
  return (
    <div style={styles.containerStyle}>
        <img src={profilepic} alt="Portfolio author Isaac Luton." style={styles.imgStyle}></img>
      
    </div>
  )
}

export default NavProfile
