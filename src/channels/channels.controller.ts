import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
    @Get()
    getAllChannels() {

    }

    @Get(':name')
    getSpecificChannel() {

    }

    @Post()
    createChannels() {

    }

    @Get(':name/chats')
    getChats(@Query() query, @Param() param) {
        console.log(query)
    }
    // _getChat(@Query('perPage') perPage, @Query('page') page) {
    //     console.log(perPage, page)
    // }

    @Post(':name/chats')
    postChat(@Body() body) {

    }

    @Get(':name/members')
    getAllMembers() {

    }

    @Post(':name/members')
    inviteMembers() {

    }
}
