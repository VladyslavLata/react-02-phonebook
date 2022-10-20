"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Number = exports.Button = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button `
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
exports.Number = styled_components_1.default.p `
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;
//# sourceMappingURL=Contacts.styled.js.map