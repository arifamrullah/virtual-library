import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
    constructor(@InjectRepository(Member) private readonly memberRepository: Repository<Member>) {}

    async findAll(): Promise<Member[]> {
        return await this.memberRepository.find();
    }

    async findOne(id: number): Promise<Member> {
        return await this.memberRepository.findOne({ where : { id } });
    }

    async update(id: number, member: Member): Promise<Member> {
        await this.memberRepository.update(id, member);
        return await this.memberRepository.findOne({ where : { id } });
    }
}
