import axios from "axios";
import { useState } from "react";

export function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);
  const doRquest = async () => {
    setErrors(null);
    try {
      const response = await axios({
        method,
        url,
        data: body,
      });
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h1>Oooops...</h1>
          <ul className="my-0">
            {err.response.data.errors.map((err, idx) => (
              <li key={`error_${idx}`}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return { doRquest, errors };
}
