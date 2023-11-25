import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService,
        private readonly usersService: UsersService){
        
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() createUserDto: CreateUserDto){
        var user = await this.usersService.findByEmail(createUserDto.email);
        return await this.authService.login(user)
    }

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto) {
        let exists = await this.usersService.findByEmail(createUserDto.email);
        if(exists != null)
            return null
        
      return this.usersService.create(createUserDto);
    }

}
