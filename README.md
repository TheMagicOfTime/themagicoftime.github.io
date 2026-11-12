# themagicoftime.github.io

Сайт русского перевода WHITE ALBUM2. Готовый статический сайт: сборка и установка зависимостей не нужны.

## Первая загрузка в GitHub

Откройте терминал внутри этой папки. Для первой загрузки в пустой репозиторий:

```sh
git init
git add .
git commit -m "Publish website"
git branch -M main
git remote add origin https://github.com/TheMagicOfTime/themagicoftime.github.io.git
git push -u origin main
```

`git add .` добавляет весь сайт, включая изображения, шрифты и скрытый `.nojekyll`.
Файл `index.html` должен находиться в корне репозитория, рядом с этим README.
При загрузке через браузер загрузите содержимое папки после распаковки ZIP.

## Включение GitHub Pages

В репозитории откройте **Settings → Pages**:

- Source: **Deploy from a branch**.
- Branch: **main**.
- Folder: **/ (root)**.

Нажмите **Save** и дождитесь успешной публикации. Адрес сайта: https://themagicoftime.github.io/.
Документация: https://docs.github.com/en/pages/quickstart.

## Обновление сайта

После изменения файлов:

```sh
git add .
git commit -m "Update website"
git push
```

## Состав

`index.html` и `main/index.html` — главное меню; `translated/`, `process/`, `faq/`, `author/`, `download/` — разделы сайта.
`assets/` содержит картинки, элементы оформления и локальные шрифты; их лицензия находится в `assets/fonts/OFL.txt`.
`favicon.png` — иконка сайта. Все внутренние ссылки относительные.
