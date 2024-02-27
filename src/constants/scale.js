import { INDUSTRY, RESIDENT } from "./constant";

const residentPipelineCount = {
    p175x9: 0.185 / 0.34,
    p175x6: 0.093 / 0.34,
    p175x4: 0.062 / 0.34,
    p175x2: 0,
    p150x9: 0.106 / 0.265,
    p150x6: 0.106 / 0.265,
    p150x4: 0.053 / 0.265,
    p150x2: 0,
    p100x9: 0.079 / 0.395,
    p100x6: 0.079 / 0.395,
    p100x4: 0.079 / 0.395,
    p100x2: 0.158 / 0.395,
};

const industryPipelineCount = {
    p175x9: 0.241 / 0.441,
    p175x6: 0.12 / 0.441,
    p175x4: 0.08 / 0.441,
    p175x2: 0,
    p150x9: 0.129 / 0.324,
    p150x6: 0.13 / 0.324,
    p150x4: 0.065 / 0.324,
    p150x2: 0,
    p100x9: 0.047 / 0.235,
    p100x6: 0.047 / 0.235,
    p100x4: 0.047 / 0.235,
    p100x2: 0.094 / 0.235,
};

// 규모별 단위수량 상수
const scale1 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.021,
            ma4: 0.89,
            me6: 0.09,
            ma6: 0.02
        },
        handhole: {
            unitCount: 0.032,
            hb4hb2: 0.98,
            hsc: 0.02
        },
        pipeline: {
            unitCount: 0.048,
            p175: 0.3,
            p150: 0.28,
            p100: 0.42,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.045,
            cable325: 0.02,
            cable400: 0.53,
            cable95: 0.45
        },
        lowCable: {
            unitCount: 0.014,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.037,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.021,
            kva75: 0.03,
            kva150: 0.02,
            kva300: 0.95
        },
        groundSwitch: {
            unitCount: 0.016
        }
    },
    [INDUSTRY]: {
        manhole: {
            unitCount: 0.023,
            ma4: 0.72,
            me6: 0.11,
            ma6: 0.17
        },
        handhole: {
            unitCount: 0.028,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.026,
            p175: 0.57,
            p150: 0.23,
            p100: 0.2,
            ...industryPipelineCount
        },
        highCable: {
            unitCount: 0.039,
            cable325: 0.04,
            cable400: 0.58,
            cable95: 0.38
        },
        lowCable: {
            unitCount: 0.015,
            cable240: 0.75,
            cable120: 0.25
        },
        lowConnector: {
            unitCount: 0.016,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.012,
            kva75: 0.02,
            kva150: 0.17,
            kva300: 0.81
        },
        groundSwitch: {
            unitCount: 0.017
        }
    }
};

const scale2 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.041,
            ma4: 0.72,
            me6: 0.17,
            ma6: 0.11
        },
        handhole: {
            unitCount: 0.026,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.042,
            p175: 0.45,
            p150: 0.19,
            p100: 0.36,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.037,
            cable325: 0.02,
            cable400: 0.53,
            cable95: 0.45
        },
        lowCable: {
            unitCount: 0.016,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.019,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.016,
            kva75: 0.09,
            kva150: 0.06,
            kva300: 0.85
        },
        groundSwitch: {
            unitCount: 0.019
        }
    },
    [INDUSTRY]: {
        manhole: {
            unitCount: 0.025,
            ma4: 0.91,
            me6: 0.04,
            ma6: 0.05
        },
        handhole: {
            unitCount: 0.004,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.029,
            p175: 0.4,
            p150: 0.35,
            p100: 0.25,
            ...industryPipelineCount
        },
        highCable: {
            unitCount: 0.027,
            cable325: 0.01,
            cable400: 0.59,
            cable95: 0.4
        },
        lowCable: {
            unitCount: 0.005,
            cable240: 0.75,
            cable120: 0.25
        },
        lowConnector: {
            unitCount: 0.02,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.008,
            kva75: 0.02,
            kva150: 0.17,
            kva300: 0.81
        },
        groundSwitch: {
            unitCount: 0.013
        }
    }
};

const scale3 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.029,
            ma4: 0.76,
            me6: 0.16,
            ma6: 0.08
        },
        handhole: {
            unitCount: 0.058,
            hb4hb2: 0.1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.048,
            p175: 0.47,
            p150: 0.21,
            p100: 0.32,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.032,
            cable325: 0.02,
            cable400: 0.56,
            cable95: 0.42
        },
        lowCable: {
            unitCount: 0.01,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.006,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.012,
            kva75: 0.21,
            kva150: 0.01,
            kva300: 0.78
        },
        groundSwitch: {
            unitCount: 0.019
        }
    },
    [INDUSTRY]: {
        manhole: {
            unitCount: 0.033,
            ma4: 0.25,
            me6: 0.35,
            ma6: 0.4
        },
        handhole: {
            unitCount: 0.008,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.046,
            p175: 0.49,
            p150: 0.2,
            p100: 0.31,
            ...industryPipelineCount
        },
        highCable: {
            unitCount: 0.041,
            cable325: 0.02,
            cable400: 0.61,
            cable95: 0.37
        },
        lowCable: {
            unitCount: 0.007,
            cable240: 0.75,
            cable120: 0.25
        },
        lowConnector: {
            unitCount: 0.016,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.016,
            kva75: 0.02,
            kva150: 0.17,
            kva300: 0.81
        },
        groundSwitch: {
            unitCount: 0.032
        }
    }
};

