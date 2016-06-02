/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'g1',
                            type: 'group',
                            rect: ['120', '120', '60', '60', 'auto', 'auto'],
                            clip: 'rect(0px 60px 30px 30px)',
                            c: [
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                                clip: 'rect(0px 60px 30px 30px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['-90']]
                            }]
                        },
                        {
                            id: 'g2',
                            type: 'group',
                            rect: ['120px', '120', '60', '60', 'auto', 'auto'],
                            clip: 'rect(30px 60px 60px 0px)',
                            c: [
                            {
                                id: 'Ellipse2',
                                type: 'ellipse',
                                rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                                clip: 'rect(30px 60px 60px 30px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-90']]
                            }]
                        },
                        {
                            id: 'g3',
                            type: 'group',
                            rect: ['120', '120', '60', '60', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(30px 30px 60px 0px)',
                            c: [
                            {
                                id: 'Ellipse3',
                                type: 'ellipse',
                                rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                                clip: 'rect(30px 30px 60px 0px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-90']]
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['120', '120', '60', '60', 'auto', 'auto'],
                            clip: 'rect(0px 30px 30px 0px)',
                            c: [
                            {
                                id: 'g4',
                                type: 'ellipse',
                                rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                                clip: 'rect(0px 30px 30px 0px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-90']]
                            }]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['120px', '120px', '60', '60', 'auto', 'auto'],
                            clip: 'rect(0px 60px 30px 30px)',
                            c: [
                            {
                                id: 'Ellipse4',
                                type: 'ellipse',
                                rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                                clip: 'rect(0px 60px 30px 30px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(145,32,32,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-90']]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${Ellipse2}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${g4}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Ellipse4}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid3",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${Ellipse3}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid1",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '-90deg',
                            '0deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-2_edgeActions.js");
})("EDGE-3611817");
