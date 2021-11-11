import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) return null;

  return (
    <div
      className={`alert alert-${alert.type || "warning"} alert-dismissible `}
      role="alert"
    >
      <strong>Внимание</strong>
      &nbsp;{alert.text}
      <button
        onClick={hide}
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
