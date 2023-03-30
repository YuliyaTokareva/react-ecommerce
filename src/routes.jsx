export const ROUTES = {
  home: '/',
  pageId: (id = null) => (id ? `/${id}` : `/:id`)
};
