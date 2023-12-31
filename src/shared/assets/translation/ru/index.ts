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
}

export default message
