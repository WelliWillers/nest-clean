import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      content: faker.lorem.sentence(),
      authorId: new UniqueEntityID(),
      title: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}
