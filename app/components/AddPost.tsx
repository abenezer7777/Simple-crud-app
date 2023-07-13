"use client";
import React from 'react'
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import {useRouter} from 'next/navigation'

const AddPost = () => {

    const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setModalOpen(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-lime-500 text-white p-3 cursor-pointer text-lg"
      >
        Add New Course
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3">Add New Course</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-2"
            value={inputs.title || ""}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            className="w-full p-2 my-5"
            value={inputs.description || ""}
            onChange={handleChange}
          />

          <button type="submit" className="bg-lime-500 text-white px-5 py-2">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
