import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import type { Intern } from "@/types/internTypes";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postInterns } from "@/api/interns";
import { toast } from "react-toastify";
import validators from "@/lib/validators/validators";
import {
    internTransformers,
    transformFormData,
} from "@/lib/formTransformer/formTransformer";

export function AddStudentForm() {
    const queryClient = useQueryClient();
    const form = useForm<Intern>();
    const [isExpaned, setIsExpaned] = useState(false);

    const requiredFields = [
        {
            name: "firstName",
            label: "Имя",
            placeholder: "Введите имя",
            rules: validators.firstNameValidator,
        },
        {
            name: "lastName",
            label: "Фамилия",
            placeholder: "Введите фамилию",
            rules: validators.lastNameValidator,
        },
        {
            name: "age",
            label: "Возраст",
            placeholder: "Введите возраст",
            rules: validators.ageValidator,
        },
        {
            name: "email",
            label: "Email",
            placeholder: "example@mail.ru",
            rules: validators.emailValidator,
        },
        {
            name: "phone",
            label: "Телефон",
            placeholder: "+7 9** *** ** **",
            rules: validators.phoneValidator,
        },
    ];

    const optionalFields = [
        {
            name: "university",
            label: "Университет",
            rules: validators.universityValidator,
        },
        {
            name: "faculty",
            label: "Факультет",
            rules: validators.facultyValidator,
        },
        {
            name: "yearOfStudy",
            label: "Курс",
            rules: validators.yearOfStudyValidator,
        },
        { name: "skills", label: "Навыки", rules: validators.skillsValidator },
        { name: "github", label: "Github", rules: validators.githubValidator },
        {
            name: "preferredTechStack",
            label: "Предпочитаемый стек",
            rules: validators.preferredTechStackValidator,
        },
        {
            name: "availability",
            label: "Занятость",
            rules: validators.availabilityValidator,
        },
        {
            name: "expectedSalary",
            label: "Ожидаемая зарплата",
            rules: validators.expectedSalaryValidator,
        },
        { name: "status", label: "Статус" },
    ];
    const mutation = useMutation<unknown, Error, Intern>({
        mutationFn: postInterns,
        onSuccess: () => {
            toast.success("Добавлено");
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["interns"] });
        },
        onError: () => {
            toast.error("Ошибка");
        },
    });
    const handleSubmit = (data: Intern) => {
        const transformed = transformFormData<Intern>(data, internTransformers);
        mutation.mutate(transformed);
    };
    return (
        <Form {...form}>
            <form
                className="space-y-4 max-w-xl mx-left mb-10"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                {requiredFields.map((field) => (
                    <FormField
                        key={field.name}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: controllerField }) => (
                            <FormItem>
                                <FormLabel>
                                    {field.label}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={field.placeholder}
                                        {...controllerField}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                {isExpaned &&
                    optionalFields.map((field) => (
                        <FormField
                            key={field.name}
                            name={field.name}
                            rules={field.rules}
                            render={({ field: controllerField }) => (
                                <FormItem>
                                    <FormLabel>{field.label}</FormLabel>
                                    <FormControl>
                                        {field.name === "status" ? (
                                            <Select
                                                value={
                                                    controllerField.value || ""
                                                }
                                                onValueChange={
                                                    controllerField.onChange
                                                }
                                            >
                                                <SelectTrigger className="w-full text-md">
                                                    <SelectValue placeholder="Статус" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="В ожидании">
                                                        В ожидании
                                                    </SelectItem>
                                                    <SelectItem value="Активен">
                                                        Активен
                                                    </SelectItem>
                                                    <SelectItem value="Завершен">
                                                        Завершен
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input
                                                placeholder={field.label}
                                                {...controllerField}
                                            />
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                <button
                    type="button"
                    onClick={() => setIsExpaned(!isExpaned)}
                    className="text-blue-600 hover:underline"
                >
                    {isExpaned ? "Скрыть" : "Добавить еще +"}
                </button>

                <Button
                    type="submit"
                    className="w-full bg-accent"
                    disabled={mutation.isPending}
                >
                    Добавить
                </Button>
            </form>
        </Form>
    );
}
