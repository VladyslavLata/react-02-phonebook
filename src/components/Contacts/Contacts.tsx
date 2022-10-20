import { FC } from "react";
import { Box } from '../Box/Box';
import { Button, Number } from './Contacts.styled';

interface IContact {
  name: string,
  number: string,
  id: string
}

interface IProps {
  contacts: IContact[],
  onRemoveContact: {(id:string):void},
}


export const Contacts: FC<IProps> = ({ contacts, onRemoveContact }) => {
  return (
    <Box as="ul" py={4}>
      {contacts.map(({ name, number, id }) => (
        <Box
          as="li"
          p={3}
          display="flex"
          width="300px"
          justifyContent="space-between"
          alignItems="center"
          key={id}
        >
          <div>
            <h3>{name}</h3>
            <Number>{number}</Number>
          </div>
          <Button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};
