import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { PaginationParams } from '../../../../core/repositories/pagination-params'

export interface AnswerRepository {
  save(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
