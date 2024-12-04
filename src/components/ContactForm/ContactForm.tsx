import React from 'react';
import styles from './contact.form.module.scss';
import Form from 'next/form';
import { Button, TextareaAutosize } from '@mui/material';
import Input from '@mui/material/Input';

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className={styles.container}>
      <h1>
        Предложение <br /> о сотрудничестве
      </h1>
      <Form action='' className={styles.form}>
        <Input
          type='text'
          color='primary'
          placeholder='Как Вас зовут ?'
          required
          sx={{ color: '#d8bcff', padding: '8px' }}
        />
        <Input
          color='primary'
          placeholder='Введите почту'
          required
          sx={{ color: '#d8bcff', padding: '8px' }}
        />
        <TextareaAutosize
          className={styles.textArea}
          minRows={3}
          placeholder='Сообщение'
        />
        <Button className={styles.button} variant='outlined'>
          Написать на почту
        </Button>
      </Form>
    </div>
  );
}
