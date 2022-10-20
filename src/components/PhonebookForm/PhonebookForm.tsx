import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { FC } from "react";
import { LabelName, AddButton, ErrorText } from './Phonebook.styled';
import { IContact } from '../App';


const schema = yup.object().shape({
  name: yup
    .string()
    .strict()
    .trim()
    .min(2)
    .max(30)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required(),
  number: yup
    .string()
    .strict()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

interface IProps {
  onAddContact: (contact: { name: string, number: string, id: string }) => void,
  onReviewName: (name: string)=> IContact|undefined,
}

export const PhonebookForm :FC<IProps> = ({ onAddContact, onReviewName }) => {
  const handleSubmit = (values:{name:string, number:string}, actions: any) => {
    if (onReviewName(values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <LabelName>Name</LabelName>
          <Field autoComplete="off" type="text" name="name" />
          <ErrorText component="p" name="name" />
        </label>
        <label htmlFor="number">
          <LabelName>Number</LabelName>
          <Field
            type="tel"
            name="number"
          />
          <ErrorText component="p" name="number" />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
};


