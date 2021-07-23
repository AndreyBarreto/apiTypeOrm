import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTarefas1627062273176 implements MigrationInterface {
    name = 'UserTarefas1627062273176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tarefas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome_tarefa" character varying NOT NULL, "descricao" character varying NOT NULL, "dificuldade" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2f57a4443470e61ac5de297e30a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tarefas"`);
    }

}
