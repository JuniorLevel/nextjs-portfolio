'use client';

import emailjs from '@emailjs/browser';
import { Button, Input, TextareaAutosize } from '@mui/material';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import styles from './contact.form.module.scss';

export default function ContactForm() {
  const [disabled, setDisabled] = useState(false);

  const validationSchema = Yup.object({
    from_name: Yup.string()
      .min(4, 'Не менее 4 символов')
      .max(15, 'Не более 15 символов'),
    from_email: Yup.string().email('Некорректный адрес электронной почты'),
    message: Yup.string().max(2000, 'Лимит 2000 символов'),
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (
    actions: FormikHelpers<{
      from_name: string;
      from_email: string;
      message: string;
    }>
  ) => {
    if (!form.current) {
      return;
    }

    await toast.promise(
      emailjs.sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
        }
      ),
      {
        pending: {
          position: 'top-center',
          className: styles.toast,
          render() {
            return 'Отправка формы';
          },
        },
        success: {
          position: 'top-center',
          className: styles.toast,
          render() {
            setDisabled(false);
            actions.resetForm();
            return 'Спасибо за обращение! Отвечу в ближайшее время.';
          },
        },
        error: {
          position: 'top-center',
          className: styles.toast,
          render() {
            setDisabled(false);
            actions.resetForm();
            return `Ошибка при отправке сообщения. Свяжитесь со мной, кликнув на иконку '@ - Mail.ru' на боковой панели!`;
          },
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <h2>
        Предложение <br /> о сотрудничестве
      </h2>
      <Formik
        initialValues={{ from_name: '', from_email: '', message: '' }}
        onSubmit={(_, actions) => {
          sendEmail(actions);
          setDisabled(true);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className={styles.form}
          >
            <Field
              name='from_name'
              as={Input}
              placeholder='Как Вас зовут ?'
              required
              sx={{ color: '#d8bcff', padding: '8px' }}
            />
            <div className={styles.error}>
              <ErrorMessage name='from_name' />
            </div>
            <Field
              name='from_email'
              as={Input}
              placeholder='Ваша почта'
              required
              sx={{ color: '#d8bcff', padding: '8px' }}
            />
            <div className={styles.error}>
              <ErrorMessage name='from_email' />
            </div>
            <Field
              name='message'
              className={styles.textArea}
              minRows={3}
              as={TextareaAutosize}
              placeholder='Сообщение'
              required
            />
            <div className={styles.error}>
              <ErrorMessage name='message' />
            </div>
            <span>Сообщение попадёт на почту сервиса mail.ru</span>
            <Button
              type='submit'
              disabled={disabled}
              className={styles.button}
              variant='outlined'
            >
              Написать на почту
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
