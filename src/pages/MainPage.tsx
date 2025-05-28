import { Header } from "@/components/Header/Header";
import { DataTable } from "@/components/Table/Table";
import { AddStudentForm } from "@/components/Form/Form";

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4">
                <AddStudentForm />
                <DataTable />
            </main>
        </>
    );
};
