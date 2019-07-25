import React from 'react';
import { Input } from 'reactstrap';

const useField = ({ input, type, id, disabled, meta: { touched, error } }) => {
    return (
      <div>
        <Input {...input} type={type} id={id} disabled={disabled} />
        {touched && error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  };

export default useField;