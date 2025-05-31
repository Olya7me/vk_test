import { Header } from "@/components/Header/Header";
import { AddInternForm } from "@/components/Form/AddInternForm";
import { DataTable } from "@/components/Table/DataTable";
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
