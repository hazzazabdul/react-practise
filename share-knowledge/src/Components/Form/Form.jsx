const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.name.value,
      password: e.target.name.value,
    };
    console.log(data);
  };

  return (
    <div className="border-2 rounded-lg border-gray-800 max-w-3xl mx-auto my-8">
      <form className=" w-full p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            className="border-2 w-full focus:outline-none "
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 w-full focus:outline-none"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 w-full focus:outline-none"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <button
            className="w-full p-2 bg-purple-700 text-white duration-1000 hover:bg-purple-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
