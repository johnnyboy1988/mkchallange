import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({
        description: 'Title',
        example: 'Die Hard 4'
    })
    title: string;
}