const scale4 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.068,
            ma4: 0.84,
            me6: 0.13,
            ma6: 0.03
        },
        handhole: {
            unitCount: 0.069,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.056,
            p175: 0.54,
            p150: 0.15,
            p100: 0.31,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.065,
            cable325: 0.03,
            cable400: 0.5,
            cable95: 0.47
        },
        lowCable: {
            unitCount: 0.018,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.035,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.029,
            kva75: 0.02,
            kva150: 0.04,
            kva300: 0.94
        },
        groundSwitch: {
            unitCount: 0.031
        }
    },
    [INDUSTRY]: {
        manhole: {
            unitCount: 0.048,
            ma4: 0.66,
            me6: 0.11,
            ma6: 0.23
        },
        handhole: {
            unitCount: 0.011,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.047,
            p175: 0.39,
            p150: 0.13,
            p100: 0.48,
            ...industryPipelineCount
        },
        highCable: {
            unitCount: 0.053,
            cable325: 0.02,
            cable400: 0.57,
            cable95: 0.41
        },
        lowCable: {
            unitCount: 0.011,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.022,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.008,
            kva75: 0.02,
            kva150: 0.17,
            kva300: 0.81
        },
        groundSwitch: {
            unitCount: 0.027
        }
    }
};

const scale5 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.052,
            ma4: 0.87,
            me6: 0.06,
            ma6: 0.07
        },
        handhole: {
            unitCount: 0.044,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.05,
            p175: 0.55,
            p150: 0.21,
            p100: 0.24,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.058,
            cable325: 0.1,
            cable400: 0.44,
            cable95: 0.46
        },
        lowCable: {
            unitCount: 0.013,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.03,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.022,
            kva75: 0.02,
            kva150: 0.04,
            kva300: 0.94
        },
        groundSwitch: {
            unitCount: 0.03
        }
    },
    [INDUSTRY]: {
        manhole: {
            unitCount: 0.047,
            ma4: 0.16,
            me6: 0.37,
            ma6: 0.47
        },
        handhole: {
            unitCount: 0.021,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.065,
            p175: 0.55,
            p150: 0.1,
            p100: 0.35,
            ...industryPipelineCount
        },
        highCable: {
            unitCount: 0.077,
            cable325: 0.1,
            cable400: 0.74,
            cable95: 0.16
        },
        lowCable: {
            unitCount: 0.008,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.022,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.02,
            kva75: 0.02,
            kva150: 0.17,
            kva300: 0.81
        },
        groundSwitch: {
            unitCount: 0.033
        }
    }
};

const scale6 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.037,
            ma4: 0.87,
            me6: 0.06,
            ma6: 0.07
        },
        handhole: {
            unitCount: 0.032,
            hb4hb2: 0.95,
            hsc: 0.05
        },
        pipeline: {
            unitCount: 0.045,
            p175: 0.43,
            p150: 0.28,
            p100: 0.29,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.061,
            cable325: 0.08,
            cable400: 0.55,
            cable95: 0.37
        },
        lowCable: {
            unitCount: 0.012,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.008,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.017,
            kva75: 0.02,
            kva150: 0.04,
            kva300: 0.94
        },
        groundSwitch: {
            unitCount: 0.029
        }
    }
};

const scale7 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.096,
            ma4: 0.56,
            me6: 0.28,
            ma6: 0.16
        },
        handhole: {
            unitCount: 0.13,
            hb4hb2: 1,
            hsc: 0
        },
        pipeline: {
            unitCount: 0.103,
            p175: 0.44,
            p150: 0.35,
            p100: 0.21,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.088,
            cable325: 0.22,
            cable400: 0.42,
            cable95: 0.36
        },
        lowCable: {
            unitCount: 0.036,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.121,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.025,
            kva75: 0.02,
            kva150: 0.04,
            kva300: 0.94
        },
        groundSwitch: {
            unitCount: 0.059
        }
    }
};

const scale8 = {
    [RESIDENT]: {
        manhole: {
            unitCount: 0.078,
            ma4: 0.71,
            me6: 0.17,
            ma6: 0.12
        },
        handhole: {
            unitCount: 0.012,
            hb4hb2: 0.88,
            hsc: 0.12
        },
        pipeline: {
            unitCount: 0.071,
            p175: 0.56,
            p150: 0.24,
            p100: 0.2,
            ...residentPipelineCount
        },
        highCable: {
            unitCount: 0.078,
            cable325: 0.01,
            cable400: 0.79,
            cable95: 0.2
        },
        lowCable: {
            unitCount: 0.007,
            cable240: 0.75,
            cable120: 0.25,
            cable70: 0
        },
        lowConnector: {
            unitCount: 0.032,
            jbl: 1,
            jbs: 0
        },
        transformer: {
            unitCount: 0.02,
            kva75: 0.02,
            kva150: 0.04,
            kva300: 0.94
        },
        groundSwitch: {
            unitCount: 0.046
        }
    }
};

export const scaleConstant = {
    scale1,
    scale2,
    scale3,
    scale4,
    scale5,
    scale6,
    scale7,
    scale8
};
