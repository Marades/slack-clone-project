import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport' // nestjs가  passport를 감싸면서 모듈화

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { // authGuard 안에 canActivate가 있어서 implement 않해줘도 됌
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const can = await super.canActivate(context)
        if (can) {
            const request = context.switchToHttp().getRequest()
            console.log('login for cookie')
            await super.logIn(request) // -> serialize user
        }
        return true
    }
}

/**
 * Passport
 * localStrategy중요
 *
 */