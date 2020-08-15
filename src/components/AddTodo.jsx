import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

const AddTodo = () => {
  let todos = useContext(TodoContext);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("todo"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>

      <input type="text" name="age" ref={register} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default AddTodo;
