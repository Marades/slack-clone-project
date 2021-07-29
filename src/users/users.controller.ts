import { Body, Controller, Get, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/common/decorator/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.intercepter';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('User')
@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }
    @ApiResponse({
        status: 200,
        description: '성공',
        type: UserDto
    })
    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@User() user) {
        return user || false;
    }

    @UseGuards(new NotLoggedInGuard())
    @ApiOperation({ summary: '회원가입' })
    @Post()
    async Join(@Body() data: JoinRequestDto) {
        await this.usersService.join(data.email, data.nickname, data.password)

        return;
    }

    @ApiResponse({
        status: 200,
        description: '성공',
        type: UserDto
    })
    @ApiOperation({ summary: '로그인' })
    @UseGuards(LocalAuthGuard) // 권한 체크, 로그인 했는지, 인터셉터보다 먼저 실행됨(401, 403 에러)
    @Post('login')
    logIn(@Req() req) {
        console.log('controller')
        return req.user;
    }

    @UseGuards(new LoggedInGuard())
    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut(@Req() req, @Res() res) {

        req.logOut()
        res.clearCookie('connect.sid', { httpOnly: true })
        res.send('ok')
    }
}
