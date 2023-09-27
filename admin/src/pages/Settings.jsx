import React from 'react';
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
       <h2 className="settings__title">Settings</h2>

       <div className="settings__top">
          <button className="setting__btn">My Details</button>
          <button className="setting__btn active__btn">Profile</button>
          <button className="setting__btn">Password</button>
          <button className="setting__btn">Email</button>
          <button className="setting__btn">Notification</button>
       </div>

       <div className="details__form">
          
          <h2 className='profile__title'>Profile</h2>
          <p className="profile__desc">Update Your Photo and Personal Details here</p>
         <form>
           <div className="form__group">
             <div>
               <label>Live in</label>
               <input type="text" placeholder='Kathmandu' />
             </div>

             <div>
               <label>street</label>
               <input type="text" placeholder='New baneshwor' />
             </div>
           </div>

           <div className="form__group">
             <div>
               <label>Email</label>
               <input type="email" placeholder='example@gmail.com' />
             </div>

             <div>
               <label>Phone Number</label>
               <input type="number" placeholder='+977 9808######' />
             </div>
           </div>
            
           <div className="form__group">
             <div>
               <label>Date of Birth</label>
               <input type="date" placeholder='dd/mm/yyyy' />
             </div>

             <div>
               <label>Gender</label>
               <input type="text" placeholder='Female' />
             </div>
           </div>

           <div className="form__group">
             <div>
               <label>Your Photo</label>
               <p>This will be displayed in your profile</p>
               <input type="file" placeholder='Choose a file' />
             </div>

             <div>
                <div className="profile__img-btns">
                  <button className='update-btn'>Update</button>
                </div>
             </div>
           </div>

         </form>
       </div>
      </div>
    </div>
  );
}

export default Settings;
