type FieldTransformers<T> = {
    [K in keyof T]?: (value: unknown) => T[K];
};

export function transformFormData<T>(
    data: Partial<Record<keyof T, unknown>>,
    transformers: FieldTransformers<T>
): T {
    const transformed = {} as T;

    for (const key in data) {
        const k = key as keyof T;
        const transformer = transformers[k];
        transformed[k] = transformer
            ? transformer(data[k])
            : (data[k] as T[typeof k]);
    }

    return transformed;
}
