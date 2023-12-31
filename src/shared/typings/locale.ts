export type MessageSchema = {
  'navigation-menu': {
    title: string
  }
  footer: {
    author: string
  }
  button: {
    open: string
    edit: string
    remove: string
    clear: string
    add: string
    save: string
  }
  input: {
    search: {
      label: string
      placeholder: string
    }
  }
  'add-dialog': {
    header: string
    title: {
      label: string
      placeholder: string
    }
    description: {
      label: string
      placeholder: string
    }
  }
}
