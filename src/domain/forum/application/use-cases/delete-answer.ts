import { Either, left, right } from '@/core/either'
import { AnswerRepository } from '../repositories/answers-repository'
import { NotAllowedError } from '../../../../core/errors/errors/not-allowed'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface AnswerUseCaseRequest {
  authorId: string
  answerId: string
}

type AnswerUseCaseResponse = Either<
  NotAllowedError | ResourceNotFoundError,
  object
>

@Injectable()
export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    authorId,
    answerId,
  }: AnswerUseCaseRequest): Promise<AnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (authorId !== answer?.authorId.toString()) {
      return left(new NotAllowedError())
    }

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    await this.answerRepository.delete(answer)

    return right({})
  }
}
