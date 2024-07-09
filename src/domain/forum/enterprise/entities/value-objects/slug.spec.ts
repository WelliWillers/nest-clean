import { expect, test } from 'vitest'
import { Slug } from './slug'

test('should to be able to creat a slug', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toEqual('example-question-title')
})
