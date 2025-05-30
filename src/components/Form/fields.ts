import validators from "@/lib/validators/validators";

export const requiredFields = [
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
        placeholder: "+7 ___ ___ __ __",
        rules: validators.phoneValidator,
    },
];

export const optionalFields = [
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
