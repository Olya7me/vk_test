import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Intern } from "@/api/dataType";

export function AddStudentForm() {
    const form = useForm<Intern>();
    return (
        <Form {...form}>
            <form className="space-y-4 max-w-xl mx-auto mb-10">
                {[
                    { name: "firstName", label: "Имя" },
                    { name: "lastName", label: "Фамилия" },
                    { name: "age", label: "Возраст" },
                    { name: "university", label: "Университет" },
                    { name: "faculty", label: "Факультет" },
                    { name: "course", label: "Курс" },
                    { name: "email", label: "Email" },
                    { name: "phone", label: "Телефон" },
                    { name: "skills", label: "Навыки" },
                    { name: "github", label: "Github" },
                    { name: "stack", label: "Предпочитаемый стек" },
                    { name: "employment", label: "Занятость" },
                    { name: "salary", label: "Ожидаемая зарплата" },
                    { name: "status", label: "Статус" },
                ].map((field) => (
                    <FormField
                        key={field.name}
                        name={field.name}
                        render={() => (
                            <FormItem>
                                <FormLabel>{field.label}</FormLabel>
                                <FormControl>
                                    <Input placeholder={field.label} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button type="submit" className="w-full bg-accent">
                    Добавить
                </Button>
            </form>
        </Form>
    );
}
