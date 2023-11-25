
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn({
        comment: 'Unique identifier'
    })
    id : number;

    @Column({
        type: 'varchar'
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    password: string;

}
