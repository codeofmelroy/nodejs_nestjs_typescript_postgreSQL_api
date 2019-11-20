import { Controller, Get, Req, Post, Param, Body, Query } from '@nestjs/common';
import { CreateCatDto } from './create-cats.dto';
import createServer = require('connect');
import { QueryParams } from './query-params';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Query() query: QueryParams) {
        return `This action returns all cats offset: ${query.offset} and limit: ${query.limit}`;
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        console.log(id);
        return `This action returns a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
}
