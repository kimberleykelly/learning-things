import "./style.scss";
import { addEventHandler } from "./pineapple/add-event-handler";
import "./banana";
import "./test";

const button = document.querySelector(".spin-me-btn");
addEventHandler(button);
