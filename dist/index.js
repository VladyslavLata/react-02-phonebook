"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const theme_1 = require("./constants/theme");
const styled_components_1 = require("styled-components");
const App_1 = require("./components/App");
require("./index.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <styled_components_1.ThemeProvider theme={theme_1.theme}>
      <App_1.App />
    </styled_components_1.ThemeProvider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map