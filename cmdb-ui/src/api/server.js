import req from "./base";

export const getMyMenus = () =>
  process.env.NODE_ENV === "development"
    ? req.get("/admin/menus")
    : req.get("/my-menus");
// init page

// admin
export const getAllUsers = () => req.get("/admin/users");
export const getAllRoles = () => req.get("/admin/roles");
export const getAllMenus = () => req.get("/admin/menus");
export const getAllPermissionEntryPoints = () =>
  req.get("/admin/permission-entry-points");
export const getRolesByUser = username =>
  req.get(`/admin/users/${username}/roles`);
export const getUsersByRole = roleId => req.get(`/admin/roles/${roleId}/users`);
export const getPermissionsByRole = roleId =>
  req.get(`/admin/roles/${roleId}/permissions`);
export const getPermissionsByUser = username =>
  req.get(`/admin/users/${username}/permissions`);
export const addRole = data => req.post(`/admin/roles/create`, data);
export const addUsersToRole = (users, roleId) =>
  req.post(`/admin/roles/${roleId}/users`, users);
export const romoveUsersFromRole = (users, roleId) =>
  req.delete(`/admin/roles/${roleId}/users`, { data: users });
export const addMenusToRole = (menuCodes, roleId) =>
  req.post(`/admin/roles/${roleId}/menu-permissions`, menuCodes);
export const removeMenusFromRole = (menuCodes, roleId) =>
  req.delete(`/admin/roles/${roleId}/menu-permissions`, {
    data: menuCodes
  });
export const addDataPermissionAction = (roleId, ciTypeId, actionCode) =>
  req.post(`/admin/roles/${roleId}/citypes/${ciTypeId}/actions/${actionCode}`);
export const removeDataPermissionAction = (roleId, ciTypeId, actionCode) =>
  req.delete(
    `/admin/roles/${roleId}/citypes/${ciTypeId}/actions/${actionCode}`
  );
export const getRoleCiTypeCtrlAttributesByRoleCiTypeId = roleCitypeId =>
  req.get(`/admin/role-citypes/${roleCitypeId}/ctrl-attributes`);
export const createRoleCiTypeCtrlAttributes = (roleCitypeId, data) =>
  req.post(`/admin/role-citypes/${roleCitypeId}/ctrl-attributes/create`, data);
export const updateRoleCiTypeCtrlAttributes = (roleCitypeId, data) =>
  req.post(`/admin/role-citypes/${roleCitypeId}/ctrl-attributes/update`, data);
export const deleteRoleCiTypeCtrlAttributes = (roleCitypeId, data) =>
  req.post(`/admin/role-citypes/${roleCitypeId}/ctrl-attributes/delete`, data);

//enum
export const getEnumCodesByCategoryId = (catTypeId, catId) =>
  req.get(`/enum/category-types/${catTypeId}/categories/${catId}/codes`);

export const getEnumCategoriesByTypeId = catTypeId =>
  req.get(`/enum/category-types/${catTypeId}/categories`);

//CI
export const getRefCiTypeFrom = id => req.get(`/ci-types/${id}/references/by`);
export const getRefCiTypeTo = id => req.get(`/ci-types/${id}/references/to`);
export const getCiTypeAttr = id => req.get(`/ci-types/${id}/attributes`);

// CI design

export const implementCiType = (id, op) =>
  req.post(`/ci-types/${id}/implement?operation=${op}`);
export const implementCiAttr = (ciTypeId, ciAttrId, op) =>
  req.post(
    `/ci-types/${ciTypeId}/attributes/${ciAttrId}/implement?operation=${op}`
  );
export const getAllCITypes = () => req.get("/ci-types");
export const getAllEnumCategoryTypes = () => req.get("/enum/category-types");
export const getAllEnumCategories = () =>
  req.get("/enum/category-types/categories");
export const createEnumCategory = data =>
  req.post(`/enum/category-types/${data.catTypeId}/categories/create`, data);
export const updateEnumCategory = data =>
  req.put(
    `/enum/category-types/${data.catTypeId}/categories/${data.catId}`,
    data
  );
export const getAllCITypesByLayerWithAttr = data => {
  const status = data.toString();
  return req.get(
    `/ci-types?group-by=layer&with-attributes=yes&status=${status}`
  );
};
export const getAllLayers = () => req.get("/ci-type-layers");
export const createLayer = data => req.post("/ci-type-layers/create", data);
export const deleteLayer = id => req.delete(`/ci-type-layers/${id}`);
export const updateLayer = data => req.post(`/enum/codes/update`, data);
export const swapLayerPosition = (layerId, targetLayerId) =>
  req.post(
    `/ci-type-layers/${layerId}/swap-position?target-layer-id=${targetLayerId}`
  );
