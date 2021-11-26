import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('auth service', () => {

    let controller: Partial<UsersController>;
    let fakeUsersService: Partial<UsersService>;
    let fakeAuthService: Partial<AuthService>;

    beforeEach( async () => {

        fakeUsersService = {
            find: () =>  Promise.resolve([]),
            findOne: (id: number) => {
                return Promise.resolve({
                    id,
                    email: 'm@m.com',
                    password: '12345'
                })
            }
        }        

        const module = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: fakeUsersService
                }
            ]
        }).compile();

       controller = module.get<UsersController>(UsersController);
    });


})