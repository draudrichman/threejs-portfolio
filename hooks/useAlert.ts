"use client";

import { useState } from "react";

interface AlertState {
  show: boolean;
  text: string;
  type: "danger" | "success"; 
}

interface AlertOptions {
  text: string;
  type?: "danger" | "success";
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: AlertOptions) =>
    setAlert({ show: true, text, type });
  const hideAlert = () =>
    setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;