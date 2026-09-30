# Translog — вариант 1 «Corridor»

Новый сайт translogcompany.com на React + Vite. Контент временно взят с текущего сайта.

## Запуск

```powershell
npm install
npm run dev      # http://localhost:5173
npm run build    # готовый сайт в папке dist/
```

## Где что лежит

- `src/content.js` — все тексты, телефоны, адреса, ссылки на картинки
- `src/styles.css` — дизайн: цвета и шрифты в начале файла (`:root`)
- `src/pages/` — страницы: главная, услуги, новости, контакты
- `src/components/` — шапка, подвал, форма запроса, иконки

## Страницы

- `#/` — главная
- `#/services/express`, `#/services/dangerous-goods` — услуги
- `#/news`, `#/news/start-translog-company` — новости
- `#/contacts` — контакты и форма запроса

## Публикация

- GitHub Pages: перенести `deploy.yml` в `.github/workflows/`, Settings → Pages → Source: GitHub Actions
- cPanel: `npm run build`, загрузить содержимое `dist/` в `public_html/`

## Временно

- Фотографии в `public/img/` (WebP). Логотип пока загружается с текущего сайта
- Форма открывает почтовый клиент (mailto) — позже подключить к n8n или CRM
- Только английский язык
