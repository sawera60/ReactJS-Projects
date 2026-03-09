import { useEffect, useState } from 'react';

const Form = ({ setTodo, data, id, setId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    if (id) {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, title: title.trim(), description: description.trim() } : item
      );
      setTodo(updatedData);
      setId('');
    } else {
      const obj = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
      };
      setTodo([...data, obj]);
    }

    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (!id) {
      setTitle('');
      setDescription('');
      return;
    }

    const updateData = data.find((item) => item.id === id);
    setTitle(updateData?.title ?? '');
    setDescription(updateData?.description ?? '');
  }, [id, data]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Enter Task"
          className="border-2 border-gray-300 rounded-md p-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border-2 border-gray-300 ml-2 rounded-md p-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md ml-2 text-[15px]">
          {id ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default Form;
