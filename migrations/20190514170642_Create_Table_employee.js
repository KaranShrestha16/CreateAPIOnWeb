
exports.up = function (knex, Promise) {
    return knex.schema.createTable('employee', function (table) {
        table.increments('id');
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.float('salary').notNullable();
        table.integer('age').notNullable();
        table.string('image').notNullable();

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('employee');
};
