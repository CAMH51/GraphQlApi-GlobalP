import {Entity,BaseEntity, PrimaryGeneratedColumn, Column} from  'typeorm'

@Entity()
export class Persons extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    ap_paterno:string;

    @Column()
    ap_materno:string;

    @Column()
    direccion:string;

    @Column()
    telefono:string;
}