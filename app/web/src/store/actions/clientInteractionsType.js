/**
 * @module clientInteractionsType
 */

/**
 * _______________________________________
 *
 *  Actions sent by the client to the server
 *
 * _______________________________________
 */


export const START_GAME = "START_GAME";

export const CREATE_GAME = "CREATE_GAME";
export const CREATE_GAME_V2 = "CREATE_GAME_V2";

export const JOIN_ROOM = "JOIN_ROOM";

export const LEAVE_ROOM = "LEAVE_ROOM";

export const LEFT_ROOM = "LEFT_ROOM";

export const FOLD = "FOLD";

export const BET = "BET";

export const CHECK = "CHECK";

export const SHOW_CARD = "SHOW_CARD";

export const HIDE_CARD = "HIDE_CARD";

export const ACTIVATE_BONUS = "ACTIVATE_BONUS";

export const SIT = "SIT";

export const REFRESH = "REFRESH";

export const LOGIN = "LOGIN";

/**
 * _______________________________________
 *
 *  Actions sent by server to inform the player
 *
 * _______________________________________
 */
// Game Lobby, no round turning.
export const GAME_LOBBY = "GAME_LOBBY";

// Game has started
export const GAME_STARTED = "GAME_STARTED";

// Successfully sit at a table.
export const SITTED = "SITTED";

// Kicked out of the game
export const KICKED = "KICKED";

export const LOGGED_IN = "LOGGED_IN";

export const EMPTY_PAYLOAD = "EMPTY_PAYLOAD";

export const AUTO_RESTART_TOGGLE = "AUTO_RESTART_TOGGLE";
