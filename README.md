## FMP CodeGen

#### FMP CodeGen - утилита для генерации кода на основе FMP спецификации.

### Установка

```
npm install            # установка зависимостей
```

### Использование

```
node index.js
```

### Опции

```
FMP_API_URL             # Адрес стенда с FMP
FMP_AUTH_TOKEN          # Токен для авторизации
OUTPUT_PATH             # Путь к директории для генерации кода
REMOVE_PREFIXES         # Список префиксов для удаления из имени интерфейса (['TEST_', 'TMP_'])
NAME_TRANSFORM          # Способ преобразования имени интерфейса (original, camelCase, pascalCase, snakeCase, constantCase)
```
