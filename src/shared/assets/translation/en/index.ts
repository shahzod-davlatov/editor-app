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
    more: 'More',
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
    command: {
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      strike: 'Strikethrough',
      paragraph: 'Paragraph',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      'align-left': 'To the left',
      'align-center': 'Centered',
      'align-right': 'To the right',
      'align-justify': 'Width',
      blockquote: 'Blockquote',
      'wrap-text': 'Line break',
      bulletList: 'Marked list',
      orderedList: 'Numbered list',
      inter: 'Inter',
      'comic-sans': 'Comic Sans',
      serif: 'Serif',
      monospace: 'Monospace',
      cursive: 'Cursive',
      default: 'Default',
    },
    menu: {
      lettering: 'Lettering',
      heading: 'Heading',
      families: 'Font',
      aligns: 'Alignment',
      list: 'List',
      other: 'Other',
    },
  },
}

export default message
