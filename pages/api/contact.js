import { addDoc, collection } from 'firebase/firestore';
import db from '../../db';
import validator from 'validator';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, interests } = req.body;

      if (!name || name.trim().length === 0) {
        return res.status(400).json({
          status: 'error',
          message: 'Please enter a valid name!',
        });
      }

      if (!email || !validator.isEmail(email)) {
        return res.status(400).json({
          status: 'error',
          message: 'Please enter a valid email!',
        });
      }

      if (!interests || interests.trim().length === 0) {
        return res.status(400).json({
          status: 'error',
          message: 'Please enter your interests!',
        });
      }

      await addDoc(collection(db, 'contact'), {
        name: name.trim(),
        email: email,
        interests: interests.trim(),
        createdAtDate: new Date().toLocaleDateString('en-US', {
          timeZone: 'Asia/Kolkata',
        }),
        createdAtTime: new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
        }),
      });

      res.status(201).json({
        status: 'success',
        message: 'Data received succesfully',
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        status: 'fail',
        message: 'Something went wrong!',
      });
    }
  }
};

export default handler;
