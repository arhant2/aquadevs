import { useState } from 'react';
import { isEmail } from 'validator';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../../../../utils/Input/Input';
import Button from '../../../../utils/Button/Button';
import { analyticsEvent } from '../../../../utils/gtag';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [showNameError, setShowNameError] = useState(false);

  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);

  const [interests, setInterests] = useState('');
  const [showInterestsError, setShowInterestsError] = useState(false);

  let nameError = '';
  if (name.trim().length === 0) {
    nameError = 'Please enter your name!';
  }

  let emailError = '';
  if (email.length === 0) {
    emailError = 'Please enter your email!';
  } else if (!isEmail(email)) {
    emailError = 'Please enter valid email!';
  }

  let interestsError = '';
  if (interests.trim().length === 0) {
    interestsError = 'Please provide your interests!';
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowNameError(true);
    setShowEmailError(true);
    setShowInterestsError(true);

    if (nameError || emailError || interestsError) {
      analyticsEvent({
        action: 'CONTACT_FORM_SUBMIT_ATTEMPT - Incorrect Data',
        category: 'engagement',
      });
      return;
    }

    setLoading(true);

    try {
      await axios.post('/api/contact', {
        name,
        email,
        interests,
      });

      toast.success('Thank you for showing your interest!');

      setName('');
      setEmail('');
      setInterests('');
      setShowNameError(false);
      setShowEmailError(false);
      setShowInterestsError(false);
      analyticsEvent({
        action: 'CONTACT_FORM_SUBMIT_ATTEMPT - Submitted',
        category: 'engagement',
      });
    } catch (err) {
      analyticsEvent({
        action: 'CONTACT_FORM_SUBMIT_ATTEMPT - Error',
        category: 'engagement',
      });
      toast.error('Something went wrong! Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form} noValidate>
      <Input
        label='Name'
        id='contact-name'
        placeholder='Your Name'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setShowNameError(false);
        }}
        onBlur={() => setShowNameError(true)}
        errorMessage={showNameError ? nameError : ''}
        required
      />
      <Input
        label='Email'
        id='contact-email'
        placeholder='you@yourprovider.com'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setShowEmailError(false);
        }}
        onBlur={() => setShowEmailError(true)}
        errorMessage={showEmailError ? emailError : ''}
        required
      />
      <Input
        isTextArea
        label='Your interests'
        id='contact-message'
        placeholder='Write your interests here'
        value={interests}
        onChange={(e) => {
          setInterests(e.target.value);
          setShowInterestsError(false);
        }}
        onBlur={() => setShowInterestsError(true)}
        errorMessage={showInterestsError ? interestsError : ''}
        required
      />
      <div>
        <Button color='blue' loading={loading} disabled={loading} rounded>
          Send message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
