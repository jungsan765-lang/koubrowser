import { expect, it } from 'vitest'
import { translateShipName, translateTerm } from '../index'

it('uses KC3 ship names and only fully recognized suffix combinations', () => {
  expect(translateShipName('ko', '金剛')).toBe('콩고')
  expect(translateShipName('ko', '金剛改二')).toBe('콩고 개2')
  expect(translateShipName('ja', '金剛改二')).toBe('金剛改二')
  expect(translateShipName('ko', '金剛未確認')).toBe('金剛未確認')
  expect(translateShipName('ko', '未登録艦改二')).toBe('未登録艦改二')
})

it('keeps exact equipment names distinct from ship suffix processing', () => {
  expect(translateTerm('ko', '12cm単装砲')).toBe('12cm 단장포')
  expect(translateTerm('ja', '12cm単装砲')).toBe('12cm単装砲')
  expect(translateTerm('ko', '未知の装備改二')).toBe('未知の装備改二')
})
