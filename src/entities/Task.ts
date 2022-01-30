import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Info } from "./Info";

@Entity("task")
class Task {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  check: boolean;

  @Column()
  infoId: string;

  @JoinColumn({ name:"infoId"})
  @OneToOne(() => Info)
  info: Info;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Task };
