import { Header } from "@/components/Header/Header";
import { DataTable } from "@/components/Table/DataTable";
import { AddInternForm } from "@/components/Form/AddInternForm";
import { Footer } from "@/components/Footer/Footer";

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4">
                <AddInternForm />
                <DataTable />
            </main>
            <Footer />
        </>
    );
};
