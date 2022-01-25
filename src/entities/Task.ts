import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("task")
class Task {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  check: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Task };
