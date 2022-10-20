"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorText = exports.AddButton = exports.LabelName = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
exports.LabelName = styled_components_1.default.p `
  margin-bottom: ${p => p.theme.space[2]}px;
`;
exports.AddButton = styled_components_1.default.button `
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
exports.ErrorText = (0, styled_components_1.default)(formik_1.ErrorMessage) `
  color: red;
`;
//# sourceMappingURL=Phonebook.styled.js.map