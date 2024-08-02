export interface Page {
  menu_title: string
  title: string
  url: string
  center: Array<OneBlock>
  left: Array<OneBlock>
  right: Array<OneBlock>
}

interface OneBlock {
  type: string
  content: string
}
