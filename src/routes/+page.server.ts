import { mapDocDataToCafeCactusData } from '$lib/server/data-mapper';
import { getDocument } from '$lib/firebase';
import { error as svelteError } from '@sveltejs/kit';

export const load = async () => {
	try {
		const docData = await getDocument('cafecactus', 'data');
		if (docData) {
			const cafeCactusData = mapDocDataToCafeCactusData(docData);
			return {
				headerImage: cafeCactusData.headerImage ?? [],
			};
		} else {
			throw svelteError(404, 'Document not found');
		}
	} catch (err: unknown) {
		console.error('Error fetching Firestore document:', err);
		throw svelteError(500, 'Error fetching Firestore document');
	}
};
