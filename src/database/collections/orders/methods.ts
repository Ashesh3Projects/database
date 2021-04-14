import { from, of, combineLatest, zip, Observable } from 'rxjs';
import { switchMap, tap, catchError, map } from 'rxjs/operators';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';

type OrderDocument = import('./orders').OrderDocument;
type ProductDocument = import('../products/products').ProductDocument;
type LineItemDocument = import('../line-items').LineItemDocument;
type LineItemCollection = import('../line-items').LineItemCollection;
type FeeLineDocument = import('../fee-lines').FeeLineDocument;
type FeeLineCollection = import('../fee-lines').FeeLineCollection;
type ShippingLineDocument = import('../shipping-lines').ShippingLineDocument;
type ShippingLineCollection = import('../shipping-lines').ShippingLineCollection;
type ProductVariationDocument = import('../product-variations').ProductVariationDocument;

/**
 * WooCommerce Order Model methods
 */
export default {
	/**
	 *
	 */
	isOpen(this: OrderDocument) {
		return this.status === 'pending';
	},

	// /**
	//  *
	//  */
	// async getLineItems(
	// 	this: OrderDocument,
	// 	q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	// ): Promise<LineItemDocument[]> {
	// 	// note: findByIds returns a map
	// 	const collection: LineItemCollection = this.collections().line_items;
	// 	const lineItems = await collection.findByIds(this.line_items || []);
	// 	const lineItemsArray = Array.from(lineItems.values());
	// 	return orderBy(lineItemsArray, q.sortBy, q.sortDirection);
	// },

	/**
	 *
	 */
	getLineItems$(
		this: OrderDocument,
		q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	): Observable<LineItemDocument[]> {
		return this.lineItems$.pipe(
			switchMap(async (ids) => {
				const lineItems = await this.populate('lineItems');
				return orderBy(lineItems, q.sortBy, q.sortDirection);
			})
		);
	},

	// /**
	//  *
	//  */
	// async getFeeLines(
	// 	this: OrderDocument,
	// 	q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	// ): Promise<FeeLineDocument[]> {
	// 	// note: findByIds returns a map
	// 	const collection: FeeLineCollection = this.collections().fee_lines;
	// 	const feeLines = await collection.findByIds(this.fee_lines || []);
	// 	const feeLinesArray = Array.from(feeLines.values());
	// 	return orderBy(feeLinesArray, q.sortBy, q.sortDirection);
	// },

	/**
	 *
	 */
	getFeeLines$(
		this: OrderDocument,
		q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	): Observable<FeeLineDocument[]> {
		return this.feeLines$.pipe(
			switchMap(async (ids) => {
				const feeLines = await this.populate('feeLines');
				return orderBy(feeLines, q.sortBy, q.sortDirection);
			})
		);
	},

	// /**
	//  *
	//  */
	// async getShippingLines(
	// 	this: OrderDocument,
	// 	q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	// ): Promise<ShippingLineDocument[]> {
	// 	// note: findByIds returns a map
	// 	const collection: ShippingLineCollection = this.collections().shipping_lines;
	// 	const shippingLines = await collection.findByIds(this.shipping_lines || []);
	// 	const shippingLinesArray = Array.from(shippingLines.values());
	// 	return orderBy(shippingLinesArray, q.sortBy, q.sortDirection);
	// },

	/**
	 *
	 */
	getShippingLines$(
		this: OrderDocument,
		q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	): Observable<ShippingLineDocument[]> {
		return this.shippingLines$.pipe(
			switchMap(async (ids) => {
				const shippingLines = await this.populate('shippingLines');
				return orderBy(shippingLines, q.sortBy, q.sortDirection);
			})
		);
	},

	/**
	 *
	 */
	getCart$(
		this: OrderDocument,
		q: { sortBy: string; sortDirection: 'asc' | 'desc' }
	): Observable<Array<LineItemDocument | FeeLineDocument | ShippingLineDocument>> {
		return combineLatest([
			this.getLineItems$(q),
			this.getFeeLines$(q),
			this.getShippingLines$(q),
		]).pipe(
			// @ts-ignore
			map(([lineItems, feeLines, shippingLines]) => lineItems.concat(feeLines, shippingLines))
		);
	},

	/**
	 *
	 */
	async addOrUpdateLineItem(
		this: OrderDocument,
		product: ProductDocument | ProductVariationDocument,
		parent: ProductDocument
	): Promise<OrderDocument> {
		// check lineItems for same product id
		const productId = parent ? parent.id : product.id;
		const populatedLineItems = await this.populate('lineItems');
		const existingProducts = filter(populatedLineItems, { productId }) as LineItemDocument[];

		// if product exists, increase quantity by 1
		if (existingProducts.length === 1) {
			await existingProducts[0]
				.update({
					$inc: {
						quantity: 1,
					},
				})
				.catch((err: any) => {
					debugger;
				});
			return this;
		}

		// else, create new lineItem
		const newLineItem: LineItemDocument = await this.collections()
			.line_items.insert({
				productId,
				name: product.name || parent.name,
				variationId: parent && product.id,
				quantity: 1,
				price: parseFloat(product.price || ''),
				sku: product.sku,
				tax_class: product.tax_class,
			})
			.catch((err: any) => {
				debugger;
			});

		return this.update({
			$push: {
				lineItems: newLineItem._id,
			},
		}).catch((err: any) => {
			debugger;
		});
	},

	/**
	 *
	 */
	async computedSubtotal() {},

	/**
	 *
	 */
	async removeLineItem(this: OrderDocument, lineItem: LineItemDocument) {
		await this.update({
			$pullAll: {
				line_items: [lineItem.id],
			},
		}).then(() => {
			return lineItem.remove();
		});
	},

	/**
	 *
	 */
	async addFeeLine(this: OrderDocument, data: Record<string, unknown>) {
		await this.collections()
			.fee_lines.insert(data)
			.then((newFee: FeeLineDocument) => {
				return this.update({
					$push: {
						feeLines: newFee._id,
					},
				});
			});
	},

	/**
	 *
	 */
	async removeFeeLine(this: OrderDocument, feeLine: FeeLineDocument) {
		await this.update({
			$pullAll: {
				feeLines: [feeLine._id],
			},
		}).then(() => {
			return feeLine.remove();
		});
	},

	/**
	 *
	 */
	async addShippingLine(this: OrderDocument, data: Record<string, unknown>) {
		await this.collections()
			.shipping_lines.insert(data)
			.then((newShipping: ShippingLineDocument) => {
				return this.update({
					$push: {
						shippingLines: newShipping._id,
					},
				});
			})
			.catch((err: any) => {
				console.log(err);
			});
	},

	/**
	 *
	 */
	async removeShippingLine(this: OrderDocument, shippingLine: ShippingLineDocument) {
		await this.update({
			$pullAll: {
				shippingLines: [shippingLine._id],
			},
		}).then(() => {
			return shippingLine.remove();
		});
	},
};
