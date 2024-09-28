import { Body, Controller, Get, Param, Patch, Render } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './member.entity';
import { AppDataSource } from 'src';

@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    @Render('member')
    async getAllMembers() {
        const memberRepository = AppDataSource.getRepository(Member);
        return await memberRepository
            .createQueryBuilder('member')
            .leftJoinAndSelect('member.books', 'books')
            .getMany()
            .then((result) => result ? { members: result } : { members: [] });
    }
    
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Member> {
        return await this.memberService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() member: Member
    ): Promise<Member> {
        return await this.memberService.update(id, member);
    }
}
