import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('users')

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('character varying', {
        nullable: false,
        length: 255,
        name: 'username',
    })
    username: string;

    @Column('uuid',{
        nullable: true,
    })
    parent: string | null;
}