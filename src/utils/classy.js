/**
 * Returns an object that represents a CSS class.
 *
 * @param {Array} classes - An array of class names.
 *     Needs classes to be an array of strings.
 *     No nested arrays - All groups of classes should already be joined with spaces.
 * @returns {{ class : string }} - An object with a 'class' property that represents the combined class names.
 */

const classy = ( classes ) => {

	return {
		class: ( Array.isArray( classes ) ? [ ...new Set( [].concat.apply(
			[],
			classes.filter( Boolean ).map(
				str => str.trim().split(/\b\s+/).map(
					sub => sub.trim()
				)
			)
		))].join(` `).trim().replace( /\s\s+/g, ` ` ) : `` ).trim()
	}
}

export default classy
