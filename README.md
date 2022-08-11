## DEMO
[https://oblako-tasks-front-end.herokuapp.com/](https://oblako-tasks-front-end.herokuapp.com/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ ng serve

# build the project
$ ng build
```

## Итог

- Инициализация Angular-приложения и залито на Heroku
- Создана front-end часть для списка задач
- Работа с graphql

## API

- В проекте использовалось API -[https://oblako-tasks-back-end.herokuapp.com/projects](https://oblako-tasks-back-end.herokuapp.com/projects)
- Ссылка на репозиторий с API - [https://github.com/oblako-tasks/Back-end](https://github.com/oblako-tasks/Back-end)

## Вопросы
- Мутации и обновление Хранилища в graphql (при сохранении сущности возращает созданный объект и перезаписывает все локальное хранилище, вставляя созданную сущность)
- Принцип работы Angular themes
- Хранение данных происходит в самих компонентах и приходиться прокидывать туда-сюда данные. Сделано это только из-за того, что мало компанентов. Как вариант можно было создать Store в Angular используя Redux.