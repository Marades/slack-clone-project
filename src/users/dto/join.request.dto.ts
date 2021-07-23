import { ApiProperty, PickType } from "@nestjs/swagger";
import { Users } from "src/entities/Users";

export class JoinRequestDto extends PickType(Users, ['email', 'nickname', 'password'] as const) { }

//export default 안쓰고 export class

// interface -> 자바스크립트 런타임에선 사라짐
// class -> 자바사크립트 런타임에서도 남아있음

// npx typeorm-model-generator -h localhost -d "주소" -d "디비명" -u "계정명" -x "비번" -e "디비엔진"