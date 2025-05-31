import { MainPage } from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";
import { InternsProvider } from "@/context/internContext";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <InternsProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <ToastContainer position="top-left" />
            </InternsProvider>
        </QueryClientProvider>
    );
}

export default App;
