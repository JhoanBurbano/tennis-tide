import React from "react";
import LeftBarComponent from "./LeftBarComponent";
import { ChevronLeftIcon, HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const DashboardComponent = () => {
  return (
    <div className="flex bg-white h-[100vh]">
      <LeftBarComponent />
      <section className=" flex-1 flex gap-6 pl-10 py-5 pr-5  rounded-l-2xl bg-[#1000a4] bg-[url('https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/tenistide/bg-xl.jpg')] text-white">
        <section className="flex-1 flex flex-col h-full gap-6 pt-5">
          <ChevronLeftIcon className=" h-10 w-10 p-2 rounded-full bg-[#ffff27] cursor-pointer text-black" />
          <h2 className=" text-7xl font-extrabold p-0">Lista de Torneos</h2>
          <span className="flex w-full ">
            <p className=" py-2 px-4 bg-[#ffff27] text-black rounded-full mr-4">
              parejas
            </p>
            <p className=" py-2 px-4 bg-[#ffff27] text-black rounded-full mr-4">
              masculino
            </p>
          </span>
          <table className="min-w-full border border-gray-300 border-x-0">
            <thead>
              <tr className=" bg-[#ffff27] text-black hover:transform-none">
                <th className="py-2 px-4 border-b">Codigo</th>
                <th className="py-2 px-4 border-b">Nombre del Torneo</th>
                <th className="py-2 px-4 border-b">Fechas</th>
                <th className="py-2 px-4 border-b">Tipo del torneo</th>
                <th className="py-2 px-4 border-b">Cuota de Inscripción</th>
                <th className="py-2 px-4 border-b">Premios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">XXXXXXX</td>
                <td className="py-2 px-4 border-b">Wimbledon Open 2023</td>
                <td className="py-2 px-4 border-b">15 al 30 de noviembre</td>
                <td className="py-2 px-4 border-b">Dobles</td>
                <td className="py-2 px-4 border-b">200000</td>
                <td className="py-2 px-4 border-b">4000000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">XXXXXXX</td>
                <td className="py-2 px-4 border-b">Wimbledon Open 2023</td>
                <td className="py-2 px-4 border-b">15 al 30 de noviembre</td>
                <td className="py-2 px-4 border-b">Dobles</td>
                <td className="py-2 px-4 border-b">200000</td>
                <td className="py-2 px-4 border-b">4000000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">XXXXXXX</td>
                <td className="py-2 px-4 border-b">Wimbledon Open 2023</td>
                <td className="py-2 px-4 border-b">15 al 30 de noviembre</td>
                <td className="py-2 px-4 border-b">Dobles</td>
                <td className="py-2 px-4 border-b">200000</td>
                <td className="py-2 px-4 border-b">4000000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">XXXXXXX</td>
                <td className="py-2 px-4 border-b">Wimbledon Open 2023</td>
                <td className="py-2 px-4 border-b">15 al 30 de noviembre</td>
                <td className="py-2 px-4 border-b">Dobles</td>
                <td className="py-2 px-4 border-b">200000</td>
                <td className="py-2 px-4 border-b">4000000</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="w-96 pt-6 pr-[1px] bg-[#ffffff] rounded-md shadow-md overflow-hidden relative bg-contain text-[#1000a4] pb-[120px]">
            <button className=" absolute top-1 right-1">
                <XMarkIcon className=" w-5 h-5"/>
            </button>
          <section className="overflow-auto h-full  px-5">
            <h2 className=" text-2xl font-extrabold uppercase text-center">
              Wimbledon Open 2023
            </h2>
            <p className=" text-sm text-center italic text-black">XXXXXXX</p>
            <p className=" mt-5 text-justify mb-5">
              Te invitamos a participar en nuestro emocionante torneo de tenis
              que se llevará a cabo en agosto de 2023. ¡Prepárate para mostrar
              tus habilidades en la cancha y competir por emocionantes premios!
              La fecha límite de inscripción es el 15 de julio de 2023. ¡No te
              pierdas la oportunidad de ser parte de este evento deportivo
              único!
            </p>
            <span className=" flex flex-col gap-3 mb-5">
              <h3 className=" text-2xl font-extrabold">Requisitos:</h3>
              <ul className=" list-disc list-inside">
                <li>Edad mínima: 18 años</li>
                <li>Nivel de habilidad: Profesionales y aficionados</li>
                <li>Licencia de tenis</li>
                <li>Equipamiento estándar</li>
                <li>
                  Pago de cuota de inscripción
                </li>
                <li>Seguro médico</li>
                <li>Formulario de inscripción antes de la fecha límite</li>
              </ul>
            </span>
            <span className=" flex flex-col gap-3 mb-3">
              <h3 className=" text-2xl font-extrabold">Detalles:</h3>
              <table className=" min-w-full border border-[#1000a4] border-x-0 mb-5">
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Fecha del Torneo:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">15-30 de Noviembre, 2023</td>
                </tr>
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Ubicación:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">Club de Tenis Sunnyville</td>
                </tr>
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Categoría:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">Dobles</td>
                </tr>
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Cupos Disponibles:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">10</td>
                </tr>
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Inscripción Abierta hasta:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">1 de Noviembre, 2023</td>
                </tr>
                <tr>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">
                    <strong>Costo de Inscripción:</strong>
                  </td>
                  <td className=" border-b py-2 border-[#1000a4] text-left px-1">$200.000 COP</td>
                </tr>
              </table>
            </span>
            <span className=" flex flex-col gap-3">
              <h3 className=" text-2xl font-extrabold">Premios:</h3>
              <table className=" border border-[#1000a4] border-x-0">
                <thead>
                  <tr>
                    <th className=" border-b bg-[#1000a4] text-[#ffff27]">Puesto</th>
                    <th className=" border-b bg-[#1000a4] text-[#ffff27]">Premios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#1000a4] font-bold">Primer Lugar</td>
                    <td className="border-b border-[#1000a4] ">
                      <ul>
                        <li>Trofeo de Oro</li>
                        <li>$4'000.000 COP</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#1000a4] font-bold">Segundo Lugar</td>
                    <td className="border-b border-[#1000a4] ">
                      <ul>
                        <li>Trofeo de Plata</li>
                        <li>$2'000.000 COP</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#1000a4] font-bold">Tercer Lugar</td>
                    <td className="border-b border-[#1000a4] ">
                      <ul>
                        <li>Trofeo de Bronce</li>
                        <li>$1'000.000 COP</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </section>
          <span className=" absolute bottom-5  px-5">
            <h3 className=" text-2xl font-extrabold mb-4">
              ¿Quieres participar?
            </h3>
            <span className=" flex justify-between w-[344px]">
              <button className="w-40 h-10 flex-1 rounded-md bg-[#1000a4] text-[#ffff27] font-bold shadow-md mr-3">
                Inscribirse
              </button>
              <button className="w-10 h-10 flex justify-center items-center">
                <HeartIcon className="w-8" />
              </button>
            </span>
          </span>
        </section>
      </section>
    </div>
  );
};

export default DashboardComponent;
