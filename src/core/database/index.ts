import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import migrations from './migrations';

import User from './model';
// import Post from './model/Post' // ⬅️ You'll import your Models here

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {}
});

const database = new Database({
  adapter,
  modelClasses: [User]
});
