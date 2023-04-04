import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) {}

    @Get('')
    async getCalendar() {
        return await this.calendarService.getCalendar();
    }

    @Post('')
    async postCalendarEvent(@Body('emails') emails: string[], @Body('inicio') inicio: string, @Body('fin') fin: string) {
        return await this.calendarService.postCalendarEvent(emails, inicio, fin);
    }
}