const base = import.meta.env.BASE_URL;

/** Base path without trailing slash, for use as a home href.
 *  e.g. "/blog/" → "/blog",  "/" → "/"
 */
export const BASE_HREF = base.replace(/\/$/, "") || "/";

/** Base path with guaranteed trailing slash, for use as a path prefix.
 *  e.g. "/blog" → "/blog/",  "/" → "/"
 */
export const BASE_PREFIX = base.endsWith("/") ? base : `${base}/`;
