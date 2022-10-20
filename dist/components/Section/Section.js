"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const Box_1 = require("../Box/Box");
const Sectio_styled_1 = require("./Sectio.styled");
const Section = ({ title, children }) => (<Box_1.Box as="section" p={4}>
    <Sectio_styled_1.Title>{title}</Sectio_styled_1.Title>
    {children}
  </Box_1.Box>);
exports.Section = Section;
//# sourceMappingURL=Section.js.map