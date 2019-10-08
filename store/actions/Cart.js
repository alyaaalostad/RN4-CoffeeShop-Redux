import { REMOVE_ITEM, ADD_ITEM, CHECK_OUT } from "./types";

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const checkout = () => {
  return {
    type: CHECK_OUT
  };
};
