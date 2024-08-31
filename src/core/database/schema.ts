import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'name', type: 'string' }
      ]
    })
    // We'll add tableSchemas here later
  ]
});
