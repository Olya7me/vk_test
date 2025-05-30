"use client";
import { useState, useEffect } from "react";
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
import { requiredFields, optionalFields } from "./fields";
import { useAddStudentForm } from "./useAddStudentForm";

export function AddStudentForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { form, mutation, handleSubmit } = useAddStudentForm();

    useEffect(() => console.log("Form mounted"), []);

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

                {isExpanded &&
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
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:underline"
                >
                    {isExpanded ? "Скрыть" : "Добавить еще +"}
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
