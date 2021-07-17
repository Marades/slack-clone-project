import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspace/:url/dms')
export class DmsController {
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한 번에 가져오는 갯수'
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지'
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: '사용자 id'
    })
    @Get(':id/chats')
    getChat(@Query() query, @Param() param) {
        console.log(query)
    }
    // _getChat(@Query('perPage') perPage, @Query('page') page) {
    //     console.log(perPage, page)
    // }

    @Post(':id/chats')
    postChat(@Body() body) {

    }
}
