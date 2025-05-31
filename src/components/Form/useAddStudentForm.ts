import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInterns } from "@/api/interns";
import { transformFormData } from "@/lib/formTransformer/index";
import { internTransformer } from "./AddInternTransformer";
import type { Intern } from "@/types/internTypes";
import { toast } from "react-toastify";

export function useAddStudentForm() {
    const queryClient = useQueryClient();
    const form = useForm<Intern>({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            phone: "",
            university: undefined,
            faculty: undefined,
            yearOfStudy: undefined,
            skills: [],
            github: undefined,
            preferredTechStack: [],
            availability: undefined,
            expectedSalary: undefined,
            status: undefined,
        },
    });

    const mutation = useMutation<unknown, Error, Intern>({
        mutationFn: postInterns,
        onSuccess: () => {
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["interns"] });
            toast.success("Данные успешно добавлены!");
        },
        onError: () => {
            toast.error("Произошла ошибка, попробуйте позже.");
        },
    });

    const handleSubmit = (data: Intern) => {
        const transformed = transformFormData<Intern>(data, internTransformer);
        mutation.mutate(transformed);
    };

    return {
        form,
        mutation,
        handleSubmit,
    };
}
