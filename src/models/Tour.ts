import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The Doctor model is one of the simple models in the example. It is the one side of its one-to-many relationship with
 * the Appointment model.
 */
@Entity()
export default class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destination: string;

  @Column()
  price: number;
}
