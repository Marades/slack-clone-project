import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<any> | Promise<Observable<any>> {
        //전 부분

        // handle 다음 부분이 컨트롤러 다음 부분
        return next
            .handle()
            .pipe(map((data) => data === undefined ? null : data))
    }
}

// error 는 exception filter에서 처린
// return next.handle().pipe(map((data) => ({data, code: 'success'})))


// AOP
/**
 * 미들 웨어는 가로로 실행 됌
 * 세로로 공통인 미들웨어들(A,D) 중복 제거할 수 있지 않을까? -> 인터셉터
 * 컨트롤러 실행 전후로 특정 동작 제어 가능
 * 
 * 
 */

//A -> B -> C -> D

// A -> C -> D

// A -> E -> F -> D -> G

// Z -> A -> X -> D