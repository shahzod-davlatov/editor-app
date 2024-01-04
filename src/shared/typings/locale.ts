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
    download: string
    invite: string
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
  toast: {
    invite: string
  }
  editor: {
    command: {
      bold: string
      italic: string
      underline: string
      strike: string
      paragraph: string
      heading1: string
      heading2: string
      heading3: string
      heading4: string
      heading5: string
      heading6: string
      'align-left': string
      'align-center': string
      'align-right': string
      'align-justify': string
      blockquote: string
      'wrap-text': string
      bulletList: string
      orderedList: string
      inter: string
      'comic-sans': string
      serif: string
      monospace: string
      cursive: string
      default: string
    }
    menu: {
      lettering: string
      heading: string
      families: string
      aligns: string
      list: string
      other: string
    }
  }
}
