import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";

export function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-row flex-nowrap items-center border-b-2 border-gray-100 py-6">
          <Popover.Group as="nav" className="space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Студенты
            </Link>
            <Link
              to="/sos"
              className="text-base font-medium hover:text-gray-900 text-red-600"
            >
              SOS
            </Link>
          </Popover.Group>
          <div className="flex flex-row flex-nowrap ml-auto space-x-5">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="ФИО студента"
            />
            <button
              className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Поиск
            </button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
