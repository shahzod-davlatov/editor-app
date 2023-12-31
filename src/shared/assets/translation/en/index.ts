import type { MessageSchema } from '@typings/locale'

const message: MessageSchema = {
  'navigation-menu': {
    title: 'Editor',
  },
  footer: {
    author: 'Shahzod Davlatov',
  },
  button: {
    open: 'Open',
    edit: 'Edit',
    remove: 'Remove',
    clear: 'Clear',
    add: 'Add',
    save: 'Save',
  },
  input: {
    search: {
      label: 'Search by title',
      placeholder: 'Search ',
    },
  },
  'add-dialog': {
    header: 'Create document',
    title: {
      label: 'Name',
      placeholder: 'Enter name',
    },
    description: {
      label: 'Description',
      placeholder: 'Enter description',
    },
  },
}

export default message
