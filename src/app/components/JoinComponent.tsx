"use client";
import React from "react";
import Template from "./Template";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

interface JoinProps {}

interface FormData {
  name: string;
  lastname: string;
  dateOfBirth: string;
  user: string;
  password: string;
}

function JoinComponent() {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL as string, data)
    console.log('response :>> ', response);

    } catch (error) {
        console.error(error)
    }
    console.log("Formulario enviado:", data);
  };

  return (
    <Template>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded-md shadow-md p-4 relative w-[400px] h-[600px]"
        autoComplete="off"
      >
        <h2 className="text-3xl font-extrabold text-center mb-3">
          Registrarse
        </h2>
        <div className="block mb-4">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            {...register("name", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Za-z]+(?:[ ]?[A-Za-z]+){0,2}$/,
                message: "Ingresa solo letras en este campo",
              },
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="off"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="block mb-4">
          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            {...register("lastname", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Ingresa solo letras en este campo",
              },
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="off"
          />
          {errors.lastname && (
            <p className="text-red-500 text-xs">{errors.lastname.message}</p>
          )}
        </div>
        <div className="block mb-4">
          <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Este campo es obligatorio",
              validate: (value) => {
                const birthDate = new Date(value);
                const currentDate = new Date();
                const minAgeDate = new Date();
                minAgeDate.setFullYear(currentDate.getFullYear() - 18);
                return (
                  birthDate <= minAgeDate || "Debes tener al menos 18 años"
                );
              },
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="NOPE"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>
          )}
        </div>
        <div className="block mb-4">
          <label htmlFor="user">Usuario (Email)</label>
          <input
            type="text"
            {...register("user", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un email válido",
              },
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="off"
          />
          {errors.user && (
            <p className="text-red-500 text-xs">{errors.user.message}</p>
          )}
        </div>
        <div className="block mb-4">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              maxLength: {
                value: 16,
                message: "La contraseña no debe tener más de 16 caracteres",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@-_]).+$/,
                message:
                  "La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial de los siguientes: !.@-_",
              },
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="off"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-40 h-10 bg-[#ffff27] rounded-md my-0 mx-auto shadow-md"
        >
          Unirse
        </button>
        <p className="text-center absolute bottom-2 left-24">
          ¿Ya tienes cuenta? <Link href="access" className=' text-blue-500'>Ingresa</Link>
        </p>
      </form>
    </Template>
  );
}

export default JoinComponent;
