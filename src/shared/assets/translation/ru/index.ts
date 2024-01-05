import type { MessageSchema } from '@typings/locale'

const message: MessageSchema = {
  'navigation-menu': {
    title: 'Editor',
  },
  footer: {
    author: 'Shahzod Davlatov',
  },
  button: {
    open: 'Открыть',
    edit: 'Редактировать',
    remove: 'Удалить',
    clear: 'Очистить',
    add: 'Добавить',
    save: 'Сохранить',
    download: 'Скачать',
    invite: 'Пригласить',
    more: 'Подробнее',
  },
  input: {
    search: {
      label: 'Поиск по названию',
      placeholder: 'Поиск',
    },
  },
  'add-dialog': {
    header: 'Создать документ',
    title: {
      label: 'Наименование',
      placeholder: 'Введите название',
    },
    description: {
      label: 'Описание',
      placeholder: 'Введите описание',
    },
  },
  toast: {
    invite: 'Ссылка скопирована в буффер обмена',
  },
  editor: {
    command: {
      bold: 'Полужирный',
      italic: 'Курсив',
      underline: 'Подчеркнутый',
      strike: 'Зачеркнутый',
      paragraph: 'Стандартный',
      heading1: 'Заголовок 1',
      heading2: 'Заголовок 2',
      heading3: 'Заголовок 3',
      heading4: 'Заголовок 4',
      heading5: 'Заголовок 5',
      heading6: 'Заголовок 6',
      'align-left': 'Выравнивание слева',
      'align-center': 'По центру',
      'align-right': 'Выравнивание справа',
      'align-justify': 'По ширине',
      blockquote: 'Блок-цитата',
      'wrap-text': 'Разрыв строки',
      bulletList: 'Маркированный список',
      orderedList: 'Нумерованный список',
      inter: 'Inter',
      'comic-sans': 'Comic Sans',
      serif: 'Serif',
      monospace: 'Monospace',
      cursive: 'Cursive',
      default: 'По-умолчанию',
    },
    menu: {
      lettering: 'Начертание',
      heading: 'Заголовок',
      families: 'Шрифт',
      aligns: 'Выравнивание',
      list: 'Список',
      other: 'Остальное',
    },
  },
}

export default message
