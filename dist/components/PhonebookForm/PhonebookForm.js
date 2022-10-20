"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonebookForm = void 0;
const formik_1 = require("formik");
const prop_types_1 = __importDefault(require("prop-types"));
const yup = __importStar(require("yup"));
const nanoid_1 = require("nanoid");
const Phonebook_styled_1 = require("./Phonebook.styled");
const styled_components_1 = __importDefault(require("styled-components"));
const ErrorText = (0, styled_components_1.default)(formik_1.ErrorMessage) `
  color: red;
`;
const schema = yup.object().shape({
    name: yup
        .string()
        .strict()
        .trim()
        .min(2)
        .max(30)
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces')
        .required(),
    number: yup
        .string()
        .strict()
        .trim()
        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'),
});
const initialValues = {
    name: '',
    number: '',
};
const PhonebookForm = ({ onAddContact, onReviewName }) => {
    const handleSubmit = (values, actions) => {
        if (onReviewName(values.name)) {
            alert(`${values.name} is already in contacts.`);
            return;
        }
        onAddContact(Object.assign(Object.assign({}, values), { id: (0, nanoid_1.nanoid)() }));
        actions.resetForm();
    };
    return (<formik_1.Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <formik_1.Form>
        <label htmlFor="name">
          <Phonebook_styled_1.LabelName>Name</Phonebook_styled_1.LabelName>
          <formik_1.Field autoComplete="off" type="text" name="name"/>
          <ErrorText component="p" name="name"/>
        </label>
        <label htmlFor="number">
          <Phonebook_styled_1.LabelName>Number</Phonebook_styled_1.LabelName>
          <formik_1.Field type="tel" name="number"/>
          <ErrorText component="p" name="number"/>
        </label>
        <Phonebook_styled_1.AddButton type="submit">Add contact</Phonebook_styled_1.AddButton>
      </formik_1.Form>
    </formik_1.Formik>);
};
exports.PhonebookForm = PhonebookForm;
exports.PhonebookForm.propTypes = {
    onAddContact: prop_types_1.default.func.isRequired,
    onReviewName: prop_types_1.default.func.isRequired,
};
//# sourceMappingURL=PhonebookForm.js.map