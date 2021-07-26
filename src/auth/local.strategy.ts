import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from './auth.service'


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email', passwordField: 'password' })
    }

    async validate(email: string, password: string, done: CallableFunction) {
        //validation부분 보통 service로 나눔
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException() //http exception 401 -> exception filter
        }

        return done(null, user)
    }
}