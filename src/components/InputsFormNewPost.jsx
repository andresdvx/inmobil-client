import { Input, Select, SelectItem } from "@nextui-org/react";

const InputsFormNewPost = () => {
  const types = [
    "edificio",
    "terreno",
    "apartamento",
    "casa",
    "parcela",
    "local",
    "finca",
    "otro",
  ];

  return (
    <>
      <div className="w-full mx-auto bg-[#F4F4F5] dark:bg-[#27272A] p-6 rounded-xl shadow-md dark:text-white">
        <label
          htmlFor="archivoInput"
          className="block text-sm font-medium text-gray-600 dark:text-white"
        >
          Selecciona archivos:
        </label>
        <input
          id="archivoInput"
          type="file"
          className="mt-2 p-2 border rounded-md"
          multiple
        />
      </div>
      <Input
        type="text"
        label="description"
        name="description"
        className="dark:text-white"
      />
      <Input
        type="text"
        label="location"
        name="location"
        className=" dark:text-white"
      />
      <Input
        type="number"
        label="Price"
        className=" dark:text-white"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Select
        label="Type"
        selectionMode="single"
        className="w-full dark:text-white"
      >
        {types.map((type) => (
          <SelectItem key={type} value={types} className="dark:text-white ">
            {type}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default InputsFormNewPost;
