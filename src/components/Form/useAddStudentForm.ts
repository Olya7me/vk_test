import { useForm } from "react-hook-form";
import {
    useMutation,
    useQueryClient,
    type InfiniteData,
} from "@tanstack/react-query";

import { postInterns } from "@/api/interns";
import { transformFormData } from "@/lib/formTransformer/index";
import { internTransformer } from "./AddInternTransformer";
import type { Intern } from "@/types/internTypes";
import { toast } from "react-toastify";
import { useInternsContext } from "@/context/internContext";

export const useAddStudentForm = () => {
    const queryClient = useQueryClient();
    const { updateKeys } = useInternsContext();

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

    const mutation = useMutation<Intern, Error, Intern>({
        mutationFn: postInterns,
        onSuccess: (newIntern) => {
            updateKeys(newIntern);
            queryClient.setQueryData<InfiniteData<Intern[]>>(
                ["interns"],
                (oldData) => {
                    if (!oldData) {
                        return { pages: [[newIntern]], pageParams: [] };
                    }
                    const lastIdx = oldData.pages.length - 1;
                    const updatedLastPage = [
                        newIntern,
                        ...oldData.pages[lastIdx],
                    ];
                    return {
                        pages: [
                            ...oldData.pages.slice(0, lastIdx),
                            updatedLastPage,
                        ],
                        pageParams: oldData.pageParams,
                    };
                }
            );

            form.reset();
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
};
