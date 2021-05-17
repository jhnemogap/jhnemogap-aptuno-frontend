export const routeHome = () => "/";

export const routeImmovablesBase = () => "/immovables";

export const routeImmovables = (region = "", rooms = "") => {
  return `${routeImmovablesBase()}?region=${region}&rooms=${rooms}`;
}

export const routePropertyDetails = (id = null) => id ? `/immovables/${id}` : routeImmovables();
