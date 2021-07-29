import bcrypt from 'bcrypt'
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';

//서비스 안에서 서비스 -> 모킹(테스트) 힘들어짐
// 서비스 안은 레포지토리
// repository -> entity
@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async validateUser(email: string, password: string) {
        const user = await this.usersRepository.findOne({
            where: { email },
            select: ['id', 'email', 'password', 'nickname']
        });
        console.log(email, password, user)
        if (!user) {
            return null;
        }
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const { password, ...userWithoutPassword } = user; // 구조분해 할당
            return userWithoutPassword;
        }
        return null;
    }
}