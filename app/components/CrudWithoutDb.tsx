import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllData, addData, updateData, deleteData } from "../api/route";
import React, { useState } from "react";
import Modal from "./Modal"; // Import your custom Modal component

function CrudWithoutDb() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("data", getAllData);

  const addMutation = useMutation(addData, {
    onSuccess: (newData) => {
      queryClient.setQueryData("data", (prevData) => [...prevData, newData]);
    },
  });

  const updateMutation = useMutation(updateData, {
    onSuccess: (updatedData) => {
      queryClient.setQueryData("data", (prevData) => {
        const index = prevData.findIndex((item) => item.id === updatedData.id);
        if (index !== -1) {
          prevData[index] = updatedData;
        }
        return [...prevData];
      });
    },
  });

  const deleteMutation = useMutation(deleteData, {
    onSuccess: (deletedData) => {
      queryClient.setQueryData("data", (prevData) => {
        return prevData.filter((item) => item.id !== deletedData.id);
      });
    },
  });

  const handleAddData = (newData) => {
    addMutation.mutate(newData);
  };

  const handleUpdateData = (updatedData) => {
    updateMutation.mutate(updatedData);
  };

  const handleDeleteData = (id) => {
    deleteMutation.mutate(id);
  };

  const [editData, setEditData] = useState(null);

  const handleEdit = (data) => {
    setEditData(data);
  };

  const handleCancelEdit = () => {
    setEditData(null);
  };

  const handleSaveEdit = (updatedData) => {
    handleUpdateData(updatedData);
    handleCancelEdit();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="table w-4/5 border-collapse mt-10 my-auto">
        <thead className="bg-lime-50 font-bold py-10 text-left border-b border-slate-300">
          <tr className="">
            <th className="py-2 w-2/12">ID</th>
            <th className="py-2 w-2/5">Name</th>
            <th className="py-2 w-2/12">Age</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 border-b">{item.id}</td>
              <td className="py-2 border-b">{item.name}</td>
              <td className="py-2 border-b">{item.age}</td>
              <td className="py-2 border-b">
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteData(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddForm onSubmit={handleAddData} />
      {editData && (
        <Modal
          modalOpen={editData !== null}
          setModalOpen={handleCancelEdit}
        >
          <EditForm
            data={editData}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        </Modal>
      )}
    </div>
  );
}

function AddForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = {
      name: formData.get("name"),
      age: formData.get("age"),
    };
    onSubmit(newData);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-bold">Add User</h3>
      <div className="flex mt-2">
        <label htmlFor="name" className="mr-2 w-20">
          Name:
        </label>
        <input
          type="text"
          name="name"
          required
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex mt-2">
        <label htmlFor="age" className="mr-2 w-20">
          Age:
        </label>
        <input
          type="number"
          name="age"
          required
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}

function EditForm({ data, onSave, onCancel }) {
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);

  const handleSave = () => {
    const updatedData = { ...data, name, age };
    onSave(updatedData);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold">Edit Data</h3>
      <div className="flex mt-2">
        <label htmlFor="name" className="mr-2 w-20">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded  px-2 py-1"
        />
      </div>
      <div className="flex mt-2">
        <label htmlFor="age" className="mr-2 w-20">
          Age:
        </label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        onClick={handleSave}
        className="mt-2 bg-lime-400 hover:bg-lime-500  text-white px-5 py-2 font-bold  rounded"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="mt-2 ml-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        Cancel
      </button>
    </div>
  );
}

export default CrudWithoutDb;