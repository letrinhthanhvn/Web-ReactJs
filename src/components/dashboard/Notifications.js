import React from 'react';
import moment from 'moment';
const Notification = (props) => {
   const notifications = props.notifications
   return (
      <div className="section">
         <div className="card">
            <div className="card-content">
               <span className="card-title">Notifications</span>
               <ul className="notifications">
                  {
                     notifications && notifications.map(noti => {
                        return (
                           <li key={noti.id}>
                              <span className="pink-text">{noti.user} - </span>
                              <span className="green-text">{noti.content}</span>
                              <div className="grey-text note-date">
                                 {moment(noti.time.toDate()).fromNow()}
                              </div>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Notification;