import { readonly, ref } from 'vue'
import { normalizeLanguage, translate, translateTerm, translateShipName, type MessageValues } from '@common/i18n'

const currentLanguage = ref(normalizeLanguage(undefined))
export const language = readonly(currentLanguage)

/** Called when opening a window. Language changes in Settings apply after restart. */
export function initializeLanguage(value: unknown): void {
  currentLanguage.value = normalizeLanguage(value)
  if (typeof document !== 'undefined') document.documentElement.lang = currentLanguage.value
}

export function t(source: string, values?: MessageValues, context?: string): string {
  return translate(currentLanguage.value, source, values, context)
}

/** For game-provided names: deliberately separate from ordinary interface messages. */
export function gameText(source: string | null | undefined): string {
  return translateTerm(currentLanguage.value, source ?? '')
}

export function shipText(source: string | null | undefined): string {
  return translateShipName(currentLanguage.value, source ?? '')
}

/** Localize the app's generated quest-counter markup, never the game webview. */
export function localizeProgressHtml(source: string): string {
  if (currentLanguage.value !== 'ko' || !source) return source
  const fragment = document.createElement('template')
  fragment.innerHTML = source
  const walker = document.createTreeWalker(fragment.content, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const text = node.nodeValue ?? ''
    const count = /^(.*?)(\d+\/\d+)(.*)$/.exec(text)
    node.nodeValue = count ? t(count[1]) + count[2] + t(count[3]) : t(text)
    node = walker.nextNode()
  }
  return fragment.innerHTML
}
