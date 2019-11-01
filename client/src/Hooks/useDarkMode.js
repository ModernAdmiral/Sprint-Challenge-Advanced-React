import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues, cb) => {
  const [value, setValue] = useLocalStorage(key, initialValues);
  console.log(value);
  const cardWrapper = document.querySelector("div");

  useEffect(() => {
    value
      ? cardWrapper.classList.add("dark-mode")
      : cardWrapper.classList.remove("dark-mode");
  }, [cardWrapper.classList, value]);
  return [value, setValue];
};
