import path from 'path';
import fs from 'fs';

/**
 * Создаёт папку для группы интерфейсов.
 */
export function createGroupDir(outputDir, groupName) {
    const dir = path.join(outputDir, groupName);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
    return dir;
}

/**
 * Генерирует index.ts с экспортами для группы.
 */
export function generateGroupIndex(groupDir, interfaces) {
    const content = interfaces
        .map(name => `export * from './${name}';`)
        .join('\n');
    fs.writeFileSync(path.join(groupDir, 'index.ts'), content);
}

/**
 * Безопасная очистка папки (с обработкой ошибок)
 */
export function safeCleanDir(outputDir) {
    try {
        // Проверяем существование папки
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
            return;
        }

        // Читаем содержимое папки
        const files = fs.readdirSync(outputDir);

        // Удаляем только файлы и пустые подпапки
        for (const file of files) {
            const filePath = path.join(outputDir, file);
            const stat = fs.lstatSync(filePath);

            if (stat.isDirectory()) {
                // Рекурсивно очищаем подпапку
                safeCleanDir(filePath);
                fs.rmSync(filePath); // Удаляем пустую папку
            } else {
                // Удаляем файл
                fs.unlinkSync(filePath);
            }
        }
    } catch (error) {
        console.error(`⚠️ Ошибка очистки папки ${outputDir}:`, error.message);
        // Продолжаем работу, даже если не удалось очистить
    }
}
