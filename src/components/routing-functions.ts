import router from '@/router'

export function onMainPageClick() {
  router.push({ name: 'main' })
}

export function onCabinetPageClick() {
  router.push({ name: 'cabinet' })
}

export function onVacanciesPageClick() {
  router.push({ name: 'vacancies' })
}

export function onAboutCompanyPageClick() {
  router.push({ name: 'about' })
}

export function onPrivilegePageClick() {
  router.push({ name: 'privilege' })
}

export function onNewEmployeePageClick() {
  router.push({ name: 'new-employee' })
}

// left main routing functions

export function onAhoRequestClick() {
  router.push({ name: 'aho-request' })
}

export function onHelpDeskRequestClick() {
  router.push({ name: 'help-desk-request' })
}

export function onRemoteAccessInstructionsClick() {
  router.push({ name: 'remote-access-instructions' })
}

export function onMeetingRoomInstructionsClick() {
  router.push({ name: 'meeting-room-instructions' })
}

export function onDocumentsClick() {
  router.push({ name: 'documents' })
}

export function onOneBlogClick(blog: number) {
  router.push({ name: 'one-blog', params: { blog: blog } })
}

export function onGlobalSearchClick(request: string) {
  router.push({ name: 'global-search', params: { request: request } })
}
