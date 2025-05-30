import { Header } from "@/components/Header/Header";
import { DataTable } from "@/components/Table/DataTable";
import { AddStudentForm } from "@/components/Form/Form";
import { InternsProvider } from "@/context/internContext";

export const MainPage = () => {
    return (
        <InternsProvider>
            <Header />
            <main className="container mx-auto px-4">
                <AddStudentForm />
                <DataTable />
            </main>
        </InternsProvider>
    );
};
