import { TYPE_PLATFORM } from './types';

export const changePlatform = platform => {
    return {
        type: TYPE_PLATFORM,
        payload: platform
    }
}