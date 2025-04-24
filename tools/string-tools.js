/**
 * Преобразует строку в указанный формат именования
 * @param {string} input - исходная строка
 * @param {string} format - желаемый формат ('original', 'camelCase', 'pascalCase', 'snakeCase', 'constantCase')
 * @returns {string} Строка в указанном формате
 */
export function transformCase(input, format = 'original') {
    if (!input || typeof input !== 'string') return '';
    if (!format || format === 'original') return input;

    // Нормализация строки (разделяем слова по разным регистрам и символам)
    const normalized = input
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
        .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
        .trim();

    if (!normalized) return input;

    const words = normalized.split(/\s+/).filter(Boolean);

    switch (format) {
        case 'original':
            return input;

        case 'camelCase':
            return words
                .map((word, i) =>
                    i === 0
                        ? word.toLowerCase()
                        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join('');

        case 'pascalCase':
            return words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');

        case 'snakeCase':
            return words.map(word => word.toLowerCase()).join('_');

        case 'constantCase':
            return words.map(word => word.toUpperCase()).join('_');

        default:
            return input;
    }
}

/**
 * Удаляет спецсимволы из строки
 * @param name
 * @return {string|string}
 */
export function sanitizeInterfaceName(name) {
    return name
        ?.replace(/[^a-zA-Z0-9_\s]/g, '')  // Удаляем спецсимволы, кроме пробелов и _
        .replace(/\s+/g, '_')             // Пробелы → _
        .replace(/^[0-9_]+/, '')          // Удаляем цифры и _ в начале
        .replaceAll()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('_') ?? 'undefined';
}

/**
 * Удаляет префиксы из имени интерфейса
 * @param {string} name
 * @param {string[]} prefixes
 * @return {string}
 */
export function removePrefixesFromName(name, prefixes = []) {
    if (prefixes.length === 0) return name;

    let newName = name;
    prefixes.forEach(prefix => {
        if (name.startsWith(prefix)) {
            newName = newName.slice(prefix.length);
        }
    });
    return newName;
}
