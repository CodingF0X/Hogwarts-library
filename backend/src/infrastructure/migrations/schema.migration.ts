import { Injectable } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

@Injectable()
export class SchemaMigration implements MigrationInterface {
  name = 'SchemaMigration ';
  public async up(q: QueryRunner): Promise<void> {
    await q.query(`CREATE SCHEMA IF NOT EXISTS "account"`);
  }
  public async down(q: QueryRunner): Promise<void> {
    await q.query(`DROP SCHEMA IF EXISTS "account" CASCADE`);
  }
}
