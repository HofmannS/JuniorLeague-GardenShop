[English version](#english-version) | [Русская версия](#russian-version)

---

# English version

## Project Title: 
"Garden Products Online Store"

## Links to design, requirements, and deployed version:
- Design: [Figma mockup](https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0)  
- Requirements: [Technical specification (Google Docs)](https://docs.google.com/document/d/1aQMHAwVEKPJSSr61zbxd0uj2auIZdlIG/edit?tab=t.0)  
- API: [API](https://exam-server-5c4e.onrender.com/)  
- Deployed (vercel.com): [link to project](http://junior-league-garden-shop.vercel.app/)

## General Description:
A web application for an online store of home and garden products.  
The website provides users with a convenient interface to browse products, filter by category, add items to the cart, and place orders.

## Key Features:
- **Home Page**:  
  - Display of 4 categories  
  - 5% discount form with client-side validation (React Hook Form)  
  - Display of 4 random discounted products  

- **“Product of the Day” Modal**:  
  - Accessible from the header on any page  
  - Shows a random product with a 50% discount  
  - Item can be added to the cart directly from the modal  

- **Dark Theme**:  
  - Switch between light and dark modes  
  - Saved in Local Storage  

- **Categories and Products by Category**:  
  - View all categories and filter products  
  - Sorting: default, price up/down, alphabetically  
  - Filtering: by discount, price range  

- **Discounted Products, Favorites, All Products**:  
  - Full list of products with sorting and filtering  
  - Favorites management  
  - Separate discount section  

- **Cart**:  
  - Manage quantity, remove items, calculate total  
  - Place order via form submission  

- **Other**:  
  - Product details page  
  - Not Found page  
  - Skeleton loader  
  - Fully responsive design  

## Tech Stack:
- **React** — UI and state management  
- **Redux Toolkit** — centralized state management  
- **React Router** — navigation between pages  
- **Git + GitHub** — version control and collaboration  

## Project Authors:
- **Sergej Hofmann** — [LinkedIn](https://www.linkedin.com/in/sergej-hofmann) | [GitHub](https://github.com/HofmannS)  
  Features: categories, all products, cart, filtering/sorting, loader, mobile responsiveness, code review  

- **Lena Konovalova** — [GitHub](https://github.com/helenkonovalova)  
  Features: header, categories page, discount page, product details, breadcrumbs, mobile responsiveness  

- **Pavlo Maksymov** — [LinkedIn](https://www.linkedin.com/in/pavlo-maksymoff) | [GitHub](https://github.com/PavelMaximov)  
  Features: header, banner, footer, dark theme, categories, mobile responsiveness  

- **Olha Halaktionova** — [GitHub](https://github.com/galaktionovaolga)  
  Features: discount form, “Product of the Day” modal, favorites page, Not Found page, mobile responsiveness, README  

---

# Russian version

## Название проекта: 
"Интернет-магазин товаров для дома и сада" (Garden Products)

## Ссылки на макет, ТЗ, задеплоенную реализацию:

Макет: [Макет в Figma](https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0)

TЗ: [Техническое задание (Google Docs)](https://docs.google.com/document/d/1aQMHAwVEKPJSSr61zbxd0uj2auIZdlIG/edit?tab=t.0)

API: [API](https://exam-server-5c4e.onrender.com/)

Задеплоенная реализация (versel.com): [_ссылка на проект_](http://junior-league-garden-shop.vercel.app/)

## Общее описание проекта:

Проект представляет собой веб-приложение для интернет-магазина товаров для дома и сада. Сайт предоставляет пользователю удобный интерфейс для: просмотра товаров, их категоризации, добавления в корзину, оформления заказа.

## Основной функционал проекта:

**Главная страница**  
  - Отображение списка из 4-х категорий  
  - Форма на получение скидки 5% c валидацией вводимых данных на клиентской стороне. Валидация реализована с использованием библиотеки React Hook Form.  
  - Отображение 4 случайных товаров со скидкой

**Модальное окно “Товар дня”**  
  - Размещено в Хедере, открывается с любой страницы  
  - В окне случайный товар и спец скидка в 50%  
  - Из модального окна товар можно добавить в корзину  
  - После закрытия пользователь остаётся на той же странице  

**Темная тема**  
  - Переключение на тёмную тему  
  - Все страницы изменяются в соответствии с выбранной темой  
  - Сохранение темы в Local Storage  

**Категории товаров**  
  - Просмотр списка всех доступных категорий  
  - Переход в раздел "Товары по категориям" при клике на карточку  

**Товары по категориям**  
  - Отображение списка товаров по выбранной категории  
  - Сортировка: по умолчанию, по цене (вверх/вниз), по алфавиту  
  - Фильтрация: по скидке, по диапазону цен  
  - Переход к подробному описанию товара  

**Все товары**  
  - Отображение полного списка  
  - Сортировка и фильтрация аналогично предыдущему разделу  

**Товары со скидкой**  
  - Список товаров со скидкой  
  - Сортировка и фильтрация (по диапазону цен)  

**Избранные товары**  
  - Отображение лайкнутых товаров  
  - Возможность сортировки и фильтрации (в том числе по скидкам)  

**Подробное описание товара**  
  - Полная информация: название, цена, описание, изображения  
  - Возможность добавления в корзину  

**Корзина**  
  - Отображение списка товаров, их количества и общей стоимости  
  - Изменение количества, удаление  
  - Расчёт общей стоимости  
  - Отправка формы заказа  

**Страница не найдена**  
  - Сообщение об ошибке  
  - Ссылка на возврат на главную страницу  

**Скелетон страницы (Loader)**  
  - При загрузке страниц: "Все товары", "Избранные", "Со скидкой", "По категориям"  

**Мобильная адаптивность**  
  - Корректное отображение на всех устройствах согласно макету

## Стек технологий:  
- **React**  
  Основной фреймворк для разработки пользовательского интерфейса. Используется для создания компонентов и управления состоянием приложения  

- **Redux Toolkit**  
  Управление состоянием приложения. Обеспечивает централизованное хранение состояния и упрощает передачу данных между компонентами  

- **React Router**  
  Маршрутизация в приложении. Используется для создания навигации между страницами  

- **Git и GitHub**  
  Система контроля версий и хостинг кода. Используются для управления изменениями в коде и совместной работы над проектом  

## Авторы проекта:  
### Sergej Hofmann
[LinkedIn](https://www.linkedin.com/in/sergej-hofmann) | [GitHub](https://github.com/HofmannS)  

**Реализованные фичи:**  
- Главная страница: категории, случайные товары со скидкой  
- Все товары  
- Корзина  
- Фильтрация и сортировка товаров  
- Скелетон страницы (Loader)  
- Мобильная адаптивность  
- Код ревью  

### Lena Konovalova
[GitHub](https://github.com/helenkonovalova)  

**Реализованные фичи:**  
- Хедер  
- Страница категорий товаров  
- Страница товаров со скидкой  
- Подробное описание товара  
- Путь от главной до текущей страницы (Breadcrumbs)  
- Мобильная адаптивность  

### Pavlo Maksymov
[LinkedIn](https://www.linkedin.com/in/pavlo-maksymoff) | [GitHub](https://github.com/PavelMaximov)  

**Реализованные фичи:**  
- Хедер, баннер, футер  
- Темная тема  
- Категории товаров  
- Товары по категориям  
- Мобильная адаптивность  

### Olha Halaktionova
[GitHub](https://github.com/galaktionovaolga)  

**Реализованные фичи:**  
- Форма на главной странице (скидка 5%)  
- Модальное окно "Товар дня"  
- Страница избранных товаров  
- Страница «Не найдено»  
- Мобильная адаптивность  
- Составление документа README к проекту  
