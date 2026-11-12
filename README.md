# WHITE ALBUM2 — русский перевод v1.0.0

Полный статический сайт русского перевода v1.0.0 для японской PC-версии WHITE ALBUM2.
Выпуск охватывает основную историю: Introductory Chapter, Closing Chapter и Coda.
Перевод и патч бесплатны. Оригинальная игра устанавливается отдельно.

## Загрузка обновления в существующий репозиторий

Репозиторий сайта: https://github.com/TheMagicOfTime/themagicoftime.github.io.

1. Скопируйте всё содержимое этой папки в свою локальную папку репозитория, подтвердив замену файлов. Сохраните существующую папку `.git`.
2. `index.html` должен находиться прямо в корне репозитория, рядом с `styles.css`, `favicon.png`, `.nojekyll` и папкой `assets`. Включите скрытый `.nojekyll`.
3. Откройте терминал в папке локального репозитория и выполните:

```sh
git status --short
git add .
git commit -m "Update website v1.0.0"
git push origin main
```

Если локальной копии репозитория ещё нет, сначала выполните:

```sh
git clone https://github.com/TheMagicOfTime/themagicoftime.github.io.git
```

Затем скопируйте файлы сайта внутрь полученной папки и выполните команды обновления из неё.
При загрузке через браузер выбирайте содержимое распакованной папки, включая вложенные папки.

## GitHub Pages

В **Settings → Pages** должны быть выбраны **Deploy from a branch**, ветка **main**, папка **/ (root)**.
После успешной публикации сайт доступен по адресу https://themagicoftime.github.io/.
Сборка и установка зависимостей не нужны.

## Ссылки проекта

- Скачать перевод v1.0.0 и прочитать инструкцию: https://github.com/TheMagicOfTime/WA2RussianPatch/releases.
- Репозиторий патча: https://github.com/TheMagicOfTime/WA2RussianPatch.
- Ошибки и проблемы: https://github.com/TheMagicOfTime/WA2RussianPatch/issues.
- Автор: https://github.com/TheMagicOfTime.

## Состав сайта

Семь HTML-страниц, CSS и JavaScript, все используемые изображения, локальные шрифты и иконка сайта включены.
`assets/fonts/OFL.txt` содержит лицензию шрифтов. Все внутренние пути относительные.
Статические файлы сайта не содержат установщик игры; ссылка скачивания ведёт на GitHub Releases.
