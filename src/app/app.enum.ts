
export enum VALID_ACTIONS {
    EDIT_MATERIALS = 'editMaterials',
    IMPORT_DATA = 'importData',
    EXPORT_DATA = 'exportData',
    VIEW_MATERIALS = 'viewMaterials',
    EDIT_EQUIPMENTS = 'editEquipments',
    VIEW_EQUIPMENTS = 'viewEquipments',
    EDIT_BOM = 'editBom',
    CREATE_CONTRACT = 'createContract',
    SHOW_CONTRACT= 'showContract',
    VIEW_BOM = 'viewBom',
    REQUEST_BOM = 'requestBom',
    ADD_MATERIAL_EQUIPMENT_TO_BOM = 'addMaterialEquipmentToBom',
    ADD_BOM_COMMENT = 'addBomComment',
    EDIT_TEMPLATE = 'editTemplate',
    VIEW_TEMPLATE = 'viewTemplate',
    SEARCH = 'search',
    REQUEST_PART = 'requestPart',
    VIEW_REQUESTS = 'viewRequests',
    NEW_USER = 'newUser',
    VIEW_USERS = 'viewUsers',
    ADD_NEW_PART = 'addNewPart'
}

export enum HTTP_REQUEST_TYPE {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}
export enum SORT_DIRECTION {
    ASC = 'ASC',
    DESC = 'DESC'
}
export enum PARTNER_VALID_ACTIONS {
    VIEW_MATERIALS = 'viewMaterials',
    VIEW_EQUIPMENTS = 'viewEquipments',
    VIEW_BOM = 'viewBom',
    EDIT_BOM = 'editBom',
    CREATE_CONTRACT = 'createContract',
    SHOW_CONTRACT= 'showContract',
    ADD_MATERIAL_EQUIPMENT_TO_BOM = 'addMaterialEquipmentToBom',
    ADD_BOM_COMMENT = 'addBomComment',
    VIEW_TEMPLATE = 'viewTemplate',
    REQUEST_BOM = 'requestBom',
    SEARCH = 'search',
    REQUEST_PART = 'requestPart'
}

export enum GUEST_VALID_ACTIONS {
    VIEW_MATERIALS = 'viewMaterials',
    EXPORT_DATA = 'exportData',
    VIEW_EQUIPMENTS = 'viewEquipments',
    VIEW_BOM = 'viewBom',
    ADD_BOM_COMMENT = 'addBomComment',
    VIEW_TEMPLATE = 'viewTemplate',
    VIEW_USERS = 'viewUsers',
    SEARCH = 'search',
}


export enum RESPONSE_STATUS_ENUM {
    SUCCESS = 1,
    FAILED = 0,
    UNACCEPTABLE_DATA = 429,
    UNACCEPTABLE_FORMAT = 430,
    NO_MAIL_FOUND = 431,
    NO_IDENTIFIER_FOUND = 432,
    INVALID_IMAGE_SIZE = 406
}