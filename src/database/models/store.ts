import { field, nochange } from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import Model from './base';

class Store extends Model {
	static table = 'stores';

	static associations: Associations = {
		sites: { type: 'belongs_to', key: 'site_id' },
	};

	@nochange @field('remote_id') remote_id!: number;
	@field('name') name!: string;
}

export default Store;
