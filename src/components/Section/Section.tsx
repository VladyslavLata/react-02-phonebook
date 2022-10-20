import { Box } from '../Box/Box';

import { Title } from './Sectio.styled';
import { FC } from "react";

interface IProps {
  title: string,
  children: any,
}

export const Section: FC<IProps> = ({ title, children }) => (
  <Box as="section" p={4}>
    <Title>{title}</Title>
    {children}
  </Box>
);
