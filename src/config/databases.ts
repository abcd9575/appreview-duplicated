import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

// const sqlite: TypeOrmModuleOptions = {
//   type: 'sqlite',
//   database: 'db.sqlite',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

// 진짜 자바스크립트 줄인거 생략한거때문에 진입장벽 지려.
//근데 그거 없으면 js자체가 다른 문제가 많습니다 ㅠ 그거라도 해놔야해요
// 고마어 기훈아 ㅇㅅㅇ욬ㅋㅋㅋ저도 1시간 뒤 퇴근이네요 ㅎㅎ
// *근데 이거 어디서 프로젝트 가져오신거에요?? 문법을 너무 엄격하게 따지네요 ㅋㅋㅋ 이거 그냥.. 부트캠프 하면서 만드는거 내 개인프로젝트에다 옮기면서 공부하는중이야.

type Db설정함수 = (configService: ConfigService) => TypeOrmModuleOptions;
const mysql: Db설정함수 = (configService) => ({
  // 완전히 다 분해해놨네 ㅋㅋㅋ 이해하기쉽게: js/ts가 줄임말이 많아서 아마 형은 확실하게 표시된게 이해하기 편하실거에요
  type: 'mysql',
  host: configService.get('DB_HOST'), // 'localhost',
  database: configService.get('DB_NAME'), //'appreview',
  username: configService.get('DB_USERNAME'), //'root',
  password: configService.get('DB_PASSWORD'), //'1q2w3e$R',
  port: +configService.get('DB_PORT'), // 3306,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: configService.get('DB_SYNC'), // true,
  logging: true,
});
//형이 Type이 함수로 되어 있으니까 헷갈리시는 거 같아서 한번 따로 빼봤습니다
interface TESTDatabaseConnections {
  sqlite?: Db설정함수;
  mysql?: Db설정함수; // mysql이란 함수는 : configureService 인자값을 받아서 TypeOrmModuleOptions 리턴하는 (O)
}

export const databases: TESTDatabaseConnections = {
  // 그럼 databases는 mysql이란 함수와 mysql이란 함수는 : configureService 인자값을 받아서 TypeOrmModuleOptions 리턴하는 타입??
  //   sqlite,
  mysql: mysql,
};
// 아... 이게 타입이름이었구나 그럼
//Type 이름울 잡아주니까 바로 Type이 보이는거죠 만약에 Type 이름을 잡아주지 않으면, Typescript에서 이름이 없으니까 그 Type의 생김새를 보여줘요
// 지금 database 변수 안에 mysql 두개 다 가르켜 보세요. 아마 감이 좀 잡힐겁니다
// 미치겠네 어떻게 둘다 이름이 같은데 가르키는게 달라?? => Key:Value니까 잘 생각해서 보셔야죠 ㅎㅎ. mysql을 value로 갖고 그 key가 mysql이 거죠
//왼쪽은 databases.mysql 로 불러올 때 쓰이는 부분이고 오른쪽은 위에서 선언한 mysql이라는 변수입니다.
// 어렵다. 그래도 고마워 어느정도 이해 했어 한 3번돌려보면 이해할거같아.
