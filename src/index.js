import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./toolkit/index.js";
import { theme } from "@src/store/theme";
import { HashRouter } from "react-router-dom";

// {
//   "id": 1,
//   "titleText": "Сергей А.С",
//   "titleButton": "Удалить",
//   "text": "Какой-то текст1",
//   "description": "Эти данные формируются сейчас из redux из db.json."
// },
// {
//   "id": 2,
//   "titleText": "Сергей А.С",
//   "titleButton": "Удалить",
//   "text": "Какой-то текст2",
//   "description": "Эти данные формируются сейчас из redux из db.json."
// },
// {
//   "id": 3,
//   "titleText": "Сергей А.С",
//   "titleButton": "Удалить",
//   "text": "Какой-то текст3",
//   "description": "Эти данные формируются сейчас из redux из db.json."
// }

//json-server --watch db.json --port 5000

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
