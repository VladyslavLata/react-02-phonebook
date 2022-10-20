"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const Section_1 = require("./Section/Section");
const PhonebookForm_1 = require("./PhonebookForm/PhonebookForm");
const Contacts_1 = require("./Contacts/Contacts");
const Filter_1 = require("./Filter/Filter");
class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: [
                { id: 'id-5', name: 'Kira Ferato', number: '222-10-20' },
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
            name: '',
        };
        this.reviewNameInContacts = name => {
            return this.state.contacts.find(contact => contact.name === name);
        };
        this.addContact = contact => {
            this.setState(prevState => ({
                contacts: [contact, ...prevState.contacts],
            }));
        };
        this.removeContact = removeContactId => {
            this.setState(prevState => ({
                contacts: prevState.contacts.filter(contact => contact.id !== removeContactId),
            }));
        };
        this.changeFilter = e => {
            this.setState({ name: e.currentTarget.value.trimStart() });
        };
        this.getVisibleContacts = () => {
            const { contacts, name } = this.state;
            const nameNormalized = name.toLowerCase();
            return contacts.filter(contact => contact.name.toLowerCase().includes(nameNormalized));
        };
    }
    render() {
        const { name } = this.state;
        const visibleContacts = this.getVisibleContacts();
        return (<>
        <Section_1.Section title="Phonebook">
          <PhonebookForm_1.PhonebookForm onAddContact={this.addContact} onReviewName={this.reviewNameInContacts}/>
        </Section_1.Section>
        <Section_1.Section title="Contacts">
          <Filter_1.Filter filterHeader="Find contacts by name" value={name} onChange={this.changeFilter}/>
          <Contacts_1.Contacts contacts={visibleContacts} onRemoveContact={this.removeContact}/>
        </Section_1.Section>
      </>);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map