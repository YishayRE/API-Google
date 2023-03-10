import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YishayService } from './yishay.service';
import { CreateYishayDto } from './dto/create-yishay.dto';
import { UpdateYishayDto } from './dto/update-yishay.dto';

@Controller('yishay')
export class YishayController {
  constructor(private readonly yishayService: YishayService) {}

  @Post()
  create(@Body() createYishayDto: CreateYishayDto) {
    return this.yishayService.create(createYishayDto);
  }

  @Get()
  findAll() {
    return this.yishayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yishayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYishayDto: UpdateYishayDto) {
    return this.yishayService.update(+id, updateYishayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yishayService.remove(+id);
  }

  @Post('send')
  async sendEmail(@Body('email') email: string, @Body('name') name: string) {
    return await this.yishayService.sendMail(email, name);
  }
}
