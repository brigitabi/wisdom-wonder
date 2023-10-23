// import React, { useState, useEffect } from 'react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import { UserAuth } from '../context/AuthContext';
// import { db } from '../firebase';
// import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
// import { AiOutlineClose } from 'react-icons/ai';

// const SavedActivity = () => {
//     const [activity, setActivity] = useState([])
//     const { user } = UserAuth();

//     useEffect(() => {
//         onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
//             setActivity(doc.data()?.SavedArticles);
//         })
//     }, [user?.email]); 

//     const activityRef = doc(db, 'users', `${user?.email}`)

//     const deleteActivity = async (passedID) => { 
//         try { 
//             const result = activity.filter((item) => item.id !== passedID)
//             await updateDoc(activityRef, { 
//                 savedActivities: result
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }


// return (
//     <>
//     </>
    

   
  
//     )
// }

// export default SavedActivity;