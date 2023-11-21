/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { NewPostIcon } from "../assets/NavIcons";
import { useState } from "react";

export default function NewPostForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [post, setPost] = useState({
    description: "",
    location: "",
    price: "",
    type: "",
  });

  const [pictures, setPictures] = useState([]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handlePictureChange = (evt) => {
    const files = evt.target.files;
    if (files && files.length > 0) {
      const selectedImagesArray = Array.from(files);
      setPictures(selectedImagesArray);
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(pictures,"=> pictures we");
    console.log(post,"=> post we");
  };

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
    <div className="flex flex-col gap-2">
      <Link onClick={onOpen}>
        <NewPostIcon className="lg:absolute lg:left-2" />
        <p className="hidden lg:flex">New Post</p>
      </Link>
      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:text-white">
                New Post
              </ModalHeader>
              <ModalBody>
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
                    className="w-full mt-2 p-2 border rounded-md"
                    accept="images/"
                    name="pictures"
                    multiple
                    onChange={handlePictureChange}
                  />
                </div>
                <Input
                  type="text"
                  label="description"
                  name="description"
                  className="dark:text-white"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  label="location"
                  name="location"
                  className=" dark:text-white"
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  label="Price"
                  className=" dark:text-white"
                  name="price"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  onChange={handleInputChange}
                />
                <Select
                  label="Type"
                  selectionMode="single"
                  className="w-full dark:text-white"
                  name="type"
                  onChange={handleInputChange}
                >
                  {types.map((type) => (
                    <SelectItem
                      key={type}
                      value={types}
                      className="dark:text-white "
                    >
                      {type}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  onPress={onClose}
                  className="bg-redDefault"
                  onClick={onSubmit}
                >
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
