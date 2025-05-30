import { Header } from "@/components/Header/Header";
import { DataTable } from "@/components/Table/DataTable";
import { AddInternForm } from "@/components/Form/AddInternForm";
import { ErrorScreen } from "@/components/ErrorScreen/ErrorScreen";

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4">
                <ErrorScreen />
                <AddInternForm />
                <DataTable />
            </main>
        </>
    );
};
