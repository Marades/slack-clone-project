export class JoinRequestDto {
    public email: string;
    public nickname: string;
    public password: string;
}

//export default 안쓰고 export class

// interface -> 자바스크립트 런타임에선 사라짐
// class -> 자바사크립트 런타임에서도 남아있음