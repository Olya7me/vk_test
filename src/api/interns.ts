import type { Intern } from "@/types/internTypes";

const BASE_URL = "http://localhost:4000/interns";

export const fetchInterns = async (page: number): Promise<Intern[]> => {
    const res = await fetch(`${BASE_URL}?_start=${page * 10}&_limit=10`);
    if (!res.ok) {
        throw new Error(`Ошибка при загрузке данных ${res.status}`);
    }
    return res.json();
};

export const postInterns = async (data: Intern): Promise<Intern> => {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Ошибка при добавлении ${res.status}`);

    return res.json();
};
