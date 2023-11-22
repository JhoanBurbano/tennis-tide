"use client";
import React from "react";
import Template from "./Template";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

interface AccessProps {}

interface FormData {
  user: string;
  password: string;
}

function AccessComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/access/login", data);
      console.log("response :>> ", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Template>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded-md shadow-md p-4 relative"
        style={{ width: "400px", height: "600px" }}
        autoComplete="off"
      >
        <h2 className="text-3xl font-extrabold text-center mb-3">
          Iniciar Sesión
        </h2>
        <div className="block mb-6">
          <label htmlFor="user">Usuario (e-mail)</label>
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
        <div className="block mb-6">
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
            })}
            className="w-full outline-none border-2 border-b-[#ffff27] rounded-md pl-2"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-40 h-10 bg-[#ffff27] rounded-md my-0 mx-auto shadow-md"
        >
          Ingresar
        </button>
        <p className="text-center absolute bottom-2 left-24">
          ¿No tienes cuenta?{" "}
          <Link href="register" className="text-blue-500">
            Únete
          </Link>
        </p>
      </form>
    </Template>
  );
}

export default AccessComponent;
