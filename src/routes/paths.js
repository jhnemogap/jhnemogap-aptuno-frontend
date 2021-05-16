export const routeHome = () => "/";

export const routeImmovables = (region = "", rooms = "") => `/immovables?region=${region}&rooms=${rooms}`;

export const routePropertyDetails = (id = null) => id ? `/immovables/${id}` : routeImmovables();
