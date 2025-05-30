import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInterns } from "@/api/interns";
import { transformFormData } from "@/lib/formTransformer/index";
import { internTransformer } from "./AddInternTransformer";
import type { Intern } from "@/types/internTypes";
import { toast } from "sonner";

export function useAddStudentForm() {
    const queryClient = useQueryClient();
    const form = useForm<Intern>({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            phone: "",
            university: "",
            faculty: "",
            yearOfStudy: undefined,
            skills: undefined,
            github: "",
            preferredTechStack: undefined,
            availability: "",
            expectedSalary: undefined,
            status: "",
        },
    });

    const mutation = useMutation<unknown, Error, Intern>({
        mutationFn: postInterns,
        onSuccess: () => {
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["interns"] });
            toast("Данные успешно добавлены!");
        },
        onError: () => {
            toast.error("Произошла ошибка. Попробуйте позже");
        },
    });

    const handleSubmit = (data: Intern) => {
        console.log("HANDLE SUBMIT!", data);
        const transformed = transformFormData<Intern>(data, internTransformer);
        mutation.mutate(transformed);
    };

    return {
        form,
        mutation,
        handleSubmit,
    };
}
