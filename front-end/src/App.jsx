import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import NoPage from "./page/NoPage";
import AllStudents from "./page/AllStudents";
import StudentRegister from "./page/StudentRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllStudents />} />
          <Route path="/register" element={<StudentRegister/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
