import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if(persistedState) {
            return JSON.parse(persistedState);
        };

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);
        let serializedState;

        if(typeof value === 'function') {
            serializedState = JSON.stringify(value(state));
        } else {
            serializedState = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedState);
    };

    return [
        state,
        setPersistedState,
    ];
};