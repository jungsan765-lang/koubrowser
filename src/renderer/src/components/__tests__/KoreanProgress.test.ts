import { afterEach, expect, it } from 'vitest'
import { initializeLanguage, localizeProgressHtml } from '@renderer/i18n'

afterEach(() => initializeLanguage('ja'))

it('keeps Japanese progress markup byte for byte and translates only counter text in Korean', () => {
  const original = '<span class="cleared">遠征05：1/1</span> <span>未確認の条件：0/3</span>'
  initializeLanguage('ja')
  expect(localizeProgressHtml(original)).toBe(original)
  initializeLanguage('ko')
  const translated = localizeProgressHtml(original)
  const fragment = document.createElement('template')
  fragment.innerHTML = translated
  expect(fragment.content.querySelector('.cleared')?.textContent).toBe('원정05：1/1')
  expect(fragment.content.querySelectorAll('span')).toHaveLength(2)
  expect(fragment.content.lastElementChild?.textContent).toBe('未確認の条件：0/3')
  expect(original).toBe('<span class="cleared">遠征05：1/1</span> <span>未確認の条件：0/3</span>')
})
