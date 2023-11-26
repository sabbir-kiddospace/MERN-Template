import { useEffect, useState } from "react";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../apiRequest/apiRequest";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const StudentRegister = () => {
  let navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const idFromQuery = queryParams.get("id");

  const departments = [
    "Computer Science & Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Environmental Science",
    "Gryffindor"
  ];

  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    courses: "Computer Science & Engineering",
  });

  useEffect(() => {
    (async () => {
      if (idFromQuery) {
        fillTheForm(idFromQuery);
      }
    })();
  }, [idFromQuery]);

  function inputOnChange(name, value) {
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  }

  async function fillTheForm(id) {
    try {
      let student = await getStudentById(id);
      setFormData(student.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function submitData(formData) {
    let createdStudent;

    if (idFromQuery) {
      createdStudent = await updateStudent(idFromQuery, formData);
    } else {
      createdStudent = await createStudent(formData);
    }

    if (createdStudent) {

        if(idFromQuery) {
            toast.success("Student Updated!");
            
        } else {
            toast.success("Student Created!");

        }
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  }

  return (
    <main className="pt-1 pb-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {idFromQuery ? "Update Student info" : "Register Student"}
          </h1>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitData(formData);
            }}
            className="space-y-5"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onInput={(e) => {
                    inputOnChange("firstName", e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onInput={(e) => {
                    inputOnChange("lastName", e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">

            <div>
              <label className="font-medium">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => {
                  inputOnChange("gender", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="text"
                value={formData.email}
                onInput={(e) => {
                  inputOnChange("email", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>


                </div>
           
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  value={formData.phone}
                  onInput={(e) => {
                    inputOnChange("phone", e.target.value);
                  }}
                  placeholder="+1 (555) 000-000"
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Date of birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => {
                  inputOnChange("dateOfBirth", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Nationality</label>
              <input
                type="text"
                value={formData.nationality}
                onInput={(e) => {
                  inputOnChange("nationality", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Address</label>
              <input
                type="text"
                value={formData.address}
                onInput={(e) => {
                  inputOnChange("address", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Course</label>
              <select
                value={formData.courses}
                onChange={(e) => {
                  inputOnChange("courses", e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              >
                {departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default StudentRegister;
