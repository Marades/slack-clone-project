import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }
    async join(email: string, nickname: string, password: string) {
        // class-validator 쓰면 필요없음
        // if (!email) {
        //     throw new HttpException('No Email', 400)
        // }

        // if (!nickname) {
        //     throw new HttpException('No nickname', 400)
        // }

        // if (!password) {
        //     throw new HttpException('No password', 400)
        // }
        const user = await this.userRepository.findOne({ where: { email } })
        if (user) {
            throw new Error('이미 존재하는 유저')
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await this.userRepository.save({
            email,
            nickname,
            password: hashedPassword
        })
    }
}


/**
 * module -> controller -> service -> repository -> entity
 *                        비즈니스로직
 */