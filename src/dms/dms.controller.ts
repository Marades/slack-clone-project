import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspace/:url/dms')
export class DmsController {
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
