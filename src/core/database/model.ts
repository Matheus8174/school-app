import { Model } from '@nozbe/watermelondb';

import { field, text } from '@nozbe/watermelondb/decorators';

class User extends Model {
  static table = 'users';

  @text('name') name!: string;
  @text('name') email!: string;
  @field('password') password!: string;
}

export default User;
