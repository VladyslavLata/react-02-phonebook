"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const Box_1 = require("../Box/Box");
const Contacts_styled_1 = require("./Contacts.styled");
const Contacts = ({ contacts, onRemoveContact }) => {
    return (<Box_1.Box as="ul" py={4}>
      {contacts.map(({ name, number, id }) => (<Box_1.Box as="li" p={3} display="flex" width="300px" justifyContent="space-between" alignItems="center" key={id}>
          <div>
            <h3>{name}</h3>
            <Contacts_styled_1.Number>{number}</Contacts_styled_1.Number>
          </div>
          <Contacts_styled_1.Button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </Contacts_styled_1.Button>
        </Box_1.Box>))}
    </Box_1.Box>);
};
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.jsx.map