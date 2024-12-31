/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const course = await locals.pb.collection('courses').getOne(params.courseId);
	console.log(params);
	return { course };
}