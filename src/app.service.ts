import { Injectable } from '@nestjs/common';

// 요청, 응답에 대해선 모르고 트랜잭션 단위로
// req, res에 대한 정보 없는 게 좋음
// 테스트, 재사용에 좋음
// => 구조에 대한 어느 정도의 강제성
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return process.env.SECRET
  }
}
