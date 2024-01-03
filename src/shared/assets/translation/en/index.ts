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
    download: 'Download',
    invite: 'Invite',
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
  toast: {
    invite: 'The link is copied to the clipboard',
  },
  editor: {
    placeholder: 'Write something...',
  },
}

export default message
