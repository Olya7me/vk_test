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
import type { Intern } from "@/api/dataType";

export function AddStudentForm() {
    const form = useForm<Intern>();
    const [isExpaned, setIsExpaned] = useState(false);

    const requiredFields = [
        { name: "firstName", label: "Имя" },
        { name: "lastName", label: "Фамилия" },
        { name: "age", label: "Возраст" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Телефон" },
    ];

    const optionalFields = [
        { name: "university", label: "Университет" },
        { name: "faculty", label: "Факультет" },
        { name: "course", label: "Курс" },
        { name: "skills", label: "Навыки" },
        { name: "github", label: "Github" },
        { name: "stack", label: "Предпочитаемый стек" },
        { name: "employment", label: "Занятость" },
        { name: "salary", label: "Ожидаемая зарплата" },
        { name: "status", label: "Статус" },
    ];

    return (
        <Form {...form}>
            <form className="space-y-4 max-w-xl mx-auto mb-10">
                {requiredFields.map((field) => (
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

                {isExpaned &&
                    optionalFields.map((field) => (
                        <FormField
                            key={field.name}
                            name={field.name}
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

                <Button type="submit" className="w-full bg-accent">
                    Добавить
                </Button>
            </form>
        </Form>
    );
}
