import { getDoc, doc } from 'firebase/firestore';
import db from '../db';
import React from 'react';

// will never go
const Redirect = () => {
  return <div>Redirect</div>;
};

export const getServerSideProps = async (context) => {
  try {
    const path = context.query.redirect.join('\\');

    const docRef = doc(db, 'redirect', path);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || !docSnap.data().redirectTo) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        destination: docSnap.data().redirectTo,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Redirect;
