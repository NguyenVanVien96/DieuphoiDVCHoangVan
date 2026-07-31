import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Citizen from "./pages/Citizen";
import Officer from "./pages/Officer";
import ProcedureStatus from "./pages/ProcedureStatus";
import Admin from "./pages/Admin";

import UploadPdf from "./pages/UploadPdf";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/"

                    element={<Home />}

                />

                <Route

                    path="/citizen"

                    element={<Citizen />}

                />

                <Route

                    path="/officer"

                    element={<Officer />}

                />

                <Route

                    path="/procedure-status"

                    element={<ProcedureStatus />}

                />

                <Route

                    path="/admin"

                    element={<Admin />}

                />

                <Route

                    path="/admin/upload"

                    element={<UploadPdf />}

                />

            </Routes>

        </BrowserRouter>

    );

}