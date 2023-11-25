import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn({
        comment: 'Unique identifier'
    })
    id : number;

    @Column({
        type: 'varchar'
    })
    title: string;
}
