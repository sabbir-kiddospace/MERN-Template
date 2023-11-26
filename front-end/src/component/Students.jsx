import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { deleteStudentById, getAllStudents } from "../apiRequest/apiRequest";
import { Link } from "react-router-dom";

const Students = () => {
  let [data, setData] = useState([]);
  let [count, setCount] = useState();

  useEffect(() => {
    (async () => {
      let allStud = await getAllStudents();

      console.log(allStud.data);
      setData(allStud.data);
    })();
  }, [count]);

  async function deleteStudent(id) {

    if (await deleteStudentById(id)) {
      setCount(Date.now());
      toast.success("Student removed!");
    }

  }

  return (
    <div className="max-w-screen-xxl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Students
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">First name</th>
              <th className="py-3 px-6">Last name</th>
              <th className="py-3 px-6">Gender</th>
              <th className="py-3 px-6">Date of birth</th>
              <th className="py-3 px-6">Nationality</th>
              <th className="py-3 px-6">Courses</th>
              <th className="py-3 px-6">Address</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Admission Date</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.dateOfBirth}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.nationality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.courses}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <Link
                    to={"/register?id=" + item._id}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      deleteStudent(item._id);
                    }}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default Students;
