import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('omdb')
export class OmdbEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        nullable: false,
        length: 255,
        name: 'title',
    })
    title: string;

    @Column('varchar', {
        length: 10,
        name: 'year',
    })
    year: string;

    @Column('varchar', {
        length: 10,
        name: 'type',
    })
    type: string;

    @Column('text', {
        nullable: true,
        name: 'poster',
    })
    poster: string;
}