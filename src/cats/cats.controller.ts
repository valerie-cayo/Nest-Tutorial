import { Controller, Get, Post, Param, Body} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    console.log('changing again');
    return `This action returns something like a #${id} cat`;
  }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
}
