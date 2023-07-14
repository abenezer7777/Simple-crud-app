let data = [
  { id: 1, name: "Abebe Kebede", age: 25 },
  { id: 2, name: "Hacalu calla", age: 30 },
  { id: 3, name: "Kebede Abebe", age: 35 },
];

export function getAllData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

export function addData(newData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = data.length + 1;
      const newDataWithId = { id: newId, ...newData };
      data.push(newDataWithId);
      resolve(newDataWithId);
    }, 500);
  });
}

export function updateData(updatedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = data.findIndex((item) => item.id === updatedData.id);
      if (index !== -1) {
        data[index] = updatedData;
        resolve(updatedData);
      } else {
        resolve(null);
      }
    }, 500);
  });
}

export function deleteData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const deletedData = data.splice(index, 1);
        resolve(deletedData[0]);
      } else {
        resolve(null);
      }
    }, 500);
  });
}
