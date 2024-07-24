// Update this
export const COMMON_PATH = "localhost:8080/";

export const LOGIN_PATH = (username, password) => "api/users/login" + "?username=" + username + "&password=" + password;

export const BORN_TODAY_PATH = () => "api/users/born-today";
export const GET_USERS_WITH_FILTERS_PATH = (nameSurname, unvan, gorev, birim, proje, ) => "api/users/get-users-with-filters" + "?nameSurname=" + nameSurname + "&unvan=" + unvan + "&gorev=" + gorev + "&birim=" + birim + "&proje=" + proje;
