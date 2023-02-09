import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Usuario",
    email: "sebas@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("UseEffect");
  }, []);

  useEffect(() => {
    // console.log("formState Changed");
  }, [formState]);

  useEffect(()=>{
    // console.log('email changed!');
  }, [email]);
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="sebas@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      { username == 'Usuario2' && <Message />}
    </>
  );
};
