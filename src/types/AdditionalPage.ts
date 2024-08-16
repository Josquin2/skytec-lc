export interface Page {
  menu_title: string
  title: string
  url: string
  center: Array<OneBlock>
  left: Array<OneBlock>
  right: Array<OneBlock>
  left_menu: boolean
}

interface OneBlock {
  type: string
  content: string
}
