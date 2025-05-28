import { Header } from "@/components/Header/Header";
import { DataTable } from "@/components/Table/Table";
import { AddStudentForm } from "@/components/Form/Form";
import { InternsProvider } from "@/context/internContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const MainPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <InternsProvider>
                <Header />
                <main className="container mx-auto px-4">
                    <AddStudentForm />
                    <DataTable />
                </main>
            </InternsProvider>
        </QueryClientProvider>
    );
};
