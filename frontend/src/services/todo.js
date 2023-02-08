const baseUrl = "http://localhost:5000/api/v1/tasks";

const getAll = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
}

const getItemById = async ({ id }) => {
  const response = await fetch(`${baseUrl}+ "/" + ${id}`);
  return await response.json();
}

const remove = ({ id }) => {
  return fetch(`${baseUrl}+ "/" + ${id}`, {
    method: 'DELETE'
  }).catch(err => console.error(err));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getItemById, remove };