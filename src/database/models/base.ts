import { Model } from '@nozbe/watermelondb';
import { action } from '@nozbe/watermelondb/decorators';
import omit from 'lodash/omit';
import forEach from 'lodash/forEach';
import logger from '../../lib/logger';
import i18n from '../../lib/i18n';

class BaseModel extends Model {
	constructor(collection, raw) {
		super(collection, raw);
	}

	protected logger = logger;
	protected i18n = i18n;

	/** Log updates */
	// async update(recordUpdater: any) {
	// 	if (typeof recordUpdater === 'function') {
	// 		await super.update(recordUpdater);
	// 	} else {
	// 		return await this.updateFromJSON(recordUpdater);
	// 	}
	// 	const json = await this.toJSON();
	// 	this.logger.info('Updated', { meta: json });
	// }

	// /** Update from raw JSON */
	// async updateFromJSON(json: any) {
	// 	await this.update(() => {
	// 		this.set(json);
	// 	});
	// }

	// /** */
	protected set(json) {
		if (!json) {
			debugger;
		}
		Object.keys(json).forEach((key: string) => {
			if (key === 'id' && !this.remote_id) {
				// some remote ids can be 0, eg: attributes
				if (this.remote_id !== 0) {
					this.remote_id = json.id;
				}
			} else if (key !== 'id') {
				this[key] = json[key];
			}
		});
	}

	/**
	 * Update model with JSON data
	 * @param data
	 * @TODO log updates
	 */
	@action updateWithJson(data) {
		return this.update(() => {
			forEach(data, (value, key) => {
				if (key === 'id' && !this.remote_id) {
					// some remote ids can be 0, eg: attributes
					if (this.remote_id !== 0) {
						this.remote_id = data.id;
					}
				} else if (key !== 'id') {
					this[key] = data[key];
				}
			});
		});
	}

	/** */
	// protected setMetaData(array: []) {
	// 	const parent = this.asModel;
	// 	const add = array.map(json =>
	// 		parent.meta_data.collection.prepareCreate((m: any) => {
	// 			m.parent_id = parent.id;
	// 			m.set(json);
	// 		})
	// 	);
	// 	return parent.batch(...add);
	// }

	/** raw JSON */
	protected toJSON() {
		// return omit(this._raw, ['id', '_status', '_changed']);
		return omit(this._raw, ['_status', '_changed']);
	}

	/** Destroy */
	@action async destroy() {
		await this.experimentalDestroyPermanently();
	}
}

// Model.prototype.logger = logger;
export default BaseModel;
