import { Controller, Get, Render } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get('/')
    @Render('member')
    async getAllMembers() {
        return await this.memberService
                   .findAllMembers()
                   .then((result) => result ? { members: result } : { members: [] });
    }
}
