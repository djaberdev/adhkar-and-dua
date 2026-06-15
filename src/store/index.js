import { proxy } from "valtio";

export const state = proxy({

    isTasbeehWanted: false,
    isTasbeehConfirmed: false,
    TasbeehInfo: {},

    availableView: {
        width: null
    }

});