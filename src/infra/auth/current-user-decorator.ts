import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserPayload } from './jwt.strategy'

export const CurrentUser = createParamDecorator(
  (_: never, constext: ExecutionContext) => {
    const request = constext.switchToHttp().getRequest()

    return request.user as UserPayload
  },
)
