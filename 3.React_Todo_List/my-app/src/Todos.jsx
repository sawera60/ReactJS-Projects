const Todos = () => {
    

    return (
        <div className="mt-8 px-4">
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black uppercase border-b">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black uppercase border-b">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black uppercase border-b">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Buy Groceries</td>
                            <td>Milk, eggs, bread, and fruits</td>
                            <td>

                                <div className="flex gap-2 mt-3 mb-2.5">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4.5 py-2.5  rounded-md text-[15px] font-medium cursor-pointer">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4.5 py-2.5 rounded-md text-[15px] font-medium cursor-pointer">
                                        Delete
                                    </button>
                                </div>


                            </td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Todos;
