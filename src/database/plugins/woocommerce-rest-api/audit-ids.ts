import forEach from 'lodash/forEach';
import find from 'lodash/find';
import pull from 'lodash/pull';
import map from 'lodash/map';

type RxCollection = import('rxdb').RxCollection;
type RxDocument = import('rxdb').RxDocument;

export async function auditIdsFromServer(this: RxCollection, data: Record<string, any>[]) {
	const collection = this;

	// @ts-ignore
	const { docs } = await this.storageInstance.internals.pouch
		.find({
			selector: { id: { $exists: true } },
			// @ts-ignore
			fields: ['localID', 'id'],
		})
		.catch((err: any) => {
			console.log(err);
		});

	// no synced local docs
	if (docs.length === 0) {
		return collection.bulkInsert(data).catch((err) => {
			console.log(err);
		});
	}

	//
	const remove = map(docs, 'localID');

	forEach(docs, (doc) => {
		const intersection = find(data, { id: doc.id });
		if (intersection) {
			pull(remove, doc.localID);
			pull(data, intersection);
		}
	});

	await collection.bulkRemove(remove).catch((err) => {
		console.log(err);
	});
	return collection.bulkInsert(data).catch((err) => {
		console.log(err);
	});
}
