export const firstNameValidator = {
    required: "Поле обязательно для заполнения",
    pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
        message: "Имя может содержать только буквы, пробелы и дефисы",
    },
    minLength: {
        value: 2,
        message: "Минимальная длина — 2 символа",
    },
    maxLength: {
        value: 50,
        message: "Максимальная длина — 50 символов",
    },
};

export const lastNameValidator = {
    required: "Поле обязательно для заполнения",
    pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
        message: "Фамилия может содержать только буквы, пробелы и дефисы",
    },
    minLength: {
        value: 2,
        message: "Минимальная длина — 2 символа",
    },
    maxLength: {
        value: 50,
        message: "Максимальная длина — 50 символов",
    },
};

export const emailValidator = {
    required: "Email обязателен",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Некорректный email",
    },
};

export const phoneValidator = {
    required: "Телефон обязателен",
    pattern: {
        value: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
        message: "Введите корректный номер телефона",
    },
    minLength: {
        value: 10,
        message: "Минимальная длина 10 символов",
    },
};

export const ageValidator = {
    required: "Возраст обязателен",
    pattern: {
        value: /^\d+$/,
        message: "Возраст должен быть числом",
    },
    min: {
        value: 14,
        message: "Минимальный возраст — 14 лет",
    },
    max: {
        value: 100,
        message: "Максимальный возраст — 100 лет",
    },
};

export const universityValidator = {
    minLength: { value: 2, message: "Минимальная длина — 2 символа" },
    maxLength: { value: 100, message: "Максимальная длина — 100 символов" },
};

export const facultyValidator = {
    minLength: { value: 2, message: "Минимальная длина — 2 символа" },
    maxLength: { value: 100, message: "Максимальная длина — 100 символов" },
};

export const yearOfStudyValidator = {
    min: { value: 1, message: "Год обучения не может быть меньше 1" },
    max: { value: 10, message: "Год обучения не может быть больше 10" },
    pattern: { value: /^\d+$/, message: "Год обучения должен быть числом" },
};

export const skillsValidator = {
    minLength: { value: 2, message: "Минимальная длина — 2 символа" },
    maxLength: { value: 200, message: "Максимальная длина — 200 символов" },
};

export const githubValidator = {
    minLength: {
        value: 5,
        message: "Минимальная длина ссылки GitHub — 5 символов",
    },
    maxLength: {
        value: 100,
        message: "Максимальная длина ссылки GitHub — 100 символов",
    },
    pattern: {
        value: /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/,
        message: "Некорректный URL GitHub",
    },
};

export const preferredTechStackValidator = {
    minLength: { value: 2, message: "Минимальная длина — 2 символа" },
    maxLength: { value: 200, message: "Максимальная длина — 200 символов" },
};

export const availabilityValidator = {
    minLength: { value: 2, message: "Минимальная длина — 2 символа" },
    maxLength: { value: 50, message: "Максимальная длина — 50 символов" },
};

export const expectedSalaryValidator = {
    pattern: {
        value: /^\d+(\.\d{1,2})?$/,
        message: "Зарплата должна быть числом",
    },
    min: {
        value: 0,
        message: "Зарплата не может быть меньше 0 ... Или может?",
    },
    max: {
        value: 1000000000,
        message: "Стажер не может получать такую зарплату",
    },
};