export const deleteCITypeByID = id => req.delete(`/ci-types/${id}`);
export const deleteAttr = (ciTypeId, attrId) =>
  req.delete(`/ci-types/${ciTypeId}/attributes/${attrId}`);
export const applyCiTypes = id => req.post(`/ci-types/${id}/apply`);
export const updateCIType = (id, data) => req.put(`/ci-types/${id}`, data);
export const createNewCIType = data => req.post(`/ci-types/create`, data);
export const createNewCIAttr = (id, data) =>
  req.post(`/ci-types/${id}/attributes/create`, data);
export const updateCIAttr = (attrId, ciTypeId, data) =>
  req.put(`/ci-types/${ciTypeId}/attributes/${attrId}`, data);
export const applyCIAttr = (ciTypeId, attrIds) =>
  req.post(`/ci-types/${ciTypeId}/ci-type-attributes/apply`, attrIds);

export const swapCiTypeAttributePosition = (ciTypeId, attrId, targetAttrId) => {
  return req.post(
    `/ci-types/${ciTypeId}/attributes/${attrId}/swap-position?target-attribute-id=${targetAttrId}`
  );
};
export const getAllInputTypes = () =>
  req.get("/static-data/available-ci-type-attribute-input-types");
export const getEnumByCIType = id =>
  req.get(
    `/enum/category-types/categories/query-by-multiple-types?ci-type-id=${id}&types=common-private`
  );

export const getTableStatus = () =>
  req.get("/static-data/available-ci-type-table-status");

// basic data page
export const getAllSystemEnumCodes = data => {
  return req.post(`/enum/system/codes`, data);
};
export const getSystemCategories = () => req.get(`/enum/system-categories`);

export const getAllNonSystemEnumCodes = data => {
  return req.post(`/enum/non-system/codes`, data);
};
export const getNonSystemCategories = () =>
  req.get(`/enum/non-system-categories`);

export const getEffectiveStatus = () =>
  req.get(`/static-data/effective-status`);
export const createEnumCode = data => {
  return req.post(
    `/enum/category-types/0/categories/${data.catId}/codes/create`,
    data
  );
};
export const updateEnumCode = data => {
  return req.post(`/enum/codes/update`, data);
};
export const getGroupListByCodeId = id =>
  req.get(`/enum/categories/${id}/group-list`);
export const deleteEnumCodes = data => {
  return req.post(`/enum/codes/delete`, data);
};
export const queryCiData = data => {
  return req.post(`/ci-types/${data.id}/ci-data/query`, data.queryObject);
};
export const getCiTypeAttributes = id => {
  return req.get(`/ci-types/${id}/attributes`);
};
export const deleteCiDatas = data => {
  return req.post(`/ci-types/${data.id}/ci-data/batch-delete`, data.deleteData);
};
export const createCiDatas = data => {
  return req.post(`/ci-types/${data.id}/ci-data/batch-create`, data.createData);
};
export const updateCiDatas = data => {
  return req.post(`/ci-types/${data.id}/ci-data/batch-update`, data.updateData);
};

export const operateCiState = (ciTypeId, guid, op) => {
  const payload = [{ ciTypeId, guid }];
  return req.post(`/ci/state/operate?operation=${op}`, payload);
};

// ci integrate query
export const getQueryNames = id => {
  return req.get(`/intQuery/ciType/${id}/search`);
};
export const queryIntHeader = id => {
  return req.get(`/intQuery/${id}/header`);
};
export const excuteIntQuery = (id, data) => {
  return req.post(`/intQuery/${id}/execute`, data);
};

export const fetchIntQueryById = (ciTypeId, queryId) => {
  return req.get(`/intQuery/ciType/${ciTypeId}/${queryId}`);
};
export const saveIntQuery = (ciTypeId, queryName, data) => {
  return req.post(`/intQuery/ciType/${ciTypeId}/${queryName}/save`, data);
};
export const updateIntQuery = (queryId, data) => {
  return req.post(`/intQuery/${queryId}/update`, data);
};
export const deleteIntQuery = (ciTypeId, queryId) => {
  return req.post(`/intQuery/ciType/${ciTypeId}/${queryId}/delete`);
};
//filterRules
export const queryReferenceEnumCodes = data =>
  req.post(`/referenceEnumCodes/${data.attrId}/query`, data.params);
export const queryReferenceCiData = data =>
  req.post(`/referenceCiData/${data.attrId}/query`, data.queryObject);
