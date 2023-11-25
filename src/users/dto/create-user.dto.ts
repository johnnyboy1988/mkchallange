import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'email',
        example: 'mariazinha@gmail.com'
    })
    email: string;
    @ApiProperty({
        description: 'password',
        example: 'ABC@123Dcom'
    })
    password: string;
}
